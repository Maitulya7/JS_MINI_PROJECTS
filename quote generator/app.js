let btn = document.querySelector("#btn")
let quote = document.querySelector(".quote")
let person = document.querySelector(".person")

const quotes = [
    {
        quote : `“True terror is to wake up one morning and discover that your high school class is running the country.”`,
        person: "Kurt Vonnegut ",
    },
    {
        quote : `“Always forgive your enemies; nothing annoys them so much.”`,
        person: "Kurt Vonnegut"
    },
    {
        quote : `“Sometimes the road less traveled is less traveled for a reason.”`,
        person: "Jerry Seinfeld"
    },
    {
        quote : `If you want to know what God thinks of money, just look at the people he gave it to.`,
        person: "Dorothy Parker"
    },
    {
        quote : `“In America, there are two classes of travel—first class and with children.”`,
        person: "Robert Benchley"
    },
    {
        quote : `“A perfect parent is a person with excellent child-rearing theories and no actual children.”`,
        person: "Dave Barry"
    },
    {
        quote : `“Instead of getting married again, I’m going to find a woman I don’t like and give her a house.” `,
        person: "Rod Stewart "
    },
    {
        quote : `“If you are not yelling at your kids, you are not spending enough time with them.”`,
        person: "Reese Witherspoon"
    },
    {
        quote : `“If you are not yelling at your kids, you are not spending enough time with them.”`,
        person: "Alex Haley"
    },
    {
        quote : `“Not in doing what you like but in liking what you do is the secret of happiness.”`,
        person: "J.M. Barrie "
    },
]

btn.addEventListener("click" ,function(){
  
    let randomIndex = Math.floor(Math.random() * quotes.length)

    quote.innerHTML = quotes[randomIndex].quote
    person.innerHTML = quotes[randomIndex].person

})