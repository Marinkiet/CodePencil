import React, { useState, useEffect } from 'react';
import Editor from './Editor';
import useLocalStorage from './hooks/useLocalStorage';
import { FaExpandAlt } from "react-icons/fa";
import expandImageIcon from '../assets/expands.png'
import { IoSettingsSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { IoIosCloud } from "react-icons/io";
import { MdViewComfy } from "react-icons/md";
function App() {

  const [html, setHtml] = useLocalStorage('html', '');
  const [css, setCss] = useLocalStorage('css', '');
  const [javascript, setJavascript] = useLocalStorage('javascript', '');
  const [srcDoc, setSrcDoc] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
       <html>
       <body>${html}</body>
       <style>${css}</style>
       <script>${javascript}</script>
       </html>`)
    }, 250);   //wait till probabily done typing then render doc

    return () => clearTimeout(timeout);
  }, [html, css, javascript])
  return (
    <>
      <div className="header">
        <div>
          <h2>Code Pencil</h2>
          <p>Captain Anonymous</p>
        </div>
        <div className='rightIcons'>
          <button className='rightIconButton'> <IoIosCloud />Save</button>
          <button className='rightIconButton'><IoSettingsSharp />Settings</button>
          <button className='rightIconButton'> <MdViewComfy /></button>
          <button className='rightIconButton'>Signup</button>
          <button className='rightIconButton'>Login</button>
        </div>
      </div>

      <div className="section topSection">
        <Editor onChange={setHtml} language="xml" displayName="HTML" value={html} />
        <Editor onChange={setCss} language="css" displayName="CSS" value={css} />
        <Editor onChange={setJavascript} language="javascript" displayName="JS" value={javascript} />
      </div>

      <div className="section">

        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          width="100%"
          height="100%">
        </iframe>
      </div>
    </>
  )
}

export default App