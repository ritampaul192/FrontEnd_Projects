import { useState } from 'react'
import { InputBox } from "./components" // Importing InputBox component from components directory from index.js file
import useCurrencyInfo from "./hooks/useCurrencyInfo" // Importing custom hook useCurrencyInfo

import useCurrencyFname from "./hooks/useCurrencyFname" // Importing custom hook to get full name of the currency


function App() {
//   const [amount, setAmount] = useState(0) // State to hold the amount , default is 0
  const [amount, setAmount] = useState(null) // State to hold the amount, default is null (best practice to avoid confusion with 0)

  const [from, setFrom] = useState("usd")// State to hold the currency to convert from
  const [to, setTo] = useState("inr") // State to hold the currency to convert to

//   const [convertedAmount, setConvertedAmount] = useState(0) // State to hold the converted amount, default is 0
  const [convertedAmount, setConvertedAmount] = useState(null) // State to hold the converted amount, default is null (best practice to avoid confusion with 0)

  const currencyInfo = useCurrencyInfo(from)// Using custom hook to get currency information
  const options = Object.keys(currencyInfo)


  // This hook fetches the full name of the currency
  const currencyFullName = useCurrencyFname()
  // It returns an object where the keys are currency codes and the values are full names
  // For example, { usd: "United States Dollar", inr: "Indian Rupee", ... }
  // This is used to display the full name of the currency in the dropdown select options


  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () =>{
    setConvertedAmount(amount * currencyInfo[to])
  }

//   const convert = () => {
//   const result = amount * currencyInfo[to]; //Gives the raw floating-point result
//   setConvertedAmount(Number(result.toFixed(2)));
    //  toFixed(2) -> Rounds to 2 decimal places and returns a string
    // Converts it back to a number, so your input field won’t display string formatting issues
// }

  const BackgroundImage = "https://wallpaperaccess.com/full/1393718.jpg"
  return (
    <>
      <div className='flex items-center justify-center gap-10 bg-gray-900 text-white p-5'>
      <h1 className="text-3xl">Currency Converter</h1>
       <img className='h-10 rounded-4xl' src="https://static.vecteezy.com/system/resources/previews/006/207/391/original/converter-logo-with-the-arrow-icon-vector.jpg" alt="image" />
      </div>  
      <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat "
            style={{
                backgroundImage: `url('${BackgroundImage}')`,
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
                                placeholder={"Enter Amount"}
                                amount={amount}
                                currencyOptions={options}
                                currencyNames = {currencyFullName} // Passing the full name of the currency to the InputBox component
                                // This will be used to display the full name of the currency in the dropdown select options
                                onCurrencyChange={(currency)=>setFrom(currency)} 
                                selectCurrency={from}
                                onAmountChange={(amount) => setAmount(amount)}                               
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                placeholder={"Converted Amount"}
                                amount={convertedAmount !== null ? convertedAmount.toFixed(4) : ""} // Displaying the converted amount rounded to 2 decimal places
                                currencyOptions={options}
                                currencyNames = {currencyFullName}// Passing the full name of the currency to the InputBox component
                                // This will be used to display the full name of the currency in the dropdown select options
                                onCurrencyChange={(currency) => setTo(currency)}
                                selectCurrency={to}
                                amountDisable
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default App
