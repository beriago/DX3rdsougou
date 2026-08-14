
function attachComboItemEvents(div){
const header=div.querySelector(".combo-header");
const body=div.querySelector(".combo-body-wrap");
if(header&&body){header.onclick=(e)=>{if(e.target.tagName!=='INPUT'&&!e.target.classList.contains('combo-move-btn'))body.hidden=!body.hidden;};}
const del=div.querySelector('.delete-combo-btn');
if(del)del.onclick=()=>{div.remove();ensureComboEmpty();};
const dup=div.querySelector('.duplicate-combo-btn');
if(dup)dup.onclick=()=>{const clone=div.cloneNode(true);div.after(clone);attachComboItemEvents(clone);};
const notes=div.querySelector('.combo-notes');
if(notes)notes.addEventListener('keydown',e=>{if(e.key==='Enter')e.preventDefault();});
const up=div.querySelector('.combo-move-up');
if(up)up.onclick=(e)=>{e.stopPropagation();const prev=div.previousElementSibling;if(prev&&prev.classList.contains('combo-item'))div.parentNode.insertBefore(div,prev);};
const down=div.querySelector('.combo-move-down');
if(down)down.onclick=(e)=>{e.stopPropagation();const next=div.nextElementSibling;if(next&&next.classList.contains('combo-item'))div.parentNode.insertBefore(next,div);};
}
function ensureComboEmpty(){const list=document.getElementById('comboList');if(list&&list.querySelectorAll('.combo-item').length===0){list.innerHTML='<div class="combo-empty">コンボがありません。</div>';}}
function createComboElement(){
const div=document.createElement('div');
div.className='combo-item';
div.innerHTML=`<div class="combo-header"><span class="combo-move-btns"><button type="button" class="combo-move-btn combo-move-up" title="上へ">↑</button><button type="button" class="combo-move-btn combo-move-down" title="下へ">↓</button></span> <input type="text" class="req-erosion" style="width:60px;" placeholder="100">％ <input type="text" class="effect-name" placeholder="エフェクト名"></div><div class="combo-body-wrap" hidden><div class="combo-body"><div class="combo-roll"><input type="text" class="combo-dice"><span>dx</span><input type="text" class="combo-crit"><span>+</span><input type="text" class="combo-skill"></div><span class="combo-sep">|</span><span>射程</span><input type="text" class="combo-range"><span class="combo-sep">|</span><span>対象</span><input type="text" class="combo-target"><span class="combo-sep">|</span><span>攻撃</span><input type="text" class="combo-atk"><span class="combo-sep">|</span><span>侵蝕</span><input type="text" class="combo-erosion2"><span class="combo-sep">|</span><div class="combo-buttons"><button type="button" class="duplicate-combo-btn small-btn">複</button><button type="button" class="delete-combo-btn small-btn">×</button></div></div><div class="combo-notes-row"><textarea class="combo-notes" rows="1" wrap="off" placeholder="備考"></textarea></div></div>`;
attachComboItemEvents(div);
return div;
}
document.addEventListener('DOMContentLoaded',()=>{
const addBtn=document.getElementById('addComboBtn');
const comboList=document.getElementById('comboList');
if(!addBtn||!comboList)return;
addBtn.onclick=()=>{
const e=comboList.querySelector('.combo-empty');
if(e)e.remove();
comboList.appendChild(createComboElement());
};
});


function exportCombos(){
  const list = document.getElementById('comboList');
  if(!list) return [];
  return [...list.querySelectorAll('.combo-item')].map(item => {
    const get = sel => item.querySelector(sel)?.value || '';
    return {
      erosion: get('.req-erosion'),
      name: get('.effect-name'),
      dice: get('.combo-dice'),
      crit: get('.combo-crit'),
      skill: get('.combo-skill'),
      range: get('.combo-range'),
      target: get('.combo-target'),
      atk: get('.combo-atk'),
      erosion2: get('.combo-erosion2'),
      notes: get('.combo-notes')
    };
  });
}

function importCombos(dataArray){
  const list = document.getElementById('comboList');
  if(!list) return;
  list.innerHTML = '';
  if(!Array.isArray(dataArray) || dataArray.length === 0){
    list.innerHTML = '<div class="combo-empty">コンボがありません。</div>';
    return;
  }
  dataArray.forEach(d => {
    const div = createComboElement();
    div.querySelector('.req-erosion').value = d.erosion || '';
    div.querySelector('.effect-name').value = d.name || '';
    div.querySelector('.combo-dice').value = d.dice || '';
    div.querySelector('.combo-crit').value = d.crit || '';
    div.querySelector('.combo-skill').value = d.skill || '';
    div.querySelector('.combo-range').value = d.range || '';
    div.querySelector('.combo-target').value = d.target || '';
    div.querySelector('.combo-atk').value = d.atk || '';
    div.querySelector('.combo-erosion2').value = d.erosion2 || '';
    div.querySelector('.combo-notes').value = d.notes || '';
    list.appendChild(div);
  });
}