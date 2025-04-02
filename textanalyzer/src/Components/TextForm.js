import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase","success")

    }
    const handleLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase","success")

    }

    const handleCapitalize = () => {
        let newText = text.split(' ').map((word) => 
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
            ).join(' ');  
        setText(newText); 
        props.showAlert("Converted to Capitalize","success")

      };
    
    const handleClear=()=>{
        let newText=('')
        setText(newText)
        props.showAlert("Text Cleared","success")

    }
    const handleCopyClipboard=()=>{
        let text1 =document.getElementById("inputBox")
        text1.setSelectionRange(0, 99999); 
        navigator.clipboard.writeText(text1.value)
        props.showAlert("Copied to Clipboard","success")

    }
    const handleRemoveExtraSpace=()=>{
        let newText=text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Removed","success")

    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState("")
    return (
        <>
        <div className='container my-3'style={{color :props.mode==="light"?"black":"white"}}>
            <h2>Enter Text to Analyze below</h2>
            <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor :props.mode==="light"?"white":"#2d3747",color :props.mode==="light"?"black":"white"}} value={text} onChange={handleOnChange} id="inputBox" rows="7"></textarea>
            </div>
            <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleUpperCase}>Convert to UpperCase</button>
            <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleLowerCase}>Convert to LowerCase</button>
            <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleCapitalize}>Convert to Capitalize</button>
            <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleCopyClipboard}>Copy to Clipboard</button>
            <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleRemoveExtraSpace}>Remove Extra Spaces</button>
            <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleClear}>Clear</button>
        </div>
        <div className="container" style={{color :props.mode==="light"?"black":"white"}}>
         <h2>Your Text Summary</h2>
         <p>{(text.match(/\w+/g) ||[]).length} Words and {text.length} Charactor</p>
         <p>{(0.008* text.split(/[ ]+/).join(" ").length).toFixed(3) } Minutes read</p>
         <h3>Preview</h3>
         <p className='pb-5'>{text.length>0?text:"Enter Something to Preview"}</p>
        </div>
        </>
    )
}
