import { useCallback, useState , useEffect, useRef} from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [includeNumbers, setIncludeNumbers] = useState(true)
  const [includeSymbols, setIncludeSymbols] = useState(true)
  const [password, setPassword] = useState("Hello")
  const [copied, setCopied] = useState(false)

  const passwordRef = useRef(null);
  const timeoutRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "", characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if(includeNumbers) characters += "0123456789";
    if(includeSymbols) characters += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    
    for(let i = 0; i < length; i++) {
      pass += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setPassword(pass);
  }, [length, includeNumbers, includeSymbols, setPassword]);

  const copyHandler = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 32);
    navigator.clipboard.writeText(password);

    setCopied(true);

    if(timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCopied(false);
    }, 5000);

    useEffect(() => {
      return () => {
        if(timeoutRef.current) clearTimeout(timeoutRef.current);
      };
    }, []);
  })

  useEffect(() => generatePassword(), [generatePassword]);

  return (
    <div id="app" className="width-screen h-screen flex justify-center items-center bg-[#0f172a]">
      <div id="main-container" className="w-[600px] h-[250px] bg-[#1e293b] rounded-lg flex flex-col justify-center items-center">
        <h1 className="text-white text-3xl font-bold mb-8 display: block">Password Generator</h1>
        <div className="flex justify-center items-center mb-8">
          <input type="text"  ref={passwordRef} readOnly value={password} className="bg-[#0f172a] p-3 w-[350px] rounded-lg text-white placeholder:text-[#64748b] border border-[#334155] focus:outline-none"/>
          <button onClick={copyHandler} disabled={copied} id="copy-button" className="bg-[#0f172a] p-3 rounded-lg text-white ml-2 px-4 w-[90px] focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed hover:enabled:bg-[#1e395b]"> {copied ? "Copied!" : "Copy"} </button>
        </div>
        <div id="controls" className="flex justify-center items-center w-full px-6">
          <input type="range" min="8" max="32" value={length} onChange={(e) => setLength(e.target.value)} className="w-[100px] h-2 bg-slate-600 rounded-lg appearance-none cursor-pointer accent-indigo-500"/>
          <h2 className="text-white ml-4">Length: {length}</h2>
          <input type="checkbox" id="include-numbers" checked={includeNumbers} onChange={(e) => setIncludeNumbers(e.target.checked)} className="ml-4"/>
          <label htmlFor="include-numbers" className="text-white ml-2">Numbers</label>
          <input type="checkbox" id="include-symbols" checked={includeSymbols} onChange={(e) => setIncludeSymbols(e.target.checked)} className="ml-4"/>
          <label htmlFor="include-symbols" className="text-white ml-2">Symbols</label>
        </div>
      </div>
    </div>
  )
}

export default App
