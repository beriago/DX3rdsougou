const ITEM_TYPES = {
  weapon: {
    listId: 'weaponList',
    rowClass: 'weapon-row',
    addBtnId: 'addWeaponBtn',
    emptyText: '武器がありません。',
    fields: [
      { cls: 'item-name',  col: 'col-name',  ph: 'アイテム名', label:'アイテム名' },
      { cls: 'item-equip', col: 'col-equip', ph: '0', type: 'number', label:'常備化' },
      { cls: 'item-exp',   col: 'col-exp',   ph: '0', type: 'number', label:'経験点' },
      { cls: 'item-skill', col: 'col-skill', ph: '技能', label:'技能' },
      { cls: 'item-hit',   col: 'col-hit',   ph: '命中', label:'命中' },
      { cls: 'item-atk',   col: 'col-atk',   ph: '攻撃力', label:'攻撃力' },
      { cls: 'item-guard', col: 'col-guard', ph: 'ガード値', label:'ガード値' },
      { cls: 'item-range', col: 'col-range', ph: '射程', label:'射程' },
      { cls: 'item-effect',col: 'col-effect',ph: '効果', scroll:true, label:'効果' }
    ]
  },
  armor: {
    listId: 'armorList',
    rowClass: 'armor-row',
    addBtnId: 'addArmorBtn',
    emptyText: '防具がありません。',
    fields: [
      { cls: 'item-name',  col: 'col-name',  ph: 'アイテム名', label:'アイテム名' },
      { cls: 'item-equip', col: 'col-equip', ph: '0', type: 'number', label:'常備化' },
      { cls: 'item-exp',   col: 'col-exp',   ph: '0', type: 'number', label:'経験点' },
      { cls: 'item-action',col: 'col-action',ph: '行動', label:'行動' },
      { cls: 'item-dodge', col: 'col-dodge', ph: 'ドッジ', label:'ドッジ' },
      { cls: 'item-armor', col: 'col-armor', ph: '装甲', label:'装甲' },
      { cls: 'item-effect',col: 'col-effect',ph: '効果', scroll:true, label:'効果' }
    ]
  },
  general: {
    listId: 'generalList',
    rowClass: 'general-row',
    addBtnId: 'addGeneralBtn',
    emptyText: '一般アイテムがありません。',
    fields: [
      { cls: 'item-name',  col: 'col-name',  ph: 'アイテム名', label:'アイテム名' },
      { cls: 'item-equip', col: 'col-equip', ph: '0', type: 'number', label:'常備化' },
      { cls: 'item-exp',   col: 'col-exp',   ph: '0', type: 'number', label:'経験点' },
      { cls: 'item-skill', col: 'col-skill', ph: '技能', label:'技能' },
      { cls: 'item-effect',col: 'col-effect',ph: '効果', scroll:true, label:'効果' }
    ]
  },
  memory: {
    listId: 'memoryList',
    rowClass: 'memory-row',
    addBtnId: 'addMemoryBtn',
    emptyText: 'メモリーがありません。',
    fields: [
      { cls: 'mem-name',     col: 'col-effect', ph: '名前', label:'名前' },
      { cls: 'mem-relation', col: 'col-skill',  ph: '関係', label:'関係' },
      { cls: 'mem-emotion',  col: 'col-skill',  ph: '感情', label:'感情' }
    ]
  },
  rois: {
    listId: 'roisList',
    rowClass: 'rois-row',
    addBtnId: 'addRoisBtn',
    emptyText: 'ロイスがありません。',
    fields: [
      { cls: 'rois-s',         col: 'col-check',  type: 'checkbox', label:'S' },
      { cls: 'rois-relation',  col: 'col-skill',  ph: '関係', label:'関係' },
      { cls: 'rois-name',      col: 'col-name',   ph: '名前', label:'名前' },
      { cls: 'rois-pcheck',    col: 'col-check',  type: 'checkbox', group: 'rois-emotion-check' },
      { cls: 'rois-pemotion',  col: 'col-skill',  ph: 'P感情', type: 'datalist', list: 'pEmotionOptions', label:'P感情' },
      { cls: 'rois-ncheck',    col: 'col-check',  type: 'checkbox', group: 'rois-emotion-check' },
      { cls: 'rois-nemotion',  col: 'col-skill',  ph: 'N感情', type: 'datalist', list: 'nEmotionOptions', label:'N感情' },
      { cls: 'rois-desc',      col: 'col-effect', ph: '説明', scroll:true, label:'説明' }
    ]
  }
};

function ensureItemEmpty(type){
  const cfg = ITEM_TYPES[type];
  const list = document.getElementById(cfg.listId);
  if(list && list.querySelectorAll('.item-row').length === 0){
    list.innerHTML = `<div class="item-empty">${cfg.emptyText}</div>`;
  }
}

function attachItemEvents(div, type){
  const del = div.querySelector('.delete-item-btn');
  if(del) del.onclick = () => { div.remove(); ensureItemEmpty(type); recalcItemsExpTotal(); if (typeof recalcStats === 'function') recalcStats(); };
  const expInput = div.querySelector('.item-exp');
  if(expInput) expInput.addEventListener('input', recalcItemsExpTotal);
  const equipInput = div.querySelector('.item-equip');
  if(equipInput) equipInput.addEventListener('input', () => { if (typeof recalcStats === 'function') recalcStats(); });

  // 同じgroupを持つチェックボックスは同時にひとつだけチェックできるようにする
  const cfg = ITEM_TYPES[type];
  const groups = {};
  cfg.fields.forEach(f => {
    if(f.type === 'checkbox' && f.group){
      (groups[f.group] = groups[f.group] || []).push(f.cls);
    }
  });
  Object.values(groups).forEach(clsList => {
    const boxes = clsList.map(c => div.querySelector('.' + c)).filter(Boolean);
    boxes.forEach(box => {
      box.addEventListener('change', () => {
        if(box.checked){
          boxes.forEach(other => { if(other !== box) other.checked = false; });
        }
      });
    });
  });

  // ロイスの「S」チェックボックスは、ロイスの数に関係なくテーブル全体で1つだけチェックできる
  if(type === 'rois'){
    const sBox = div.querySelector('.rois-s');
    if(sBox){
      const syncHighlight = () => { div.classList.toggle('s-checked', sBox.checked); };
      syncHighlight();
      sBox.addEventListener('change', () => {
        if(sBox.checked){
          const list = document.getElementById(ITEM_TYPES.rois.listId);
          if(list){
            list.querySelectorAll('.rois-s').forEach(other => {
              if(other !== sBox && other.checked){
                other.checked = false;
                const otherRow = other.closest('.item-row');
                if(otherRow) otherRow.classList.remove('s-checked');
              }
            });
          }
        }
        syncHighlight();
      });
    }
  }
}

function createItemElement(type){
  const cfg = ITEM_TYPES[type];
  const div = document.createElement('div');
  div.className = `item-row ${cfg.rowClass}`;
  let html = '';
  cfg.fields.forEach(f => {
    const labelAttr = f.label ? ` data-label="${f.label}"` : '';
    if(f.type === 'checkbox'){
      html += `<span class="${f.col}"${labelAttr}><input type="checkbox" class="${f.cls}"></span>`;
    } else if(f.type === 'number'){
      html += `<span class="${f.col}"${labelAttr}><input type="number" class="${f.cls}" placeholder="${f.ph}"></span>`;
    } else if(f.type === 'datalist'){
      html += `<span class="${f.col}"${labelAttr}><input type="text" class="${f.cls}" list="${f.list}" placeholder="${f.ph}" autocomplete="off"></span>`;
    } else if(f.scroll){
      html += `<span class="${f.col} scroll-cell"${labelAttr}><input type="text" class="${f.cls}" placeholder="${f.ph}"></span>`;
    } else {
      html += `<span class="${f.col}"${labelAttr}><input type="text" class="${f.cls}" placeholder="${f.ph}"></span>`;
    }
  });
  html += `<span class="col-del"><button type="button" class="delete-item-btn small-btn">×</button></span>`;
  div.innerHTML = html;
  attachItemEvents(div, type);
  return div;
}

function addItemRow(type){
  const cfg = ITEM_TYPES[type];
  const list = document.getElementById(cfg.listId);
  if(!list) return;
  const empty = list.querySelector('.item-empty');
  if(empty) empty.remove();
  list.appendChild(createItemElement(type));
  recalcItemsExpTotal();
  if (typeof recalcStats === 'function') recalcStats();
}

const MEMORY_EXP_PER_ITEM = 15;

function recalcItemsExpTotal(){
  let total = 0;
  Object.keys(ITEM_TYPES).forEach(type => {
    const cfg = ITEM_TYPES[type];
    const list = document.getElementById(cfg.listId);
    if(!list) return;
    list.querySelectorAll('.item-exp').forEach(el => {
      const v = Number(el.value);
      if(!isNaN(v)) total += v;
    });
    if(type === 'memory'){
      const count = list.querySelectorAll('.item-row.' + cfg.rowClass).length;
      total += count * MEMORY_EXP_PER_ITEM;
    }
  });
  window.__itemsExpTotal = total;
  if (typeof refreshTotalExpBadge === "function") refreshTotalExpBadge();
}

document.addEventListener('DOMContentLoaded', () => {
  Object.keys(ITEM_TYPES).forEach(type => {
    const cfg = ITEM_TYPES[type];
    const btn = document.getElementById(cfg.addBtnId);
    if(btn) btn.onclick = () => addItemRow(type);
  });
  document.querySelectorAll('.group-toggle-btn').forEach(btn => {
    btn.onclick = () => {
      const group = btn.closest('.itemGroup');
      if(group) group.classList.toggle('collapsed');
    };
  });
  // ロイスは最初から3行分の入力欄を出しておく
  const roisList = document.getElementById('roisList');
  if(roisList && roisList.querySelectorAll('.item-row').length === 0){
    for(let i = 0; i < 3; i++) addItemRow('rois');
  }
});

function exportItemsOfType(type){
  const cfg = ITEM_TYPES[type];
  const list = document.getElementById(cfg.listId);
  if(!list) return [];
  return [...list.querySelectorAll('.item-row')].map(row => {
    const obj = {};
    cfg.fields.forEach(f => {
      const el = row.querySelector('.' + f.cls);
      if(!el) return;
      obj[f.cls] = (f.type === 'checkbox') ? el.checked : (el.value || '');
    });
    return obj;
  });
}

function importItemsOfType(type, dataArray){
  const cfg = ITEM_TYPES[type];
  const list = document.getElementById(cfg.listId);
  if(!list) return;
  list.innerHTML = '';
  if(!Array.isArray(dataArray) || dataArray.length === 0){
    list.innerHTML = `<div class="item-empty">${cfg.emptyText}</div>`;
    return;
  }
  dataArray.forEach(d => {
    const div = createItemElement(type);
    cfg.fields.forEach(f => {
      const el = div.querySelector('.' + f.cls);
      if(!el) return;
      if(f.type === 'checkbox'){
        el.checked = !!d[f.cls];
        if(f.cls === 'rois-s' && el.checked){
          div.classList.add('s-checked');
        }
      } else {
        el.value = d[f.cls] || '';
      }
    });
    list.appendChild(div);
  });
}

function exportItems(){
  return {
    weapon: exportItemsOfType('weapon'),
    armor: exportItemsOfType('armor'),
    general: exportItemsOfType('general'),
    memory: exportItemsOfType('memory'),
    rois: exportItemsOfType('rois')
  };
}

function importItems(data){
  if(!data) data = {};
  importItemsOfType('weapon', data.weapon || []);
  importItemsOfType('armor', data.armor || []);
  importItemsOfType('general', data.general || []);
  importItemsOfType('memory', data.memory || []);
  if(Array.isArray(data.rois) && data.rois.length){
    importItemsOfType('rois', data.rois);
  } else if(!document.getElementById('roisList').querySelector('.item-row')){
    for(let i = 0; i < 3; i++) addItemRow('rois');
  }
  recalcItemsExpTotal();
  if (typeof recalcStats === 'function') recalcStats();
}
