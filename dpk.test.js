const { deterministicPartitionKey } = require('./dpk');

describe('POSTIVE TEST CASES: deterministicPartitionKey', () => {
	it("Returns the literal '0' when given no input", () => {
		const trivialKey = deterministicPartitionKey();
		expect(trivialKey).toBe('0');
	});

	it('should return the partition key from the event if it exists', () => {
		const event = { partitionKey: 'foo' };
		const result = deterministicPartitionKey(event);
		expect(result).toBe('foo');
	});

	it('should return the hash of the event if the partition key is not present', () => {
		const event = { foo: 'bar' };
		const result = deterministicPartitionKey(event);
		expect(result).toMatch(/^[a-f0-9]{128}$/);
	});

	it('should return the hash of the partition key if it is too long', () => {
		const event = { partitionKey: 'a'.repeat(257) };
		const result = deterministicPartitionKey(event);
		expect(result).toMatch(/^[a-f0-9]{128}$/);
	});
});
