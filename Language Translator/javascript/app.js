
const selectTag =  document.querySelectorAll("select")
const translateBtn = document.querySelector("button")
const fromText = document.querySelector(".from-text")
const toText = document.querySelector(".to-text")
const icons = document.querySelectorAll(".row i")

selectTag.forEach(tag => {
    for( const country_code in countries){
      
        let option = `<option value="${country_code}">${countries[country_code]}</option>`

        tag.insertAdjacentHTML("beforeend" , option) // adding options tag inside the select tag
    }  
})


translateBtn.addEventListener("click", ()=>{
    let text = fromText.value,
    translateFrom = selectTag[0].value // getting fromSelect tag value
    translateTo = selectTag[1].value // getting toSelect tag value
    if(!text) return
    toText.setAttribute("placeholder","Translating...")
    let apiURL = `https://api.mymemory.translated.net/get?q=${text} World!&langpair=${translateFrom}|${translateTo}`

    fetch(apiURL).then(res =>res.json()).then(data =>{
        console.log(data)
        toText.value = data.responseData.translatedText
        toText.setAttribute("placeholder","Translation")
    })
})

icons.forEach(icon =>{
    icon.addEventListener("click", ({target})=>{
       if(target.classList.contains("fa-copy")){
        // if clicked icon has from id , copy the fromTextarea value else copy the ToTextarea value
            if(target.id === "from"){
                navigator.clipboard.writeText(fromText.value)
            }else{
                navigator.clipboard.writeText(toText.value)
            }
       }else{
            let utterance
            if(target.id === "from"){
                utterance = new SpeechSynthesisUtterance(fromText.value)
                utterance.lang = selectTag[0].value // setting utterance language to fromSelect tag value
            }else {
                utterance = new SpeechSynthesisUtterance(toText.value)
                utterance.lang = selectTag[1].value // setting utterance language to Select tag val
            }
       }    SpeechSynthesis.speak(utterance) // speak the passed utterance 
    })
})


 