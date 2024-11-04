/*function greet() {
	console.log('Hi!');
}*/

/*
export function add1(numbers: number[]): number {
	let sum = 0;
	for (let i = 0; i < numbers.length; i++) {
		sum += numbers[i];
	}
	return sum;
}

console.log(add1([1, 4, 8]));
*/
/*
		//... --> rest
export function add1(...numbers: number[]): number {
	let sum = 0;
	for (let i = 0; i < numbers.length; i++) {
		sum += numbers[i];
	}
	return sum;
}

//const x = [1, 2, 3];
//	... --> spread
//const y = [...x];
//y; [0] = 20;

console.log(add1());
*/
/*
export function add(x: number, y: number): number {
	return x + y;
}

console.log(add(4, 1));
*/

/*
export function toUpperCase(words: string[]): string[] {
	const upperWords: string[] = [];
	for (let i = 0; i < words.length; i++) {
		upperWords[i] = words[i].toUpperCase();
	}
	return upperWords;
}

const x = ['hola', 'adios', 'BiEn'];
console.log(toUpperCase(x));
console.log(toUpperCase([]));
console.log(toUpperCase(['pepe']));
*/
export function toUpperCase(words: string[]) {
	return map(function (word: string) {
		const pal: string = word.toUpperCase();
		return pal;
	}, words);
}

/*
export function inc(numbers: number[]): number[] {
	const incnumbers: number[] = [];
	for (let i = 0; i < numbers.length; i++) {
		incnumbers[i] = numbers[i] + 1;
	}
	return incnumbers;
}

console.log(inc([]));
console.log(inc([1]));
console.log(inc([1, 2, 3]));
*/

export function inc(numbers: number[]): number[] {
	return map(function (num: number) {
		return num + 1;
	}, numbers);
}

/*
export function length(words: string[]): number[] {
	const count: number[] = [];
	for (let i = 0; i < words.length; i++) {
		count[i] = words[i].length;
	}

	return count;
}
*/

export function length(words: string[]): number[] {
	return map(function (word: string) {
		return word.length;
	}, words);
}

const a = ['hola', 'adios', 'cinco'];
//console.log(length(a));

function take(num: number, words: string[]): string[] {
	const quitarPals: string[] = [];
	if (num == 0) {
		return words;
	} else {
		for (let i = 0; i < words.length; i++) {
			quitarPals[i] = words[i].slice(0, num);
		}
		return quitarPals;
	}
}
console.log(take(2, a));

export function map<X, Y>(f: (x: X) => Y, xs: X[]): Y[] {
	const ys: Y[] = [];
	for (let i = 0; i < xs.length; i++) {
		ys[i] = f(xs[i]);
	}
	return ys;
}

export function add2(numbers: number[]): number {
	if (numbers.length === 0) {
		return 0; // Base case: return 0 for an empty array
	} else {
		const [head, ...tail] = numbers;
		return head + add2(tail); // Recursive case
	}
}

const add1 = (numbers: number[]): number => {
	let sum = 0;
	for (let i = 0; i < numbers.length; i++) {
		sum += numbers[i];
	}
	return sum;
};

export function length1(words: string[]): number[] {
	return map((word: string) => {
		return word.length;
	}, words);
}

export function length2(words: string[]): number[] {
	return map((word: string) => word.length, words);
}
