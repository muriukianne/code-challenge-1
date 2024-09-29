// Used function to define and call the program
// Named the variable netSalaryCalc
// Passed the parameters and their arguments that is basicSalary and benefits 

function netSalaryCalc(basicSalary=550000 , benefits=50000 ){
//    declared variable grossSalary and used arithmetic operators to add the basicSalary and benefits
    let grossSalary=basicSalary + benefits

    // declared the paye which is used to cut the tax
    let paye = 195000

    // used conditional statements if,else if and else to make decisions of the value of paye
    // After the paye is calculated pass the value of the output in the declared paye above

if(grossSalary<=24000 ){
    let paye =(grossSalary* 0.1)
    console.log(`Your PAYE is ${paye}`)
}

else if(grossSalary>=24001 && grossSalary<=32333){
    let paye=(grossSalary * 0.25)
    console.log(`Your PAYE is ${paye}`)
}

else if(grossSalary>=32334 && grossSalary <=500000){
    let paye =(grossSalary * 0.30)
    console.log(`Your PAYE is ${paye}`)
}

else{grossSalary>=500001 && grossSalary <=800000
    let paye = (grossSalary * 0.325)
    console.log(`Your PAYE is ${paye}`)
}
// console .log is used toshow the printed output when run
// I used ${} to reference the variable paye within the string


let nhifdeductions = 1200

// / used conditional statements if,else if and else to make decisions of the value of the nhifdeductions
// After the nhifdeductions is calculated pass the value of the output in the declared nssfdeductions above

if(grossSalary<50000){
    let nhifdeductions = 400
    console.log(`Your nhifdeductions is ${nhifdeductions}`)
}

else if(grossSalary >=50000 && grossSalary<150000){
    let nhifdeductions = 800
    console.log(`Your nhifdeductions is ${nhifdeductions}`)
}

else {grossSalary >=150000 
    let nhifdeductions = 1200
    console.log(`Your nhifdeductions is ${nhifdeductions}`)
}


let nssfdeductions = 2400

// / / used conditional statements if,else if and else to make decisions of the value of the nssfdeductions
// After the nssfdeductions is calculated pass the value of the output in the declared nssfdeductions above


if(grossSalary<100000){
    let nssfdeductions = 800
    console.log(`Your nssfdeductions is ${nssfdeductions}`)
}

else if(grossSalary >=50000 && grossSalary<150000){
    let nssfdeductions = 1600
    console.log(`Your nhifdeductions is ${nssfdeductions}`)
}

else {grossSalary >=150000 
    let nssfdeductions = 2400
    console.log(`Your nhifdeductions is ${nssfdeductions}`)
}


// declared the variable netsalary where from the grossSalary all the taxes and deduction are cut from
// used the arithmetic operator (-)

let netSalary = grossSalary - paye - nhifdeductions - nssfdeductions

console.log (`Your netSalary is ${netSalary}`)


}
// I called the function netSalaryCalc so as to be given the output of the program
netSalaryCalc()


