const btn = document.querySelector("button");
const notesContainer = document.querySelector(".notes-container")
let notes = document.querySelector(".input-box");

btn.addEventListener("click",()=>{
    let p = document.createElement("p");
    let img = document.createElement("img");
    p.setAttribute("contenteditable","true");
    p.classList.add("input-box");
    img.src ="./images/delete.png"
    p.appendChild(img);
    notesContainer.appendChild(p);
});

notesContainer.addEventListener("click",(e)=>{
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage()
    }

    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt =>{
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
});

function updateStorage(){
    localStorage.setItem("notes",notesContainer.innerHTML);
}

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}


document.addEventListener("keydown",(e)=>{
    if(e.key === "Enter"){
        document.execCommand("insertLIneBreak");
        e.preventDefault();
    }
})

showNotes();