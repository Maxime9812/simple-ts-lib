import {hello} from "../index";

test('Hello', () => {
    expect(hello()).toBe('Hello World!');
});