import { useState, useEffect } from 'react'


function useCurrencyFname(){
    const [currencyNames, setCurrencyNames] = useState({});
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json`)
        .then((res) => res.json())
        .then((data) => setCurrencyNames(data))
        // The data is an object where the keys are currency codes and the values are full names
        // For example, { usd: "United States Dollar", inr: "Indian Ru
    }, []);

    return currencyNames;
}

export default useCurrencyFname;