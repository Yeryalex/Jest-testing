# JavaScript Testing with Jest

A hands-on repository dedicated to learning and applying automated unit testing and Test-Driven Development (TDD) principles in JavaScript, built in accordance with [The Odin Project](https://www.theodinproject.com/) (TOP) JavaScript curriculum.

---

## Overview

This project focuses on writing clean, modular, and maintainable unit tests using **Jest**. The primary objectives are:

- Internalizing the TDD workflow: **Red → Green → Refactor**.
- Writing test suites covering edge cases, invalid inputs, and boundary values.
- Mastering ES Module setup and build workflows with Babel and Webpack.
- Developing modular software that is testable by design.

---

## Projects & Exercises

Following the TOP Testing JavaScript assignment path, this repository contains implementations and full test suites for:

1. **`capitalize(string)`**
   - Returns the provided string with the first character capitalized.
   - Handles edge cases: single characters, empty strings, numbers/special characters, and already capitalized strings.

2. **`reverseString(string)`**
   - Returns the provided string reversed.
   - Handles edge cases: multi-word phrases, punctuation, numbers, and empty strings.

3. **`calculator`**
   - An object containing primary arithmetic operations: `sum`, `substract`, `multiply`, and `divide`.
   - Validates proper numerical arguments using strict checks (`Number.isFinite()`).
   - Rejects non-number primitives, `null`, `NaN`, and improper inputs.
   - Handles division by zero and operations involving `0`.

4. **`caesarCipher(string, shift)`**
   - Encrypts a string by shifting characters along the alphabet.
   - Features:
     - Alphabet wrapping (from `z` to `a`).
     - Preserves letter casing (uppercase remains uppercase, lowercase remains lowercase).
     - Keeps non-alphabetical characters (spaces, punctuation, numbers) intact.
     - Handles negative shifts and shifts greater than 26 (`shift % 26`).

5. **`analyzeArray(array)`**
   - Takes an array of numbers and returns an object with the following properties:
     - `average`
     - `min`
     - `max`
     - `length`
   - Handles edge cases: single-element arrays, negative numbers, and non-array / empty inputs.

---

## 🛠️ Tech Stack & Tooling

- **Runtime:** [Node.js](https://nodejs.org/) (v18+)
- **Test Framework:** [Jest](https://jestjs.io/)
- **Transpiler:** [Babel](https://babeljs.io/) (`@babel/core`, `@babel/preset-env`) to support ES Modules (`import`/`export`) in Jest tests.
- **Bundler:** [Webpack](https://webpack.js.org/) for modular builds.

---

## 📂 Project Structure

```text
.
├── src/
│   ├── calculator.js
│   ├── caesarCipher.js
│   ├── stringOps.js
│   └── analyzeArray.js
|   |__ ...
├── tests/
│   ├── calculator.test.js
│   ├── caesarCipher.test.js
│   ├── stringOps.test.js
│   └── analyzeArray.test.js
├── ...
├── .babel.config.js
├── package-lock.json
├── package.json
└── README.md
```
