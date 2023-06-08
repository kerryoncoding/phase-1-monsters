
let count = 0;

document.addEventListener("DOMContentLoaded", ()=>{
//load first 50 monsters
count = 0
showForm()
loadMonsters()
loadButton()
})

function showForm(){
   let formContainer = document.getElementById("create-monster")
   formContainer.innerHTML = 
   `<form id="monsterInput">
      <input name="monsterName" placeholder="Enter monster name"></input>
      <input name="monsterAge" placeholder="Enter monster age"></input>
      <input name="monsterDescription" placeholder="Enter monster decription"></input>
      <button type="submit">ENTER MONSTER</button>
   </form>`
   let formSubmit = document.getElementById("monsterInput")
   formSubmit.addEventListener("submit", (e)=> {
      e.preventDefault()
      logMonsterData(e)
      monsterInput.reset()
   })
}

function logMonsterData(data){
   let monster = {
      name: data.target.monsterName.value,
      age: data.target.monsterAge.value,
      description: data.target.monsterDescription.value
   }
   fetch("http://localhost:3000/monsters", {
      method: "POST",
      headers: {
         "Content-TYpe": "application/json"
      },
      body: JSON.stringify(monster) 
   })
   }




function loadMonsters(){
   //fetch GET monsters
   fetch("http://localhost:3000/monsters")
   .then((resp)=> resp.json())
   .then((data)=> displayFifty(data))
}


function displayFifty(data){
   let display = document.getElementById("monster-container")
   for (let i=count; i<(count+50); i++){
      let h2 = document.createElement("h2")
      h2.innerText = `${data[i].name}`
      let h3 = document.createElement("h3")
      h3.innerText = `${data[i].age}`
      let p = document.createElement("p")
      p.innerText = `${data[i].description}`  

      display.append(h2, h3, p)
}
count = count + 50
}

function loadButton(){
   let loadMoreBtn = document.getElementById("more");
   loadMoreBtn.addEventListener("click", ()=> loadMonsters() )
   
}