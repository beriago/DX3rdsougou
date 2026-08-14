// ---- Dロイス検索（エフェクトとは完全に独立） ----
let dloiseList = [];
let dloiseSelectedName = "";

const dloiseKeyword = document.getElementById("dloiseKeyword");
const dloiseClearBtn = document.getElementById("dloiseClearBtn");
const dloiseResultsBox = document.getElementById("dloiseResults");
const dloiseCount = document.getElementById("dloiseCount");
const dloiseDetail = document.getElementById("dloiseDetail");
const dloiseSupplementChecks = Array.from(
  document.querySelectorAll('#dloiseSupplementOptions input[type="checkbox"]')
);
const dloiseSyndromeSelect = document.getElementById("dloiseSyndromeSelect");

function dloiseEsc(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;").replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;").replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function dloiseEscapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function dloiseHighlight(text) {
  const raw = dloiseKeyword.value.trim();
  const safeText = dloiseEsc(String(text || ""));
  if (!raw) return safeText;
  const re = new RegExp(dloiseEscapeRegExp(raw), "gi");
  return safeText.replace(re, match => `<mark class="search-highlight">${match}</mark>`);
}

// dのlinked配列すべての name/effect を連結して検索・プレビュー対象にする
function dloiseSearchableText(d) {
  const parts = [d.name, d.reading, d.syndrome, d.effect];
  (d.linked || []).forEach(l => {
    parts.push(l.name, l.effect);
  });
  return parts.filter(Boolean).join("\n");
}

// syndromeフィールドは「〇〇専用」の形式なので、末尾の「専用」を除いた表示名を返す
function dloiseSyndromeLabel(syndrome) {
  return String(syndrome || "").replace(/専用$/, "");
}

function dloiseGetPreview(d) {
  const raw = dloiseKeyword.value.trim();
  if (!raw) return "";
  const text = dloiseSearchableText(d);
  const lowerText = text.toLowerCase();
  const lowerRaw = raw.toLowerCase();
  const index = lowerText.indexOf(lowerRaw);
  if (index < 0) return "";
  const context = 34;
  const start = Math.max(0, index - context);
  const end = Math.min(text.length, index + raw.length + context);
  let excerpt = text.slice(start, end);
  if (start > 0) excerpt = "…" + excerpt;
  if (end < text.length) excerpt += "…";
  return `<div class="result-preview">${dloiseHighlight(excerpt)}</div>`;
}

function dloiseFiltered() {
  const q = dloiseKeyword.value.trim().toLowerCase();
  const selectedSupplements = new Set(
    dloiseSupplementChecks.filter(c => c.checked).map(c => c.value)
  );
  const selectedSyndrome = dloiseSyndromeSelect ? dloiseSyndromeSelect.value : "";
  return dloiseList.filter(d => {
    if (!selectedSupplements.has(d.supplement)) return false;
    if (selectedSyndrome && d.syndrome !== selectedSyndrome) return false;
    if (!q) return true;
    return dloiseSearchableText(d).toLowerCase().includes(q);
  });
}

function dloiseRender() {
  const list = dloiseFiltered();
  dloiseCount.textContent = `${list.length}件`;
  dloiseResultsBox.innerHTML = "";
  if (!list.length) {
    dloiseResultsBox.innerHTML = '<div class="no-results">該当するDロイスはありません。</div>';
    return;
  }
  list.forEach(d => {
    const btn = document.createElement("button");
    btn.className = "result" + (dloiseSelectedName === d.name ? " active" : "");
    const linked = d.linked || [];
    const effectCount = linked.filter(l => l.kind === "effect").length;
    const itemCount = linked.filter(l => l.kind === "item").length;
    let linkedTags = "";
    if (effectCount) linkedTags += `<span class="tag">専用エフェクト${effectCount > 1 ? "×" + effectCount : ""}</span>`;
    if (itemCount) linkedTags += `<span class="tag">専用アイテム${itemCount > 1 ? "×" + itemCount : ""}</span>`;
    const syndromeTag = d.syndrome ? `<span class="tag syndrome-tag">${dloiseEsc(dloiseSyndromeLabel(d.syndrome))}</span>` : "";
    const readingHtml = d.reading ? `<div class="result-reading" style="font-size:11px;color:#888;">${dloiseEsc(d.reading)}</div>` : "";
    btn.innerHTML = `<div class="result-name">${dloiseEsc(d.name)}</div>${readingHtml}<div class="tags"><span class="tag" data-sup="${dloiseEsc(d.supplement)}">${dloiseEsc(d.supplement)}</span>${syndromeTag}${linkedTags}</div>
        ${dloiseGetPreview(d)}`;
    btn.onclick = () => dloiseShowDetail(d);
    dloiseResultsBox.appendChild(btn);
  });
}

function dloiseLinkedSpec(label,value){
  return `<div class="spec"><span class="spec-label">${dloiseEsc(label)}</span><span class="spec-value">${dloiseEsc(value)}</span></div>`;
}
function dloiseLinkedSpecsGrid(l){
  const rows=[];
  const push=(label,value)=>{ if(value!==undefined && value!=="") rows.push(dloiseLinkedSpec(label,value)); };
  if(l.kind==="item"){
    push("種別", l.itemType);
    push("技能", l.skill);
    push("命中", l.hit);
    push("攻撃力", l.power);
    push("ガード", l.guard);
    push("ドッジ", l.dodge);
    push("行動", l.action);
    push("装甲", l.armor);
    push("移動", l.move);
    push("射程", l.range);
  } else {
    push("最大LV", l.maxLv);
    push("タイミング", l.timing);
    push("技能", l.skill);
    push("難易度", l.difficulty);
    push("対象", l.target);
    push("射程", l.range);
    push("侵蝕値", l.cost);
    push("制限", l.limit);
  }
  if(!rows.length) return "";
  return `<div class="specs linked-specs">${rows.join("")}</div>`;
}
function dloiseLinkedCard(l,i){
  const kindTag = l.kind==="item" ? "アイテム" : "エフェクト";
  const saveBtn = l.kind==="item" ? "" : `<button class="linked-save-btn" data-linked-index="${i}">＋ 取得エフェクト</button>`;
  return `
    <div class="linked-card">
      <div class="linked-card-title"><span>${dloiseEsc(l.name)}</span><span class="kind-tag">${kindTag}</span></div>
      ${dloiseLinkedSpecsGrid(l)}
      <p class="effect-title">効果</p>
      <div class="linked-card-effect">${dloiseHighlight(l.effect)}</div>
      ${saveBtn}
    </div>`;
}
function dloiseRenderLinkedGrid(linked){
  if(!linked || !linked.length) return "";
  const effectEntries = linked.map((l,i)=>({l,i})).filter(x=>x.l.kind!=="item");
  const gearEntries = linked.map((l,i)=>({l,i})).filter(x=>x.l.kind==="item");
  let html = "";
  if(effectEntries.length){
    html += `<p class="linked-section-title">専用エフェクト（${effectEntries.length}）</p>`;
    html += `<div class="linked-grid">${effectEntries.map(x=>dloiseLinkedCard(x.l,x.i)).join("")}</div>`;
  }
  if(gearEntries.length){
    html += `<details class="linked-details">
      <summary class="linked-section-title">専用アイテム（${gearEntries.length}）　※クリックで開閉</summary>
      <div class="linked-grid">${gearEntries.map(x=>dloiseLinkedCard(x.l,x.i)).join("")}</div>
    </details>`;
  }
  return html;
}
// linkedカードの「＋取得エフェクト」ボタンを、エフェクト側(app.js)の取得エフェクト機能に接続する
function dloiseWireLinkedSaveButtons(parent){
  document.querySelectorAll(".linked-save-btn").forEach(btn=>{
    const idx = Number(btn.dataset.linkedIndex);
    const l = (parent.linked || [])[idx];
    if(!l || l.kind === "item") return;
    if(typeof toggleSaved !== "function" || typeof isSaved !== "function") return;
    const asEffect = {
      name: l.name,
      syndrome: parent.syndrome || parent.name,
      supplement: parent.supplement,
      maxLv: l.maxLv, timing: l.timing, skill: l.skill, difficulty: l.difficulty,
      target: l.target, range: l.range, cost: l.cost, limit: l.limit, effect: l.effect,
      isDloiseExclusive: true
    };
    const refresh = () => {
      const saved = isSaved(asEffect);
      btn.textContent = saved ? "保存済み" : "＋ 取得エフェクト";
      btn.classList.toggle("saved", saved);
    };
    refresh();
    btn.onclick = (ev) => { ev.stopPropagation(); toggleSaved(asEffect); refresh(); };
  });
}

// ---- 取得Dロイス（コンボの下に表示するリスト） ----
let acquiredDloiseList = [];

function dloiseAcquiredKey(d){
  return `${d.name}|||${d.supplement}`;
}
function isDloiseAcquired(d){
  return acquiredDloiseList.some(saved => dloiseAcquiredKey(saved) === dloiseAcquiredKey(d));
}
function toggleDloiseAcquired(d){
  if (isDloiseAcquired(d)) {
    acquiredDloiseList = acquiredDloiseList.filter(saved => dloiseAcquiredKey(saved) !== dloiseAcquiredKey(d));
  } else {
    acquiredDloiseList.push({ name: d.name, supplement: d.supplement, syndrome: d.syndrome, effect: d.effect });
  }
  renderAcquiredDloise();
}
function renderAcquiredDloise(){
  const box = document.getElementById("acquiredDloiseList");
  if (!box) return;
  if (!acquiredDloiseList.length) {
    box.innerHTML = '<div class="saved-empty">取得しているDロイスはありません。</div>';
    return;
  }
  box.innerHTML = acquiredDloiseList.map((d, i) => {
    const previewSource = d.effect || (dloiseList.find(x => x.name === d.name && x.supplement === d.supplement) || {}).effect || "";
    const previewText = previewSource ? previewSource.slice(0, 30) + (previewSource.length > 30 ? "…" : "") : "";
    const previewHtml = previewText ? `<span class="saved-effect-preview">${dloiseEsc(previewText)}</span>` : "";
    return `
    <div class="saved-effect-card">
      <div class="saved-effect-head">
        <button type="button" class="saved-effect-name-btn" data-jump-idx="${i}"><span class="saved-effect-name">${dloiseEsc(d.name)}</span></button>
        ${previewHtml}
        <span class="tag" data-sup="${dloiseEsc(d.supplement)}">${dloiseEsc(d.supplement)}</span>
        <button type="button" class="remove-saved-btn" data-idx="${i}">削除</button>
      </div>
    </div>`;
  }).join("");
  box.querySelectorAll(".remove-saved-btn").forEach(btn => {
    btn.onclick = () => {
      const idx = Number(btn.dataset.idx);
      acquiredDloiseList.splice(idx, 1);
      renderAcquiredDloise();
      if (dloiseSelectedName) {
        const current = dloiseList.find(d => d.name === dloiseSelectedName);
        if (current) dloiseShowDetail(current);
      }
    };
  });
  box.querySelectorAll(".saved-effect-name-btn").forEach(btn => {
    btn.onclick = () => {
      const idx = Number(btn.dataset.jumpIdx);
      const acquired = acquiredDloiseList[idx];
      if (!acquired) return;
      const target = dloiseList.find(x => x.name === acquired.name && x.supplement === acquired.supplement)
        || dloiseList.find(x => x.name === acquired.name);
      if (!target) return;
      dloiseShowDetail(target);
      if (dloiseDetail && typeof dloiseDetail.scrollIntoView === "function") {
        dloiseDetail.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
  });
}

function dloiseShowDetail(d) {
  dloiseSelectedName = d.name;
  const linkedHtml = dloiseRenderLinkedGrid(d.linked);
  const acquired = isDloiseAcquired(d);
  dloiseDetail.innerHTML = `
    <div class="detail-top">
      <div><h2>${dloiseEsc(d.name)}${d.reading ? `<span style="font-size:12px;color:#888;margin-left:8px;">${dloiseEsc(d.reading)}</span>` : ""}</h2><div class="syndrome">${dloiseEsc(d.supplement)}${d.syndrome ? " ／ " + dloiseEsc(d.syndrome) : ""}</div></div>
      <div class="detail-actions">
        <button class="copy-btn" id="dloiseCopyBtn">効果をコピー</button>
        <button class="copy-btn${acquired ? " saved" : ""}" id="dloiseAcquireBtn">${acquired ? "取得済み" : "取得"}</button>
      </div>
    </div>
    <p class="effect-title">効果</p>
    <p class="effect-text">${dloiseHighlight(d.effect).replace(/\n/g, "<br>")}</p>
    ${linkedHtml}`;
  document.getElementById("dloiseCopyBtn").onclick = async () => {
    await navigator.clipboard.writeText(d.effect);
    const b = document.getElementById("dloiseCopyBtn");
    b.textContent = "コピーしました";
    setTimeout(() => (b.textContent = "効果をコピー"), 1200);
  };
  document.getElementById("dloiseAcquireBtn").onclick = () => {
    toggleDloiseAcquired(d);
    dloiseShowDetail(d);
  };
  document.querySelectorAll(".linked-card-effect").forEach(el=>{
    el.addEventListener("click", ()=> el.classList.toggle("expanded"));
  });
  dloiseWireLinkedSaveButtons(d);
  dloiseRender();
}
function dloiseSpec(label,value){return `<div class="spec"><span class="spec-label">${dloiseEsc(label)}</span><span class="spec-value">${dloiseEsc(value)}</span></div>`}

function dloiseExportForCharacter(){
  return acquiredDloiseList;
}
function dloiseImportForCharacter(list){
  acquiredDloiseList = Array.isArray(list) ? list : [];
  renderAcquiredDloise();
}

function dloisePopulateSyndromeOptions() {
  if (!dloiseSyndromeSelect) return;
  const syndromes = Array.from(new Set(dloiseList.map(d => d.syndrome).filter(Boolean)))
    .sort((a, b) => a.localeCompare(b, "ja"));
  syndromes.forEach(s => {
    const opt = document.createElement("option");
    opt.value = s;
    opt.textContent = dloiseSyndromeLabel(s);
    dloiseSyndromeSelect.appendChild(opt);
  });
}

function dloiseInit() {
  dloiseList = (typeof EMBEDDED_DLOISE !== "undefined" && Array.isArray(EMBEDDED_DLOISE)) ? EMBEDDED_DLOISE : [];
  dloisePopulateSyndromeOptions();
  dloiseRender();
  renderAcquiredDloise();
}

dloiseKeyword.addEventListener("input", dloiseRender);
dloiseSupplementChecks.forEach(c => c.addEventListener("change", dloiseRender));
if (dloiseSyndromeSelect) dloiseSyndromeSelect.addEventListener("change", dloiseRender);
dloiseClearBtn.onclick = () => {
  dloiseKeyword.value = "";
  dloiseSupplementChecks.forEach(c => (c.checked = true));
  if (dloiseSyndromeSelect) dloiseSyndromeSelect.value = "";
  dloiseSelectedName = "";
  dloiseDetail.innerHTML = '<div class="empty">左の一覧からDロイスを選択してください。</div>';
  dloiseRender();
  dloiseKeyword.focus();
};

dloiseInit();
