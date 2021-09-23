import React from 'react'

const String = () => {
    const style={
        color:'red'
    }
    //1 String repeat():
    //The String repeat() method is a very fun one. 
    // You can take any string and repeat over it so that it displays multiple times.
    const myString = 'hi there. ';
    const repeatedString = myString.repeat(5);
    console.log(repeatedString);

    //2 String concat():
    // This method is used to join the calling string and the provided string arguments. 
    // It returns a new String object containing the calling string and the provided arguments . 
    // If no arguments are provided, it returns the original calling string.
    const strA = "How old"
    const strB = " are you?"
    let joinedString = strA.concat(strB)
    console.log(joinedString);

    //3 Convert numbers to a String
    const string = ""
    const stringOfNumbers = string.concat(1, 2, 3, 4, 5)
    console.log(stringOfNumbers);

    //4 String includes():
    // The includes method checks a provided string against the calling String object
    // it returns true if the calling String object contains the provided string and false otherwise. 
    // If no arguments are provided, the method returns false.

    let str = "are you available for the meetup?"
    const searchWord = "meetup"
    const isPresent = str.includes(searchWord)
    console.log(isPresent)

    //5 Verify a name in comma separated values

    const names = "mike, vishal, vishu, john, liz"
    let name = "vishu";
    let isPresnt = names.includes(name)
    console.log(isPresnt);

    // 6 String indexOf():
    // This method checks for the first appearance of a provided string argument within the calling string and returns the index. 
    // It returns -1 if the string argument can’t be found within the calling String.

    let sentence = "find the index of the first occurrence of me in this sentence"
    const keyWord = "me"
    let keyWordIndex = sentence.indexOf(keyWord);
    console.log(keyWordIndex);

    //7 Verify the first word in a sentence
    //The .indexOf() method is commonly used to verify the first occurence and position of a word in a sentence.

    const sentences = 'Friday is the last day';
    const day = 'Friday';
    const hasDay = sentences.indexOf(day);
    console.log(hasDay);

    //8 String lastIndexOf()
    // The lastIndexOf() method returns the last position within a String object which an element can be found.
    //  The search starts from the last position of the String object.
    //  The method will return -1 if the specified parameter cannot be found.
    const namr = "sean, becky, liz, wale, blue, vishal, john"
    const searchItem = "vishal"
    const lastSimilarName = namr.lastIndexOf(searchItem)
    console.log(lastSimilarName)

    //9 Find the last word repitition in a list

    const words = "the house, the car, the book, the mac and the cheese"
    const searchTerm = "the"
    let lastIndexOfWord = words.lastIndexOf(searchTerm);
    console.log(lastIndexOfWord);

    //10 String length:
    // The length property of the String object returns the number of code points in a string object.
    //  It indicates the length of the string.

    const word = "vishalmane"
    let lengthOfWord = word.length
    console.log(`${word} has ${lengthOfWord} letters in it`);

    //11 Verify password length

    const password = 'VishaL@!123';
    if (password.length < 8) {
        console.log('Your password is weak')
    } else {
        console.log("Strong password selected")
    }

    //12 String match():
    // This method is a called against a regular expression and returns the matching values in the string. 
    // The return value is an array containing the matched values. 
    // If no matches are found within the string, null is returned.

    const sentce = "How Do yOu feEl about chANGing the WoRLD"
    const regex = /[a-z]/g;
    let lowerCaseLetters = sentce.match(regex)
    console.log(lowerCaseLetters)

    //13 Extract specific information from a string

    const email = 'hello@vishal.com is my email, but i also use sign@vishal.com or help@sweets.com';
    const re = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi;
    const matches = email.match(re);
    console.log(matches);

    //14 String startsWith():
    // The startsWith method takes a string parameter and checks if the calling string starts with the value provided. 
    // It returns a Boolean value, true if the string starts with the provided value and false if not.
    //  It is case sensitive meaning the case of the search term needs to match that of the calling string.

    const sentces = "the lazy brown fox just couldn't move"
    const keyWords = "the"
    let checkFirstWord = sentces.startsWith(keyWords)
    console.log(checkFirstWord)

    //15 String matches specific string
    const Name = 'Vishal Mane';
    const firstName = 'Vishal';
    if (Name.startsWith(firstName)) {
        console.log(Name);
    }

    //16 String trim():
    // This method removes whitespaces from the start and end of the calling string.
    //  It removes spaces, tabs, no break spaces etc. 
    //  It returns a new string stripped of whitespaces from both sides of the array.

    let setence = "    vishal mane     "
    let trimmedSentence = setence.trim()
    console.log(trimmedSentence);

    //17 Removing whitespace from both ends of a string

    const username = ' Mane  ';
    const passWord = ' p@ssw0rd    ';

    const trimmedUser = username.trim();
    console.log(trimmedUser);

    const trimmedPass = passWord.trim();
    console.log(trimmedPass);


    //18 String toLowerCase():
    // The toLowerCase() String method converts a string object to lower case. The return value of the method is the value of the calling string in lower case.

    const NAME = "MANEVISHALE!@3"
    const convertedPassword = NAME.toLowerCase()
    console.log(convertedPassword)

    //19 Convert two separate strings to lowercase and compare

    const wrd = 'Please';
    const greet = 'Hello';
    const lowercaseWord = wrd.toLowerCase();
    const lowercaseGreeting = greet.toLowerCase();
    console.log(lowercaseWord === lowercaseGreeting);

    return (
        <div>
            <h3>string operation </h3>
            <p style={style}>**please check console for result**</p>
        </div>
    )
}
export default String;

