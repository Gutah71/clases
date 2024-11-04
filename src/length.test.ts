import { expect, test } from 'vitest';
import { length } from './functions';

test('Le paso un array vacio, resultado 0', () => {
	expect(length([])).toEqual([]);
});

test('Le paso un array ["cinco"] resultado [5]', () => {
	expect(length(['cinco'])).toEqual([5]);
});

test('Le paso un array ["cinco","fin","no"] resultado [5,3,2]', () => {
	expect(length(['cinco', 'fin', 'no'])).toEqual([5, 3, 2]);
});
