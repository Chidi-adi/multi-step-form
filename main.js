const nameInput = document.getElementById("nameInput");
console.log(nameInput.value);
nameInput.addEventListener("input", (e) => {
  if (e.target.value.length < 3) {
    return;
  } else if (e.target.value.length >= 3) {
    e.target.style.border = "solid 1px red";
  }
});
