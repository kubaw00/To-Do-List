const input = document.querySelector('input');
const btnSearch = document.querySelector('button.search');
const btnBack =document.querySelector('button.back');
const ul = document.querySelector('ul');
const span = document.querySelector('span');
const form = document.querySelector('form');
const h2 = document.querySelector('h2');
const tab = [];
const searchTab = [];

const removeTask = (e) =>{
    tab.splice(e.target.parentNode.dataset.key, 1);
    console.log(e.target.parentNode.dataset.key)
    displayTasks();
    span.textContent = ul.childNodes.length;
}
const goBack = ()=>{
    displayTasks();
    span.textContent = ul.childNodes.length;
    input.value = "";
}

btnBack.addEventListener('click', goBack)


const findTask = () =>{
    const searchItem = input.value.toLowerCase();
    if(searchItem === "") return displayTasks();
    console.log(searchItem);
    const searchTab = tab.filter((task) => task.textContent.toLowerCase().includes(searchItem));
    console.log(searchTab);
    ul.textContent ="";
    searchTab.forEach((el)=>{
     ul.appendChild(el);
     console.log(el)
    })

}


btnSearch.addEventListener('click', findTask)

const addTask = (e) =>{
    e.preventDefault();
    const task = input.value;
    if( task === "") return
    const liElement = document.createElement('li');
    liElement.innerHTML = task + '<button>X</button>';
    liElement.className = "task"
    tab.push(liElement);
    input.value = "";
    displayTasks();
    span.textContent = ul.childNodes.length;
    liElement.querySelector('button').addEventListener('click', removeTask);
    
}

const displayTasks = () =>{
    ul.textContent ="";
    tab.forEach((el, i) => {
        el.dataset.key = i;
        ul.appendChild(el);
    })
}










form.addEventListener('submit', addTask)

