/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
const sumMultiples = arr => {
  if (arr === undefined) throw new Error("arr is required")
  let sumOfNum = 0
  const checkDividedBy3 = 3
  const checkDividedBy5 = 5
  arr.forEach((num) => {
    let appendNum = false
    if ((num/checkDividedBy3) - Math.floor(num/checkDividedBy3) == 0){ appendNum = true }
    if ((num/checkDividedBy5) - Math.floor(num/checkDividedBy5) == 0){ appendNum = true }
    if(appendNum){ sumOfNum += num }
  })
  return sumOfNum
}

/**
 * This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
const isValidDNA = str => {
  if (str === undefined) throw new Error("str is required")
  let isValid = false
  if (str.replace(/[CGTA]/g, '').length == 0)
  {
    let charFound = ""
    str.replace(/[^CGTA]/g, '').split("").forEach((char) => {
      if(char == "C" && charFound.indexOf("C") == -1){charFound = charFound + "C" }
      if(char == "G" && charFound.indexOf("G") == -1){charFound = charFound + "G" }
      if(char == "T" && charFound.indexOf("T") == -1){charFound = charFound + "T" }
      if(char == "A" && charFound.indexOf("A") == -1){charFound = charFound + "A" }
    })
    if (charFound.length > 0) 
      isValid = true
  }
  return isValid
}

/**
 * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */
const getComplementaryDNA = str => {
  if (str === undefined) throw new Error("str is required")
  const validSEQ = "TGAC"
  let strComplementaryDNA = ""
  if(isValidDNA(str)) 
  {
    validSEQ.split("").forEach((c) => {
      str.split("").forEach((e) => {
        if ( c == e ){ strComplementaryDNA = strComplementaryDNA + c } 
      })
    }) 
  }
  return strComplementaryDNA
}

/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
const isItPrime = n => {
  if (n === undefined) throw new Error("n is required")
  let isPrime = true
  if (n > 1) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            isPrime = false
            break
        }
    }
  }
  return isPrime
}

/**
 * This function should receive a number and return an array of n arrays, each filled with n items. The parameter "fill" should be used as the filler of the arrays. For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
const createMatrix = (n, fill) => {
  if (n === undefined) throw new Error("n is required")
  if (fill === undefined) throw new Error("fill is required")
  let lineBody
  let matrixBody = []
  for ( let i = 0; i < n; i++){
    if (n > 1)
    {
      lineBody = []
      for (let j = 0; j < n; j++){
        lineBody.push(fill)
      }
    }
    else
    {
      lineBody = fill
    }
    matrixBody.push(lineBody)
  }
  return matrixBody
}

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day. The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
const areWeCovered = (staff, day) => {
  if (staff === undefined) throw new Error("staff is required")
  if (day === undefined) throw new Error("day is required")
  let coverStaff = 0
  staff.forEach((schedule) => {
    schedule.rota.forEach((weekday) => { if (weekday == day) coverStaff = coverStaff + 1 })
  })
  return (coverStaff <= 3)
}

module.exports = {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
}
