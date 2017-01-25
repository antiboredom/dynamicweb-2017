# Javascript Review

## Variables

We declare variables with the ```var``` keyword. You don't need to declare variable type, it's inferred.

```javascript
var name; 				// declare an empty variable
name = "Sam";				// define it

// You can also declare and define in a single line

var name = "Sam"; 		// a string
var onePlusOne = 2; 	// an integer
var sortofPI = 3.1415; 	// a float
var thisIsFun = true; 	// a boolean
```

NOTE: Javascript will NOT complain if you don't have the ```var``` keyword. But NEVER do this because it will put that variable in the global scope.

## Strings
```javascript
var firstName = "Sam";
var lastName = "Lavigne"

// concatenate strings
var fullName = firstName + " " + lastName; // returns "Sam Lavigne"
```

## Arrays

An array is a list of variables, numerically indexed starting with 0. In javascript we can put variables of any type into an array, and we can mix and match.

```javascript
var myList = []; // An empty array

// declaring a populated array
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

// Get the first element in an array
var firstDay = days[0]; // returns "Monday"

// Get the last element in an array
var lastDay = days[days.length-1] // returns "Friday

// Get the length of an array
var totalDays = days.length; // returns 5

// Add something to the end of an array
days.push("Saturday");

// loop through an array and print it's values
for (var i = 0; i < days.length; i++) {
	console.log(days[i]);
}
```

## Functions

```javascript
function sayHi() {
	console.log("Hello");
}

sayHi() // will print "Hello" and return "undefined"


// adding a parameter
function sayHi(name) {
	var message = "Hello " + name;
	console.log(message);
}

sayHi("Sam");

// return values
function sayHi(name) {
	var message = "Hello " + name;
	return message;
}

var helloMessage = sayHi("Sam");
```


### Functions are variables

Functions also act like variables, so we can declare them like variables

```javascript
var multiplier = function(number1, number2) {
	return number1 * number2;
}
multiplier(2, 5) // returns 10

var subtractor = function(number1, number2) {
	return number1 - number2;
}
subtractor(5, 3) // returns 2
```

Because functions act like variables, we can pass them around to other functions. We do this by using their name WITHOUT the parenthesis. Here's a totally useless example of this in action

```javascript
function doAMathThing(number1, number2, mathFunction) {
	var result = mathFunction(number1, number2);
	return result;
}

doAMathThing(7, 4, subtractor) // returns 3

doAMathThing(7, 4, multiplier) // returns 28

```

The ability to pass functions to other functions is a key feature of javascript, and used constantly. Specifically, in callback functions...

### Callback functions
Javascript is frequently **asynchronous**. This means that multiple things can be happening at once, and that code is NOT ALWAYS executed in the order that its written in.

For example, the ```setTimeout``` function will execute a chunk of code after a certain amount of time elapses. It takes two parameters: one, a function to execute, two the amount of time to wait before executing. Here are two ways of writing the same thing:

```javascript

function sayHi() {
	alert("Hi");
}

setInterval(sayHi, 1000); // call sayHi() after one second.


// do that same thing, but with an "anonymous" (unnamed function) instead
setInterval(function(){
	alert("Hi!!");
}, 1000);
```

Notice how in that second example we just stick a whole function definition inside the call to setInterval. This is a pattern you will see and use all the time.

For example, in DOM event listeners.

```javascript
document.body.addEventListener("click", function(e) {
	alert("You clicked on the page");
});
```

## Objects

Objects are key/value pairs. The keys are string-like, and the values can be anything.

```javascript
var person = {}; // an empty object

// declaring an object with some values
var person = {
	firstName: "Sam",
	lastName: "Lavigne"
}

// access a value
person.firstName // returns "Sam"

// another way to access a value
person["firstName"]

// modify an existing value, or create a new one:
person.firstName = "Not Sam";

person.gender = "Male";

// stick a an array in there
person.favoriteBooks = ["Moby Dick", "The Man Without Qualities", "Magic Mountain", "War and Peace"]

// stick another object in there
person.computer = {
	brand: "Mac",
	model: "Pro",
	year: 2014
};

// stick a function in there
person.getFullName = function() {
	return this.firstName + " " + this.lastName;
}

person.getFullName();
```

Notice how we can define an object and then after add properties to it that include arrays, other objects and functions. If we were to define this object all in one go, it would look like this:

```javascript
var person = {
	firstName: "Sam",
	lastName: "Lavigne",
	gender: "male",
	
	favoriteBooks: ["Moby Dick", "The Man Without Qualities", "Magic Mountain", "War and Peace"],
	
	computer: {
		brand: "Mac",
		model: "Pro",
		year: 2014
	},
	
	getFullName: function() {
		return this.firstName + " " + this.lastName;
	}
}

```
NOTE: don't forget to put a ```,``` after each value or your code will break.


### Object Oriented Programming
Javascript doesn't exactly have classes. ANY function can act as a constructor function when you use the ```new``` keyword.

```javascript
function Person(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
}

var sam = new Person("Sam", "Lavigne");
sam.firstName // returns "Sam"
```

It can be convenient to create objects this way when need multiple objects that all behave the same way.

To add methods to our class, we use the following, somewhat batshit, syntax:

```javascript
Person.prototype.getFullName = function() {
	return this.firstName + " " + this.lastName;
}

var sam = new Person("Sam Lavigne");
console.log(sam.getFullName());
```

## Scope
a quick note on scope: variables exist with the function that they are declared, NOT with pairs of braces like other languages. SO:

```javascript
function whatever() {
	if (1 == 1) {
		var hello = true;
	}
	console.log(hello); // prints true
}
console.log(hello) //undefined!


// apartmentTwo will have access to things declared in apartmentOne, but not the other way around.
function apartmentOne() {
	var iLiveInOne = true;
	function apartmentTwo() {
		var iLiveInTwo = true;
		console.log(iLiveInOne) // prints true!
	}
	console.log(iLiveInTwo) // undefined
}

```

## What is "this"?
You may have noticed that in the object examples we used the ```this``` keyword. ```this``` can be a difficult concept to explain. I think the best way of looking at it is as **context**. If you use ```this``` within an object method, ```this``` will equal the object itself. If you use ```this``` outside an object method, ```this``` will equal the global or window context.

It can become very confusing because ```this``` will sometimes NOT be what you are expecting. We'll come back to this topic at a later date!