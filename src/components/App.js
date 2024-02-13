import React, { useState, useEffect } from 'react';
import Editor from './Editor';
import useLocalStorage from './hooks/useLocalStorage';
import { FaExpandAlt } from "react-icons/fa";
import expandImageIcon from '../assets/expands.png'
//  <button><FaBeer /></button>
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
          <h2>JabuPen</h2>
          <p>Captain Anonymous</p>
        </div>
        <div>
          <button>icon</button>
          <button>icon</button>
          <button>Signup</button>
          <button>Login</button>
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