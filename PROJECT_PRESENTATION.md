Put your plan, story, and any supporting material here, you could use the help of a readme markdown generator such as [readme.so](https://readme.so/)



Open the Chest Challenge

Story:
Your task is to create a function called openTheChest. The input will always be a string. The function should return true if all the conditions below are met; otherwise, it should return false.

Conditions:

The string must be between 8 and 20 characters long, inclusive.
The string must contain at least one lowercase letter.
The string must contain at least one uppercase letter.

Planning: 
We have started with *Disney Ideation room, collected all ideas, did some reaserch on codewars,
 *Critics room to discuss what can go wrong and what might be to easy. 
 *Realist room where we have chosen our personal topics and started to create strtch goals for our own katas.

MVP 1:
* create all the files: main.js, main.test.js, .gitignore etc.
* install essentials like: node, vitest
* add vitest to the script and vitest move to devdependencies
* import function to test file,
* import expect and test from "vitest"
* export function in main.js file
* create first TTD- write red and green tests with first condtion/test and 1st refactor


Conditions/ Tests

    1. Bare Bones Test                                                  MVP 1   test 1
	2. Length min 8	max 20		                                        MVP 1	test 2
	3. 1 capital letter				                                    MVP 2	test 3
	4. 1 lowercase letter			                                    MVP 2	test 3
	5. 1 number				                                            MVP 3	test 4
	6. special character	anything else from number of letter			MVP 4	test 5
						
Team work: 
* We have worked as team of 3.
* Regular breaks
* Regular stand ups to check how everyone is doing and if they need any help

Presentations:
10am- present to our team 
11am- present to other rooms
13.20 main presentation



Solution:

export function openTheChest(password){
    // check if password has correct length
    if (password.length >= 8 && password.length <= 20){
        //-has correct length - move forward
    }else{
        return false; //-else finish the function and return false
    }

    // check if password includes upper and lower cases
    let hasLowerCase = false;
    let hasUpperCase = false;

    const lowercases = "abcdefghijklmnopqrstuvwxyz";
    const uppercases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i = 0; i < password.length; i++){
        if (lowercases.includes(password[i])){
            hasLowerCase = true;
        }
        if (uppercases.includes(password[i])){
            hasUpperCase = true;
        }
    }
    return hasLowerCase && hasUpperCase;
}