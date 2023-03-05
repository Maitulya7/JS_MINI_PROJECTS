const dropList = document.querySelectorAll(".drop-list select")
getButton = document.querySelector("form button")
fromCurrency = document.querySelector(".from select")
toCurrency = document.querySelector(".to select")

for(i = 0 ; i < dropList.length ; i++){

   
    for(currency_code in country_list){

        let selected;
        if(i == 0 ){
            selected = currency_code == "INR" 
        }else if (i == 1){
            selected = currency_code == "USD" 
        }

        //creating option tag  with passing currency code as a text and value 
        let optionTag = `<option value="${currency_code}">${currency_code}</option>`
        dropList[i].insertAdjacentHTML("beforeend", optionTag)
    }
    dropList[i].addEventListener("change" , e =>{
        loadFlag(e.target) // calling loadFlag with passing target element as an argument
    })
}

function loadFlag(element){
    for(code in country_list){
        if(code === element.value){ // if currency code of country list is equal to option value 
            let imgTag = element.parentElement.querySelector("img") // selecting img tag of particular drop list 
            // passing country code of a selected currency code in a img url
            imgTag.src = `https://flagcdn.com/32x24/${country_list[code].toLowerCase()}.png`

        }
    }
}

const exchangeIcon = document.querySelector(".drop-list .icon")
exchangeIcon.addEventListener("click" , () =>{
    console.log("hello")
    let tempCode = fromCurrency.value // temporary currency code of FROM drop list 
    fromCurrency.value = toCurrency.value // passing TO currency code to FROM currency code
    toCurrency.value = tempCode // passing temporary currency code to TO currency code
    loadFlag(fromCurrency) // calling loadFlag with passing select element (fromCurrency) of FROM
    loadFlag(toCurrency) // calling loadFlag with passing select element (toCurrency) of TO
    getExchangeRate()
})

window.addEventListener("load" , ()=>{
    getExchangeRate()
})

getButton.addEventListener("click" , e =>{
    e.preventDefault(); // preventing form from submitting 
    getExchangeRate()
})

function getExchangeRate(){
    const amount = document.querySelector(".amount input")
    exchangeRateTxt = document.querySelector(".exchange-rate")
    let amountVal = amount.value

    if(amountVal == "" || amountVal == "0"){
        amount.value = "1"
        amountVal = 1
    }

    exchangeRateTxt.innerHTML = "Getting Exchange Rate"

    let url = `https://v6.exchangerate-api.com/v6/fd12dae75a1e473e2a94806f/latest/${fromCurrency.value}`
    fetch(url).then(response => response.json()).then(result =>{
        let exchangeRate = result.conversion_rates[toCurrency.value]
        let totalExchangeRate = (amountVal * exchangeRate).toFixed(2)
        
        exchangeRateTxt.innerHTML = `${amountVal} ${fromCurrency.value} = ${totalExchangeRate} ${toCurrency.value}`
        console.log(totalExchangeRate)
    }).catch(()=>{
        exchangeRateTxt.innerHTML = "Something went wrong please try again later"
    })

  
}

