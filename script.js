var wrapperEle = document.body.querySelector(".wrapper");
var radical = 0;
function counter(push) {
  if (push) {
    radical = radical + 1;
    document.body.querySelector(".radical").innerHTML = radical;
  }
}
var list = [
  {
    name: "Harry",
    age: 25
  },
  {
    name: "Larry",
    age: 15
  },
  {
    name: "Bert",
    age: 45
  },
  {
    name: "Jerry",
    age: 35
  },
  {
    name: "Berry",
    age: 5
  },
  {
    name: "Bart",
    age: 55
  }
];
for (var i = 0; i < list.length; i++) {
  var personEle = document.createElement("div");
  if (list[i].age > 40) {
    personEle.style.color = "red";
  }
  personEle.innerHTML =
    list[i].name;
  wrapperEle.appendChild(personEle);
}
for (var i = 0; i < list.length; i++) {
  var personEle = document.createElement("div");
  personEle.innerHTML = list[i].age;
  wrapperEle.appendChild(personEle);
  if (list[i].age > 40) {
    personEle.style.color = "red";
  }
}

document.body.querySelector("#button").addEventListener("click", function () {
  counter("push");
});
document.body.querySelector(".radical").innerHTML = radical;