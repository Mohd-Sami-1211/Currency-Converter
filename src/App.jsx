import { useState } from 'react'
import {InputBox} from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

import './App.css'

function App() {
  const[Amount,SetAmount]=useState(0)
  const[From,SetFrom]=useState("usd")
  const[To,SetTo]=useState("inr")
  const[ConvertedAmount,SetConvertedAmount]=useState(0)

  const CurrencyInfo=useCurrencyInfo(From)
  const Options= CurrencyInfo ? Object.keys(CurrencyInfo) :[];
  const swap=()=>{
    SetFrom(To)
    SetTo(From)
    SetConvertedAmount(Amount)
    SetAmount(ConvertedAmount)  
    
  }
  const Convert=()=>{
    SetConvertedAmount(Amount * CurrencyInfo[To])
  }

  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
    style={{
      backgroundImage: `url('https://images.pexels.com/photos/157520/pexels-photo-157520.jpeg')`,
    }}>
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-50 rounded-lg p-5 backdrop-blur-sm bg-white/30">
        <form onSubmit={(e)=>{
          e.preventDefault();
          Convert();
        }}>
          <div className="w-full mb-1">
             <InputBox
             label='From'
             Amount={Amount}
             CurrencyOption={Options}
             OnCurrencyChange={(currency)=>SetFrom(currency)}
             OnAmountChange={(Amount)=>SetAmount(Amount)}
             SelectCurrency={From}
             />

          </div>
          <div className="relative w-full h-0.5">
            <button
            type='button'
            className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
            onClick={swap}>
            swap  
            </button>
          </div>
          <div className="w-full mt-1 mb-4">
          <InputBox
             label='To'
             Amount={ConvertedAmount}
             CurrencyOption={Options}
             OnCurrencyChange={(currency)=>SetTo(currency)}
             SelectCurrency={To}
             AmountDisable
             />
          </div>
          <button
          type="submit"
          className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
          >
            Convert {From.toUpperCase()} to {To.toUpperCase()}
          </button>
        </form>
        </div>
      </div>
    </div>
  )
}

export default App
