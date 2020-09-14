let count = 0;

//increment (++) is before, because we want to return the value after incrementing
//if we did the normal count++, count would be returned before incrementing
const inc = () => ++count; 
const dec = () => --count;

const getCount = () => count;

module.exports = {
  inc,
  dec,
  getCount
};  