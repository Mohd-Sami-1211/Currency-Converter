import { useEffect,useState } from "react";

function useCurrencyInfo(currency){
    const [data,SetData]=useState({});
useEffect(()=>{
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
    .then((res)=>res.json())
    .then((res) => SetData(res.rates || {}))
    console.log(data);
},[currency])
return data
}
export default useCurrencyInfo;