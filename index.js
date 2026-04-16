
// index.js or lab.js
require('datejs');

function combineUsers(...args) {
  // 1. Initialize the return object
  const combinedObject = {
    users: []
  };
  
  // 2. Merge arrays (logic goes here)
  
// Loop through each array provided to the function
for (let i = 0; i < args.length; i++) {
  // Merge the current array into the 'users' array using the spread operator
  combinedObject.users = [...combinedObject.users, ...args[i]];
}

  // 3. Add the date (logic goes here)
  
// Create a new Date object and format it using datejs
const today = new Date();
combinedObject.merge_date = today.toString('M/d/yyyy');

  // 4. Return the object
  return combinedObject;
}


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};

// Test case
const reporters = ['Alan', 'Barbara'];
const engineers = ['Charles', 'Diana'];
const designers = ['Eve'];

const result = combineUsers(reporters, engineers, designers);
console.log(result);