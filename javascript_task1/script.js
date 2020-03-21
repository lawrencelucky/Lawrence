let name = "Lawrence Lucky";
let courses = ["HTML", "CSS", "JavaScript"];

document.querySelector(".name").innerHTML = `Name: ${name}`;
document.querySelector(".courses").innerHTML = `Courses: ${courses}`;

let displayOddNumber = document.querySelector(".odd-numbers");

for (let i = 1; i < 200; i = i + 2) {
  displayOddNumber.innerHTML += `${i}, `;
}
