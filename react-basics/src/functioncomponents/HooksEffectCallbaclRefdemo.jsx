import React, { useCallback, useEffect, useRef, useState } from 'react'

const HooksEffectCallbaclRefdemo = () => {
    let [password,setPassword]=useState('')
    let [length,setLength]=useState(8)
    let [numAllowed,setNumAllowed]=useState(false)
    let [charAllowed,setCharAllowed]=useState(false)
    let copyRef = useRef()
    // let randomPassword=()=>{
    //     let str = 'abcdefghjiklmnopqrstuvwxyzABCDFEGHIJKLMNOPQRSTUVWXYZ'
    //     if(numAllowed){str+='0987654321'}

    //     if(charAllowed){str+='!@#$%^&*-+=_.'}

    //     let data=''
    //     for(let i=1;i<=length;i++){
    //         data += str.charAt(Math.floor(Math.random()*str.length))
    //     }
    //     setPassword(data)
    // }

let randomPassword = useCallback(()=>{
    let str = 'abcdefghjiklmnopqrstuvwxyzABCDFEGHIJKLMNOPQRSTUVWXYZ'
    if(numAllowed){str+='0987654321'}

    if(charAllowed){str+='!@#$%^&*-+=_.'}

    let data=''
    for(let i=1;i<=length;i++){
        data += str.charAt(Math.floor(Math.random()*str.length))
    }
    setPassword(data)
},[length,numAllowed,charAllowed])


    // useEffect(()=>{randomPassword() },[]) //only at the time of component load

    useEffect(()=>{randomPassword() },[length,numAllowed,charAllowed]) 

    let handleCopy=()=>{
        window.navigator.clipboard.writeText(password)
        // document.getElementById('pwd').style.color = "blue"
        // document.getElementById('pwd').select()
        copyRef.current.select()
        copyRef.current.style.color = "blue"
    }

  return (
    <div className='container col-6 mt-5'>&copy;&reg;
        <div className="input-group">
            <input type="text" className="form-control" value={password} id="pwd" 
            ref={copyRef}/>
            <button type="button" class="btn btn-primary"  onClick={handleCopy}  >
                Copy
            </button>
        </div>
        <input type="range" name="length" value={length} min="4" max="100"
        onChange={(e)=>setLength(e.target.value)} /> length ({length})&emsp;

        <input type="checkbox" onClick={(e)=>setNumAllowed(!numAllowed)} />Numbers&emsp;

        <input type="checkbox"  onClick={()=>setCharAllowed(!charAllowed)}/>Sp. Chars
    </div>
  )
}

export default HooksEffectCallbaclRefdemo
