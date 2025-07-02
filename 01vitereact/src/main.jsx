import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
  
import App from './App.jsx'

function MyApp(){
    return(
    <div1>
        <h1>
            custom app huu
        </h1>
    </div1>
    )
}

// const ReactElement={
//     type: 'a',
//     props:{
//         href: "https://google.com",
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherElement=(
    <a href="https://google.com"target='blank'>Visit Google</a>
)


const anotheruser="hi chai"


//specific syntax for react render
const reactElement=React.createElement(
 'a', //tag
 {href:'https://google.com',target:'_blank'},//properties
 'click me to visit google',//direct text
 anotheruser //injected variables(only evaluated variables no js code)


)

createRoot(document.getElementById('root')).render(
  
reactElement
    
 
)
