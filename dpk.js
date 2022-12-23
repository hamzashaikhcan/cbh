const crypto = require('crypto');

/*

	Imports the crypto module, which is used to create hash values.
	Defines two constants: DEFAULT_PARTITION_KEY and MAX_PARTITION_KEY_LENGTH.
	Defines a helper function getHash that returns the SHA3-512 hash of a given string.
	Exports a function deterministicPartitionKey that takes an event object as an argument.
	Inside the deterministicPartitionKey function, the code initializes the candidate variable to the default partition key.
	If the event object is provided, the code sets the candidate variable to the value of the partitionKey field if it exists, or to the hash of the stringified event object if the partitionKey field is not present.
	If the candidate value is not a string, the code stringifies it.
	If the candidate value is longer than the maximum allowed length, the code calculates its hash.
	Finally, the deterministicPartitionKey function returns the candidate value.

*/

const DEFAULT_PARTITION_KEY = '0';
const MAX_PARTITION_KEY_LENGTH = 256;

const getHash = (data) =>
	crypto.createHash('sha3-512').update(data).digest('hex');

exports.deterministicPartitionKey = (event) => {
	let candidate = DEFAULT_PARTITION_KEY;

	if (event) {
		candidate = event.partitionKey || getHash(JSON.stringify(event));
	}

	if (typeof candidate !== 'string') {
		candidate = JSON.stringify(candidate);
	} else if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
		candidate = getHash(candidate);
	}

	return candidate;
};
