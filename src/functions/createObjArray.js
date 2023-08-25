// This is a function that can be used to create new arrays of objects
export const createObjArray = (origObj, key1, key2, newKey1, newKey2) => {
    // create empty array
    let newArray = [];
    // Get the length of the object
    let origObjLength = Object.keys(origObj).length;
    // begin the loop
    for (let i = 1; i < origObjLength; i++) {
        // First check to see if a key exists
        let keyCheck = origObj.hasOwnProperty(key1+i);
        // Begin the conditional
        if (!keyCheck) {
            // If false break the loop
            break
        } else {
            // Create the new object
            let newObj = {
                [newKey1]: origObj[key1+i],
                [newKey2]: origObj[key2+i]
            }
            // push into array
            newArray.push(newObj);
        }
    }
    // return the array
    return newArray
}