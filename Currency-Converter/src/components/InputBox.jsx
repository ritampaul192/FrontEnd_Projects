import React, {useId} from "react";

function InputBox({
    label,
    amount,
    placeholder,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    currencyNames = {}, // currencyNames is an object that maps currency codes to full names
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
   
    const amountInputId = useId();
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>
            <div className="w-1/2">
                <label htmlFor={amountInputId}  className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder={placeholder}
                    // placeholder is a string that will be displayed when the input is empty
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}// this checks if onAmountChange is provided before calling it
                    // e.target.value is a string, so we convert it to a number
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none max-w-[150px] w-full"
                    value = {selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)} // this checks if onCurrencyChange is provided before calling it
                    disabled={currencyDisable}
                >
                    {currencyOptions
                    .filter((currency) => currencyNames[currency]) // only show if name exists
                    .map((currency) => (
                        <option key={currency} value={currency}>
                            {currency.toUpperCase()} - {currencyNames[currency] || ""}
                            {/* Displaying the full name of the currency if available, otherwise an empty string */}
                            {/* currencyNames[currency] will return the full name of the currency if it exists in the object */}
                        </option>
                    ) )}
                    
                        
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
