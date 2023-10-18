"use client"
import React, { useState } from 'react'
import { render } from 'react-dom';
//we use usestate to make variables
const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [MainTask, setMainTask] = useState([]);
  const Submithandler = (e) => {
      e.preventDefault();
      setMainTask([...MainTask, { title , desc}]);
      settitle("");
      setdesc("");
      console.log(MainTask);
  };

  const deleteHandler= (i)=>{
    let copytask = [...MainTask]
    copytask.splice(i,1)
    setMainTask(copytask)    
  }

  let renderTask = <h2 className='text-2xl font-semibold'>No Task Avaiable</h2>
  
  if(MainTask.length>0){
    renderTask = MainTask.map((t,i)=>{
      return (
       <li key={i} className='flex items-center justify-between mb-'>
         <div className='flex justify-between mb-5 w-2/3'>
         <h5 className='text-2xl font-semibold'>{t.title}</h5>
         <h6 className='text-lg font-medium'>{t.desc}</h6>
       </div>
       <button onClick={()=>{
        deleteHandler(i)
       }} 
        className='bg-red-400 text-white px-4 py-2 rounded font-bold'>Delete</button>
       </li>
     );
});
  }
  
  
  return (
    <>
    <h1 className='bg-black text-white p-5 text-4xl font-semibold text-centre text-bold flex justify-center'>NISHANT PATEL'S TODOLIST</h1>

    <form onSubmit={Submithandler}>
      <input type='text' 
      className='text-2xl border-zinc-800 border-4 m-6 px-4 py-2' 
      placeholder='Enter Task Here' 
      value={title}
      onChange={(e)=>{
          settitle(e.target.value)
          }}/>

      <input type='text' 
      className='text-2xl border-zinc-800 border-4 m-6 px-4 py-2' 
      placeholder='Enter Description Here' 
      value={desc}
      onChange={(e)=>{
        setdesc(e.target.value)
        }}/>

      <button className='bg-black text-white px-5 py-3 text-2xl font-bold rounded'>Add Task</button>

    </form>
    <hr/>
    <div className='p-8 bg-slate-200'>
      <ul>
        {renderTask}
      </ul>
    </div>
    </>
  )
}

export default page