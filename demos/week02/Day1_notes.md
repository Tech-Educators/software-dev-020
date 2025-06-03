## Introduction to JavaScript Variables

Sam Louloudis began the session by expressing their enthusiasm for JavaScript and introducing the concept of variables. Luke defined a variable as a changeable value or condition that can alter an outcome. Sam Louloudis elaborated that in programming, a variable is a stored value, illustrating this with an example of tracking game days.

## Storing and Updating Values with Variables

Sam Louloudis explained how a variable, like 'day', can store a value and be updated through mathematical operations, such as adding one. They emphasized that the right-hand side of an equation is calculated first, and the result is then assigned to the variable on the left. This allows for dynamic tracking and modification of values within a program.

## Terminal Commands and Project Setup

Sam Louloudis briefly reviewed basic terminal commands and then guided the participants in creating a new directory for the week's project. They discussed the importance of using the terminal for better understanding of Git and error outputs. Sam Louloudis clarified that for each new project, a new repository should be created and cloned, rather than creating a local folder first.

## Linking JavaScript to HTML

Sam Louloudis quizzed the participants on how to link a CSS file and then asked how to link an `app.js` file to `index.html`. Maggie provided the correct answer, which is to use a `<script>` tag with the `src` attribute set to `app.js`. Sam Louloudis also instructed to include the `defer` attribute in the `<script>` tag, explaining that it's important and will be discussed later.

## Introduction to JavaScript as a Programming Language

Sam Louloudis described JavaScript as a programming language that adds interactivity to websites, noting it was created quickly and its name was chosen to capitalize on the popularity of Java, despite them being quite different. They mentioned JavaScript's evolution from a small scripting language for minor website functionalities to a powerful tool used in various applications, including server-side and non-web applications.

## Using `console.log()` for Output

Sam Louloudis introduced `console.log()` as JavaScript's equivalent of `print` for displaying information in the console. They demonstrated how to output strings (text enclosed in quotes), numbers, and the results of mathematical operations using `console.log()`. They highlighted that omitting quotes around text causes JavaScript to interpret it as a variable name, leading to an error if the variable is not defined.

## Data Types in JavaScript: Strings and Numbers

Sam Louloudis explained different data types in JavaScript, starting with strings, which are text enclosed in single or double quotes, or backticks. They clarified that numbers in JavaScript encompass both integers and floating-point numbers as the same data type. Sam Louloudis pointed out that numbers within quotes are treated as strings, not numerical values for calculations.

## Booleans and Variable Naming Conventions

Sam Louloudis introduced booleans as a data type with only two values: `true` or `false`, often representing on/off states. They emphasized the importance of using descriptive variable names instead of single letters and demonstrated the camelCase naming convention (lowercase first word, uppercase subsequent words) used in JavaScript. Sam Louloudis mentioned that spaces and dashes are not allowed in variable names, but underscores can be used if necessary.

## Arithmetic Operators in JavaScript

Sam Louloudis demonstrated basic arithmetic operators in JavaScript, including addition (+), subtraction (-), division (/), and multiplication (*). They showed how these operators can be used with variables holding numerical values, and the results are determined by the values assigned to those variables. Sam Louloudis also reminded the participants that the order of operations (like in mathematics) applies in JavaScript, and parentheses can be used to control this order.

## Comparison Operators in JavaScript

Sam Louloudis introduced comparison operators, which evaluate to either `true` or `false`. They covered less than (<), greater than (>), and then addressed how to check for equality. Sam Louloudis clarified that a single equals sign (=) is for assignment, while double equals (==) and triple equals (===) are used for comparison. They explained that double equals checks if two values are the same, whereas triple equals checks if both the value and the data type are the same. Sam Louloudis also mentioned the greater than or equal to (>=) and less than or equal to (<=) operators.

## Comparison Operators

Sam Louloudis explained that double equals (==) checks for value equality and triple equals (===) checks for both value and data type equality. For example, 5 == "5" is true, but 5 === "5" is false because their data types are different.

## Concatenation

Sam Louloudis introduced concatenation, the process of joining strings together. Using the plus (+) operator combines strings directly without spaces unless explicitly added. Template literals (using backticks `` and ${variable}`) offer another way to embed variables within strings, which Sam Louloudis prefers for complex strings.

## Typeof Operator

Sam Louloudis demonstrated the `typeof` operator, which returns the data type of a variable. For instance, `typeof 43` will return "number", and `typeof "hello"` will return "string". This is useful for verifying the data type of a variable.

## Let vs. Const

Sam Louloudis clarified the difference between `let` and `const` for variable declaration. Variables declared with `let` can be reassigned new values after their initial declaration. In contrast, variables declared with `const` cannot be reassigned after their initial value is set, and attempting to do so will result in a TypeError. Sam Louloudis suggested using `const` as the default unless the variable's value is expected to change.

## Console.log

Sam Louloudis reiterated that `console.log()` is a tool for developers to display the output of their code and check variable values in the browser's developer console. This is not something that end-users will see.

## Data Types Recap

Sam Louloudis reviewed the three primary data types: numbers, strings (sequences of characters in quotes), and booleans (true or false values). He also mentioned that variable names should be in camel case for better readability.

## Logical AND Operator

Sam Louloudis explained the logical AND operator (`&&`), which requires both the left and right expressions to be true for the entire expression to be true. For example, `weather === "sunny" && needsSunscreen` would only be true if both conditions are met.

## Logical OR Operator

Sam Louloudis described the logical OR operator (`||`), where the entire expression is true if at least one of the left or right expressions is true. For instance, `weather === "snowy" || needsSunscreen` would be true if the weather is snowy or if `needsSunscreen` is true.

## Logical NOT Operator

Sam Louloudis introduced the logical NOT operator (`!`), which inverts the boolean value of an expression. If a value is truthy, `!` will make it false, and if it's falsy, `!` will make it true. Non-boolean values are first converted to booleans based on their truthiness or falsiness.

## Truthiness and Falsiness

Sam Louloudis discussed the concepts of truthy and falsy values in JavaScript. While `true` is explicitly true and `false` is explicitly false, certain other values are treated as truthy (e.g., non-empty strings, non-zero numbers) or falsy (e.g., `undefined`, `null`, `NaN`, `0`, empty strings) when evaluated in a boolean context.

## Undefined and Null

Sam Louloudis briefly explained `undefined` and `null`. `undefined` typically indicates that a variable has been declared but not yet assigned a value, while `null` is often used to intentionally represent the absence of a value.

## Null vs. Undefined

Sam Louloudis clarified that `null` is a purposeful absence of a value, while `undefined` is something developers are unlikely to type directly. Sam then transitioned to the workshop activity.

## Setting up JavaScript in HTML

Sam Louloudis demonstrated how to create a new directory for a JavaScript file and link it to an HTML file using a script tag with the `defer` attribute. They explained that `defer` ensures the JavaScript runs after the HTML is fully read, which is important for interacting with HTML elements.

## Console Logging Shortcut

SammyDizzle inquired about a shortcut for `console.log`, and Sam Louloudis identified it as part of the ES7 extension. Sam recommended downloading this extension for the shortcut and its other features.

## Introduction to If Statements

Sam Louloudis introduced `if` statements in JavaScript, explaining the syntax: `if (condition) { // code to run }`. They emphasized that the code inside the curly brackets only executes if the condition within the parentheses evaluates to `true`.

## Truthiness and Falsiness in If Statements

Sam Louloudis illustrated how different conditions affect the execution of code within `if` statements. They showed that only if the condition evaluates to `true` will the associated code block run, and otherwise, it will be skipped. Sam also pointed out that VS Code can sometimes detect conditions that will never be true.

## Equality Operators in JavaScript

Sam Louloudis discussed the difference between the double equals (`==`) and triple equals (`===`) operators. They explained that `==` checks for value equality, while `===` checks for both value and data type equality.

## Using `prompt()` for User Input

Sam Louloudis introduced the `prompt()` function, which allows asking users for input and storing their response in a variable. They demonstrated how to use this input within an `if` statement to create dynamic behavior.

## `else` and `else if` Statements

Sam Louloudis explained how to use `else` to execute code when the `if` condition is false, and `else if` to chain multiple conditions together. They emphasized that in a series of `if`/`else if` statements, only the code block associated with the first true condition is executed.

## JavaScript Formatting Tips

Sam Louloudis provided tips for efficient coding in VS Code, particularly when writing `if` statements, by utilizing automatic parenthesis and bracket completion and keyboard shortcuts for navigation. They also stressed the importance of correct bracket usage and order.

## Difference between JavaScript and PHP Conditionals

Luke asked about the difference between `if/else` and `if/endif` found in PHP, and Sam Louloudis clarified that JavaScript uses curly brackets to define code blocks for conditional statements, eliminating the need for an `endif` keyword.

## Introduction to the DOM (Document Object Model)

Sam Louloudis introduced the DOM as the browser's internal representation of an HTML document, structured as a tree. They explained that the DOM allows JavaScript to interact with and modify the HTML structure and content.

## DOM Tree Structure

Sam Louloudis illustrated how a simple HTML document is represented as a tree structure in the DOM, with the HTML tag as the root, branching into `head` and `body`, and further down to elements like `title`, `h1`, and `p`. They noted that this structured model enables JavaScript to navigate and manipulate the HTML.

## Modifying DOM Elements using `getElementById`

Sam Louloudis demonstrated how to select a specific HTML element using `document.getElementById()` by first assigning an `id` attribute to the element. They emphasized the need to store the retrieved DOM node in a variable for further manipulation.

## Examining DOM Element Properties

Sam Louloudis showed that when a DOM element is logged to the console, it reveals various properties and methods that can be accessed and modified using JavaScript. They specifically pointed out the `innerText` property as a way to change the text content of an element.

## Changing Text Content with `innerText`

Sam Louloudis demonstrated how to change the text content of a selected HTML element using the `innerText` property and assigning a new string value to it. They highlighted that this modification happens in the browser's representation (the DOM) without altering the original HTML file.

## Modifying Element Styles

Sam Louloudis showed how to directly modify the CSS styles of a DOM element using the `style` property and assigning CSS properties like `backgroundColor`.

## Creating New HTML Elements with `createElement`

Sam Louloudis explained how to create new HTML elements using `document.createElement()` and providing the tag name as an argument. They emphasized the importance of storing the newly created element in a variable.

## Adding Elements to the DOM with `appendChild`

Sam Louloudis demonstrated that after creating and modifying a new HTML element, it needs to be added to the DOM tree to become visible on the page using `document.body.appendChild()`. This method appends the specified node as the last child of the parent element (in this case, the `body`).

## Importance of Understanding the DOM Process

Sam Louloudis stressed that while memorizing specific DOM methods is not crucial, understanding the general process of selecting, modifying, and adding elements is key. Connor Mitchell echoed this, advising to focus on the process and look up specific syntax as needed.

## Creating Dynamic Greetings Based on User Input

Sam Louloudis combined `prompt()`, `if/else if/else` statements, and DOM manipulation to create a personalized greeting based on the user's name input. They demonstrated creating a new `marquee` element, setting its `innerText` based on the username, and appending it to the document body.

## The Role of HTML, CSS, and JavaScript

In response to a question about the necessity of HTML and CSS if JavaScript can create a website, Sam Louloudis explained that while JavaScript can manipulate the DOM extensively (as seen in frameworks like React), HTML provides the basic structure and CSS handles styling. They noted that for simple, static websites, HTML might suffice, while JavaScript adds interactivity and dynamic content. Sam also mentioned potential performance considerations on slower computers when relying heavily on JavaScript for DOM manipulation.

## Document Selectors

Sam Louloudis discussed the use of `querySelector` and `document.getElementById` in JavaScript. While both achieve similar results in selecting elements, `querySelector` uses CSS-style selectors, whereas `document.getElementById` targets specific IDs. Connor Mitchell supported the preference for using classes for CSS styling and IDs primarily for JavaScript selection, as it's often necessary to target unique elements in JavaScript. Sam Louloudis agreed with this approach for clarity, especially for beginners, and suggested focusing on selecting single elements for now.

## Introduction to Functions

Sam Louloudis introduced the concept of functions in programming, comparing them to mathematical functions or a set of instructions. Functions can take inputs, produce outputs, and, most importantly, are reusable, allowing for the execution of a set of instructions multiple times without rewriting the code. Sam Louloudis used the analogy of preparing and invoking a spell to explain the two phases of using functions: declaration (preparation) and invocation (execution). Sam Louloudis emphasized that both steps are necessary for a function to run.

## Function Declaration and Invocation

Sam Louloudis demonstrated how to declare a function using the `function` keyword, followed by a name, parentheses, and curly brackets containing the function's code. To execute or "invoke" the function, one needs to write the function name followed by parentheses. Sam Louloudis highlighted that simply declaring a function does not make it run; it must be explicitly invoked. By invoking a function multiple times, the code inside it can be executed repeatedly, demonstrating the reusability of functions.

## Parameters and Arguments

Sam Louloudis explained that parameters are like variables that a function can accept during its declaration, while arguments are the actual values provided when the function is invoked. Using a `sum` function as an example, Sam Louloudis showed how different arguments passed during invocation could lead to different results. Sam Louloudis clarified that each function invocation creates a new instance, independent of previous executions. Sam Louloudis also pointed out that built-in JavaScript functions like `console.log` and `document.getElementById` also utilize arguments.

## `defer` Attribute in Script Tags

Sam Louloudis explained the importance of the `defer` attribute in the `<script>` tag. Without `defer`, the browser will immediately execute the JavaScript code as soon as it encounters the `<script>` tag, potentially before the HTML is fully loaded, leading to errors when trying to access HTML elements. The `defer` attribute postpones the execution of the JavaScript file until the browser has finished parsing all the HTML. Sam Louloudis mentioned they would provide a demonstration of this the following day.

## Practical Function Example

Sam Louloudis created a function called `makeStringCooler` that takes a string as a parameter and uses a template literal to add sunglasses to it before logging it to the console. This demonstrated a more practical application of functions where the same piece of code could be reused with different input arguments to produce varied outputs. Sam Louloudis encouraged questions and acknowledged that understanding the usefulness of functions might take time.
