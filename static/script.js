const secretKey = 'mario'
let characterSequence = []
let timeCode

function addCharacterToSequence (character) {
  let characterLowerCase = transformToLowerCase(character)
  characterSequence.push(characterLowerCase)
}

function transformToLowerCase (character) {
  return character.toLowerCase()
}

function transformSequenceToPhrase () {
  return characterSequence.join('')
}

function containsTheSecretKey (phrase) {
  if (phrase.includes(secretKey)) {
    document.querySelector('#winScreen').dataset.status = 'active'
    clearCharacterSequence()
  }
}

function clearCharacterSequence () {
  characterSequence = []
}

window.addEventListener('keydown', function(event) {
  clearTimeout(timeCode)
  const keyPressed = event.key

  addCharacterToSequence(keyPressed)
  const phrase = transformSequenceToPhrase()
  containsTheSecretKey(phrase)

  console.log(characterSequence);
  timeCode =  setTimeout(function() {
    clearCharacterSequence()
  }, 1000)
})
