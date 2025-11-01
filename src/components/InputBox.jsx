import { useId } from "react";
import React from "react";
const InputBox = ({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectedCurrency = "usd",
    amountDisabled = false,
    currencyDisabled = false,
    className = "",
}) => {
    const amountId = useId();
   
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>
            <div className="w-1/2">
                <label htmlFor={amountId} className="text-black/80 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountId}
                    className="outline-none w-full bg-transparent text-black py-1.5"
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    disabled={amountDisabled} 
                    onChange={(e) => onAmountChange && onAmountChange(e.target.value)}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/60 mb-2 w-full">Currrency Type</p>
                <select
                    className="rounded-lg px-1 py-1 text-black/60 bg-gray-100 cursor-pointer outline-none"
                    value={selectedCurrency}
                    disabled={currencyDisabled}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                >
                    {currencyOptions.map((currency) => (
                         <option key={currency} value={currency}>
                            {currency.toUpperCase()}
                        </option>
                    ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;