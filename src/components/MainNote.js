
// import { useEffect, useState, } from 'react';
// import Note from './Note';
// import OpenNote from './OpenNote';
// import { v4 as uuidv4 } from 'uuid';
// import '../css/note.css'


// function MainNote() {

//   const [newNotes, setNewNotes] = useState(
//     localStorage.newNotes ? JSON.parse(localStorage.newNotes) : []);
//   const [selectedDay, setSelectedDay] = useState(false);

// useEffect( () => {
//   localStorage.setItem("newNotes", JSON.stringify(newNotes))
// }, [newNotes])

//  const addNote = () => {
//   const addNewNote = {
//     title: "New note",
//     id: uuidv4(),
//     noteOfTheDay: "",
//     thoughts: "" 
//   }
//   setNewNotes([addNewNote, ...newNotes])
//  }

//  const deleteItem = (mealId) => {
//   setNewNotes(newNotes.filter(({id})=> id !== mealId))
// }

// const updateDay = (myUptatedMeal) => {
//   const updatedMeals = newNotes.map((mealPlan) => {
//     if (mealPlan.id === myUptatedMeal.id) {
//       return myUptatedMeal;
//     }
//     return mealPlan;
//   })
//   setNewNotes(updatedMeals)
// }

// const getActiveMeal = () => {
//   return newNotes.find(({id}) => id === selectedDay)
// }

//   return (
//     <div className="App">
//       <Note
//         deleteItem={deleteItem} 
//         newNotes={newNotes} 
//         addNote={addNote}
//         selectedDay={selectedDay}
//         setSelectedDay={setSelectedDay}
//         />
//       <OpenNote
//         selectedDay={getActiveMeal()}
//         updateDay={updateDay}/>
//     </div>
//   );
// }

// export default MainNote;






