// =========================
// 要素取得
// =========================

const workSelect = document.getElementById("workSelect");

const bodyValue = document.getElementById("bodyValue");
const senseValue = document.getElementById("senseValue");
const mindValue = document.getElementById("mindValue");
const socialValue = document.getElementById("socialValue");

const skillBox = document.getElementById("skillBox");

const hpValue = document.getElementById("hpValue");
const actionValue = document.getElementById("actionValue");
const moveValue = document.getElementById("moveValue");
const erosionValue = document.getElementById("erosionValue");
const expValue = document.getElementById("expValue");
const userSkillList = document.getElementById("userSkillList");
const addSkillBtn = document.getElementById("addSkillBtn");

// =========================
// 能力値 成長・修正／技能（追加分） 状態管理
// =========================

let abilityBase = { body: 0, sense: 0, mind: 0, social: 0 };

let abilityMods = {
    body: { growth: 0, correction: 0 },
    sense: { growth: 0, correction: 0 },
    mind: { growth: 0, correction: 0 },
    social: { growth: 0, correction: 0 }
};

const skillNameOptions = [
    "白兵", "射撃", "RC", "交渉", "回避", "知覚", "意志", "調達",
    "運転:", "芸術:", "知識:", "情報:"
];

const freeTextSkillNames = ["運転:", "芸術:", "知識:", "情報:"];

let userSkills = [];

function createDefaultSkillRow(){
    return { skillName: skillNameOptions[0], customText: "", baseLv: 0, growth: 0, correction: 0 };
}

function parseWorkSkillName(rawName){
    const idx = rawName.indexOf(":");
    if (idx >= 0) {
        return { skillName: rawName.slice(0, idx + 1), customText: rawName.slice(idx + 1) };
    }
    return { skillName: rawName, customText: "" };
}

function syncWorkSkillsToUserSkills(work){

    const newSkills = [];

    if (work && Array.isArray(work.skills)) {
        work.skills.forEach(s => {
            const parsed = parseWorkSkillName(s.name);
            const skillName = skillNameOptions.includes(parsed.skillName) ? parsed.skillName : skillNameOptions[0];
            newSkills.push({
                skillName,
                customText: parsed.customText,
                baseLv: s.level,
                growth: 0,
                correction: 0
            });
        });
    }

    while (newSkills.length < 5) {
        newSkills.push(createDefaultSkillRow());
    }

    userSkills = newSkills;
    renderSkills();

}

for (let i = 0; i < 5; i++) {
    userSkills.push(createDefaultSkillRow());
}

// ---- 能力値 最終値表示 ----

function updateAbilityDisplay(){

    ["body", "sense", "mind", "social"].forEach(key => {

        const final =
            abilityBase[key] +
            abilityMods[key].growth +
            abilityMods[key].correction;

        document.getElementById(key + "Value").textContent = final;
        document.getElementById(key + "Growth").textContent = abilityMods[key].growth;
        document.getElementById(key + "Correction").textContent = abilityMods[key].correction;

    });

    recalcStats();

}

document.getElementById("abilityTable").addEventListener("click", e => {

    if (!e.target.classList.contains("abilityBtn")) return;

    const ability = e.target.dataset.ability;
    const field = e.target.dataset.field;
    const op = e.target.dataset.op;
    const delta = op === "+" ? 1 : -1;

    if (field === "growth" && abilityMods[ability].growth + delta < 0) return;

    abilityMods[ability][field] += delta;

    updateAbilityDisplay();

});

// ---- 技能（追加分）描画 ----

function renderSkills(){

    userSkillList.innerHTML = "";

    userSkills.forEach((sk, idx) => {

        const correction = sk.correction || 0;
        const lv = sk.baseLv + sk.growth + correction;
        const needsCustom = freeTextSkillNames.includes(sk.skillName);

        const row = document.createElement("div");
        row.className = "skillRow";

        row.innerHTML = `
            <div class="skillMain">
                <select class="skillNameSelect" data-idx="${idx}">
                    ${skillNameOptions.map(n => `<option value="${n}"${n === sk.skillName ? " selected" : ""}>${n}</option>`).join("")}
                </select>
                <span class="skillLv">Lv${lv}</span>
                <button class="removeSkillBtn" type="button" data-idx="${idx}">×</button>
            </div>
            <div class="skillCounters">
                <span class="counterCell"><button class="miniBtn skillBtn" data-idx="${idx}" data-field="growth" data-op="-">-</button><span class="counterNum">${sk.growth}</span><button class="miniBtn skillBtn" data-idx="${idx}" data-field="growth" data-op="+">+</button><span class="counterLabel">成長</span></span>
                <span class="counterCell"><button class="miniBtn skillBtn" data-idx="${idx}" data-field="correction" data-op="-">-</button><span class="counterNum">${correction}</span><button class="miniBtn skillBtn" data-idx="${idx}" data-field="correction" data-op="+">+</button><span class="counterLabel">修正</span></span>
            </div>
            ${needsCustom ? `<input class="skillCustomInput" data-idx="${idx}" type="text" placeholder="詳細" value="${sk.customText.replace(/"/g, "&quot;")}">` : ""}
        `;

        userSkillList.appendChild(row);

    });

    recalcStats();

}

userSkillList.addEventListener("change", e => {

    const idx = +e.target.dataset.idx;
    if (Number.isNaN(idx)) return;

    if (e.target.classList.contains("skillNameSelect")) {
        userSkills[idx].skillName = e.target.value;
        renderSkills();
    } else if (e.target.classList.contains("skillCustomInput")) {
        userSkills[idx].customText = e.target.value;
    }

});

userSkillList.addEventListener("click", e => {

    const idx = +e.target.dataset.idx;
    if (Number.isNaN(idx)) return;

    if (e.target.classList.contains("skillBtn")) {

        const field = e.target.dataset.field;
        const op = e.target.dataset.op;
        const delta = op === "+" ? 1 : -1;

        if (field === "growth" && userSkills[idx].growth + delta < 0) return;

        userSkills[idx][field] += delta;

        renderSkills();

    } else if (e.target.classList.contains("removeSkillBtn")) {

        userSkills.splice(idx, 1);
        renderSkills();

    }

});

addSkillBtn.addEventListener("click", () => {
    userSkills.push(createDefaultSkillRow());
    renderSkills();
});

// ---- 経験点計算（能力値・技能の成長のみ／修正は含めない） ----
// 参考: https://w.atwiki.jp/ragadoon/pages/615.html

function skillLevelCost(lv, isFreeText){
    if (lv <= 6) return isFreeText ? 1 : 2;
    if (lv <= 11) return 3;
    if (lv <= 21) return 5;
    return 10;
}

function skillGrowthCost(growth, isFreeText){
    let total = 0;
    for (let lv = 1; lv <= growth; lv++) {
        total += skillLevelCost(lv, isFreeText);
    }
    return total;
}

const ABILITY_GROWTH_COST_PER_POINT = 10;

// ---- ステータス（HP・行動値・侵蝕値・消費経験点）再計算 ----

function recalcStats(){

    const body = abilityBase.body + abilityMods.body.growth + abilityMods.body.correction;
    const sense = abilityBase.sense + abilityMods.sense.growth + abilityMods.sense.correction;
    const mind = abilityBase.mind + abilityMods.mind.growth + abilityMods.mind.correction;

    if (hpValue) hpValue.textContent = body * 2 + mind + 20;
    if (actionValue) actionValue.textContent = sense * 2 + mind;
    if (moveValue) moveValue.textContent = (sense * 2 + mind) + 5;

    let erosion = 0;
    const awakeningSel = document.getElementById("awakening");
    const impulseSel = document.getElementById("impulse");

    if (awakeningSel) {
        const aw = (lifepaths.awakening || []).find(a => a.id === awakeningSel.value);
        if (aw) erosion += aw.erosion;
    }

    if (impulseSel) {
        const im = (lifepaths.impulse || []).find(a => a.id === impulseSel.value);
        if (im) erosion += im.erosion;
    }

    if (erosionValue) erosionValue.textContent = erosion;

    let exp = (workSelect && workSelect.value) ? 0 : -9;

    ["body", "sense", "mind", "social"].forEach(key => {
        exp += abilityMods[key].growth * ABILITY_GROWTH_COST_PER_POINT;
    });

    userSkills.forEach(sk => {
        const isFreeText = freeTextSkillNames.includes(sk.skillName);
        const totalCost = skillGrowthCost(sk.baseLv + sk.growth, isFreeText);
        const baseCost = skillGrowthCost(sk.baseLv, isFreeText);
        exp += (totalCost - baseCost);
    });

    if (expValue) expValue.textContent = exp;

    window.__baseExpTotal = exp;
    if (typeof refreshTotalExpBadge === "function") refreshTotalExpBadge();

}

// ---- 消費経験点合計（能力値・技能＋取得エフェクト）フローティング表示 ----

function refreshTotalExpBadge(){
    const badge = document.getElementById("expFloatBadge");
    const valueEl = document.getElementById("expFloatBadgeValue");
    if (!badge || !valueEl) return;

    const base = Number(window.__baseExpTotal || 0);
    const fx = Number(window.__effectsExpTotal || 0);
    const items = Number(window.__itemsExpTotal || 0);
    const total = base + fx + items;

    valueEl.textContent = total;
    badge.style.display = "flex";
}

document.addEventListener("DOMContentLoaded", () => {

    renderSkills();

    const awakeningSel = document.getElementById("awakening");
    const impulseSel = document.getElementById("impulse");

    if (awakeningSel) awakeningSel.addEventListener("change", recalcStats);
    if (impulseSel) impulseSel.addEventListener("change", recalcStats);

});


// =========================
// 初期化
// =========================

window.addEventListener("DOMContentLoaded", init);

async function init(){

    await loadWorks();
    await loadSyndromes();
    await loadLifepaths();

    recalcStats();

}

// =========================
// ワークス読込
// =========================

async function loadWorks(){createWorkList();}


// =========================
// ワークス一覧作成
// =========================

function createWorkList(){

    workSelect.innerHTML =
    `<option value="">選択してください</option>`;

    works.forEach(work=>{

        const option=document.createElement("option");

        option.value=work.id;

        const ab=work.ability;const bonus=(ab.body?` 肉+${ab.body}`:"")+(ab.sense?` 感+${ab.sense}`:"")+(ab.mind?` 精+${ab.mind}`:"")+(ab.social?` 社+${ab.social}`:"");option.textContent=work.name+bonus;

        workSelect.appendChild(option);

    });

}


// =========================
// ワークス変更
// =========================

workSelect.addEventListener("change",()=>{

    const work=works.find(w=>w.id===workSelect.value);

    if(!work){

        clearStatus();

        syncWorkSkillsToUserSkills(null);

        return;

    }

 updateAbility();


updateOrganization();

syncWorkSkillsToUserSkills(work);

});


// =========================
// 能力値
// =========================

function drawAbility(work){

    abilityBase.body = work.ability.body;
    abilityBase.sense = work.ability.sense;
    abilityBase.mind = work.ability.mind;
    abilityBase.social = work.ability.social;

    updateAbilityDisplay();

}


// =========================
// リセット
// =========================

function clearStatus(){

    abilityBase.body = 0;
    abilityBase.sense = 0;
    abilityBase.mind = 0;
    abilityBase.social = 0;

    updateAbilityDisplay();

    skillBox.innerHTML="";

}

// =========================
// シンドローム読込
// =========================

async function loadSyndromes(){
    createSyndromeList();
}
function createSyndromeList() {
    const selects = [
        document.getElementById("syndrome1"),
        document.getElementById("syndrome2"),
        document.getElementById("syndrome3")
    ];

    selects.forEach(select => {
        select.innerHTML = "";

        const none = document.createElement("option");
        none.value = "";
        none.textContent = "なし";
        select.appendChild(none);

        syndromes.forEach(s => {
            const option = document.createElement("option");
            option.value = s.id;
            option.textContent = s.name;
            select.appendChild(option);
        });
    });
}
