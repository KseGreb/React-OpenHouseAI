import React from 'react'
// import LinearProgress from "@mui/material/LinearProgress";

export const CreateNote = ({inputText, setInputText, saveHandler}) => {
    const char = 200;
    const charLimit = char - inputText.length;
  return (
    <div className='notes'>
        <textarea
            cols={10}
            rows={5}
            placeholder='Type...'
            maxLength={200}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
        ></textarea>
        <div className='note-footer'>
            <p className='label'> {charLimit} symbols left</p>
            <button className='note-save' onClick={saveHandler}>Save</button>
        </div>

{/* Alla, if you can read this - 
can you please tell my why do I have only 100 symbols in Linear progress line instead of 200?
Thank you */}

        {/* <LinearProgress          
          className="char__progress"
          variant="determinate"
          value={charLimit}
      /> */}
    </div>
  )
}
