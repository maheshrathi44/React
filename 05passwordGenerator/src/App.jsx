import { useState, useCallback, useEffect,useRef } from 'react'



function App() {
  const [length, setLength] = useState(8);

  const [numberAllowed, setNumberAllowed] = useState(false)

  const [charAllowed, setCharAllowed] = useState(false)

  const [password, setPassword] = useState("")

  const passwordgenerator = useCallback(() => {
    //we can make loop to pick random variables from string using math.random
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) {
      str += "0123456789"  // add numbers
    }
    if (charAllowed) {
      str += "!@#$%^&*()_+-=[]{}|;:',.<>?/~`"  // add special characters
    }

    for (let i = 1; i <= length; i++) {
      pass += str[Math.floor(Math.random() * str.length)]

    }
    setPassword(pass)

  }, [length, numberAllowed, charAllowed,setPassword])


  const CopyPassWordtoClipboard=useCallback(()=>
    {
      passwordRef.current?.select()
      passwordRef.current?.setSelectionRange(0,12)
      window.navigator.clipboard.writeText(password)


    },[password]
  )



  useEffect(() => {
    passwordgenerator();
  }, [length, numberAllowed, charAllowed, passwordgenerator])




  //userefhook for creating ref bw copy and password field

  const passwordRef=useRef(null)




  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md
        rounded-lg px-4 py-4 my-8 text-black-400 bg-gray-500">
        <h1 className='text-white text-center flex-auto pb-4'>Password Generator </h1>
        <div className='flex shadow-lg rounded-lg overflow-hidden
        mb-4'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
          <button className='text-2xl bg-gray-400 font-bold'
          onClick={CopyPassWordtoClipboard}>Copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex-auto font-bold items-center bg-gray-400 gap-x-1'>
            <input type="range"
              min={6}
              max={100}
              value={length}
              id="passlength"
              className='cursor-pointe w-full'
              onChange={(e) => { setLength(e.target.value) }} />
            <br />
            <label htmlFor="passlength">Length:{length}</label>
          </div>
          <div className='pl-8  flex-auto bg-gray-400'>
            <h2 className=' font-bold'>Include</h2>
            <div>
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                onChange={() => {
                  setNumberAllowed((prev) => !prev);
                }} />
              <label htmlFor="numberInput"> Numbers</label>
            </div>
            <div>
              <input
                type="checkbox"
                defaultChecked={charAllowed}
                id="charInput"
                onChange={() => {
                  setCharAllowed((prev) => !prev);
                }} />
              <label htmlFor="charInput">Chars</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
