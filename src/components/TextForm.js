import React, {useState } from 'react'

const TextForm = (props) => {
    const [text, setText]=useState("");
  
    
  const handleRemoveExSp=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces has been removed","success");
   
  }

  const handleCopyText=()=>{
    let text=document.getElementById("myBox")
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text has been copied","success")
  }
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText)
      props.showAlert("Text has been converted to upperCase","success")
    }

    const handleLowClick=()=>{
      let newText=text.toLowerCase();
      setText(newText)
      props.showAlert("Text has been converted to lowerCase","success")
    }

    const handleClearClick=()=>{
      let newText='';
      setText(newText)
    props.showAlert("Text has been cleared","success")
    }
    

    const handleOnChange=(e)=>{
         
     setText(e.target.value);   
    }
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3 my-3">
            <textarea className="form-control"  value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#042743':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick} >Convert to Uppercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick} >Convert to Lowercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleRemoveExSp} >Remove extra spaces</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopyText} >Copy Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick} >Clear Text</button>
    </div>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1>This is your summary</h1>
      <p>{text.split(" ").length} words {text.length} characters {text.split(".").length} Sentences</p>

      <p>{0.008 * text.split(" ").length} minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter your text above to preview here"}</p>
    </div>
    </>
  )
}

export default TextForm
