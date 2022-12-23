const { deterministicPartitionKey } = require('./dpk');
const crypto = require('crypto');

describe('deterministicPartitionKey', () => {
	it("Returns the literal '0' when given no input", () => {
		const trivialKey = deterministicPartitionKey();
		expect(trivialKey).toBe('0');
	});

	it('should return the partition key from the event if it exists', () => {
		const event = { partitionKey: '12345' };
		const result = deterministicPartitionKey(event);
		expect(result).toBe('12345');
	});

	it('returns hash of event object if partition key does not exist', () => {
		const event = { name: 'test' };
		const hash = crypto
			.createHash('sha3-512')
			.update(JSON.stringify(event))
			.digest('hex');
		expect(deterministicPartitionKey(event)).toBe(hash);
	});

	it('returns original partition key if it is a string and length is <= MAX_PARTITION_KEY_LENGTH', () => {
		const event = { partitionKey: '12345' };
		expect(deterministicPartitionKey(event)).toBe('12345');
	});

	it('should return the hash of the event if the partition key is not present', () => {
		const event = { name: 'test' };
		const result = deterministicPartitionKey(event);
		expect(result).toMatch(/^[a-f0-9]{128}$/);
	});

	it('returns hash of original partition key if it is a string and length is > MAX_PARTITION_KEY_LENGTH', () => {
		const event = { partitionKey: 'a'.repeat(257) };
		const hash = crypto
			.createHash('sha3-512')
			.update(event.partitionKey)
			.digest('hex');
		expect(deterministicPartitionKey(event)).toBe(hash);
	});

	it('returns expected hash for more complex event object', () => {
		const event = { name: 'test', baz: [1, 2, 3], qux: { a: 1, b: 2 } };
		const hash = crypto
			.createHash('sha3-512')
			.update(JSON.stringify(event))
			.digest('hex');
		expect(deterministicPartitionKey(event)).toBe(hash);
	});

	it('should return the hash of the partition key if it is too long', () => {
		const event = { partitionKey: 'a'.repeat(257) };
		const result = deterministicPartitionKey(event);
		expect(result).toMatch(/^[a-f0-9]{128}$/);
	});
	it('returns expected hash for more complex event object', () => {
		const event = { name: 'test', baz: [1, 2, 3], qux: { a: 1, b: 2 } };
		const hash = crypto
			.createHash('sha3-512')
			.update(JSON.stringify(event))
			.digest('hex');
		expect(deterministicPartitionKey(event)).toBe(hash);
	});

	it('returns expected hash for simple event object', () => {
		const event = { name: 'test' };
		const hash = crypto
			.createHash('sha3-512')
			.update(JSON.stringify(event))
			.digest('hex');
		expect(deterministicPartitionKey(event)).toBe(hash);
	});
});
