import React, { useState } from 'react'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css'
import { Controlled as CodeMirror } from 'react-codemirror2';
import expandImageIcon from '../assets/expands.png';
import { FaExpandAlt } from "react-icons/fa";;
function Editor(props) {

    const [open,setOpen] =useState(true);
    const {
        language,
        displayName,
        value,
        onChange

    } = props


    function handleChange(editor, data, value) {
        onChange(value);
    }
    return (
        <div className={`editorContainer ${open ? '': 'collapsed'}`}>
            <div className='editorHeader'>
                {displayName}
                <button onClick={()=>setOpen(prevOpen=>!prevOpen)}>
                    <FaExpandAlt />
                </button>
            </div>
            
            <CodeMirror
                onBeforeChange={handleChange}
                value={value}
                className='codeEditorWrapper'
                options={
                    {
                        lineWrapping: true,
                        lint: true,
                        mode: language,
                        theme: "material",
                        lineNumbers: true

                    }
                } 
                
            />
        </div>

    )
}

export default Editor