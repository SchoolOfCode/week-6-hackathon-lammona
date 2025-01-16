export function openTheChest(password){

    // // check if password has correct length
    // if (password.length >= 8 && password.length <= 20){
    //     return true
    // }else{
    //     return false;
    // }





















    // //check if password has at least 1 lowercase
    // const lowercases = "abcdefghijklmnopqrstuvwxyz";
    // for (let i = 0; i < password.length; i++){
    //     if (lowercases.includes(password[i])){
    //         return true;
    //     }else{
    //     }
    // }
    // return false


//check if password has at least 1 uppercase
    const uppercases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i = 0; i < password.length; i++){
        if (uppercases.includes(password[i])){
            return true;
        }else{
        }
    }
    return false
}





 // const hasLowercase = /[a-z]/.test(password);
    // const hasUppercase = /[A-Z]/.test(password);






















//     if(typeof password !== "string"){
//         return false;
//     }

//     return true
// }