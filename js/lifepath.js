// =========================
// ライフパス読込
// =========================

async function loadLifepaths(){
    createLifepathList();
}

// =========================
// ライフパス生成
// =========================

function createLifepathList(){

    fillSelect("birth", lifepaths.birth.normal);

    fillSelect("experience", lifepaths.experience.student);
document
    .getElementById("experienceType")
    .addEventListener("change", changeExperienceType);

    fillSelect("encounter", lifepaths.encounter.normal);

    fillSelect("awakening", lifepaths.awakening);

    fillSelect("impulse", lifepaths.impulse);

}

// =========================
// Selectへ追加
// =========================

function fillSelect(id,data){

    const select=document.getElementById(id);

    select.innerHTML="";

    data.forEach(item=>{

        const option=document.createElement("option");

        option.value=item.id;

        option.textContent = (item.erosion!==undefined)
            ? `${item.name}（${item.erosion}）`
            : item.name;

        select.appendChild(option);

    });

}

//=========================
// 経験切替
//=========================

function changeExperienceType(){

    const type =
        document.getElementById("experienceType").value;

    // 経験
    fillSelect(
        "experience",
        lifepaths.experience[type]
    );

    // 出自
    if(type==="rb"){

        fillSelect(
            "birth",
            lifepaths.birth.rb
        );

    }else{

        fillSelect(
            "birth",
            lifepaths.birth.normal
        );

    }

// 邂逅・欲望
const encounterLabel =
    document.getElementById("encounterLabel");

if(type==="rb"){

    encounterLabel.textContent = "邂逅";

    fillSelect(
        "encounter",
        lifepaths.encounter.rb
    );

}else if(type==="fh"){

    encounterLabel.textContent = "欲望";

    fillSelect(
        "encounter",
        lifepaths.desire
    );

}else{

    encounterLabel.textContent = "邂逅";

    fillSelect(
        "encounter",
        lifepaths.encounter.normal
    );

}

   }


function updateOrganization(){

    const work = works.find(
        w => w.id === workSelect.value
    );

    if(!work) return;

    const type =
        document.getElementById("experienceType");

    switch(work.category){

        case "UGN":
            type.value = "ugn";
            break;

        case "FH":
            type.value = "fh";
            break;

        case "RB":
            type.value = "rb";
            break;

        case "裏社会":
            type.value = "underworld";
            break;

        default:
            type.value = "general";
            break;

    }

    changeExperienceType();

}