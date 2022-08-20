// code your solution here
function saturdayFun(activity){
    if (activity===undefined){
        return `This Saturday, I want to roller-skate!`
    }else{
        return `This Saturday, I want to ${activity}!`
    }
};
function mondayWork(activity){
    if (activity===undefined){
        return `This Monday, I will go to the office.`
    }else{
        return `This Monday, I will ${activity}.`
    }
}
function wrapAdjective(flair="*"){
    return function(parameter="special"){
        // return flair==="*"?`You are *${parameter}*!`:`You are ||${parameter}||!`
        return `You are ${flair}${parameter}${flair}!`
    }
};