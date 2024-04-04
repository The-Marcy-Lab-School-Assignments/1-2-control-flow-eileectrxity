# 1.0.2 - Flow Control and Math

- [1.0.2 - Flow Control and Math](#102---flow-control-and-math)
  - [Before you start](#before-you-start)
- [Question 1: measureRain](#question-1-measurerain)
- [Question 2: happyBirthdayPet](#question-2-happybirthdaypet)
- [Question 3: funTypes](#question-3-funtypes)
- [Question 4: rounder](#question-4-rounder)
- [Question 5: fizzBuzzish](#question-5-fizzbuzzish)
- [Question 6: MODIFY - wildlyBiasedReview](#question-6-modify---wildlybiasedreview)
- [Question 7: DEBUG - Fix getRandomIntInRange](#question-7-debug---fix-getrandomintinrange)
- [Question 8: DEBUG - Fix coolnessGauge](#question-8-debug---fix-coolnessgauge)
- [Question 9: DEBUG - Fix funkoPopAddictionLevel](#question-9-debug---fix-funkopopaddictionlevel)
- [Question 10: DEBUG - Fix getWeatherReport](#question-10-debug---fix-getweatherreport)
- [Question 11: DEBUG - fix returnPositiveNegativeZero](#question-11-debug---fix-returnpositivenegativezero)
- [Bonus: Switch Cases!](#bonus-switch-cases)

## Before you start

We're using `console.log` a lot in our code, which means our tests need to be a little more complicated. We'll need to `mock` the `console.log` function in order to `spy` on the arguments it's called with. Basically, in order to see that our functions log the right string, we have to replace it with a special `jest` function that tells us what string it was called with.

Mocks track this info forever by default, so after each test (or even each function call) we need to reset its memory to keep our tests isolated. Check `from-scratch.spec.js` to see how we use these mocks in practice.

The other big thing this does is remove our `console.log` for the purpose of debugging. You can easily get around this by using `console.info` instead. (Did you know there are other log methods? Check out [all the log options](https://www.syncfusion.com/blogs/post/11-console-methods-in-javascript-for-effective-debugging.aspx) here)

Other than that, just be _very_ careful about exactly what the test cases are expecting. Outputs must be perfect! "hello there" and "Hello there!" are _not_ equal. And if you're confused about what a question is asking for, check what the tests literally expect. We've included a `playground.js` file and script, don't forget to install and test frequently!

Good luck!

# Question 1: measureRain

Write a function `measureRain` that takes a single argument, a number `inches`. It should log a message depending on the number of inches:

- 0 inches - 'drought'
- less than 2 inches - 'dry'
- less than 4 inches - 'average'
- less than 6 inches - 'rainy'
- 6 or more inches - 'flood'

# Question 2: happyBirthdayPet

Write a function `happyBirthdayPet` that takes two arguments, a string `breed` and a number `age`. It should log a message in the following situations:

- 'snake', any age - 'Hiss hiss!'
- 'cat', less than 5 - 'Mew mew!'
- 'cat', 5 or more - 'Meow meow!'
- 'dog', less than 5 - 'Arf arf!'
- 'dog', 5 to less than 10 - 'Woof woof!'
- 'dog', 10 or more - 'Boof!'
  By default, just log a message of 'Happy birthday!'

# Question 3: funTypes

Write a function `funTypes` that takes an argument `jsType`. The type could be one of the following: a `string`, a `number`, a `boolean`, `undefined`, `null`, an `object`, an `array`, or `NaN`. It should log a message in the following situations:

- any string - "That's just some text."
- any number - "That's a good number."
- a boolean - "To bool, or not to bool?"
- undefined - "Nothing, but I didn't set that."
- null - "Nothing, and I did set that."
- an object - "Anybody got the key?"
- an array - "I order you to be indexed."
- NaN - "Well, now you're just showing off."

# Question 4: rounder

Write a function `rounder` that takes two arguments: a float `float` and a string `roundingSetting`. `roundingSetting` could be only one of 3 values `up`, `down`, or `honest`. It should _RETURN_ an integer based off the following value of `roundingSetting`:

- up - the `float` rounded up
- down - the `float` rounded down
- honest - the `float` rounded up or down depending on the rounding rules (< .5 round down, >= .5 round up)

# Question 5: fizzBuzzish

Write a function `fizzBuzzish` that takes a single argument: an integer `num`. It should log a message in the following situations:

- number is divisible by 3 - 'fizz'
- number is divisible by 5 - 'buzz'
- number is divisible by both 3 _and_ 5 - 'fizzBuzz!'
- number is none of those - just log the number

Note: I'm well aware the solution to this problem is _everywhere_ but solving it is a right of passage. So try to figure it out on your own first, ok? -- Mike

# Question 6: MODIFY - wildlyBiasedReview

In `modify.js` we have the function `wildlyBiasedReview` that's not currently using a guard clause. Please keep the functionality the same, but use a guard clause.

# Question 7: DEBUG - Fix getRandomIntInRange

In `debug.js` we have the function `getRandomIntInRange` that isn't quite doing what we want. Instead of taking 2 integers, an _inclusive_ `min` and _exclusive_ `max`, and returning a random number in that range, it returns a random number from 0 to the `max`.

Please fix the function so that it actually operates within the range provided by the arguments.

# Question 8: DEBUG - Fix coolnessGauge

In `debug.js` we have a function called `coolnessGauge`. It's using a ternary, but it's returning the exact opposite to what we want. Can you fix it by reading what the tests expect?

# Question 9: DEBUG - Fix funkoPopAddictionLevel

In `debug.js` we have the function `funkoPopAddictionLevel`. It takes an integer `numOfFunkoPops` and logs out a message of support (or concern). However, no matter what, it just only ever says "No pops? Maybe try one." or "Only a few? Keep having fun!". Please read the tests and make sure all the messages are logged properly.

# Question 10: DEBUG - Fix getWeatherReport

In `debug.js` we have the function `getWeatherReport` that takes an integer `temperature`. It's supposed to compile a `weatherReport` string, log it out, then log 'And that's your report!', and finally return the `weatherReport` string. But we're getting an error. Can you get the function to work properly without changing its core functionality.

# Question 11: DEBUG - fix returnPositiveNegativeZero

Oh man, in `debug.js` someone tried getting _real_ clever and chaining some ternarys together in `returnPositiveNegativeZero`. However...the logic is broken and the tests are failing. Can you fix this function and only use 1 ternary (if at all) so that the tests pass?

# Bonus: Switch Cases!

You may already be aware of [Switch Cases](https://www.w3schools.com/js/js_switch.asp) that are an alternative to `if/else` statements. If the mood strikes you try your hand at the switch versions of `measureRainSwitch` and `rounderSwitch` in `bonus-switch.js`. You can also answer the short answer bonus question about why those two are the only examples that would really work with a switch case.

This is also a [good article on switch](https://javascript.info/switch) to check out.
