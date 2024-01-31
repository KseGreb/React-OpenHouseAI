import React, { useEffect, useState } from 'react';
import { CreateNote } from './CreateNote';
import "./note.css";
import { v4  as uuid} from 'uuid';
import { Note } from './Note';


function Notes() {

    const [inputText, setInputText] = useState("");
    const [notes, setNotes] = useState(
        localStorage.NewNotes ? JSON.parse(localStorage.NewNotes) : []);
    const [editToggle, setEditToggle] = useState(null);

    const editHandler = (id, text) => {
        setEditToggle(id)
        setInputText(text)
    }

    const saveHandler = () => {
        if(editToggle){
            setNotes(notes.map((note) => (
                note.id === editToggle ? {...note, text: inputText} : note
            )))
        }
        else{
            setNotes((prevNotes) => [
                ...prevNotes, {
                    id: uuid(),
                    text: inputText
                }
            ])
        }
        setInputText("");
        setEditToggle(null)
    }

    const deleteHandler = (id) => {
        const newNotes = notes.filter(n => n.id !==id)
        setNotes(newNotes)
    }

    useEffect(()=>{
        window.localStorage.setItem( "NewNotes", JSON.stringify(notes))
    }, [notes])

  return (
    <div className='notes'>
        {
            notes.map((note) => (

                editToggle === note.id ? 
                    <CreateNote 
                        inputText={inputText}
                        setInputText={setInputText}
                        saveHandler={saveHandler}
                        key={note.id}
                    />
                :
                    <Note
                        key={note.id}
                        id={note.id}
                        text={note.text}
                        editHandler={editHandler}
                        deleteHandler={deleteHandler}
                    />
            ))
        }
        {
            editToggle === null ?
                <CreateNote 
                    inputText={inputText}
                    setInputText={setInputText}
                    saveHandler={saveHandler}
                />
        : <></>
        }

    </div>
  )
}

export default Notes