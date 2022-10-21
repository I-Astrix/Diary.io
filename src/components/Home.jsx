import React, { useEffect, useState } from 'react'
import LeftPane from './LeftPane'
import RightPane from './RightPane'

const Home = () => {

    const [currentNote, setCurentNote] = useState(null);
    const [currentId, setCurrentId] = useState('');

    useEffect(() => {
      const currNote = notes.find(note => note.id === currentId);
      setCurentNote(currNote);
    }, [currentId]);

   

    
    const [notes, setnotes] = useState([
      {
          id: 1939,
          title: 'Note 1',
          content: 'Note 1'
      },
      {
          id: 2139,
          title: 'Note 2',
          content: 'Note 2'
      },
      {
          id: 1949,
          title: 'Note 3',
          content: 'Note 3'
      },
      
  ])

  const delNote = (noteID)=>{
    setnotes(prev=> prev.filter(item => item.id !== noteID))
    console.log(noteID)
    setCurentNote(null)
}

    const handleNoteChange = (title, content)=>{
        console.log(title, content);
          setnotes(prev=> prev.map(item => item.id === currentNote?.id ? {title: title, content: content, id: item.id} : item))
    }
    


  return (
    <div className="h-screen mx-auto w-full flex">
        <LeftPane notes={notes} setcurentID={setCurrentId} setNewNote={setnotes} currentId={currentId}/>
        <RightPane currentNote={currentNote} setnotes={setnotes} handleNoteChange={handleNoteChange} delNote={delNote}/>
    </div>
  )
}

export default Home