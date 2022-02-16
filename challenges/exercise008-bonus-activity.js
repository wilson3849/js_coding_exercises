// Spread Syntax Bonus activity

function printColours(colours){
    if (!colours) throw new Error("colour is required");
    return colours
}

function shoppingList(list, newItem){
    if (!list) throw new Error("list is required");
    if (!newItem) throw new Error("newItem is required");
    let newList = []
    list.forEach(item => newList.push(item))
    newItem.forEach(item => newList.push(item))
    return newList
}

function highestNumber(numbers){
    if (!numbers) throw new Error("numbers are required");
    let highNum = numbers[0]
    let numArr =  numbers.filter(function(num){
        if (num > highNum) {
            highNum = num
        }
        return num == highNum 
    })
    return numArr[numArr.length - 1]
}

function splitThatString(string){
    if (!string) throw new Error("string is required");
    let arrString = []
    string.split("").forEach(char => {
        arrString.push(char)
    })
    return arrString
}


// Optional Chaining Bonus activity!

function addressLookUp(user){
    if (!user) throw new Error("user is required");
    let postcode = undefined
    if (user.address !== undefined ){
        if(user.address.postcode !== undefined)
            postcode = user.address.postcode
    } 
    return postcode
}


module.exports = {
    printColours,
    shoppingList,
    highestNumber,
    splitThatString,
    addressLookUp
};