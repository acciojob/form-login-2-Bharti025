//your JS code here. If required.

let name=document.getElementById("name");
let last=document.getElementById("last");
let phone=document.getElementById("phone");
let email=document.getElementById("email");
let button=document.getElementById("submit");

function text(){
	 let first = name.value.trim();
  let second = last.value.trim();
  let third = phone.value.trim();
  let fourth = email.value.trim();

  alert(`First Name: ${first} Last Name: ${second} Phone Number: ${third} Email ID: ${fourth}`);
}
button.addEventListener("click",text);

