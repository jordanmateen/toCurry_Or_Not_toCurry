/** Partial Application :  The process of applying a function to some of its arguments. 
 * The partially applied function gets returned for later use. 
 * In other words, a function that takes a function with multiple parameters and returns a function with fewer parameters. 
 * Partial application fixes (partially applies the function to) one or more arguments inside the returned function, 
 * and the returned function takes the remaining parameters as arguments in order to complete the function application. 
 * 
 * source : medium.com
 * 
 * ex:
    function _foo(x){
        return function _bar(y , z){
            return [x, y, z] // return array of values
        }
    }
**/

/** Currying: A function that takes a function with multiple parameters as input and returns a function with exactly one parameter.
 * NOTE: Currying is a form of partial application
 * 
 * source : medium.com
 * 
 * ex:
    function foo(x){
        return function bar(y){
            return [x, y] // return array of values
        }
    }
**/



/** Curry Functions Example */

// This function is not curried
function _add(x,y){
    return x + y 
}

//Note this function is also partially applied. 
function add(x){
    return (y) => {
       return x + y 
    }
}

// Create a curry functon that takes in a function and its argumnents as a paratemter and reurns a curried function. 
// THe nested functions will have accessible data in its closure. ( Closed Over Environment )
function curry(fn, ...args){
    return(..._args)=>{
        return fn(...args, ..._args)
    }
}

function multiply_N_Args(...arg){
    return Array.prototype.slice.call(arguments).reduce((arg, acc)=>{
        return arg * acc
    })
}

//ex: Applications
console.log('Curried result:',add(5)(6)) //currying function

const increaseByOne = add(1)
console.log('Partially Applied/ Curried result: ',increaseByOne(5)) //Partial application. 

const sum = curry(multiply_N_Args)
console.log('Result of a fn that has been curried: ',sum(1,3,6,7,8))
console.dir(sum)


/** Partial Application Function Example */

// Fn does not use partial application
function volume(l, w,  h){
    return l * w * h
}

//Fn uses Partial Application
function _volume(l){
    return (w,  h) =>{
        return l * w * h
    }
}

// Fn will partial application by binding
function __volume(){
    return Array.prototype.slice.call(arguments).reduce((arg,acc )=>{
        return arg * acc
    })
}

//ex: Applications
console.log('Not Partially applied: ',volume(10,20,40)) // normal

const getVolume = _volume(10) // partially applied
console.log('Partially applied: ',getVolume(20,40))

const newVolume = __volume.bind(null,10) // partially applied w/ binding
console.log('Partially applied(binding): ',newVolume(20,40))


  