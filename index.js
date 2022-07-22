// Comment each of the functions below to try them out. To get out of setInterval() press ^C (control + c)

// setTimeout
// setTimeout(() => {
//     console.log('Get ready for Module 2!')
// }, 2000)

// console.log('I fire first')

function logToConsole(){
    console.log('I fire every two seconds!')

}

// setInterval
// setInterval(logToConsole, 2000)



const modules = ["Fundamentals", "FEWD", "React", "Full Stack Web Dev", "Data Structures & Algorithms", "Capstone Project"]



// Will do something for each element in the array, whether you modify it or not
// forEach()
modules.forEach((mod) => {
    console.log(mod)
})

// Shorter syntax
// - no need for parens when one argument in callback 
// - no need for curly brackets when function is short enough to fit on one line
// - return is implied when we do not have curly brackets
// modules.forEach(mod => console.log(mod))


// Creates a new modified array, without modifying the original array
// map()
// const newModules = modules.map( (mod, i) => {
//     return `Module ${i + 1} ${mod}`
// })

// Will throw error bc newModules is a const
// newModules = modules.map( (mod, i) => {
//     return `Module ${i + 1} ${mod}`
// } )



// console.log(newModules)



