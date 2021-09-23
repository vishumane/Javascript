import React from 'react'

export default function Array() {

    //array methods
    //1:array.find():
    // The find() method searches through an array and gives you 1 item based on your provided test. 
    // Array find() only returns one item. If you want to get more than one item, look at filter().

    const people = ['vishal', 'vikas', 'vaibhav'];
    // find name vishal
    const Person = people.find(name => name === 'vishal');
    console.log(Person);

    //2:array of object find 
    const peole = [
        { name: 'vishal', username: 'vishalmane' },
        { name: 'vikas', username: 'vikastweets' },
        { name: 'vaibhav', username: 'vaibhav' },
    ];
    const data = peole.find(person => person.name === 'vikas');
    console.log(data);

    //3 Finding the first matching element in an array

    const numbers = [60, 32, 55, 22, 10];
    const lessThan50 = numbers.find(number => number < 50);

    console.log(lessThan50);

    //4 Getting an item in array at a certain index

    const items = ['vishu', 'mane', 'mouri'];

    // find array item with index of 1
    const atIndex = items.find(function (element, index) {
        return index === 1
    })
    console.log(atIndex);

    //5.Array.every method
    // The every method checks that each element in an array passes a set test.
    //  This method will return true if all the elements pass the set

    const array = [20, 21, 23, 15, 2]
    const isLessThan100 = (number) => number < 100
    let result = array.every(isLessThan100)
    console.log(result)
    //5.1 Test an array for a matching threshold

    const ages = [17, 18, 22, 25];
    const drivingAge = 16;
    let canDrive = ages.every(function (age) { return age >= drivingAge; });
    console.log(canDrive);

    //5.2 array of object

    const students = [{ name: 'John', score: 50 },
    { name: 'Peter', score: 60 },
    { name: 'James', score: 55 }];

    const passScore = 50;
    const studentsPassed = students.every(student => student.score >= passScore);
    console.log(studentsPassed)

    // 6 array.filter method:The filter() method returns an array containing elements of the parent array that match the set test.
    //  A function containing a test is passed as an argument to the filter method

    const number = [2, 4, 6, 8, 32, 100]

    // Create function to filter any array
    const functionToFilterNumbers = function (number) {
        return number > 5;
    }
    const filtered = number.filter(functionToFilterNumbers)
    console.log(filtered)

    //7 Filter numbers within a set range in an array

    const age = [14, 12, 18, 21, 10];
    const voter = age.filter(function (age) {
        return age >= 18;
    })
    console.log(voter);

    //8 Filtering a list of objects using their similar properties
    const student = [
        {
            name: 'vishal',
            score: 50
        },
        {
            name: 'satish',
            score: 40
        },
        {
            name: 'Ankur',
            score: 33
        },
        {
            name: 'Ganesh',
            score: 60
        }
    ]
    const Passed = student.filter(function (student) {
        return student.score >= 50
    })
    console.log(Passed)

    //9 Getting elements within an array that exist over an index.

    const places = ['india', 'Asia', 'Europe', 'Australia'];
    const overIndex = places.filter(function (place, index) {
        return index > 2
    })
    console.log(overIndex);

    // 10 array.some:This method checks if any of the elements contained in an array passes a set test.
    //  If at least one of the elements passes this test, true is returned.
    //   This method only returns a Boolean.

    const arr = [2, 5, 10, 8, 20]
    const testFunction = number => number % 5 === 0
    const res = arr.some(testFunction)
    console.log(res);

    //11 Verify the content of objects in an array

    const users = [{ firstName: 'Peter', lastName: 'Parker' }, { firstName: 'Harry' }];
    let hasLastName = users.some(function (user) {
        return !!user.lastName;
    })
    console.log(hasLastName);

    //12 Array .toString() Method

    const names = ['vishal', 'satish', 'msd', 'virat', 'will']
    const Names = names.toString()
    console.log(Names)

    //13 Convert an array of numbers to a string with numbers
    const values = ['1', '2', '3', '4'];
    const string = values.toString();
    console.log(string);

    //14 String replace()
    //The String replace() method will look for a string in a string and replace it with another string.

    const message = 'This is my message.';
    const newMessage = message.replace('message', 'new thing');
    console.log(newMessage);

    //15 Replace all occurrences of a string
    const msg = 'This is my store. In my store we store store store.'
    const newMsg = msg.replace(new RegExp('store', 'g'), 'shop');
    console.log(newMsg);

    //16 Replace all special characters
    const myUrl = 'this/-is/-my/-url';
    const newUrl = myUrl.replace(new RegExp('/-', 'g'), '-');
    console.log(newUrl);

    //17 array.concat():The Array concat method combines two or more values into a new array.

    const ple = ['vishu', 'nick'];
    const newPle = ['tata', 'mahesh'];
    const allPeople = ple.concat(newPle);
    console.log(allPeople);


    //18 Joining Values to an Array
    const months = ['March', 'April', 'May'];
    const otherMonths = ['June', 'July'];
    const totalMonths = months.concat(otherMonths);
    console.log(totalMonths);

    //19 The forEach() :method takes a function that performs an action on each of the elements in this array.
    let ar = [1, 2, 3, 4, 5]
    ar.forEach(function (number) {
        console.log(number * 2)
    })

    //20 Copying the contents of one array array to another

    const stud = ['visal', 'msd', 'virat', 'sachin'];
    const classA = [];
    stud.forEach(student => {
        classA.push(student)
    });
    console.log(classA);

    //21 Replacing the forloop
    //Using the forEach method in place of a for loop. 
    // Since it has a simpler syntax, it is mostly used in place of a regular for loop.

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    for (var i = 0; i < days.length; i++) {
        console.log(days[i]);
    }
    console.log('----------------------')
    // with forEach
    days.forEach(day => {
        console.log(day);
    })
    //22 Array include:This method checks if an array contains a given element. The return value for this method is a Boolean
    // true if the element exists in the array and false if otherwise.

    const classNames = ['amazon', 'facebook', 'google', 'scotch']
    let partOfClass = classNames.includes('microsoft')
    console.log(partOfClass);

    //23 Checking if an array contains a certain value
    const day = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const month = 'May';
    const isDay = day.includes(month);
    console.log(isDay);

    //24 Array.join():The join method combines all the elements contained in an array and returns it as a string separated by a comma (,) or any specified string separator.

    const newArray = ['a', 'new', 'array']
    const simpleString = newArray.join('')
    const dashedString = newArray.join('-')
    console.log(simpleString);
    console.log(dashedString);
    //25 Remove all commas within a string
    const stringWithCommas = 'I, want, to, come, home';
    const wordArray = stringWithCommas.split(', ')
    const stringWithoutCommas = wordArray.join(' ');
    console.log(stringWithoutCommas);
    // 26 Array.map():The map() method takes a callback method that performs an operation on the elements in the array.
    //  It returns a new array containing the resulting values of running the operation on each element.
    const scores = [20, 30, 50, 2, 23]
    const updatedScores = scores.map(function (score) {
        return score + 10
    })
    console.log(updatedScores);
    //27 new array 
    const studt = [{ name: 'Rich', score: 33 }, { name: 'Peter', score: 55 }];
    let score = studt.map(function (student) {
        return student.score
    });
    console.log(score);
    //28 Reformatting the values contained within an array
    const mnth = ['Jan', 'Feb', 'Mar', 'Apr'];
    let monthsIndex = mnth.map(function (month, index) {
        let noneZeroIndex = index + 1;
        return month + '-' + noneZeroIndex;
    })
    console.log(monthsIndex);
    //29 array.pop();
    // This method takes out the last element from an array and returns it.
    //  The pop method mutates the array during this process reducing its length.

    const stdnt = ['satish', 'vaibhav', 'stays', 'vishal']
    const newStudents = stdnt.pop()
    console.log(newStudents);//it willl last emelemt

    // 30 Removing the last element of an array
    let it = ['Cedar', 'Fruits', 'Table'];
    let newItems = it.pop();
    console.log(it);
    console.log(newItems);

    //31 Array .push()
    //This methods appends one or more value to the last position of an array. 
    // This method mutates the array returning the new length of the array.
    let ary = ['abs', 'dat', 'mane', 'viahu']
    let newList = ary.push('vishaL')
    console.log(newList);

    //32 Appending new values to the end of an array
    const num = [1, 2, 3, 4, 5];
    num.push(6);
    console.log(num);
    //33 Adding object values to an array of objects
    const todos = [{ name: 'Clean room', complete: false }];
    todos.push({ name: 'Cook food', complete: true })
    console.log(todos);
    //34 Array .reverse()
    const list = ['fish', 'cow', 'ham', 'ram', 'table']
    list.reverse();
    console.log(list);
    //35 Return order of items in array
    const mon = ['Dec', 'Nov', 'Oct', 'Sept', 'Aug', 'July', 'June', 'May', 'April', 'Mar', 'Feb', 'Jan'];
    const monthsInOrder = mon.reverse();
    console.log(monthsInOrder);
    //36 Array .shift()
    const lst = [10, 20, 30, 40, 50]
    const newlst = lst.shift();
    //37 Removing the index element from an array.\
    const nums = ['ten', 'one', 'two', 'three', 'four'];
    nums.shift();
    console.log(nums);
    //38 Array .slice()

    const things = ['cup', 'house', 'spoon', 'plate']
    const cutThings = things.slice(1)
    console.log(cutThings)
    console.log(newlst)
    //39 Getting a selected part of an array
    const user = [{ name: 'vishal', id: 1 }, { name: 'vikas', id: 2 }, { name: 'manish', id: 3 }];
    const lastUsers = user.slice(1);
    console.log(lastUsers);

    //40 Array .splice()
    // The splice array method changes an existing array by removing, adding and/or replacing specified elements from it
    const del = [1, 2, 3, 4, 5]
    let deletedItems = del.splice(0, 4)
    console.log(deletedItems);

    //41 Remove an element at a particular index in an array
    const task = [{ name: 'finish food', id: 1 }, { name: 'Clean room', id: 2 }, { name: 'Water plants', id: 3 }];
    todos.splice(1, 1);
    console.log(task);
    //42 Adding new elements starting from a position
    const languages = ['python', 'java', 'c++'];
    languages.splice(2, 0, 'javascript', 'ruby');
    console.log(languages);

    //43 Array unshift() 
    //The unshift array method appends a number of values to the start of a given array.
    //  It then returns the new length of the array.
    let arry = [10, 20, 30, 40, 50]
    let newLength = arry.unshift(2, 5)
    console.log(newLength)
    console.log(array);
    //44 Add new items to an array
    const ite = ['Cedar', 'Fruits', 'Table'];
    ite.unshift('wine', 'glass');
    console.log(ite);
    //45 Add items to cart
    const cart = [
        {
          item: "bread",
          price: 2000,
        },
        {
          item:"milk",
          price: 1000
        }
      ]
      cart.unshift({item: "eggs", price: 500})
      console.log(cart);

    return (
        <div>

        </div>
    )
}
