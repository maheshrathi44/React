import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive")

 const usecolor=(anycolor)=>{
    setColor(anycolor)
 }

  return (
    <>
      <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
        <div className="fixed bottom-12 inset-x-0 flex flex-wrap justify-center gap-3 px-2">
          <button onClick={()=>usecolor("red")}
            className="px-4 py-1 rounded-3xl text-white shadow-lg"
            style={{ backgroundColor: "red" }}>Red</button>
          <button onClick={()=>usecolor("green")}
            className="px-4 py-1 rounded-3xl text-white shadow-lg"
            style={{ backgroundColor: "green" }}>Green</button>
          <button onClick={()=>usecolor("yellow")}
            className="px-4 py-1 rounded-3xl text-white shadow-lg"
            style={{ backgroundColor: "yellow" }}>Yellow</button>
          <button onClick={()=>usecolor("blue")}
            className="px-4 py-1 rounded-3xl text-white shadow-lg"
            style={{ backgroundColor: "blue" }}>Blue</button>
          <button onClick={()=>usecolor("skyblue")}
            className="px-4 py-1 rounded-3xl text-white shadow-lg"
            style={{ backgroundColor: "skyblue" }}>Skyblue</button>
            <button onClick={()=>usecolor("lavender")}
            className="px-4 py-1 rounded-3xl text-white shadow-lg"
            style={{ backgroundColor: "lavender" }}>lavender</button>
            <button onClick={()=>usecolor("beige")}
            className="px-4 py-1 rounded-3xl text-white shadow-lg"
            style={{ backgroundColor: "beige" }}>beige</button>
          <button onClick={() => setColor("pink")}
            className="px-4 py-1 rounded-3xl text-white shadow-lg"
            style={{ backgroundColor: "pink" }}>Pink</button>
            <button onClick={() => setColor("black")}
            className="px-4 py-1 rounded-3xl text-white shadow-lg"
            style={{ backgroundColor: "black" }}>black</button>
        </div>
      </div>


    </>
  )
}

export default App
