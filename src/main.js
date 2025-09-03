document.addEventListener('DOMContentLoaded', function () {

  const nameInput = document.getElementById('name-Input')
  const knapp = document.getElementById('halsning-btn')
  const meddelandeDiv = document.getElementById('meddelande')

  function skapaHalsning(name) {
    return `Hej ${name}, välkommen!`
  }

  knapp.addEventListener('click', function () {
    const name = nameInput.value.trim()

    if (name) {
      meddelandeDiv.innerHTML = `Hej ${name}! välkommen tillbaka till kodandet!`
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