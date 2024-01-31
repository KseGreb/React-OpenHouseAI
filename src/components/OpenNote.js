// const OpenNote = ({selectedDay, updateDay}) => {

//     const editMyMeal = (myInput, value) => {
//         updateDay({
//             ...selectedDay,
//             [myInput]: value
//         })
//     }


//     if(!selectedDay)return <p className="planYourWeek">Write down your thoughts!</p>

//     return(
//         <div  className="whole-plan">
//                 <input
//                     type="text"
//                     className="myInput"
//                     placeholder="Title"
//                     id="title"
//                     value={selectedDay.title}
//                     onChange = {(e) => editMyMeal("title", e.target.value)}
//                 />
//                 <textarea
//                     placeholder="Write down your thoughts here"
//                     className="myTextarea"
//                     id="mealForADay"
//                     value={selectedDay.mealForADay}
//                     onChange = {(e) => editMyMeal("mealForADay", e.target.value)}
//                 />
//             </div>
//     )
// }
// export default OpenNote;