import React from 'react'
import { IoIosTrash } from "react-icons/io";
import { CiEdit } from "react-icons/ci";

export const Note = ({id, text, editHandler, deleteHandler}) => {
  return (
    <div className='notes'>

        <div className='note-body'> {text} </div>
        <div className='note-footer' style={{justifyContent : "flex-end"}}>
            <button className="btnDelete" onClick={() => editHandler(id, text)}><CiEdit className="trash" /></button> &nbsp;
            <button className="btnDelete" onClick={() => deleteHandler(id)} ><IoIosTrash className="trash" /></button> 
        </div>
    </div>
  )
}
