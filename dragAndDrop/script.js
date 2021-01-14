/*******FILLS*****/
const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

function dragStart() {
  this.className += " flyingAlien";
  setTimeout(() => (this.className = " invisible"), 0);
}

function dragEnd() {
  this.className = "fill";
}

/*****EMPTIES**** */
for (const empty of empties) {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.className += " hovered";
}

function dragLeave() {
  this.className = " empty";
}

function dragDrop() {
  this.className = "empty";
  this.append(fill);
}
