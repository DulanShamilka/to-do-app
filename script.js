const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("Please write something");
    }
    else{
        let li = document.createElement("li");

        let textContent = document.createElement("div");
        textContent.className = "text-content";
        textContent.textContent = inputBox.value;
  
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        let pin = document.createElement("pin");
        pin.innerHTML = "&#9733;";
        li.appendChild(textContent);
        li.appendChild(span);
        li.appendChild(pin);

        listContainer.appendChild(li);
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }

},false);

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "PIN") {
        e.target.classList.toggle("pinned");
      const pin = e.target.parentElement;
      listContainer.insertBefore(pin, listContainer.firstChild);
      saveData();
    }
  }, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showData();