import { data } from 'autoprefixer';
import React, { useState } from 'react';
import { useId } from 'react';
import { v4 as uuidv4 } from 'uuid';

const LeftPane = ({notes, setcurentID, setNewNote, currentId}) => {

    const handleAdd = ()=>{
        const newNote = {
            id: uuidv4(),
            title: 'Note',
            content: 'Note'
        }

        setNewNote(prev=> {
            return [
                ...prev, 
                newNote
            ]
        })
    }
    
    

  return (
    <div className="w-[30%] border grow relative">
        <div className="flex p-4 justify-between items-center">
        <h1 className='text-lg font-normal'>Diary.io</h1>   
        <svg onClick={handleAdd} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg> 
        </div>   
        <div className="p-4 border-t text-blue-400 flex items-center justify-between">  
            <div className="">{new Date().toUTCString()}</div>
            <div className="">{notes?.length} Notes</div>
        </div>
        <div className="flex flex-col">
    {
        notes.map(note=>{
            return (<div onClick={()=> setcurentID(note.id)} key={note.id} className={`dropAnim border-t ${currentId === note?.id ? 'bg-gray-200' : '' }`}>
                <h1 className=' p-4  pb-2 cursor-pointer text-sm md:text-lg xl:text-xl'>{note.title}</h1>
                <p className='text-xs px-4 pb-4'>{note?.content}</p>
            </div>)
        })
    }

    
    
    </div> 


    <div className="absolute bottom-0 flex p-4 border-t w-full">
        <h1 className="text-xl">UserName</h1>
    </div>


    </div>
  )
}

export default LeftPane