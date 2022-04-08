//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', getDrink)

function getDrink() {
  let drink = document.querySelector('input').value

  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data.drinks)
      document.querySelector('h2').innerText = data.drinks[`${drink}`].strDrink
      document.querySelector('img').src = data.drinks[`${drink}`].strDrinkThumb
      document.querySelector('h3').innerText = data.drinks[`${drink}`].strInstructions
    })
    .catch(err => {
      console.log(`error ${err}`)
    });

}

