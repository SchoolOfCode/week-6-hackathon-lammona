export function openTheChest(password){
    // check if password has correct length
    if (password.length >= 8 && password.length <= 20){
        //has correct length - move forward
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