import { expect, test } from 'vitest';
import { toUpperCase } from './functions';

test('array vacio devuelve array vacio', () => {
	expect(toUpperCase([])).toEqual([]);
});

test('Array que contiene "hola", "adios", "BieN" devyelva en mayusculas', () => {
	expect(toUpperCase(['hola', 'adios', 'BieN'])).toEqual([
		'HOLA',
		'ADIOS',
		'BIEN',
	]);
});

test('Array con pepe devuelve PEPE', () => {
	expect(toUpperCase(['pepe'])).toEqual(['PEPE']);
});
