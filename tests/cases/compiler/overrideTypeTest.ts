// Test for the Override<T, U> type

interface Foo {
    a: string;
    b: number;
}

interface Bar {
    a: number;
}

interface Expected {
    a: number;
    b: number;
}

type Result = Override<Foo, Bar>;

const test: Result = {
    a: 1, // type of `a` should be overriden
    b: 2, // type of `b` should be inherited
}
