// Require datejs (must be at the top)
require('datejs');

function combineUsers(...args) {
    // Step 1: Initialize return object with users array
    const combinedObject = {
        users: []
    };
    
    // Step 2: Loop through each array passed as argument
    for (let i = 0; i < args.length; i++) {
        // Step 3: Merge arrays using spread operator
        combinedObject.users = [...combinedObject.users, ...args[i]];
    }
    
    // Step 4: Add today's date in M/d/yyyy format
    combinedObject.merge_date = new Date().toString('M/d/yyyy');
    
    // Step 5: Return the object
    return combinedObject;
}

// Export the function (for testing)
export default combineUsers;
