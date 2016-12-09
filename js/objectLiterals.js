// Object Literals
var bar = "dougeyMaxBae";
var myObjectFoo = {foo: bar};

// Really cool code providing customization of objects
var myObjectFoo = Object.defineProperties(
	Object.create(Object.prototype), {
		foo: {
			value: "dougeyMaxBae",
			writable: true, // allows value to be changed
			enumerable: true, // if false won't showup in a for in iteration.  Use case is methods added and only want to see data properties
			configurable: true // allow deletion of property, false prevents deletion of property
		}
	}
);
