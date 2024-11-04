import { expect, test } from 'vitest';
import { inc } from './functions';

test('Hacemos inc con array vacio', () => {
	expect(inc([])).toEqual([]);
});

test('Hacemos inc con [1] resultado [2]', () => {
	expect(inc([1])).toEqual([2]);
});

test('Hacemos inc con [1,2,3] resultado [2,3,4]', () => {
	expect(inc([1, 2, 3])).toEqual([2, 3, 4]);
});
