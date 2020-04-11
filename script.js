
//CONSTANTS
const list = document.querySelector("#list");
const addTodoForm = document.querySelector("#form");
const addTodoField = document.querySelector("#itemValue");
const searchInput = document.querySelector("#searchValue")


//ADD TODO
function addFunction(todo){
    if(todo.length){
        const htmlTemplate = "<div id='li-div'> <li onclick='taskDone(this)'>" + addTodoField.value + "</li>" + "<span id='delete-span' onclick='deleteLi(this)' ><i class='fa fa-trash-o' aria-hidden='true'></i></span></div>";
        list.innerHTML+=htmlTemplate;
    }
}

function addItem(){

    addTodoForm.addEventListener("submit", e =>{
        e.preventDefault();
        addFunction(addTodoField.value.trim());
        addTodoForm.reset();
        document.querySelector(".alert-info").style.display="none";
    });

}


//COMPLETE TODO
function taskDone(item){
    item.classList.toggle("checked");
}


//CLEAR LIST
function clearList(){
    list.innerHTML="";
    document.querySelector(".alert-info").style.display="block";
}


//DELETE TODO
const deleteBtn = document.querySelector("#delete-span");
function deleteLi(currentLi){
    currentLi.parentElement.remove();

    let totalTodos = document.querySelectorAll("#list div");
    if(!totalTodos.length){
        document.querySelector(".alert-info").style.display="block";
    }
};


//SEARCH
searchInput.addEventListener("keyup", () => {
    const searchTerm = searchInput.value.trim().toLowerCase();
    filterTodos(searchTerm);

});

const filterTodos = (searchTerm) => {

    Array.from(list.children)
      .filter((todo) => !todo.textContent.toLowerCase().includes(searchTerm))
      .forEach((todo) => todo.classList.add("filtered") );
    
    Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(searchTerm))
    .forEach((todo) => todo.classList.remove("filtered") );
};
