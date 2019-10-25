// Author: Madhumitha Prabakaran 



var pass_length = prompt("Length of password? (must be between 8 and 128 characters)");

var char_type = prompt("Enter Character type without space: Type 'S': Special character/Type 'L' : Lowercase/Type 'U' : Uppercase/Type 'N' : Number ")

// Validate the character type

if(char_type == null)
{
    var char_type = prompt("You have to enter atleast one character type");
}

// Split string into array

var char_array = char_type.split("");
console.log(char_array);

// Typecast 

const num = parseInt(pass_length);
console.log(num);


let flag_L = 0; 
let flag_U = 0;
let flag_N = 0;
let flag_S =  0;

// Character type functions 

if(char_array[0] == 'U' || char_array[1] == 'U' || char_array[2] == 'U' || char_array[3] == 'U')
{
     flag_U = 1;
    function getRandomUppercase()
{
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
console.log(getRandomUppercase());
}

 if (char_array[0] == 'L' || char_array[1] == 'L' || char_array[2] == 'L' || char_array[3] == 'L')
{   
     flag_L = 1;

    function getRandomLowercase()
    {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    }
    
    console.log(getRandomLowercase());
}
 if (char_array[0] == 'N' || char_array[1] == 'N' || char_array[2] == 'N' || char_array[3] == 'N')
{   
     flag_N = 1;
    
    function getRandomNumber()
    {
        return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    }
    console.log(getRandomNumber());
}
if (char_array[0] == 'S' || char_array[1] == 'S' || char_array[2] == 'S' || char_array[3] == 'S')
{   
     flag_S = 1;
    
    function getRandomSymbol() 
    {
        const symbols = '!@#$%^&*(){}[]+<>?<>' ;
        return symbols[Math.floor(Math.random() * symbols.length)];
    }
    console.log(getRandomSymbol());
}


// Password Generator 

function generate() {
    let password = '';
    

   for(let i=0; i < num; i++) {
        if (flag_S == 1)
        {
           password += getRandomSymbol();
        }
        if (flag_L == 1)
        {
           password += getRandomLowercase();
        }
        if (flag_U == 1)
        {
           password += getRandomUppercase();
        }
        if (flag_N == 1)
        {
           password += getRandomNumber();
        }
    }

    password = password.slice(0, num);

    console.log(password);

    document.getElementById("display").value = password;

}

// Copy password to clipboard 

function copyToClipboard(){

    document.getElementById("display").select();

    document.execCommand("Copy");

    alert("Password copied!");
}

