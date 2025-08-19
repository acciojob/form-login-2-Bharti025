//your JS code here. If required.

let name=document.getElementById("name");
let last=document.getElementById("last");
let phone=document.getElementById("phone");
let email=document.getElementById("email");
let button=document.getElementById("submit");

function text(){
	let first=name.value;
	let second=last.value;
	let third=parseInt(phone.value);
	let fourth=email.value;
	 alert(`First Name: ${first} 
Last Name: ${second} 
Phone Number: ${third} 
Email: ${fourth}`);
}
button.addEventListener("click",text);

