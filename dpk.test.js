const { deterministicPartitionKey } = require('./dpk');

describe('deterministicPartitionKey', () => {
	it("Returns the literal '0' when given no input", () => {
		const trivialKey = deterministicPartitionKey();
		expect(trivialKey).toBe('0');
	});

	it("Returns the literal '70ea41ca3f0d800a9e9af7e10bb6e34eeadcff8814aeb3125890d570a13563d690d9578d8d17922701e167867944f41a9c3968c3410fb6e39477f847c3332197' when given 'message' input", () => {
		const expected_output =
			'70ea41ca3f0d800a9e9af7e10bb6e34eeadcff8814aeb3125890d570a13563d690d9578d8d17922701e167867944f41a9c3968c3410fb6e39477f847c3332197';
		const trivialKey = deterministicPartitionKey('message');
		expect(trivialKey).toBe(expected_output);
	});

	it("Returns the literal '10' when given { event: 'message', partitionKey: 10, } input", () => {
		const input = {
			event: 'message',
			partitionKey: 10,
		};
		const expected_output = '10';
		const trivialKey = deterministicPartitionKey(input);
		expect(trivialKey).toBe(expected_output);
	});
});
