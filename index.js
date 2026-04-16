require('datejs');

function combineUsers(...args) {
  const combinedObject = {
    users: []
  };
  
  for (let i = 0; i < args.length; i++) {
    combinedObject.users = [...combinedObject.users, ...args[i]];
  }
  
  const today = new Date();
  combinedObject.merge_date = today.toString('M/d/yyyy');
  
  return combinedObject;
}

module.exports = { combineUsers };