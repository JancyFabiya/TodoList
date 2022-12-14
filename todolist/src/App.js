// import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  // const time = new Date().toLocaleTimeString();
  var d = new Date();
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const [toDos,setTodos]=useState([])
  const [toDo,setToDo]=useState('')
  function handleDeleteClick(id) {
    console.log(toDos);
    const removeItem = toDos.filter((todo) => {
      return todo.id !== id;
    });
    console.log(removeItem);
    setTodos(removeItem);
    console.log(toDos);
  }
  return (
    <div className="app">
    <div className="mainHeading">
      <h1>ToDo List</h1>
    </div>
    <div className="subHeading">
      <br />
      <h2>Whoop, it's {days[d.getDay()]} 🌝 ☕ </h2>
    </div>
    <div className="input">
      <input value={toDo} onChange={(e)=>setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
      <i onClick={()=>setTodos([...toDos,{id:Date.now(),text:toDo,status:false}])} className="fas fa-plus"></i>
    </div>
    <div className="todos">
     { toDos.map((obj)=>{



     return ( <div className="todo">
        <div className="left">
          <input onChange={(e)=>{
            console.log(e.target.value) //check box value
            console.log(obj)
            setTodos(toDos.filter(obj2=>{
              if(obj2.id===obj.id){
                obj2.status=e.target.checked
              }
              return obj2
            }))
          }} value={obj.status} type="checkbox" name="" id="" />
          <p>{obj.text}</p>
          {/* <h1>Active Task</h1> */}
        </div>
        <div className="right">
          
          <i key={obj.id} onClick={()=>handleDeleteClick(obj.id)} className="fas fa-times"></i>
        </div>
      </div> )
      })
      }
      {toDos.map((obj)=>{
        if(obj.status){
          return(<h1>{obj.text}</h1>)
        }
        return null
      })}
    </div>
  </div>
  );
}

export default App;
