// map
const myMap = (array, callback) =>
    array.reduce((acc, item, index) => {
        acc.push(callback(item, index, array));
        return acc;
    }, []);

// filter
const myFilter = (array, callback) =>
    array.reduce((acc, item, index) => {
        if (callback(item, index, array)) {
            acc.push(item);
        }

        return acc;
    }, []);

// reduce
const myReduce = (
    array,
    callback,
    initialValue
) =>
    array.reduce(
        callback,
        initialValue
    );

// compose
const compose =
    (...functions) =>
    value =>
        functions.reduceRight(
            (acc, fn) => fn(acc),
            value
        );

// pipe
const pipe =
    (...functions) =>
    value =>
        functions.reduce(
            (acc, fn) => fn(acc),
            value
        );

// curry
const curry = fn => {
    return function curried(...args) {
        if (
            args.length >= fn.length
        ) {
            return fn(...args);
        }

        return (...nextArgs) =>
            curried(
                ...args,
                ...nextArgs
            );
    };
};

// partial
const partial =
    (fn, ...fixedArgs) =>
    (...remainingArgs) =>
        fn(
            ...fixedArgs,
            ...remainingArgs
        );

// memoize
const memoize = fn => {
    const cache = {};

    return (...args) => {
        const key =
            JSON.stringify(args);

        if (cache[key]) {
            return cache[key];
        }

        const result =
            fn(...args);

        cache[key] = result;

        return result;
    };
};

// chainable API
const chain = data => ({
    map(fn) {
        return chain(
            myMap(data, fn)
        );
    },

    filter(fn) {
        return chain(
            myFilter(data, fn)
        );
    },

    value() {
        return data;
    }
});

module.exports = {
    myMap,
    myFilter,
    myReduce,
    compose,
    pipe,
    curry,
    partial,
    memoize,
    chain
};