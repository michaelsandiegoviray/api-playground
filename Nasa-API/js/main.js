document.querySelector('button').addEventListener('click', getFetch)

function getFetch() {

  let date = document.querySelector('input').value


  fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`
  )
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector('img').src = data.hdurl
      document.querySelector('h2').innerText = data.title
      document.querySelector('h3').innerText = data.explanation


    })
    .catch(err => {
      console.log(`error ${err}`)
    });
}