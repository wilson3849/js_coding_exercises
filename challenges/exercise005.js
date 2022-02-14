const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  if(nums.findIndex(num => num==n) > -1 && nums.findIndex(num => num==n) < nums.length - 1)
  {
    return nums[nums.findIndex(num => num==n) + 1]
  }
  return null
};  

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  let numCounts = str.split("")
  let numArr = [1, 0]
  let countArr = [0 , 0]
  numCounts.forEach((element) => { 
    if (element == 1){ countArr[0] = countArr[0] + 1; }
    if (element == 0){ countArr[1] = countArr[1] + 1; }
  })
  let result = {}
  for (let i = 0; i < numArr.length; i++) {
    result[numArr[i]] = countArr[i];
  }
  return result
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  let output = 0;
  let numArr = n.toString().split("")
  for (let i=numArr.length-1;i>=0;i--)
  {
    output = output + numArr[i] * Math.pow(10, [i])
  }
  return output
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  let output = 0;
  arrs.forEach((arr) => {
    arr.forEach((element) => {
      output = output + element 
    })
  })
  return output  
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  let numArr = []
  for (let i=0; i<arr.length;i++)
  {
    let item = i
    if (i==0 && arr.length >= 2) {item = arr.length - 1;}
    if (i==(arr.length - 1) && arr.length >= 2) {item = 0;}
    numArr.push(arr[item]);
  }
  return numArr  
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  let termfound = false;
  for (let element of Object.values(haystack)) {
    if(element.toString().toUpperCase().indexOf(searchTerm.toUpperCase()) != -1)
    {
      termfound = true;
      return true;  
    }
  }  
  return termfound;
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  let strArr = str.split(" ");
  let arrWord =[];
  let arrCount = [];
  strArr.forEach((word) => {
    let wordcheck = word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    let pos = arrWord.indexOf(wordcheck)
    if (pos > -1){
      let value = arrCount[pos] + 1
      arrCount[pos] = value
    } else {
      arrWord.push(wordcheck);
      arrCount.push(1);
    }
  })
  let result = {}
  for (let i = 0; i < arrWord.length; i++) {
    result[arrWord[i]] = arrCount[i];
  }
  return result
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
