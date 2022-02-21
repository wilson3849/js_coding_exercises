// Spread Syntax Bonus activity

function printColours(colours){
    if (!colours) throw new Error("colour is required");
    return [...colours]
}

function shoppingList(list, newItem){
    if (!list) throw new Error("list is required");
    if (!newItem) throw new Error("newItem is required");
    return [...list, ...newItem]
}

function highestNumber(numbers){
    if (!numbers) throw new Error("numbers are required");
    return Math.max(...numbers)
}

function splitThatString(string){
    if (!string) throw new Error("string is required");
    //let arrString = string.split("")
    return [...string]
}

// Optional Chaining Bonus activity!

function addressLookUp(user){
    if (!user) throw new Error("user is required");
    if ({...{...user}.address}.postcode)
        return Object.values({...{...user}.address}.postcode).join("")
}


module.exports = {
    printColours,
    shoppingList,
    highestNumber,
    splitThatString,
    addressLookUp
};