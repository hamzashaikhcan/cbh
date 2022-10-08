const crypto = require('crypto');

/*
  - I assinged TRIVIAL_PARTITION_KEY to the candidate as we will eventually assign that value if none of our condition gets true.
  - Instead of whole if else on event and event.partitionKey is use ternary condition and assign the value of candidate accordingly.
  - I removed 1 if condition to of candidate and add the condition on line # 21 where we are checking the type of candidate variable.
*/

exports.deterministicPartitionKey = (event) => {
	const TRIVIAL_PARTITION_KEY = '0';
	const MAX_PARTITION_KEY_LENGTH = 256;
	let candidate = TRIVIAL_PARTITION_KEY;

	if (event) {
		const data = JSON.stringify(event);
		candidate = event.partitionKey
			? event.partitionKey
			: crypto.createHash('sha3-512').update(data).digest('hex');
	}

	if (candidate && typeof candidate !== 'string') {
		candidate = JSON.stringify(candidate);
	}
	if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
		candidate = crypto.createHash('sha3-512').update(candidate).digest('hex');
	}
	return candidate;
};
