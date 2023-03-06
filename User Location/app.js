const button = document.querySelector("button")

button.addEventListener("click" ,()=>{
    
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(onSuccess , onError)
        button.innerHTML = "Allow to detect your location"
    }else {
        button.innerHTML = " Your Browser is not supported "
    }
})


function onSuccess(position){
    
    button.innerHTML = "detecting you location"
   let = {latitude , longitude} = position.coords
   console.log(latitude , longitude)
   fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=60f189807eaf49a8aad0821ac27a67df`).then(response => response.json()).then(result => {

   let allDetails = result.results[0].components
   console.table(allDetails)
   let {county,postcode,country} =allDetails
    console.log(county ,  postcode , country)
    button.innerHTML = `${county} ${postcode} , ${country}`
   }).catch(()=>{
    button.innerHTML = "Something went wrong"
   })
}

function onError(error){
    if(error.code === 1){
        button.innerHTML = "You denied the request"
    }
    else if(error.code === 2){
        button.innerHTML = "Location not available"
    }
    else{
        button.innerHTML = "Something went wrong"
    }

    button.setAttribute("Disable" , "true")
}

