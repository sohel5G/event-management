<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B 

<i>There is a typo in the code. Declared a variable as "greeting" but later tried to access a non-existent variable "greetign," which results in a ReferenceError, indicating that "greetign" is not defined in the scope of the program.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C 

<i> In JavaScript, when you use the + operator with a string and a number, it performs concatenation instead of addition. In this case, it concatenates the number 1 and the string "2" to produce the string "12." </i>


</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A 

<i> The code first assigns the value at food[0] ("🍕") to the favoriteFood property of the info object. Then, it changes the value of info.favoriteFood to "🍝." However, this change does not affect the original food array, so the food array remains unchanged, and its value is ['🍕', '🍫', '🥑', '🍔']. </i>


</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B 

<i> In the provided function sayHi(name), it expects an argument name, but when you call sayHi() without providing any arguments, name inside the function becomes undefined. Therefore, the return value will be "Hi there, undefined." </i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i> The forEach method iterates over the nums array and runs the provided function for each element. 0 is considered a falsy value, and all other numbers are truthy. Therefore, the condition if (num) evaluates to true for all numbers except 0. Since there are two non-zero numbers (1 and 2) in the nums array, the count variable is incremented twice, resulting in a value of 2. </i>

</p>
</details>
