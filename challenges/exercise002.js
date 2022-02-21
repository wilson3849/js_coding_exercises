function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return sandwich.fillings
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  return (person.city === "Manchester")
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  const peopleHoldByBus = 40
  return Math.ceil(people / peopleHoldByBus)
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  return arr.filter((element) => element === "sheep").length
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  return (person.address.postCode[0].toUpperCase() === "M" && person.address.city === "Manchester") 
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
