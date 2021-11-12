import React , {useState} from 'react'

export default function Textform(props) {

    const [text, setText] = useState("Enter Your Text Here");
    const upClick = (e) => {
        let newtxt = text.toUpperCase();
        setText(newtxt);
        props.alert("This Text Become Uppercase","success");
    }
    const loClick = (e) => {
        let newtxt = text.toLowerCase();
        setText(newtxt);
        props.alert("This Text Become Lowercase","success");
    }
    const clClick = (e) => {
        let newtxt = "";
        setText(newtxt);
        props.alert("This Text Clear The Text","danger");
    }
    const coClick = (e) => {
        let copy = document.querySelector("#mybox");
        copy.select();
        // console.log(copy.select());
        // copy.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copy.value);
        // setText(newtxt);
        props.alert("This Text Is Copyied","warning");
    }
    const handleChange = (event) => {
        setText(event.target.value)
    }
    return (
        <>
        <div className={`container my-3 text-${props.mode === `light` ?`dark`: `light`} `} >
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea  value={text} onChange={handleChange} className={` text-${props.mode === 'light' ? 'dark' : 'light'} form-control`} 
                style={{backgroundColor: props.mode==='dark'?'gray':'white'}}
                  id="mybox" rows="8" ></textarea>
            </div>
            <div className="btn btn-primary my-3 " onClick={upClick}>convert to uppercase</div>
            <div className="btn btn-primary my-3 mx-5" onClick={loClick}>convert to lowecase</div>
            <div className="btn btn-primary my-3" onClick={clClick}>clear text</div>
            <div className="btn btn-primary my-3 mx-5" onClick={coClick}>copy text</div>
        </div>
        <div className={`container my-3 text-${props.mode === `light` ?`dark`: `light`} `}>
            <h2>your text summary</h2>
            <p>{text.split(" ").length} words and  {text.length} character</p>
            <p>{text.split(" ").length/125} minute</p>
            <h2>Preview</h2>
            <p>{text.length>0 ? text : "Enter Your Text for preview"}</p>
        </div>
        </>
    )
}
