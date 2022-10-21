import React, { useState } from 'react'
import { useEffect } from 'react';

const RightPane = ({currentNote, setnotes, handleNoteChange, delNote}) => {
    const [edit, setEdit] = useState(false);
    const [edittitle, setTitle] = useState(currentNote?.title);
    const [editcontent, setContent] = useState(currentNote?.content);


    useEffect(()=>{
      handleNoteChange(edittitle, editcontent)
    }, [edittitle, editcontent])

    console.log(currentNote?.id)

    useEffect(()=>{
        setTitle(currentNote?.title);
        setContent(currentNote?.content);
        setEdit(false)
    }, [currentNote?.title, currentNote?.content])
    
    // const handleNoteChange = ()=>{
    //   console.log("It Works");
    //   setnotes(prev=>{
    //     prev.map(item=> item.id === currentNote?.id ? {title: edittitle, content: editcontent} : item)
    //   })
    // }

  return (
    <div className="w-[70%]">

        
        { currentNote ? 
        <>
        <div className="flex p-5 border-b justify-between items-center dropAnim">
            <h1 className='text-xl font-thin'>{currentNote?.title}</h1>
            <div className="flex gap-6 items-center">
            <svg onClick={()=>{
              delNote(currentNote?.id)
            }} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>  
            <button className='px-5 py-2 border rounded-lg' onClick={()=> setEdit(prev => !prev)}>{edit ? "Editing" : "Edit"}</button>
            </div>
        </div>

        <div className=" w-full border-b dropAnim">
            <textarea onChange={(e)=> setTitle(e.target.value)}  disabled={!edit} name="edittitle" id="" cols="10" className='w-full resize-none py-2 px-5 outline-none text-2xl font-semibold' value={edittitle}></textarea>
                
        </div>
        <div className="">
        <textarea onChange={(e)=> setContent(e.target.value)}  disabled={!edit} name="editcontent" id="" cols="30" className='w-full resize-none p-5 outline-none text-lg' value={editcontent}></textarea>      
        </div> 
        </>
        : <div className="text-4xl p-8">Click on a note to Show Here</div> }


    </div>
  )
}

export default RightPane