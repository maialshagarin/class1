'use strict' ; 
const validator = {} ;

validator.allValueNumeric = function(input){
    // check if input is array if not it must kick out the function  
    if( !Array.isArray(input)){ return false }
    // actual logic 
    // array special kind of objevt 
    //  every item must be number and we check the value of each item array 
    return input.every(value => typeof value === 'number')
}
// check if it array hold number time and more specific it must be more than 0
validator.noZeroValue = function(input ){
    if( !Array.isArray(input)){ return false }
    return input.every(value => typeof value === 'number' && value !==0);

}

validator.hasRightMinimumRgumentCount = function (input , expectedCount) {
    
return input.length >= expectedCount ;
}


// all method are there and if i want to call this method so we want to require file to other file now i can acsess any method here 
module.exports = validator ;