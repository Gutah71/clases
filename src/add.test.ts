import { expect, test } from 'vitest';
import { add1 } from './functions';
/*
test('add1(1,2,3) to equal 6', () => {
	expect(add1(1, 2, 3)).toBe(6);
});

test('add1() to equal 0', () => {
	expect(add1()).toBe(0);
});

test('add1(1) to equal 1', () => {
	expect(add1(1)).toBe(1);
});
*/
test('add1[.1, .2] to be [.3]', () => {
	const epsilon = 1e-5;
	expect(add1([0.1, 0.2])).closeTo(0.3, epsilon);
});
