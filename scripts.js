const app = document.getElementById('root')

const logo = document.createElement('img')

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(container)

  var request = new XMLHttpRequest()
request.open('GET', 'http://api.onemusicapi.com/20151208/artist?called=KISS&user_key=aa1c3c773fd227bd2834507df9be322a', true)
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(band => {
        const card = document.createElement('div')
      card.setAttribute('class', 'card')

      const h1 = document.createElement('h1')
      h1.textContent = band.name

      const p = document.createElement('p')
      p.textContent = band.urls


      container.appendChild(card)
      card.appendChild(h1)
      card.appendChild(p)
    })
  } else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Gah, it's not working!`
    app.appendChild(errorMessage)
  }
}

request.send()