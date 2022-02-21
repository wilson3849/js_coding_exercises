function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  return nums.map((num) => num * num)
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  let wordStr = ""
  let wordCount = 0
  words.forEach((word) => {
    wordCount++
    if (wordCount > 1)
      wordStr = wordStr + word[0].toUpperCase() + word.substring(1);
    else
      wordStr = wordStr + word
  })
  return wordStr
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  let totalSubject = 0
  people.forEach((person) => totalSubject += person.subjects.length )
  return totalSubject
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  let foundIngredient = false
  menu.forEach((item) => {
    item.ingredients.forEach((hasIngredient) => { if (hasIngredient === ingredient) foundIngredient = true }) 
  })  
  return foundIngredient
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  let numberArr = []
  arr1.forEach((num1) => {
    arr2.forEach((num2) => {
      if ((num1 === num2) && (numberArr.findIndex(n => n === num1) === -1)){
        numberArr.push(num1)
      }
    })
  })
  return numberArr.sort()
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
