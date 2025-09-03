document.addEventListener('DOMContentLoaded', function () {

  const nameInput = document.getElementById('name-Input')
  const knapp = document.getElementById('halsning-btn')
  const meddelandeDiv = document.getElementById('meddelande')
  const jokeDiv = document.getElementById('joke')

  // function skapaHalsning(name) {
  //   return `Hej ${name}, välkommen!`
  // }

  knapp.addEventListener('click', function () {
    const name = nameInput.value.trim()

    if (name) {
      meddelandeDiv.textContent = `Hej ${name}! välkommen tillbaka till kodandet!`

      jokeDiv.innerHTML = `Knack knack, ${name}, vem där?`

      meddelandeDiv.style.display = 'block'
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