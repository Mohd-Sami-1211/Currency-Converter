import React from "react";
function InputBox ({
    Label,
    Amount,
    SelectCurrency,
    OnAmountChange,
    OnCurrencyChange,
    CurrencyOption=[],
    AmountDisable=false,
    CurrencyDisable=false,
    className="",
}

) {
    return(
        <div className={`bg-white p-3 rounded-lg text-sm flex`}>
            <div className="w-1/2">
            <label className="text-black/40 mb-2 inline-block">{Label}</label>
            <input className="outline-none w-full bg-transparent py-1.3" 
            type="number"
            placeholder="Amount"
            disabled={AmountDisable}
            value={Amount}
            onChange={(e)=>OnAmountChange && OnAmountChange(Number(e.target.value))}
            />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
            <p className="text-black/40 mb-2 w-full">Currency Type</p>
            <select className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
            value={SelectCurrency}
            onChange={(e)=>OnCurrencyChange && OnCurrencyChange(e.target.value)}
            disabled={CurrencyDisable}
            >
                {CurrencyOption.map((Currency)=>(
                    <option key={Currency} value={Currency}>
                        {Currency}
                        </option>))}
            </select>
            </div>
        </div>
    )
}
export default InputBox