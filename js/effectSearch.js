const DATA_FILES = [
  "アザトース.json",
  "ウロボロス.json",
  "エグザイル.json",
  "エンジェルハィロゥ.json",
  "オルクス.json",
  "キュマイラ.json",
  "サラマンダー.json",
  "ソラリス.json",
  "ノイマン.json",
  "ハヌマーン.json",
  "バロール.json",
  "ブラックドッグ.json",
  "ブラム＝ストーカー.json",
  "モルフェウス.json",
  "レネゲイドビーイング.json",
  "一般.json"
];

const SUPPLEMENT_FILES = [
  { file: "アイテムアーカイブ.json", supplement: "IA" },
  { file: "ヒューマンリレーション.json", supplement: "HR" },
  { file: "バッドシティ.json", supplement: "BC" },
  { file: "レネゲイドウォー.json", supplement: "RW" },
  { file: "クロウリングケイオス.json", supplement: "CC" },
  { file: "アンチェインアームズ.json", supplement: "UA" },
  { file: "ミストルティン.json", supplement: "UA" }
];

  const timingOrder = [
    "メジャーアクション","メジャーアクション／リアクション",
    "マイナーアクション","イニシアチブプロセス","セットアッププロセス",
    "オートアクション","常時","リアクション","効果参照"
  ];

  const skillOrder = [
    "シンドローム","〈白兵〉","〈射撃〉","〈RC〉","〈交渉〉",
    "【肉体】","【感覚】","【精神】","【社会】"
  ];

  const existingSyndromes = new Set(effects.map(e => e.syndrome));
  const existingTimings = new Set(effects.map(e => e.timing));

  const syndromeAbbr = {
    "エンジェルハイロゥ":"エン",
    "バロール":"バロ",
    "ブラックドッグ":"ブラ",
    "ブラム＝ストーカー":"ブラム",
    "キュマイラ":"キュマ",
    "エグザイル":"エグ",
    "ハヌマーン":"ハヌ",
    "モルフェウス":"モル",
    "ノイマン":"ノイ",
    "オルクス":"オル",
    "サラマンダー":"サラ",
    "ソラリス":"ソラ",
    "ウロボロス":"ウロ",
    "アザトース":"アザ",
    "ミストルティン":"ミス",
    "グレイプニル":"グレ",
    "レネゲイドビーイング":"RB",
    "一般":"一般"
  };

  const syndromeBox = $("syndromeOptions");
  syndromeBox.innerHTML = "";
  syndromeChecks = [];
  syndromeOrder.filter(v => existingSyndromes.has(v)).forEach(v => {
    const label = document.createElement("label");
    const input = document.createElement("input");
    input.type = "checkbox";
    input.value = v;
    input.title = v;
    input.addEventListener("change", render);
    label.appendChild(input);
    label.appendChild(document.createTextNode(syndromeAbbr[v] || v));
    label.title = v;
    syndromeBox.appendChild(label);
    syndromeChecks.push(input);
  });

  // 技能候補は正式な〈技能〉と【能力値】だけを抽出する。
  // エフェクト名や前提条件など、技能ではない文字列は候補に入れない。
  const existingSkills = new Set();
  effects.forEach(e => {
    const value = String(e.skill || "");
    if(value === "シンドローム") existingSkills.add("シンドローム");
    const matches = value.match(/〈[^〉]+〉|【[^】]+】/g) || [];
    matches
      .filter(v => !v.startsWith("〈血色の"))
      .forEach(v => existingSkills.add(v));
  });

  setOrderedOptions(timing, timingOrder.filter(v => existingTimings.has(v)));

  const orderedSkills = skillOrder.filter(v => existingSkills.has(v));
  const remainingSkills = [...existingSkills]
    .filter(v => !skillOrder.includes(v))
    .sort((a,b)=>a.localeCompare(b,"ja"));
  setOrderedOptions(skill, [...orderedSkills, ...remainingSkills]);

  const targetOrder = [
    "自身","単体","2体","3体","［LV＋1］体",
    "範囲","範囲（選択）","シーン","シーン（選択）","効果参照"
  ];
  const existingTargets = new Set(
    effects.map(e => normalizeTarget(e.target))
      .filter(v => v && !["―","－","ー"].includes(v))
  );
  const orderedTargets = targetOrder.filter(v => existingTargets.has(v));
  const remainingTargets = [...existingTargets]
    .filter(v => !targetOrder.includes(v))
    .sort((a,b)=>a.localeCompare(b,"ja"));
  setOrderedOptions(target, [...orderedTargets, ...remainingTargets]);

  const rangeOrder = [
    "至近","武器","10m","20m","1000km","視界","効果参照","―"
  ];
  const existingRanges = new Set(
    effects.map(e => e.range).filter(v => v && v !== "ー")
  );
  const orderedRanges = rangeOrder.filter(v => existingRanges.has(v));
  const remainingRanges = [...existingRanges]
    .filter(v => !rangeOrder.includes(v))
    .sort((a,b)=>a.localeCompare(b,"ja"));
  setOrderedOptions(range, [...orderedRanges, ...remainingRanges]);

  const limitOrder = [
    "―","80%","100%","120%","ピュアブリード","リミット","RB","Dロイス"
  ];
  const existingLimits = new Set(
    effects.map(e => e.limit).filter(v => v && v !== "ー")
  );
  setOrderedOptions(limit, limitOrder.filter(v => existingLimits.has(v)));

function filtered(){
  const q=keyword.value.trim().toLowerCase();
  const selectedSupplements = new Set(
    supplementChecks.filter(check => check.checked).map(check => check.value)
  );
  const selectedSyndromes = new Set(
    syndromeChecks.filter(check => check.checked).map(check => check.value)
  );

  return effects.filter(e =>
    selectedSupplements.has(e.supplement) &&
    (!selectedSyndromes.size || selectedSyndromes.has(e.syndrome)) &&
    (!q || e.name.toLowerCase().includes(q) || String(e.effect || "").toLowerCase().includes(q) ||
      (e.linked || []).some(l => String(l.name||"").toLowerCase().includes(q) || String(l.effect||"").toLowerCase().includes(q))) &&
    (!timing.value || e.timing===timing.value) &&
    (!skill.value || String(e.skill || "").includes(skill.value)) &&
    (!target.value || normalizeTarget(e.target)===target.value) &&
    (!range.value || e.range===range.value) &&
    (!limit.value || e.limit===limit.value)
  );
}

function esc(value){
  return String(value ?? "")
    .replaceAll("&","&amp;").replaceAll("<","&lt;")
    .replaceAll(">","&gt;").replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}

function getSearchPreview(e){
  const raw = keyword.value.trim();
  if(!raw) return "";

  const text = String(e.effect || "");
  const lowerText = text.toLowerCase();
  const lowerRaw = raw.toLowerCase();
  const index = lowerText.indexOf(lowerRaw);

  // 本文に検索語がない場合（名前だけでヒット）はプレビューを出さない
  if(index < 0) return "";

  const context = 34;
  const start = Math.max(0, index - context);
  const end = Math.min(text.length, index + raw.length + context);
  let excerpt = text.slice(start, end);

  if(start > 0) excerpt = "…" + excerpt;
  if(end < text.length) excerpt += "…";

  return `<div class="result-preview">${highlightSearchText(excerpt)}</div>`;
}

function render(){
  const list=filtered();
  count.textContent=`${list.length}件`;
  results.innerHTML="";
  if(!list.length){
    results.innerHTML='<div class="no-results">該当するエフェクトはありません。</div>';
    return;
  }
  list.forEach(e=>{
    const btn=document.createElement("button");
    btn.className="result"+(selectedName===e.name?" active":"");
    btn.innerHTML=`<div class="result-name">${esc(e.name)}</div><div class="tags"><span class="tag">${esc(e.supplement)}</span><span class="tag">${esc(e.syndrome)}</span><span class="tag">${esc(e.timing)}</span><span class="tag">${esc(e.skill)}</span></div>
        ${getSearchPreview(e)}`;
    btn.onclick=()=>showDetail(e);
    results.appendChild(btn);
  });
}

function escapeRegExp(value){
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function highlightSearchText(text){
  const raw = keyword.value.trim();
  const safeText = esc(String(text || ""));
  if(!raw) return safeText;
  const re = new RegExp(escapeRegExp(raw), "gi");
  return safeText.replace(re, match => `<mark class="search-highlight">${match}</mark>`);
}

function showDetail(e){
  selectedName=e.name;
  const linkedHtml = (e.linked || []).map(effectLinkedBlock).join("");
  detail.innerHTML=`
    <div class="detail-top">
      <div><h2>${esc(e.name)}</h2><div class="syndrome">${esc(e.syndrome)} ／ ${esc(e.supplement)}</div></div>
      <div class="detail-actions">
        <button class="save-btn" id="fxSaveBtn">＋ 取得エフェクト</button>
        <button class="copy-btn" id="copyBtn">効果をコピー</button>
      </div>
    </div>
    <div class="specs">
      ${spec("最大LV",e.maxLv)}${spec("タイミング",e.timing)}${spec("技能",e.skill)}${spec("難易度",e.difficulty)}
      ${spec("対象",e.target)}${spec("射程",e.range)}${spec("侵蝕値",e.cost)}${spec("制限",e.limit)}
    </div>
    <p class="effect-title">効果</p>
    <p class="effect-text">${highlightSearchText(e.effect)}</p>
    ${linkedHtml}`;
  updateSaveButton(e);
  $("fxSaveBtn").onclick=()=>toggleSaved(e);
  $("copyBtn").onclick=async()=>{
    await navigator.clipboard.writeText(e.effect);
    const b=$("copyBtn"); b.textContent="コピーしました";
    setTimeout(()=>b.textContent="効果をコピー",1200);
  };
  render();
}
function spec(label,value){return `<div class="spec"><span class="spec-label">${esc(label)}</span><span class="spec-value">${esc(value)}</span></div>`}

// 神殺す刃などのエフェクトが持つ、専用アイテム(アーキタイプ)の一覧を表示する
function effectItemSpecs(l){
  const rows=[];
  if(l.itemType) rows.push(spec("種別", l.itemType));
  if(l.skill) rows.push(spec("技能", l.skill));
  if(l.hit!==undefined) rows.push(spec("命中", l.hit));
  if(l.power!==undefined) rows.push(spec("攻撃力", l.power));
  if(l.guard!==undefined) rows.push(spec("ガード値", l.guard));
  if(l.dodge!==undefined) rows.push(spec("ドッジ", l.dodge));
  if(l.action!==undefined) rows.push(spec("行動", l.action));
  if(l.armor!==undefined) rows.push(spec("装甲値", l.armor));
  if(l.move!==undefined) rows.push(spec("全力移動", l.move));
  if(l.range!==undefined) rows.push(spec("射程", l.range));
  return `<div class="specs">${rows.join("")}</div>`;
}
function effectLinkedBlock(l){
  const label = l.kind==="item" ? "専用アイテム" : "関連エフェクト";
  const specsHtml = l.kind==="item" ? effectItemSpecs(l) : "";
  return `
    <div class="linked-effect-box" style="margin-top:16px;padding:14px;border:1px solid #ccc;border-radius:8px;">
      <p class="effect-title" style="margin-bottom:6px;">${label}：${esc(l.name)}</p>
      ${specsHtml}
      <p class="effect-text">${highlightSearchText(l.effect)}</p>
    </div>`;
}

[keyword,timing,skill,target,range,limit].forEach(el=>el.addEventListener("input",render));
supplementChecks.forEach(check=>check.addEventListener("change",render));
$("clearSavedBtn").onclick=()=>{
  acquiredEffects = [];
  renderSaved();
  const current = effects.find(e => e.name === selectedName);
  if(current && $("fxSaveBtn")) updateSaveButton(current);
};
renderSaved();


$("clearBtn").onclick=()=>{
  keyword.value=""; timing.value=""; skill.value=""; target.value=""; range.value=""; limit.value="";
  supplementChecks.forEach(check => {
    check.checked = false;
  });
  syndromeChecks.forEach(check => {
    check.checked = false;
  });
  selectedName=""; detail.innerHTML='<div class="empty">左の一覧からエフェクトを選択してください。</div>'; render(); keyword.focus();
};

$("exportSavedBtn").addEventListener("click", exportSavedEffects);
$("importSavedBtn").addEventListener("click", () => $("importSavedFile").click());
$("importSavedFile").addEventListener("change", event => {
  const file=event.target.files?.[0];
  if(file) importSavedEffectsFile(file);
  event.target.value="";
});

loadEffects();


// ---- キャラクターシートへの統合 ----
function fxExportForCharacter(){
  return acquiredEffects.map(e => ({
    name: e.name, supplement: e.supplement, syndrome: e.syndrome, acquiredLv: Number(e.acquiredLv || 1)
  }));
}

function fxImportForCharacter(list){
    try{
        restoreSavedEntries(Array.isArray(list) ? list : []);
    }catch(err){
        console.warn("エフェクトの復元に失敗しました。", err);
    }
}