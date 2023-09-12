let inp = document.querySelector("input");
let btn = document.querySelector(".plus-btn");
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {
	let newItem = document.createElement("li");
	newItem.innerText = inp.value;

	let delBtn = document.createElement("button");
	delBtn.innerHTML = "X";
	delBtn.classList.add("delete-btn");
	newItem.appendChild(delBtn);
	ul.appendChild(newItem);
	inp.value = "";
});
//Event Bubbling
ul.addEventListener("click", function (event) {
	if (event.target.nodeName == "BUTTON") {
		let listItem = event.target.parentElement;
		listItem.remove();
		console.log("Deleted");
	}
});
