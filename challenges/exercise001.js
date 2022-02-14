function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return word[0].toUpperCase() + word.substring(1)
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return firstName[0].toUpperCase() + "." + lastName[0].toUpperCase()
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  let value = (originalPrice * (100 + vatRate)/100)
  return Math.round(value * 100)/100
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  let value = (originalPrice * (100 - reduction)/100)
  return Math.round(value * 100)/100 
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  let pos = Math.floor(str.length/2)
  if((str.length/2)-Math.floor(str.length/2) > 0)
    return str.substring(pos, pos+1)
  else  
    return str.substring(pos-1, pos+1)
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  let wordArr = word.split("")
  let output = ""
  for (let i=word.length-1;i>=0;i--)
  {
    output = output + wordArr[i]
  }
  return output
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  let outputArr = []
  words.forEach((word) => {
    outputArr.push(reverseWord(word))
  })
  return outputArr
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  let count = 0
  for (let i = 0; i < users.length; i++) {
    let Object = users[i];    
    if(Object.type == "Linux") {
      count++
    }
  }
  return count
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  let total = 0
  scores.forEach(function(element) {total = total + element })
  return Math.round(total/scores.length*100)/100
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  let result = ""
  if((n/3)-Math.floor(n/3) == 0){ result = "fizz" }   
  if((n/5)-Math.floor(n/5) == 0){ result = result + "buzz" }
  if (result == ""){ result = n }
  return result   
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
