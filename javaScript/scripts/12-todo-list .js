const todoList = [];


function addTodo(){
 const inputElement =   document.querySelector('.js-name-input');
  const name = inputElement.value;
 
  todoList.push(name);
  console.log(todoList);

  inputElement.value = '';
}




const todoList2 =[{
  name2:'make dinner',
  dueDate:'08-05-2024'
},
{
   name2:'wash dishes',
   dueDate: '08-05-2024'
}];
renderTodoList();

function renderTodoList(){


          let todolistHTML = '';



          todoList2.forEach((todoObject, index) => {
            const {name2,dueDate} = todoObject;
            const html = `
            <div>${name2}</div>
            <div>${dueDate}</div>

            <button class="delete-todo-button js-delete-todo-button">delete</button>

            
            `;

            todolistHTML += html;

          });
          
        

        
          document.querySelector('.js-todo-list').innerHTML = todolistHTML;
          document.querySelectorAll('.js-delete-todo-button')
          .forEach((deleteButton, index) => {
          
            deleteButton.addEventListener('click', () =>{
              todoList2.splice(index ,1);
              renderTodoList();

            });




            
          });

         


}

document.querySelector('.js-add-todo-button2').addEventListener('click',() => {

  addTodo2();
});




function addTodo2(){
            const inputElement2 =   document.querySelector('.js-name-input2');
              const name2 = inputElement2.value;


              const dateInputElement = document.querySelector('.js-due-date-input');
              const dueDate = dateInputElement.value;
              


            
              todoList2.push({
                //name2:name2,
                //dueDate:dueDate
                name2,
                dueDate

              });
              

              inputElement2.value = '';
              dateInputElement.value ='';
              


              renderTodoList();
              
}
