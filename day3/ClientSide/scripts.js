
 btn.addEventListener("click", function () {
    fetch('/clients.json')
    .then((response) => response.json())
    .then((json) => {

var btn = document.getElementById("btn")
console.log(btn)

console.log(json[0].name)


 
 for (var i = 0; i <json.length ; i++) {
    
var table=document.getElementById("table")
console.log(table)
 table.innerHTML += `<div  style="background-color: rgb(228, 218, 218); border-radius: 20px;">
<h1 style="margin: 20px;"=>data of ${json[i].name}</h1><br>
<h3 style="margin: 20px;"=>name:${json[i].name}</h3>
<h3 style="margin: 20px;"=>email:${json[i].email}</h3>
<h3 style="margin: 20px;"=>phone:${json[i].phone}</h3>
<h3 style="margin: 20px;"=>address:${json[i].address}</h3>
</div>`
}
})})

