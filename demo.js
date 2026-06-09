const {
    myMap,
    myFilter,
    myReduce,
    compose,
    pipe,
    curry,
    partial,
    memoize,
    chain
} = require("./dataTransform");

console.log("\n=== MAP ===");

console.log(
    myMap(
        [1, 2, 3, 4, 5],
        x => x * 2
    )
);

console.log("\n=== FILTER ===");

console.log(
    myFilter(
        [1, 2, 3, 4, 5],
        x => x > 2
    )
);

console.log("\n=== REDUCE ===");

console.log(
    myReduce(
        [1, 2, 3, 4, 5],
        (sum, value) => sum + value,
        0
    )
);

console.log("\n=== COMPOSE ===");

const double = x => x * 2;
const square = x => x * x;

console.log(
    compose(square, double)(5)
);

console.log("\n=== PIPE ===");

console.log(
    pipe(double, square)(5)
);

console.log("\n=== CURRY ===");

const add =
    (a, b, c) =>
        a + b + c;

const curriedAdd =
    curry(add);

console.log(
    curriedAdd(1)(2)(3)
);

console.log("\n=== PARTIAL ===");

const multiply =
    (a, b, c) =>
        a * b * c;

const multiplyBy2 =
    partial(multiply, 2);

console.log(
    multiplyBy2(3, 4)
);

console.log("\n=== MEMOIZE ===");

const factorial =
    memoize(function fact(n) {
        if (n <= 1) {
            return 1;
        }

        return n * fact(n - 1);
    });

console.log(
    factorial(10)
);

console.log("\n=== CHAINABLE API ===");

const result = chain(
    [1, 2, 3, 4, 5]
)
    .filter(x => x > 2)
    .map(x => x * 10)
    .value();

console.log(result);