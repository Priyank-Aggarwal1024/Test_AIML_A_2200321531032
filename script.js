const currencyCvt = document.getElementById("currency-cvt");
const currency = document.getElementById("currency");
const btn = document.getElementsByClassName("convert");
const url = "https://api.exchangerate-api.com/v4/latest/";
const selectUpdate = async () => {
    try {
        const data = await fetchData("USD");
        const rates = data.rates
        console.log(rates)
        if (rates) {
            Object.keys(rates).forEach(element => {
                const opt = document.createElement("option");
                opt.setAttribute("name", "currency");
                opt.setAttribute("value", element)
                opt.innerText = element
                currency.appendChild(opt)
            });
            Object.keys(rates).forEach(element => {
                const opt = document.createElement("option");
                opt.setAttribute("name", "currency-cvt");
                opt.setAttribute("value", element)
                opt.innerText = element
                currencyCvt.appendChild(opt)
            });
        }
    }
    catch (e) {
        throw new Error(e)
    }
}

const updateCurrency = async () => {
    try {
        const amt = document.getElementById("amount").value;
        const curr = currency.value;
        const conCurr = currencyCvt.value;
        if (!conCurr) {
            alert("Select Convert Currency");
            return;
        }
        if (!curr) {
            alert("Select Your Currency");
            return;
        }
        if (!amt) {
            alert("Enter Amount Please!!")
            return;
        }
        const res = await fetchData(curr);
        console.log(res.rates[curr])
        const finalInput = document.getElementById("convert-amt");
        finalInput.value = Math.round(res.rates[conCurr] * Number(amt) * 100) / 100;
    }
    catch (e) {
        throw new Error(e);
    }
}
const fetchData = async (cur) => {
    try {
        const apires = await fetch(url + cur);
        const res = await apires.json();
        return res
    }
    catch (e) {
        throw new Error(e)
    }
}
selectUpdate();
fetchData();
btn[0].addEventListener('click', (e) => {
    e.preventDefault();
    updateCurrency();
})