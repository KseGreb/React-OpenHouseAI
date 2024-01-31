// import { CgNotes } from "react-icons/cg";
// const Note = ({newNotes, addNote, deleteItem, selectedDay, setSelectedDay}) => {

//     return(
//         <div className="myPlanForWeek">
//             {/* <h1>Make a note!</h1> */}
//             <button className="button-add" onClick={addNote}>
//                         <span className='icon'>
//                             <CgNotes /> 
//                         </span>
//             </button>
            
//             <div>
//                 {newNotes.map(({title, id, noteOfTheDay}) => (
//                     <div 
//                         className={`meal ${id === selectedDay ? "selected" : "default"}`}
//                         onClick={() => setSelectedDay(id)}
//                         key={id}
//                     >
//                         <p className="title">{title}</p>
//                         <p>{noteOfTheDay.substring(0, 45)}</p>
//                         <button className="button-delete" onClick={()=>deleteItem(id)}>DELETE</button>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     )
// }
// export default Note;