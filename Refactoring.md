# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.

2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.

3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

# Your Explanation Here

## JUSTIFICATION OF REFACTORING:

- Imports the crypto module, which is used to create hash values.

- Defines two constants: **DEFAULT_PARTITION_KEY** and **MAX_PARTITION_KEY_LENGTH**.

- Defines a helper function getHash that returns the SHA3-512 hash of a given string.

- Exports a function deterministicPartitionKey that takes an event object as an argument.

- Inside the deterministicPartitionKey function, the code initializes the candidate variable to the default partition key.

- If the event object is provided, the code sets the candidate variable to the value of the partitionKey field if it exists, or to the hash of the stringified event object if the partitionKey field is not present.

- If the candidate value is not a string, the code stringifies it.

- If the candidate value is longer than the maximum allowed length, the code calculates its hash.

- Finally, the deterministicPartitionKey function returns the candidate value.
