import React,{useState} from 'react'

export default function TextForm(props) {
  const converttoupper=()=>{
    // console.log("converted to upper case" +text);
    let newtext=text.toUpperCase();
    setText(newtext)
  }
  const handleonchange=(event)=>{
    // console.log("handle on change");
    setText(event.target.value)
  }
  const [text,setText]=useState("Enter your text");
  return (
    <>
    <div>
    <div className="mb-3">
    <h1>{props.heading}</h1>
  <textarea
    className="form-control"
    value={text}
    onChange={handleonchange}
    id="exampleFormControlTextarea1"
    rows={8}
    defaultValue={""}
    >
    </textarea>
       </div>
       <button className='btn btn-primary' onClick={converttoupper}>CONVERT TO UPPERCASE</button>
       </div>
       <div className='container my-3' >
        <h1>TEXT SUMMARY</h1>
        <p >{text.split(" ").length }words and {text.length}characters</p>
        <p>{0.008  *  text.split(" ").length} Minutes read</p>
       </div>
       </>

  )
}