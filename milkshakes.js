let straws = 2;

function makeMilkshake(resolve, reject) {
	console.log("Shakin' it up for a good cause \n");
	if (straws >= 1) {
		const milkshake = {
			milkshake: ["ice cream", "milk", "chocolate sauce", "fererro rocher"],
			price: 2
		};
		straws--;
		setTimeout(() => {
			console.log("tick tock, its milkshake-o-clock");
			resolve(milkshake);
		}, 1000);
	} else {
		const error = { message: "no more straws" };
		setTimeout(() => {
			console.log("Stick your face in it");
			reject(error);
		}, 1000);
	}
}

const orderMilkshake = () => new Promise(makeMilkshake);
const drinkMilkshake = ({milkshake, price}, name) => console.log(`${name} has ordered a £${price} milkshake with ${milkshake.join(", ")}! Enjoy! \n`);
const complain = (name) => console.log(`${name} says "But I want a straw" \n`);

module.exports = { orderMilkshake, drinkMilkshake, complain };

