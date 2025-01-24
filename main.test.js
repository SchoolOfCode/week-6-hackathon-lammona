import {openTheChest} from "./main.js"
import {expect, test, describe} from "vitest"

//Test: Base test
// test("Base test",() =>{
// });

// Test 2: Length min 8 max 20
// Describe block helps group related tests together. In this case, I've added it so that we can see overall what
// the following tests are checking, and use the individual test names to clearly show what we're using as test
// input and what we're expecting as a result
describe('Length min 8 max 20', () => {
    // Reference for test.each: https://vitest.dev/api/#test-each
    test.each([
        //check password smaller that 8
        { password: 'Bananas', expected: false },
        //check password bigger that 20
        { password: 'applesAndBananasapplesAndBananas', expected: false },
        //check password exactly 8
        { password: 'Bananas1', expected: true },
        //check password exactly 20
        { password: 'Bananas123Bananas123', expected: true },
        //check password in range 8-20
        { password: 'banaNas123', expected: true }
    ])('$password should return $expected', ({password, expected}) => {
        expect(openTheChest(password)).toBe(expected);
    });
});

// Have a go at refactoring these tests to use test.each the way I did with the ones above
// Test 3: Password includes at least one upper and one lower case
test ("Password includes at least one upper and one lower case", () =>{
    const includesBoth = "BANAnana";
    expect(openTheChest(includesBoth)).toBe(true);
    const includesBig = "BANANANNNA";
    expect(openTheChest(includesBig)).toBe(false);
    const includesLower = "banaaaana";
    expect(openTheChest(includesLower)).toBe(false);
});