// =========================
// 保存・読込・初期化
// =========================

const saveBtn = document.getElementById("saveBtn");
const loadBtn = document.getElementById("loadBtn");
const resetBtn = document.getElementById("resetBtn");

saveBtn.addEventListener("click", saveCharacter);
loadBtn.addEventListener("click", loadCharacter);
resetBtn.addEventListener("click", resetCharacter);

function gatherCharacterData() {

    const data = {};

    document.querySelectorAll("input, select, textarea").forEach(el => {

        if (el.id) {

            data[el.id] = el.value;

        }

    });

    data.__abilityMods = abilityMods;
    data.__userSkills = userSkills;
    data.__erosionCorrection = erosionCorrection;
    data.__hpCorrection = hpCorrection;
    data.__actionCorrection = actionCorrection;
    data.__wealthCorrection = wealthCorrection;
    data.__groupErosionManual = (typeof groupErosionManual !== "undefined") ? groupErosionManual : {};
    data.__effects = (typeof fxExportForCharacter === "function") ? fxExportForCharacter() : [];
    data.__combos = (typeof exportCombos === "function") ? exportCombos() : [];
    data.__items = (typeof exportItems === "function") ? exportItems() : [];
    data.__dloise = (typeof dloiseExportForCharacter === "function") ? dloiseExportForCharacter() : [];

    return data;

}

// 共有リンク（URLに埋め込む）用に、空欄のフィールドと検索・絞り込みなどのUI状態を除いた
// 軽量版データを作る。URLの長さをできるだけ短くするための最適化。
const SHARE_EXCLUDE_IDS = new Set([
    "keyword", "timing", "skill", "target", "range", "limit",
    "dloiseKeyword", "dloiseSyndromeSelect"
]);

const SHARE_EFFECT_KEYS = ["name", "supplement", "syndrome", "acquiredLv"];
const SHARE_COMBO_KEYS = ["erosion", "name", "dice", "crit", "skill", "range", "target", "atk", "erosion2", "notes"];
const SHARE_DLOISE_KEYS = ["name", "supplement", "syndrome"];

// オブジェクトの配列を「決まった順のキー名を省いた配列の配列（タプル）」に変換する。
// 同じキー名が要素数ぶん繰り返されるJSONの無駄を減らすための共有リンク専用の圧縮。
function objectsToTuples(list, keys) {
    return (list || []).map(obj => keys.map(k => (obj[k] === undefined || obj[k] === null) ? "" : obj[k]));
}
function tuplesToObjects(list, keys) {
    return (list || []).map(tuple => {
        const obj = {};
        keys.forEach((k, i) => { obj[k] = (Array.isArray(tuple) && tuple[i] !== undefined) ? tuple[i] : ""; });
        return obj;
    });
}

function shrinkItemsForShare(items) {
    if (!items || typeof ITEM_TYPES === "undefined") return items;
    const out = {};
    Object.keys(items).forEach(type => {
        const cfg = ITEM_TYPES[type];
        if (!cfg) { out[type] = items[type]; return; }
        out[type] = objectsToTuples(items[type], cfg.fields.map(f => f.cls));
    });
    return out;
}
function expandItemsFromShare(items) {
    if (!items || typeof ITEM_TYPES === "undefined") return items;
    const out = {};
    Object.keys(items).forEach(type => {
        const cfg = ITEM_TYPES[type];
        if (!cfg) { out[type] = items[type]; return; }
        out[type] = tuplesToObjects(items[type], cfg.fields.map(f => f.cls));
    });
    return out;
}

function gatherCharacterDataForShare() {

    const full = gatherCharacterData();
    const data = {};

    Object.keys(full).forEach(key => {

        if (key.startsWith("__")) {
            data[key] = full[key];
            return;
        }

        if (SHARE_EXCLUDE_IDS.has(key)) return;

        const value = full[key];
        if (value === "" || value === undefined || value === null) return;

        data[key] = value;

    });

    // 取得Dロイスの effect（プレビュー用の全文コピー）は、表示側で
    // 名前・サプリ一致検索によるフォールバックがあるため共有データからは省く
    if (Array.isArray(data.__dloise)) {
        data.__dloise = data.__dloise.map(d => {
            const { effect, ...rest } = d;
            return rest;
        });
    }

    // 取得エフェクト・コンボ・Dロイス・アイテムは、繰り返されるキー名を省いた
    // タプル形式に変換してURLを短くする（読み込み側で元の形に復元する）
    if (Array.isArray(data.__effects)) {
        data.__effects = objectsToTuples(data.__effects, SHARE_EFFECT_KEYS);
    }
    if (Array.isArray(data.__combos)) {
        data.__combos = objectsToTuples(data.__combos, SHARE_COMBO_KEYS);
    }
    if (Array.isArray(data.__dloise)) {
        data.__dloise = objectsToTuples(data.__dloise, SHARE_DLOISE_KEYS);
    }
    if (data.__items) {
        data.__items = shrinkItemsForShare(data.__items);
    }
    data.__shareCompact = true;

    return data;

}

function saveCharacter() {

    const data = gatherCharacterData();

    const blob = new Blob(
        [JSON.stringify(data, null, 2)],
        { type: "application/json" }
    );

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    const rawName = (document.getElementById("name") && document.getElementById("name").value || "").trim();
    const safeName = rawName.replace(/[\\/:*?"<>|]/g, "").trim();
    const fileName = safeName ? `${safeName}.json` : "DX3rd_Character.json";

    a.href = url;
    a.download = fileName;
    a.click();

    URL.revokeObjectURL(url);

}

function applyCharacterData(data) {

    Object.keys(data).forEach(id => {

        if (id === "__abilityMods" || id === "__userSkills" || id === "__erosionCorrection" || id === "__hpCorrection" || id === "__actionCorrection" || id === "__wealthCorrection" || id === "__groupErosionManual") return;

        const el = document.getElementById(id);

        if (el) {

            el.value = data[id];

        }

    });

    updateOrganization();
    updateAbility();

    if (data.__abilityMods) {
        abilityMods = data.__abilityMods;
    }

    if (data.__userSkills) {
        userSkills = data.__userSkills.map(sk => ({ correction: 0, ...sk }));
    }

    erosionCorrection = Number(data.__erosionCorrection) || 0;
    hpCorrection = Number(data.__hpCorrection) || 0;
    actionCorrection = Number(data.__actionCorrection) || 0;
    wealthCorrection = Number(data.__wealthCorrection) || 0;

    if (typeof groupErosionManual !== "undefined") {
        groupErosionManual = (data.__groupErosionManual && typeof data.__groupErosionManual === "object") ? data.__groupErosionManual : {};
    }

    if (typeof fxImportForCharacter === "function") {
        fxImportForCharacter(data.__effects || []);
    }
    if (typeof importCombos === "function") {
        importCombos(data.__combos || []);
    }
    if (typeof importItems === "function") {
        importItems(data.__items || []);
    }
    if (typeof dloiseImportForCharacter === "function") {
        dloiseImportForCharacter(data.__dloise || []);
    }

    updateAbilityDisplay();
    renderSkills();

    const work = works.find(
        w => w.id === workSelect.value
    );

    if (work) {

        drawSkills(work);

    }

}

function loadCharacter() {

    const input = document.createElement("input");

    input.type = "file";
    input.accept = ".json";

    input.onchange = e => {

        const file = e.target.files[0];

        if (!file) return;

        const reader = new FileReader();

        reader.onload = () => {

            let data;

            try {

                data = JSON.parse(reader.result);

            } catch (error) {

                alert("JSONファイルの読み込みに失敗しました。\nファイルが壊れているか、形式が正しくありません。");
                console.error(error);
                return;

            }

            applyCharacterData(data);

        };

        reader.readAsText(file, "UTF-8");

    };

    input.click();

}

function resetCharacter() {

    if (!confirm("入力内容を初期化しますか？")) return;

    try {
        localStorage.removeItem(AUTOSAVE_KEY);
    } catch (error) {
        console.error(error);
    }

    document.querySelectorAll("input, textarea").forEach(el => {

        el.value = "";

    });

    document.querySelectorAll("select").forEach(el => {

        el.selectedIndex = 0;

    });

    abilityMods = {
        body: { growth: 0, correction: 0 },
        sense: { growth: 0, correction: 0 },
        mind: { growth: 0, correction: 0 },
        social: { growth: 0, correction: 0 }
    };

    userSkills = [];
    for (let i = 0; i < 5; i++) {
        userSkills.push(createDefaultSkillRow());
    }

    erosionCorrection = 0;
    hpCorrection = 0;
    actionCorrection = 0;
    wealthCorrection = 0;

    if (typeof groupErosionManual !== "undefined") {
        groupErosionManual = {};
    }

    if (typeof fxImportForCharacter === "function") {
        fxImportForCharacter([]);
    }
    if (typeof clearCombos === "function") {
        clearCombos();
    }
    if (typeof dloiseImportForCharacter === "function") {
        dloiseImportForCharacter([]);
    }

    clearStatus();
    updateAbility();
    renderSkills();

}
const abilityFilter=document.getElementById("abilityFilter");
const originalCreate=createWorkList;
createWorkList=function(){workSelect.innerHTML=`<option value="">選択してください</option>`;const f=abilityFilter?abilityFilter.value:"";works.filter(work=>!f||(work.ability&&work.ability[f]>0)).forEach(work=>{const option=document.createElement("option");option.value=work.id;const ab=work.ability;const bonus=(ab.body?` 肉+${ab.body}`:"")+(ab.sense?` 感+${ab.sense}`:"")+(ab.mind?` 精+${ab.mind}`:"")+(ab.social?` 社+${ab.social}`:"");option.textContent=work.name+bonus;workSelect.appendChild(option);});};
window.addEventListener("DOMContentLoaded", () => {if(abilityFilter){abilityFilter.addEventListener("change", () => {createWorkList();});}});

// =========================
// 共有リンク（URL共有・閲覧モード）
// =========================

const SHARE_HASH_PREFIX = "#share=";

async function generateShareLink() {

    if (typeof LZString === "undefined") {
        alert("共有リンク機能の読み込みに失敗しました。通信環境をご確認の上、再読み込みしてください。");
        return;
    }

    const data = gatherCharacterDataForShare();
    const json = JSON.stringify(data);
    const compressed = LZString.compressToEncodedURIComponent(json);
    const url = location.origin + location.pathname + SHARE_HASH_PREFIX + compressed;

    const shareLinkBtn = document.getElementById("shareLinkBtn");
    const originalLabel = shareLinkBtn ? shareLinkBtn.textContent : null;
    if (shareLinkBtn) {
        shareLinkBtn.textContent = "作成中…";
        shareLinkBtn.disabled = true;
    }

    let finalUrl = url;
    let shortened = false;

    // 同一オリジンのNetlify Functionを経由して短縮する（サーバー同士の通信なのでCORSの制限を受けない）。
    // ローカル環境やNetlify Functionsが無効な環境では失敗するので、その場合は下の手動短縮の案内にフォールバックする。
    try {
        const res = await fetch("/.netlify/functions/shorten", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ url })
        });
        if (res.ok) {
            const resData = await res.json();
            if (resData && resData.shortUrl) {
                finalUrl = resData.shortUrl;
                shortened = true;
            }
        }
    } catch (error) {
        console.warn("短縮リンクの作成に失敗しました。", error);
    }

    if (shareLinkBtn) {
        shareLinkBtn.textContent = originalLabel;
        shareLinkBtn.disabled = false;
    }

    const message = shortened
        ? "共有リンク（短縮URL）をコピーしました。\nこのURLを開くと、閲覧専用モードでこのキャラクターシートが表示されます。"
        : finalUrl.length > 2000
            ? `共有リンクをコピーしました（${finalUrl.length}文字）。\nこのままだとDiscordなど1メッセージ2000文字までのアプリには貼れません。\nx.gdやTinyURLなど、お好きな短縮URLサービスのサイトにこのURLを貼り付けて、短くしてから送ってください。`
            : "共有リンクをコピーしました。\nこのURLを開くと、閲覧専用モードでこのキャラクターシートが表示されます。";

    const done = () => alert(message);
    const fallback = () => {
        window.prompt("このURLをコピーして共有してください：", finalUrl);
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(finalUrl).then(done).catch(fallback);
    } else {
        fallback();
    }

}

function enterViewMode() {

    document.body.classList.add("viewMode");

    const banner = document.getElementById("viewModeBanner");
    if (banner) banner.style.display = "flex";

    // キャラクターシート本体（能力値・技能・アイテム欄など）のテキスト系フィールドのみ読み取り専用にする。
    // 左カラム（エフェクト検索・Dロイス検索）は閲覧・検索できるよう触らない。
    document.querySelectorAll(".charColLeft input, .charColLeft select, .charColLeft textarea, .charColRight input, .charColRight select, .charColRight textarea").forEach(el => {
        el.disabled = true;
    });

    // 追加・削除・変更系のボタンだけは、CSS側（body.viewMode の deny-list）で常に非表示にする。
    // （取得エフェクト一覧の「開く」ボタンや、エフェクト／Dロイス検索側の閲覧系ボタンはここでは触らない）

    if (!document.body.classList.contains("fxCollapsed")) {
        const toggleBtn = document.getElementById("toggleFxColBtn");
        if (toggleBtn) toggleBtn.click();
    }

}

function exitViewMode() {

    document.body.classList.remove("viewMode");

    const banner = document.getElementById("viewModeBanner");
    if (banner) banner.style.display = "none";

    document.querySelectorAll("input, select, textarea, button").forEach(el => {
        el.disabled = false;
    });

    history.replaceState(null, "", location.pathname + location.search);

}

function tryLoadFromShareHash() {

    if (!location.hash || !location.hash.startsWith(SHARE_HASH_PREFIX)) return;

    if (typeof LZString === "undefined") {
        alert("共有リンク機能の読み込みに失敗しました。通信環境をご確認の上、再読み込みしてください。");
        return;
    }

    const compressed = location.hash.slice(SHARE_HASH_PREFIX.length);

    let data;

    try {
        const json = LZString.decompressFromEncodedURIComponent(compressed);
        if (!json) throw new Error("decompress failed");
        data = JSON.parse(json);
    } catch (error) {
        console.error(error);
        alert("共有リンクの読み込みに失敗しました。URLが壊れている可能性があります。");
        return;
    }

    if (data && data.__shareCompact) {
        if (Array.isArray(data.__effects)) {
            data.__effects = tuplesToObjects(data.__effects, SHARE_EFFECT_KEYS);
        }
        if (Array.isArray(data.__combos)) {
            data.__combos = tuplesToObjects(data.__combos, SHARE_COMBO_KEYS);
        }
        if (Array.isArray(data.__dloise)) {
            data.__dloise = tuplesToObjects(data.__dloise, SHARE_DLOISE_KEYS);
        }
        if (data.__items) {
            data.__items = expandItemsFromShare(data.__items);
        }
    }

    try {
        applyCharacterData(data);
    } catch (error) {
        console.error("共有データの適用中にエラーが発生しました。", error);
    } finally {
        enterViewMode();
    }

}

window.addEventListener("DOMContentLoaded", () => {

    const shareLinkBtn = document.getElementById("shareLinkBtn");
    if (shareLinkBtn) shareLinkBtn.addEventListener("click", generateShareLink);

    const enableEditBtn = document.getElementById("enableEditBtn");
    if (enableEditBtn) {
        enableEditBtn.addEventListener("click", () => {
            if (confirm("編集を有効にしますか？（このシートはあなたの手元にのみ反映され、元の共有リンクは変わりません）")) {
                exitViewMode();
            }
        });
    }

});

function runAfterFullLoad(fn) {
    if (document.readyState === "complete") {
        fn();
    } else {
        window.addEventListener("load", fn, { once: true });
    }
}

// Dロイス専用エフェクトの取り込み（app.js内）は window の load イベントで行われるため、
// 共有リンクの復元はそれより後（load後）に実行しないと専用エフェクトが漏れる。
runAfterFullLoad(() => {
    tryLoadFromShareHash();
});

// =========================
// 自動保存（うっかり閉じる・更新対策）
// =========================

const AUTOSAVE_KEY = "dx3rd_autosave_v1";
let autosaveTimer = null;
let hasUnsavedChanges = false;

function isSharedViewURL() {
    return !!(location.hash && location.hash.startsWith(SHARE_HASH_PREFIX));
}

function scheduleAutosave() {

    if (document.body.classList.contains("viewMode")) return;
    if (isSharedViewURL()) return;

    hasUnsavedChanges = true;

    if (autosaveTimer) clearTimeout(autosaveTimer);

    autosaveTimer = setTimeout(() => {
        try {
            const data = gatherCharacterData();
            localStorage.setItem(AUTOSAVE_KEY, JSON.stringify({
                savedAt: Date.now(),
                data
            }));
            hasUnsavedChanges = false;
        } catch (error) {
            console.error("自動保存に失敗しました。", error);
        }
    }, 1000);

}

function tryRestoreAutosave() {

    if (isSharedViewURL()) return;

    let stored;

    try {
        const raw = localStorage.getItem(AUTOSAVE_KEY);
        if (!raw) return;
        stored = JSON.parse(raw);
    } catch (error) {
        return;
    }

    if (!stored || !stored.data) return;

    const savedDate = stored.savedAt ? new Date(stored.savedAt) : null;
    const dateLabel = savedDate
        ? `${savedDate.getFullYear()}/${savedDate.getMonth() + 1}/${savedDate.getDate()} ${String(savedDate.getHours()).padStart(2, "0")}:${String(savedDate.getMinutes()).padStart(2, "0")}`
        : "不明な日時";

    if (confirm(`自動保存されたデータ（${dateLabel}時点）があります。復元しますか？`)) {
        applyCharacterData(stored.data);
    }

}

window.addEventListener("DOMContentLoaded", () => {

    if (isSharedViewURL()) return;

    document.addEventListener("input", scheduleAutosave);
    document.addEventListener("change", scheduleAutosave);

});

// こちらも同じ理由（Dロイス専用エフェクトのマージがload後）でload後に実行する
runAfterFullLoad(() => {

    if (isSharedViewURL()) return;

    tryRestoreAutosave();

});

window.addEventListener("beforeunload", (e) => {

    if (document.body.classList.contains("viewMode")) return;
    if (!hasUnsavedChanges) return;

    e.preventDefault();
    e.returnValue = "";

});
