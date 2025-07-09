import { use, useState,useEffect } from 'react'
import { InputBox } from './components'
import './App.css'

import useCurrencyInfo from './hooks/usecurrencyinfo'

function App() {
  const [amount, setAmount] = useState()
  const [from, setFrom]=useState("usd")
  const [to, setTo]=useState("inr")
  const [convertedAmount,setConveretedAmount]=useState()


  const currencyInfo=useCurrencyInfo(from)

  //IN  CASE IF U NEED AMOUNT TO CHANGE AUTOMATICALLY AFTER CHANGING CURRENCY FROM DROPBOX 
  // useEffect(() => {       
  //   if (currencyInfo && currencyInfo[to]) {      
  //     const result = amount * currencyInfo[to];
  //     setConveretedAmount(result);
  //   }
  // }, [amount, to, currencyInfo]);

  const options=Object.keys(currencyInfo)


  const swap=()=>{
    setFrom(to)
    setTo(from)
    setConveretedAmount(amount)
    setAmount(convertedAmount)
  }


  const convert=()=>{
    setConveretedAmount(amount*currencyInfo[to])
  }


  return (
    <div
        className="w-full h-screen  flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://www.investopedia.com/thmb/lSMOlzF853E72-0HDkH25mmAdOM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-848755326-48dd2711646247648c4faebc98715119.jpg')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={setFrom}
                            selectCurrency={from}
                            onAmountChange={(amount)=>
                            setAmount(amount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-black text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={setTo}
                            selectCurrency={to}
                            amountDisable
                            
                        />
                    </div>
                    <button type="submit" className="w-full bg-black text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
