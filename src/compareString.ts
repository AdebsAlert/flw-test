//THOUGHTS:
// firstly we want to make sure that actual strings are passed to the function
// we can do this by converting the inputs to string using toString()
// or we can user type to specifically declare type expected for our input
// also we can declare a type for our output (boolean)
//
// we want to trim whitespaces from our strings
// and wlso we want to convert them to lowercase so that we dont get falsy while comparing uppercase to lowercase
//
// we then convert both trimmed and lowecase strings using the split function
// this result in 2 arrays for us
// we want to quickly return false if the length of the arrays are not the same
// that quickly show us that they dont have the exactly the same characters
//
// we can then loop over the first array and check the position of each element on the second array
// we will return false if any of the element in the first array isnt found on the second array
// our function will return true if all elements are found on the seond array



//TODO:
// Trim both strings and convert to lowercase
// Convert both strings to array using the split function
// Check the length of both arrays and return false if the length is not the same
// Loop over the first array and search for the position of each element on the second array
// Return false if any of the element position is not found on the second array
export const compareString = function(strA: string, strB: string): boolean {

    // trim the variables, convert to lowercase and covert to array using the split function
    const arrA = strA.trim().toLowerCase().split('')
    const arrB = strB.trim().toLowerCase().split('')

    // compare the length of the arrays and return false if the length is not the same
    if(arrA.length != arrB.length) {
        return false
    }

    // loop over the first array and find the position of each element in the second array
    // return false if an element position isnt found on the second array
    for(let i = 0; i < arrA.length; i++) {
        const currentChar = arrA[i]

        if(arrB.indexOf(currentChar) == -1) {
            return false
        }
    }

    return true

}

// BIG O Notation
// The time complexity of this function is O(n) as on worse case scenerio, we have to loop over all the element in the first string
//
// The space complexity of this function is O(1) as we used constant space for i variable i.e the stack pointer and each interation of the loop
// will need O(1) for temporary variable currentChar and its reused after every iteration and not creating a new variable.