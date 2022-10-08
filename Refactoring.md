# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.

2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.

3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

# Your Explanation Here

## JUSTIFICATION OF REFACTORING:

- I assinged TRIVIAL_PARTITION_KEY to the candidate as we will eventually assign that value if none of our condition gets true.

- Instead of whole if else on event and event.partitionKey is use ternary condition and assign the value of candidate accordingly.

- I removed 1 'if condition' of candidate and added the condition on line # 21 where we are checking the type of candidate variable.
