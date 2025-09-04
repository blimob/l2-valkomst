document.addEventListener('DOMContentLoaded', function () {

  const nameInput = document.getElementById('name-Input')
  const knapp = document.getElementById('halsning-btn')
  const meddelandeDiv = document.getElementById('meddelande')
  const jokeDiv = document.getElementById('joke')

  knapp.addEventListener('click', function () {
    const name = nameInput.value.trim()

    if (name) {
      meddelandeDiv.textContent = `Hej ${name}! Välkommen tillbaka till kodandet!`

      jokeDiv.textContent = `Knack knack, vem där? ${name}`

      meddelandeDiv.style.display = 'block'
      jokeDiv.style.display = 'block'
    } else {
      alert('Skriv ditt namn först!')
    }
  })

  nameInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      knapp.click()
    }
  })
})