// Can you translate this driver code to unit tests?

const char = require("./charCount");

test('one', () => {
  expect(char("aaabbc")['a']).toEqual(3);
});

test('two', () => {
  expect(char("aaabbc")['b']).toEqual(2);
});

test('three', () => {
  expect(char("aaabbc")['c']).toEqual(1);
});

test('four', () => {
  expect(char('rplyoacadawpettlleaodeeywapkniha')['a']).toEqual(6);
});

test('five', () => {
  expect(char('rplyoacadawpettlleaodeeywapkniha')['e']).toEqual(4);
});

test('six', () => {
  expect(char('rplyoacadawpettlleaodeeywapkniha')['l']).toEqual(3);
});

test('seven', () => {
  expect(char('rplyoacadawpettlleaodeeywapkniha')['p']).toEqual(3);
});

test('eight', () => {
  expect(char('rplyoacadawpettlleaodeeywapkniha')['w']).toEqual(2);
});

test('nine', () => {
  expect(char('rplyoacadawpettlleaodeeywapkniha')['d']).toEqual(2);
});

test('ten', () => {
  expect(char('rplyoacadawpettlleaodeeywapkniha')['o']).toEqual(2);
});

test('eleven', () => {
  expect(char('rplyoacadawpettlleaodeeywapkniha')['t']).toEqual(2);
});

test('twelve', () => {
  expect(char('rplyoacadawpettlleaodeeywapkniha')['y']).toEqual(2);
});

test('thirteen', () => {
  expect(char('rplyoacadawpettlleaodeeywapkniha')['k']).toEqual(1);
});

test('fourteen', () => {
  expect(char('rplyoacadawpettlleaodeeywapkniha')['h']).toEqual(1);
});

test('fifteen', () => {
  expect(char('rplyoacadawpettlleaodeeywapkniha')['i']).toEqual(1);
});

test('sixteen', () => {
  expect(char('rplyoacadawpettlleaodeeywapkniha')['c']).toEqual(1);
});

test('seventeen', () => {
  expect(char('rplyoacadawpettlleaodeeywapkniha')['n']).toEqual(1);
});

test('eighteen', () => {
  expect(char('rplyoacadawpettlleaodeeywapkniha')['r']).toEqual(1);
});
