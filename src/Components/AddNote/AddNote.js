import { useState } from "react";


const AddNote = ( {handleAddNote} )  => {
    const [noteText,setNoteText] = useState('');
    let nbWord = 200;

    const handleChange = (e) => {
        //console.log(e.target.value);
        if(nbWord -e.target.value.length >= 0) {
            setNoteText(e.target.value);
        }
    };

    const handleClick = () => {
        if(noteText.trim().length > 0){
            handleAddNote(noteText);
            setNoteText('');
        }
    }

    return (
        <div className="new note">
            <textarea rows="8" 
                        cols="10" 
                        onChange={handleChange}
                        value={noteText}
                        placeholder="Add your note here..">
            </textarea>
            <div className="note-footer">
                <small>{nbWord - noteText.length} remaining</small>
                <button className="save" 
                        onClick={handleClick}>Save</button>
            </div>
        </div>
    );
}

export default AddNote;