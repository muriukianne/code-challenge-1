// SPPED DETECTOR
// Used function to perform and call the program
// I used the named function for this program where i declared the function as speeddetector
// Used the camelcase when declaring the variable
// Passed the parameter speed with a default value 80


function speedDetector(speed=85){
    // declared the variable sppedlimit
    let speedlimit=70
    // Used conditional statements if and else tomake decisions of the program
    if(speed<=speedlimit){
        console.log ("Ok")
    }

    else{
        // Used arithmetic operators ((-)minus) and ((/)division) to find the demerit points
        let  demeritpoint = ((speed-speedlimit)/5)

        // I used ${} to reference the variable demeritpoint within the string
        console.log(`Your demerit points are: ${demeritpoint}`)
         
        // used comparison operators ((>)greater than) to compare the number of demerit points
        if (demeritpoint>12){
            console.log("License Suspended" )
        }
    }
}
// I called the function speeddetector so as to be given the output  of the program
speedDetector()
// used console.log to print the output