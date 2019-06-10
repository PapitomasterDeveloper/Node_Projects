// Basic function declaration
const square_1 = function (x) {
	return x + x;
}
console.log(square_1(9));

// ES6 Fat arrow function declaration
const square_2 = (x) => {
	return x + x;
}
console.log(square_2(9));

// ES6 Fat arrow function declaration with one-line basic return statements
const square_3 = (x) => x + x;
console.log(square_3(9));

// Using the basic function declaration working with a property and a method
const event_1 = {
	name: 'Birthday Party',
	printGuestList: function() {
		console.log('Guest List for ' + this.name);
	}
};
console.log(event_1.printGuestList());

// Using the ES6 Fat arrow function declaration working with a property and a method
// This code will throw undefined, because arrow functions doesn't bind his own this value, like the basic function declaration
// Basic function declaration are best suited for methods using properties
const event_2 = {
	name: 'Birthday Party',
	printGuestList: () => {
		console.log('Guest list for ' + this.name);
	}
};
console.log(event_2.printGuestList);

// This problem can be resolved using the ES6 method declaration
const event_3 = {
        name: 'Birthday Party',
        printGuestList() {
                console.log('Guest list for ' + this.name);
        }
};
console.log(event_3.printGuestList());

// But, using this syntax create a method with the this binding of a basic function declaration
// The fat arrow function is going to help us to use the this binding
// in his own context(the same of the function declared above) and not creating a new one
const event_4 = {
        name: 'Birthday Party',
	guestList: ['Andrew', 'Jen', 'Mike'],
        printGuestList() {
                console.log('Guest list for ' + this.name);
		this.guestList.forEach((guest) => {
			console.log(guest + ' is attending ' + this.name);
		})
        }
};
console.log(event_4.printGuestList());

