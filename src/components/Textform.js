
import React, {useState} from 'react'

export default function Textform(props) {
    const handleUpClick=()=>{
        let newtext=text.toUpperCase();
        setText(newtext)
    }
    const handleLowClick=()=>{
        let newtext=text.toLowerCase();
        setText(newtext)
    }
    const handleClearClick=()=>{
        let newtext='';
        setText(newtext)
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const handleText=()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces =()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const [text,setText]=useState('Enter text here');
     return (
        <>
        <div className="container" style={{color: props.mode ==='light'? 'black':'white'}}>
        <div className={`container my-3`}  >
            <h1>{props.heading}</h1>
        <div className="mb-3">
        <label htmlFor="myBox" className="form-label">Example textarea</label>
        <textarea className="form-control" value={text}  onChange={handleOnChange} style={{backgroundColor: props.mode==='light'? 'white':'black',color:props.mode==='dark'? 'white':'black'}}  id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-success m-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-success m-1" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-success m-1" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-success m-1" onClick={handleText}>Copy to Clipboard</button>
        <button className="btn btn-primary m-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className='container my-3'>
            <h1>Your text Summary</h1>
            <p>{text.split(" ").length}words and {text.length} characters</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Enter Something to Preview'}</p>
        </div>
        </div>
        </>
    )
}

