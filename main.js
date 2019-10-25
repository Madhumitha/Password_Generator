var pass_length = prompt("Length of password? (must be between 8 and 128 characters)");

var char_type = prompt("Character type : Type 'S': Special character/Type 'L' : Lowercase/Type 'U' : Uppercase/Type 'N' : Number ")

// Validate the character type

if(char_type == null)
{
    var char_type = prompt("You have to enter atleast one character type");
}

// Split string into array

var char_array = char_type.split("");
console.log(char_array);

// Generating random lowercase, uppercase, special character or number 

function getRandomLowercase()
{
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

console.log(getRandomLowercase());

function getRandomUppercase()
{
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
console.log(getRandomUppercase());

function getRandomNumber()
{
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
console.log(getRandomNumber());

function getRandomSymbol() 
{
    const symbols = '!"#$%&()*+,-./:;<=>?@[\]^_`{|}~' ;
    return symbols[Math.floor(Math.random() * symbols.length)];
}
console.log(getRandomSymbol());


for(var i=0; i<char_array.length; i++)
{
    if(char_array[i] === 'S')
    {
        var special = getRandomSymbol();
    }
    if(char_array[i] === 'U')
    {
        var upper = getRandomUppercase();
    }
    if(char_array[i] === 'L')
    {
        var lower = getRandomLowercase();
    }   
    if(char_array[i] === 'N')
    {
        var number = getRandomNumber();
    }    
}


// Typecast 

var num = parseInt(pass_length);
console.log(num);


// Password Generator 

function generate() {
    let values = special + upper + lower + number ;

    let password = " ";

    

    for(var i=0; i <= num; i++) {
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }

    document.getElementById("display").value = password;

}
