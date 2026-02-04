let text = document.getElementById("text");
let count = document.getElementById("count");
let limit = 100;

text.onkeyup = function () {
  count.innerText = text.value.length + " / " + limit;

  if (text.value.length > limit) {
    count.style.color = "red";
  } else {
    count.style.color = "green";
  }
};
