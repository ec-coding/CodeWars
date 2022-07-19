// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str){
    const stringSplit = str.split('');
    const reverseString = stringSplit.reverse()
    const joinString = reverseString.join('')
    return joinString
    }
    
    