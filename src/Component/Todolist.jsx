// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import { v4 as uuidv4 } from 'uuid';
// import"./todolist.css"
// import { CiCreditCard1 } from "react-icons/ci";
// import { AiFillDelete } from "react-icons/ai";
// function Todolist() {

//   const [input, setinput] = useState("")
//   const [todo, settodo] = useState([])


//   useEffect(() => {
//     handlegetdata()
//   }, [])

//   const handlegetdata = async () => {
//     const response = await axios.get("http://localhost:3000/todoList")
//     settodo(response.data)
//     console.log(response.data);
//   }

//   const handleadd = () => {
//     let body = {
//       id: uuidv4(),
//       task: input,

//     }
//     axios.post("http://localhost:3000/todoList", body)
//     handlegetdata()
//   }
//   const handledel = async (deleteid) => {
//     await axios.delete(`http://localhost:3000/todoList/${deleteid}`)
//     alert("deleted your task")
//     handlegetdata()
//   }

//   const handleedit = async (index) => {
//     const updatetask = prompt("update ur task", todo[index].task)
//     let body = {
//       id: todo[index].id,
//       task: updatetask
//     }
//     await axios.put(`http://localhost:3000/todoList/${todo[index].id}`, body)
//     console.log(updatetask);
//     handlegetdata()
//   }



//   return (
//     <div className='goo'>
//       <div className='too'>
//         <h1 className='col'>TodoList</h1>

//       <  input type="text"placeholder='enter your task' onChange={(e) => setinput(e.target.value)}  />
//       <button className='aoo' onClick={handleadd} >Add</button>

//       {  todo.map((da, i) => (
//         <div key={i} >

//           <div className='foo'>{i + 1}.{da.task}
//           <div className="eoo" onClick={() => handledel(da.id)}><AiFillDelete /><div/>
//           <div className='boo'  onClick={() => handleedit(i)}><CiCreditCard1 /></div>
//           </div>
//         </div>
//         </div>
//       ))}

//      </div>
//     </div>
    
//   )
// }
// export default Todolist