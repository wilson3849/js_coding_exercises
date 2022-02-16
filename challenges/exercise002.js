function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return sandwich.fillings
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  return (person.city == "Manchester")
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  return ((people/40)-Math.floor(people/40) > 0) ? Math.floor(people/40) + 1 : Math.floor(people/40)
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  return arr.filter(function(element){return element == "sheep"}).length
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  const address = person.address
  const city = address.city
  const postcode = address.postCode
  return (postcode[0].toUpperCase() == "M" && city == "Manchester") 
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
