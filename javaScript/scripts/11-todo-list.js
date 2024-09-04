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
          
          for (let i=0;i<todoList2.length;i++) {
            const todoObject = todoList2[i];
           // const name = todoObject.name;
           // const { name } = todoObject;
            //const dueDate = todoObject.dueDate;
            const { name2, dueDate } = todoObject;

            const html = `
            <dive>${name2}</dive>
            <div>${dueDate} </div>

                <button onclick="
                todoList2.splice(${i},1);
                renderTodoList();
                
                " class="delete-todo-button">delete</button>
          
            `;
              todolistHTML += html;
          }


        
          document.querySelector('.js-todo-list').innerHTML = todolistHTML;


}

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
