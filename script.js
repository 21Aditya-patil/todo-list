let inputs = document.getElementById("inp");
let text = document.querySelector(".text");
let msg = document.querySelector(".msg");

function Add(){
    if(inputs.value == ""){
        alert("Please Enter Task");
    }else{
        let newEle = document.createElement("ul");
        newEle.innerHTML=`${inputs.value} <i class="fa-solid fa-minus"></i>`;
        text.appendChild(newEle);
        inputs.value="";
        newEle.querySelector("i").addEventListener("click" , remove);
        function remove(){
            newEle.remove();
        }
        msg.remove();
        saveData();
    }

    text.addEventListener("click", function check(e){
        if(e.target.tagName === "UL"){
            e.target.classList.toggle("checked");
        }
        saveData();
    })
    saveData();
}

function saveData(){
    localStorage.setItem("data",text.innerHTML);
}

function showTask() {
    text.innerHTML = localStorage.getItem("data") || "";
    document.querySelectorAll(".fa-minus").forEach(icon => {
        icon.addEventListener("click", function () {
            icon.parentElement.remove();
            saveData();
        });
    });
}

showTask();