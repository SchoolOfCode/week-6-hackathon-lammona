import {openTheChest} from "./main.js"
import {expect, test} from "vitest"

// //test 1: Base test
// test("Base test",() =>{
// })


//test 2: Length min 8 max 20	
// test("Length min 8 max 20",() => {
//     //test password smaller that 8
//     const shortP = "bananas";
//     expect(openTheChest(shortP)).toBe(false);
//     //test password bigger that 20
//     const longP = "afsgdhetdfsgahthjfkfkjhfjhgsgwtwsdf";
//     expect(openTheChest(longP)).toBe(false);
//     //test password exactly 8
//     const exactly8 = "bananas1";
//     expect(openTheChest(exactly8)).toBe(true);
//     //test password exactly 20
//     const exactly20 = "bananas123bananas123";
//     expect (openTheChest(exactly20)).toBe(true);
//     //test password in range 8-20
//     const validPass = "bananas123";
//     expect(openTheChest(validPass)).toBe(true);
// });


// //Test 3: if password contains lower Case
// test ("Password includes lowercase", () =>{
//     const includesLower = "banananana";
//     expect(openTheChest(includesLower)).toBe(true);

//     const includesBig = "BANANANANA";
//     expect(openTheChest(includesBig)).toBe(false)
// })


//Test 4: Check if password contains upper case
    test("Password includes uppercase", ()=>{
        const includesUpper = "BANANNANANA";
        expect(openTheChest(includesUpper)).toBe(true);
        const includesSmall = "bananananananana";
        expect(openTheChest(includesSmall)).toBe(false);
    });











    
//     //Test: 2 Password should include 1 uppercase
// test('Password includes uppercase', () => {
//     const includesUpper = "baNanashgf";
//     expect(openTheChest(includesUpper)).toBe(true);

//   });
  

//   // Test Case 4: Password missing uppercase letter
//   test('Password is missing uppercase letter', () => {
//     expect(openTheChest('onlylowercase1')).toBe(false);
//   });








//test 3: Provided password needs to be a string -> return true or false

//test("Password type is a string",() => {
//     const passwordStr = "1111";
//     expect(openTheChest(passwordStr)).toBe(true);

//     const passwordNo = 123;
//     expect(openTheChest(passwordNo)).toBe(false);










    // expect(openTheChest(password)).toBeGreaterThanOrEqual(8);
    // expect(openTheChest(password)).toBeLessThanOrEqual(20);
    
    // const pwd = openTheChest()
    // expect(pwd.length).toBeGreaterThanOrEqual(8);
    // expect(pwd.length).toBeLessThanOrEqual(20);


//test 2: Provided password needs to be a string -> return true or false
// test("Password type is a string",() => {
//     expect(typeof openTheChest()).toBe(Boolean);
// });
//

// 

// });























