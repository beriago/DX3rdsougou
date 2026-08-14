// =========================
// 技能
// =========================

function drawSkills(work){

    skillBox.innerHTML="";

    work.skills.forEach(skill=>{

        const li=document.createElement("li");

        li.textContent=
        `${skill.name}　Lv${skill.level}`;

        skillBox.appendChild(li);

    });

}


