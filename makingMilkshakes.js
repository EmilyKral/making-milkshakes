const { orderMilkshake, drinkMilkshake, complain } = require("./milkshakes");

let customers = ["Emily", "Angela", "Bethan", "Jasmine", "Arlene"];

async function placeOrder(customer) {
	try {
		console.log(`Milkshake for ${customer}!`);
		const order = await orderMilkshake();
		drinkMilkshake(order, customer);
	} catch (error) {
		console.log("Oh no!");
		complain(customer);
	}
}

function placeOrder2(customer) {
	console.log(`Milkshake for ${customer}!`);
	orderMilkshake()
		.then(response => {
			drinkMilkshake(response, customer)
		}).catch(error => {
			console.log("Oh no!");
			complain(customer)
		})
}

for (customer of customers) {
	placeOrder2(customer);
}
