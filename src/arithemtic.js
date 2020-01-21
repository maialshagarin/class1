'use strict';
//  all of thing in validator.js is put inside the vslidate 
const validate = require('./validator.js');

// let arithmetic be attach to module exports and start with object 
let arithmetic = module.exports = {};


//  document code 
/**
 *  add function : take list of number an add them
 * @param number
 * @returns {number}
 */


//  ...spread operator allows it spread as array even when i call and i wwrite like arithemtic.add(1,2,3,4)
arithmetic.add = function(...numbers){
if (validate.allValueNumeric(numbers)
&& validate.hasRightMinimumRgumentCount(numbers,2)) {
return numbers.reduce((result , n) => { return result + n},0) ;
} else {
return null ;
}
}

//  document code 
/**
 *  substract function : take list of number an add them
 * @param number
 * @returns {number}
 */
arithmetic.subtract = function(...numbers){
    if (validate.allValueNumeric(numbers)
    && validate.hasRightMinimumRgumentCount(numbers,2)) {
    return numbers.reduce((result ,n) => {return result && result -n });
    }
    }