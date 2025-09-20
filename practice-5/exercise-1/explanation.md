## Refactor Explanation: Removing Hoisting Behaviors

**Specific hoisting behaviors I “broke” from the legacy code:**

1. **Variable hoisting to `undefined`**: The legacy code used variables before their declaration (line 3 with `productName`, line 19 with `discountValue`), which resulted in `undefined` due to `var` hoisting. With `let`/`const`, this throws a ReferenceError (temporal dead zone), forcing declaration before use.

2. **Confusing function hoisting**: Line 4 called `calculateSubtotal()` before its declaration (line 9), relying on function-declaration hoisting. Converting this to a `const` arrow function means the binding is hoisted but not initialized (temporal dead zone), so it must be declared before use.

3. **Hoisting of function expressions**: Lines 25 and 32 used `var` for function expressions, creating confusion about when they were available. By using `const`, the bindings are hoisted but not initialized (temporal dead zone), requiring declaration before use.

**Why this makes the code safer and more predictable:** It removes surprises like `undefined` and the mental overhead of "jumping around" the file to figure out what's available. The execution flow is now fully linear and predictable, making the code easier to debug, maintain, and understand.
