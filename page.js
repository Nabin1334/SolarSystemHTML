const taskinput = document.getElementById
("task-input");
const addbutton = document.getElementById
("add-button");
const tasklist = document.getElementById('task-list')

function addTask(){
  const tasktext = taskinput.value.trim();
  if(tasktext !==""){
    const newtask = document.createElement("li");
    newtask.innerHTML = tasktext;
    tasklist.appendChild(newtask);
    taskinput.value ="";
    const removeButton =document.createElement("button");
    removeButton.innerHTML = "remove";
    newtask.appendChild(removeButton);
    removeButton.addEventListener("click",function(){
      newtask.remove();
    });
  }
}
addbutton.addEventListener("click",addTask);

