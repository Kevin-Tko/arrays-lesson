//----------------------------//
// How to create JS arrays
//----------------------------//
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);

const letters = new Array(2); //will create an empty array of length 2
console.log(letters);

const moreletters = Array(2); //will create an empty array of length 2
console.log(moreletters);

const moreNumbers = Array.from("welcome!"); //Will take in an array like object and convert it to an array
console.log(moreNumbers);

//----------------------------//
// Adding items in JS arrays
//----------------------------//
numbers.push(["kev", "njogu"]); // adds an aray item to the end of an array
numbers.unshift({ name: "cess", age: "29" }); // adds an array itrm at the begining of the array

const poppedItem = numbers.pop(); //removes the last item of an array and returns it
console.log(`[${poppedItem}] was popped from numbers arrray`);

numbers.shift(); //removes the first item of an array

//----------------------------//
// The Splice method
//----------------------------//
numbers.splice(1, 1, "spliced"); //delete starting from index 1/second element, delete 1 item, and insert spliced there
numbers.splice(0, 1); //delete starting from index 0/ first element, delete 1 item
numbers.splice(-1, 1); //delete the last element

//----------------------------------------------------------//
// The slice method - Helps in creating copies of an array
//----------------------------------------------------------//
const testResult = [1, 5.3, 1.5, 10.99, -5, 10];
console.log(testResult.slice()); //returns a copy of test result

console.log(testResult.slice(1, 3)); //logs [5.3, 1.5] start index is inclusive while end index is exclusive
console.log(testResult.slice(2)); //logs numbers from index 2 all the way to the last item

//------------------------------------------//
// The concat method - combines arrays
//------------------------------------------//
const allResults = [34, 56, 37];
const startResult = [101, 123, 56, 133];

const newList = testResult.concat(allResults, startResult); //combines two or more array items
console.log(newList);

//----------------------------------------//
// Retrieving indexes of an array item
//----------------------------------------//
console.log(newList.indexOf(56)); // checks for the index of 56 starting from the left side of the array
console.log(newList.lastIndexOf(56)); // checks for the index of 56 starting from the right side of the array

const clientNames = [
    { firstName: "kevin" },
    { middleName: "njogu" },
    { lastName: "cess" },
];
console.log(clientNames.indexOf({ name: "njogu" })); //will log -1 because even if objects are similar they are not equal hence the method will not find the passed arg

//---------------------------------------------------------------//
// Finding objects in an arrays using find and finditem methods
//---------------------------------------------------------------//

//find takes in an anonymous function with three args - item, index, array
const middleName = clientNames.find((name, idx, names) => {
    return name.middleName === "njogu";
});
console.log(middleName);

middleName.middleName = "muriuki"; // this will affect the original item in the array since find doe not create a copy

console.log(clientNames);

//find index will return the index of the object that matches
const midNameIndex = clientNames.findIndex((name, idx, names) => {
    return name.middleName === "muriuki";
});

console.log(midNameIndex);

//----------------------------//
// Using the includes method
//----------------------------//
console.log(newList.includes(56)); //checks if an item is part of an array

//----------------------------//
//The forEach() method
//----------------------------//
const prices = [3, 15, 4, 10, 6];
const tax = 5;
const adjustedPrices = [];

//this will take each price in the prices list and add tax then push the new price to adjustedPrices list
prices.forEach((price, idx, prices) => {
    const priceObj = { index: idx, adjustedprice: (price += tax) };
    adjustedPrices.push(priceObj);
});
console.log(adjustedPrices);

//----------------------------//
//The map() method
//----------------------------//
//Map method has to return something which will act as a replacement of the original array.
//It returns a new array hence the original array remains untouched as evident in the logs
const adjustedTaxPrices = prices.map((price, idx, prices) => {
    const priceObj = { index: idx, adjustedprice: (price += tax) };
    return priceObj;
});
console.log(prices, adjustedTaxPrices);

//Map method practice
let arr = [1, 2, 3];
function transformToObjects(numberArray) {
    const numObjArr = numberArray.map((num, idx, numberArray) => {
        const numObj = { val: num };
        return numObj;
    });
    return numObjArr;
}
console.log(transformToObjects(arr));

//----------------------------//
//The sort and reverse method
//----------------------------//
const sortedPrices = prices.sort((a, b) => {
    if (a > b) {
        return 1;
    } else if (a === b) {
        return 0;
    } else {
        return -1;
    }
});
console.log(sortedPrices);
console.log(sortedPrices.reverse()); // reverses a sorted array

//----------------------------//
//The filter method
//----------------------------//
//filter expects to return something hence the ooriginal array is not amended
const filteredPrices = prices.filter((price, idx, prices) => {
    return price > 6; //this will return only prices higher than 6
});
console.log(filteredPrices);

//----------------------------//
//The reduce method
//----------------------------//
//reduce as per its name, reduces an array into a single value
//on the first execution prviousValue will be 0 which is the second argument passed in the reduce method
//for the consequent executions previous value will be the returned value
const sum = prices.reduce(
    (previousValue, currentValue, currentIndex, prices) => {
        return previousValue + currentValue;
    },
    0
);
console.log(sum);

//----------------------------//
//Split and join String methods
//----------------------------//
const data = "new york;10.99;2000";

const splitedData = data.split(";"); //split the the string into an into an array
console.log(splitedData);

const joinedData = splitedData.join(":"); // Joins the data into a string
console.log(joinedData);

//----------------------------//
//The spread operator ...
//----------------------------//
//this operator pull out the elements of an array and gives them back as stand alone comma separated arrays values
const newSpliteData = [...splitedData];
console.log(newSpliteData); //will create a copy of splitedData array
splitedData.push("city");
console.log(newSpliteData, splitedData); //after pushing a new element to splitedData array the newSpritedData array is not affected as it is a copy

const minPrice = Math.min(...prices);
console.log(minPrice);

//----------------------------//
//Array distructuring
//----------------------------//
const myNames = ["kevin", "njogu"];

const [firstName, lastName] = myNames; //it will asign array items to the varible names on the left side
console.log(firstName, lastName);

const nameData = ["john", "mcFee", "sir", 50];
const [surName, midName, ...otherInfo] = nameData; //the spread operator will pull out the rest of the data
console.log(surName, midName, otherInfo);

//----------------------------//
//Maps and Sets
//----------------------------//
//Arrays =>store nested data, iterable data structures, zero based index, duplicates allowed, order is guranteed
//Sets => stores nested data, iterable, special set methods, order is not guaranteed, dublicates are not allowed, not index based
//Maps => store key value data, any key value is allowed i.e you can have a list as a key, order is guaranteed, duplicate keys are not allowed

//working with sets; They are useful for managing unique data such as User Id
const ids = new Set([1, 2, 3, 4]); // cretaing a set. takes an array
console.log(ids);

console.log(ids.has(2)); //checks if the set is 2 in it

ids.forEach((num1, num2, ids) => {
    console.log(num1 + num2);
});

console.log(ids.entries()); //entries method outputs all values of a set

ids.delete(4);
console.log(ids);

//Working with Maps
//mainly used to store extra information of an object
const person1 = { name: "Max" };
const person2 = { name: "Manuel" };

const personData = new Map([[person1, { age: 30 }]]);

personData.set(person2, { age: 42 }); //adding new data to a map after creation

console.log(person1, personData);

console.log(personData.get(person1));

console.log(personData.keys());
console.log(personData.values());
