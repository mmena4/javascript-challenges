const fill = document.querySelector('')
const empties = document.querySelectorAll('')

fill.addEventListener('dragstart', )
fill.addEventListener('dragend', )

for(const empty of empties) {

}


function allowDrop(event) {
    event.preventDefault();
  }
  
function dragStart(event) {
    event.dataTransfer.setData('div', fill);
    setTimeout()
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData('div');
    event.target.appendChild(document.getElementsByClassName(empty));
  }

/*
function dragEnd() {
    this.
}

function dragOver(e) {

}

function dragEnter(e) {

}

function dragLeave() {

}

function dragDrop() {

}

*/