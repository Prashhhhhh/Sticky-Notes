var colors = ["lightblue", "lightgreen", "pink", "lightyellow", "lightgray"];
var index = 0;


function hide(){
  document.getElementById('modal').style.visibility = "hidden";
}
function shownote(){
  document.getElementById('modal').style.visibility = "visible";
}
document.getElementById('userinput').addEventListener('keydown', make_change);

function make_change(e){
  if(e.key == "Tab"){
    var text = document.getElementById('userinput');
    createStickyNote(text.value);
    console.log(text.value);
    text.value = "";
  }
}

function createStickyNote(content){
  console.log('insiede sticky notes');
  var note = document.createElement('div');
  var notetext = document.createElement('h4');
  note.className = 'note';
  notetext.textContent = content;

  note.appendChild(notetext);

  if(index>colors.length-1)
    index = 0
  

  note.setAttribute("style",`background-color:${colors[index++]};`)

  
  document.getElementById('all_notes').appendChild(note)

  note.addEventListener('dblclick', ()=>{
    note.remove()
  })
}
