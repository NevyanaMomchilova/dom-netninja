// const paragraph = document.querySelector("p");
// const ps = document.querySelectorAll("p");

// const title = document.getElementById("page-title");

// const errors = document.getElementsByClassName("error");

// const paras = document.getElementsByTagName("p");

// console.log(paras);

const paragraph = document.querySelector("p");
paragraph.innerText = "hello user!";
paragraph.innerText += " Have a nice day :)";
console.log(paragraph);


const content = document.querySelector(".content");
content.innerHTML = "<h2>this is new content h2</h2>";


const people = ["mario", "luigi", "yoshi"];
people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`;
});





