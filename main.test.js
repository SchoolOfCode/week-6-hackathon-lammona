import {password} from "./main.js"
import {expect, test} from "vitest"

//test 1: Base test
test("Base test",() =>{

})

//test 2: Needs to be a string 
test("Password type is a string",() => {
    expect(typeof password()).toBe("string");
});

//test 3: Length min 8	max 20	
test("Length min 8	max 20",() => {
    const pwd = password()
    expect(pwd.length).toBeGreaterThanOrEqual(8);
    expect(pwd.length).toBeLessThanOrEqual(20);
});

























