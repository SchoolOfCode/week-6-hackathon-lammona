import {openTheChest} from "./main.js"
import {expect, test} from "vitest"

//Test 1: Base test
test("Base test",() =>{
});


// Test 2: Length min 8 max 20	
test("Length min 8 max 20",() => {
//check password smaller that 8
    const shortP = "Bananas";
    expect(openTheChest(shortP)).toBe(false);
//check password bigger that 20
    const longP = "applesAndBananasapplesAndBananas";
    expect(openTheChest(longP)).toBe(false);
//check password exactly 8
    const exactly8 = "Bananas1";
    expect(openTheChest(exactly8)).toBe(true);
//check password exactly 20
    const exactly20 = "Bananas123Bananas123";
    expect(openTheChest(exactly20)).toBe(true);
//check password in range 8-20
    const validPass = "banaNas123";
    expect(openTheChest(validPass)).toBe(true);
});


// Test 3: Password includes at least one upper and one lower case
test ("Password includes at least one upper and one lower case", () =>{
    const includesBoth = "BANAnana";
    expect(openTheChest(includesBoth)).toBe(true);
    const includesBig = "BANANANNNA";
    expect(openTheChest(includesBig)).toBe(false);
    const includesLower = "banaaaana";
    expect(openTheChest(includesLower)).toBe(false);
});