const hello = require('./app');

test('introducing socialstockdev to the world', () => {
    expect(hello()).toBe('Hello, World from socialstockdev');
});
