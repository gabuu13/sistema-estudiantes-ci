const test = require('node:test');
const assert = require('node:assert/strict');
const { calcularPromedio, estaAprobado } =
  require('../src/calificaciones');

test('promedio 12, 14, 16 = 14', () => {
  assert.equal(calcularPromedio([12, 14, 16]), 14);
});

test('nota 11 es aprobatoria', () => {
  assert.equal(estaAprobado(11), true);
});

test('nota 10 es desaprobatoria', () => {
  assert.equal(estaAprobado(10), false);
});

test('lista vacia lanza error', () => {
  assert.throws(() => calcularPromedio([]), /al menos una nota/);
});
