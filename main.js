// Exercise #1

function dogMatch(str,dog_names) {
  for (let i = 0; i < dog_names.length; i++) {
    if (str.includes(dog_names[i])) {
      return true
    } else {
      return false
    }
  }
}

console.log(dogMatch("Hello Max, my name is Dog, and I have purple eyes!", ["Max", "HAS", "PuRple", "dog"]))

// Exercise #2

function replaceEvens(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      arr.splice(i, 1, "even index")
    }
  }
  return arr
}

console.log(replaceEvens(["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger"]))