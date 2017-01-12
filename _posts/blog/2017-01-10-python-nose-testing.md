---
layout: post
title: "A Nose for Python: fun with test-driven development"
excerpt: "Introduction to test-driven development philosophy and hands-on experience with Python 2.7 and Nose testing framework"
categories: blog
tags: [python, code, tutorial, tech]
author: nir
comments: true
share: true
modified: 2017-01-11
image:
  feature: blog/python-featured.jpg
  credit: blog.cbtnuggets.com
  creditlink: https://blog.cbtnuggets.com/wp-content/uploads/2014/10/5reasons_Python_FEATURED.jpg
---

In TDD (test-driven development), writing and maintaining tests---or unit-tests---are not thought-of 
as a burden that needs to be done to keep others happy. It's not even a QA-only task, if at all.

In TDD, we write unit-test for our functionality, even before we start writing the functionality
itself. We make use of unit-tests to identify the ranges of input and the expected behavior of our 
(yet to be implemented) code.

That is in addition to what we would normally expect from a test: to make sure stuff works.

For each seemingly-mundane or even minimal code change, we can't---and don't want to---invest too
much time manually testing the functionality. That's where generic automated tests come in. We write
automated tests of user-input and log the behavior of our software from a user-perspective, 
_user-perspective_ being the keyword.

But maintaining such user-end automated tests, while quite helpful and arguably necessary, is 
nothing less of a hassle; not to mention the difficulty and time and processing wastage in following 
the user-end workflows again and again on every change to the code, processing feedback and debugging
stuff usually just before the release.

TDD is amazingly useful in such situations---i.e. always---to test the functionality in an abstract
manner, without depending on the bulk of all the layers of the software. In other words, we test
the code without relying on all the dependencies in our software system.

Confused? Don't worry, I'll be trying to explain this philosophy through some very simple examples.

You can see sample code repo, [unit-testing](https://github.com/NirmalL/unit-testing) for the files,
but you don't need to. ;)

## Writing a trigonometry library

No, no, don't worry about what little you remember about trigonometry or anything too mathematical.
I assure you that knowledge is quite irrelevant here.

Assume we want to create a Python library of trigonometric functions. Take a look at the function
signatures of some of them:

```python
# one.py

def sin(rad):
  pass

def cos(rad):
  pass

def tan(rad):
  pass
```

You'll notice we haven't written any code for these functions. We're going to identify the possible
input cases and write our code to fulfill those cases.

Here's the test code skeleton we're gonna use:

```python
# test_one.py

from one import sin, cos, tan
import math, cmath

from nose.tools import *

def setupf():
  "Set up the instance for testing"
  pass

def teardownf():
  "Tear down the instance"
  pass

@with_setup(setupf, teardownf) # decorator
def test_sin_float():
  "Test for valid a float argument"
  assert False
```

We have imported our very own `one.py` module's trignometric functions `sin`, `cos` and `tan`. 
We have also imported Python's standard `math` library in order to use its versions of our trig 
functions for testing the output values of our code.

You'll notice the almost empty `setupf`, `teardownf` and the decorator `@with_setup` which 
refers to them. `@with_setup` initiates any library and data setup mechanisms that are required
for each test. Where `setupf` would setup such configurations, data and service mocks and 
initiations, `teardown` would clean the setup after the use.

I've included them for completeness of the boilerplate code, but we're not really going to need them 
for our library... at least not in this stage.

The test function also doesn't do any actual testing yet, and we've set them to just 'fail' with
`assert False`.

`assert` is the most generic of the mechanisms Nose (and Python) provide us with for concluding
a test case. Think of an assertion as a check whether the statement next to it is true or not.
If the code is wrong, the statement that's asserted will be `False`. Look at the same function
with an actual assetion:

```python
@with_setup(setupf, teardownf)
def test_sin_float():
  "Test for a valid float argument"
  assert math.sin(.1) == sin(.1)
```

Don't worry about running the tests. We'll come to that soon.

In the above code, we have compared the output of our `sin` function with Python's `math` library's
competitor's output. The `assert` will hold true if both output the exact same value, compared with
`==`.

But we can't expect them to be _exactly_ the same output value; either our or Python's function is
bound to be less accurate than the other in some way, only reliably similar to a certain number
of decimal places.

What we need to test is that these two outputs are sufficiently close to each other. In such 
unclear-precision comparisons we can use Nose's `assert_almost_equal` function, which is 
self-explanatorily used below:

```python
@with_setup(setupf, teardownf)
def test_sin_float():
  "Test for a valid float argument"
  assert_almost_equals(math.sin(.1), sin(.1), places=4)
```

But we still haven't implemented the `sin` function. So what will happen when we run the tests?
Let's find out.

## Installing a Nose and testing stuff with it

You can use pip to quickly do a hassle-free installation of Nose on any major platform that has
pip and Python (2.7).

```bash
$ pip install nose
```

Now we can run the tests with either,

```bash
$ nosetests --verbose
```

or

```bash
$ nosetests ./test_one.py --verbose
```

As you will see, the tests will fail and after the test fail/pass report, it'll print the 
stacktrace for each failure. We can now implement our functions so as to pass the test.

## Implementing `sin`

```python
e = 2.71828182846

def sin(rad):
  return (e**(rad*1j)).imag
```

Written above is a basic way of calculating the sin value of a given radian value `rad`.
The equation in cleaner mathematics is,

\\[ sin(x) = imag(e^{x \\times j}) \\]

Here, \\( j \\) is the imaginary unit, and \\( imag \\) represents the imaginary part of 
a complex number.

Now the tests should pass.

## More test cases

```python
@with_setup(setupf, teardownf)
def test_sin_float():
  "Test for a valid float argument"
  assert_almost_equals(math.sin(.1), sin(.1), places=4)

@with_setup(setupf, teardownf)
def test_sin_int():
  "Test for a valid float argument"
  assert_almost_equals(math.sin(2), sin(2), places=4)

@with_setup(setupf, teardownf)
def test_sin_float_negative():
  "Test for a valid negative float argument"
  assert_almost_equals(math.sin(-.1), sin(-.1), places=4)

@with_setup(setupf, teardownf)
def test_sin_float_negative():
  "Test for a valid negative int argument"
  assert_almost_equals(math.sin(-2), sin(-2), places=4)

@with_setup(setupf, teardownf)
def test_sin_zero():
  "Test for a valid negative float argument"
  assert_almost_equals(math.sin(0), sin(0), places=4)
```

The above test cases use almost exactly the same code only with different arguments. 
This would make any self-respecting programmer want to either gouge their eyes out
or reuse the repeated code more efficiently. 
(_Yay, abstraction!_)

In addition, `@with_setup` will set up and tear down the test instance for each and every
test case. Knowing our code doesn't hold grudges, I mean since it doesn't carry the 
effect of previous executions, we can safely limit running them to a single time.

## _Test generators_ to the rescue!

Wouldn't it be wonderful to have a way of steamlining a list of test cases into a single
abstract tester function?

Test generators does exactly that!

```python
def test_sin_values():
  for x in [-2, -.1, 0, .1, 2]:
    yield check_sin_values, x

@with_setup(setupf, teardownf)
def check_sin_values(x):
  "Test for a valid float argument"
  assert_almost_equals(math.sin(x), sin(x), places=4)
```

We can generate a list of test data and test them one-by-one with the `check_` method.

Again, we can set to run the setting-up and tear-down process only once,
if there are no consequenses or effects of repeated calling on the function.

```python
@with_setup(setupf, teardownf)
def test_sin_values():
  for x in [-2, -.1, 0, .1, 2]:
    yield check_sin_values, x

def check_sin_values(x):
  "Test for a valid float argument"
  assert_almost_equals(math.sin(x), sin(x), places=4)
```

We can add more test cases:

```python
@with_setup(setupf, teardownf)
def test_sin_values():
  for x in [-2, -.1, 0, .1, 2]:
    yield check_sin_values, x
  for x in [-2j, -.1*1j, 0j, .1*1j, 2j]:
    yield check_sin_values, x
  for x in [(-2, -2), (-.1, -.1), (0, 0), (.1, .1), (2, 2)]:
    yield check_sin_values_complex, x

# def check_sin_values ...

def check_sin_values_complex(x):
  "Test for a valid complex float argument"
  p, q = x
  mysin = sin(p+complex(0,q))
  pysin = cmath.sin(p+complex(0,q))
  assert_almost_equals(mysin, pysin, places=4)
```

```bash
$ nosetests ./test_one.py --verbose
```

```
test_one.test_sin_values(-2,) ... ok
test_one.test_sin_values(-0.1,) ... ok
test_one.test_sin_values(0,) ... ok
test_one.test_sin_values(0.1,) ... ok
test_one.test_sin_values(2,) ... ok
test_one.test_sin_values(-2j,) ... ERROR
test_one.test_sin_values((-0-0.1j),) ... ERROR
test_one.test_sin_values(0j,) ... ERROR
test_one.test_sin_values(0.1j,) ... ERROR
test_one.test_sin_values(2j,) ... ERROR
test_one.test_sin_values((-2, -2),) ... ERROR
test_one.test_sin_values((-0.1, -0.1),) ... ERROR
test_one.test_sin_values((0, 0),) ... ok
test_one.test_sin_values((0.1, 0.1),) ... ERROR
test_one.test_sin_values((2, 2),) ... ERROR

============================================
ERROR: test_one.test_sin_values(-2j,)
--------------------------------------------
Traceback (most recent call last):
  File "c:\python27\lib\site-packages\nose\case.py", line 197, in runTest
    self.test(*self.arg)
  File "C:\users\nirmal\desktop\unit-testing\test_one.py", line 28, in check_sin_values
    assert_almost_equals(math.sin(x), sin(x), places=4)
TypeError: can't convert complex to float

============================================

...

--------------------------------------------
Ran 15 tests in 0.010s

FAILED (failures=9)
```

We can see that the complex numbered arguments make for completely inaccurate 
results in our `sin` function. We'll need to fix or rethink our code to handle 
such values... or we could throw an exception. 

To keep away from complex mathematics that's out of scope of today's subject, 
i'll choose to do the latter.

```python
def sin(rad):
  if isinstance(rad, complex):
    raise ValueError('sin(x) requires real arguments.') 
  return (e**(rad*1j)).imag
```

Then we'll assert the raising of the exception, since that's our (now) defined behavior.

```python
def check_sin_values_complex(x):
  "Test for a valid complex float argument"
  p, q = x
  assert_raises(ValueError, sin, p+complex(0,q))
```

This should get all the complex-number test cases to succeed.

But, the output doesn't show our carefully crafted test descriptions, does it?

On the other hand, we have done some redundant tests. For example, we don't need to check
for all negative values, floats and integers separately for testing complex input.

Let's be more concise in defining test cases. We can identify the actual test cases are:

1. Real integers
2. Real floats
3. Zero
4. Negative real (just testing floats should suffice)
5. Complex-typed numbers (just floats)
6. Pure imaginary numbers (just float)
7. Complex-typed negative numbers (just float)

Let's test for them with separate `test_` functions so that we can also
see our test descriptions along with the pass/fail result.

```python
@with_setup(setupf, teardownf)
def test_sin_values_int():
  "Test for a real intger argument"
  assert_almost_equals(math.sin(4), sin(4), places=4)

@with_setup(setupf, teardownf)
def test_sin_values_float():
  "Test for a real float argument"
  assert_almost_equals(math.sin(.4), sin(.4), places=4)

@with_setup(setupf, teardownf)
def test_sin_values_zero():
  "Test for a zero-valued argument"
  assert_almost_equals(math.sin(0), sin(0), places=4)

@with_setup(setupf, teardownf)
def test_sin_values_negative():
  "Test for a negative-valued argument"
  assert_almost_equals(math.sin(-.4), sin(-.4), places=4)
  assert_almost_equals(math.sin(-4), sin(-4), places=4)

@with_setup(setupf, teardownf)
def test_sin_values_imaginary_int():
  "Test for an imaginary integer argument"
  assert_raises(ValueError, sin, 4j)

@with_setup(setupf, teardownf)
def test_sin_values_imaginary():
  "Test for an imaginary float argument"
  assert_raises(ValueError, sin, .4*1j)

@with_setup(setupf, teardownf)
def test_sin_values_complex():
  "Test for a complex argument"
  assert_raises(ValueError, sin, .3+.4*1j)
  assert_raises(ValueError, sin, 3+4*1j)

@with_setup(setupf, teardownf)
def test_sin_values_complex_negative():
  "Test for a complex argument"
  assert_raises(ValueError, sin, -.3-.4*1j)
  assert_raises(ValueError, sin, -3-4*1j)
```

## Notes

We have done more than one assertion for some cases, to cover 
possibilities of that case. This way, if a specific sub-case fails, 
it's not hard to isolate it, yet we're not over-creating too-many unmanageable test-cases.

Selecting, ordering and sub-case testing for test cases is a subjective matter. 
It depends on the fine balancing between completeness and redundant bloat of test cases. 
We need to utilise our knowledge of the testee functionality to make good decisions.

Also, unit tests are not usually ultra-complete in their coverage of all possible cases 
because of human errors, imagination and variation of interest. If we still encounter 
bugs that escape the unit tests, we must add them to the list of tests for future use.

## What's next?

This is just an introduction to the basic philosophy and use of unit testing. In the
up-coming posts, I plan on discussing subjects including:

- Class method testing
- Mocking of data and services
- Code coverage principles

I'm sure my understanding, interpretation and presentation of the subject matter is 
incomplete and error-prone. I'm open for discussion and corrections :)