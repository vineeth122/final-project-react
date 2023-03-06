import TodoItem from "./todo-item";
import todos from "./todos.json";
import {useState} from "react";
const TodoList = () => {
    return(
       <>
            <h3>Todo List</h3>
            <ul>
                {
                    todos.map(todo => {
                        return(<TodoItem todo={todo}/>);
                    })
                }
            </ul>
        </>
    );
}
export default TodoList;

// const todos1 = [
//     {
//         id: 123,
//         todo: 'Buy Milk',
//         complete: false
//     },
//     {
//         id: 234,
//         todo: 'Walk dogs',
//         complete: false
//     },
//
// ]
//
// function TodoList() {
//
//     const [todos, setTodos] = useState(todos1) //actual state, and modifier initial state is todos1
//     const [title,setTitle]  = useState('New Todo')
//
//     const addTodo = () => {
//         const newTodos = [
//             ...todos,
//             {
//                 id: (new Date()).getTime(),
//                 todo: title,
//                 complete: false
//             },
//
//         ];
//         setTodos(newTodos);
//     }
//     const deleteTodo = (todo) => {
//
//         const newTodos = todos.filter((td) => td === todo ? false:true)
//         setTodos(newTodos)
//
//
//     }


    // const addTodo = () => {
    //     alert('add todo')
    // }
//     return (
//         <div>
//             <h2>Todo List</h2>
//             <input className="form-control" value={title} onChange={(e) => {setTitle(e.target.value)}}/>
//             <button onClick={() => {
//                 addTodo();
//             }} className="btn btn-primary">
//                 Add Todo</button>
//           <ul className="list-group">
//               {
//                   todos.map((t,ndx) =>
//                       <li className="list-group-item"
//                           key={ndx}>
//                       <button onClick={()=>{deleteTodo(t)}}  className="btn btn-danger">Delete</button>
//                       {t.todo}
//                   </li>)
//               }
//           </ul>
//         </div>
//     )
// }