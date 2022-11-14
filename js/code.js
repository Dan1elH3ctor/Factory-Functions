// display username and surname
function userDetails(firstName, surname){
    return {
        firstName: firstName,
        surname: surname,
        display: function(){
            console.log(`Name: ${firstName}\Nsurname ${surname}`)
        }
    }
}

// create an instance
let person1 = userDetails(`Joel`, `Mukanya`);
person1.firstName = `Thsimanga`;
person1.display();
console.log("===================");
const person2 = userDetails(`Oslin`, `Johnson`);
person1.display();