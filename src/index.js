// module.exports = function check(str, bracketsConfig) {
//   if (str.length <= 1) return false

//   let matchingOpeningBracket, ch
//   let stack = []
  
//   let openingBrackets = bracketsConfig.map( (value) => value[0] )
//   let closingBrackets = bracketsConfig.map( (value) => value[1] )

//   for (let i = 0; i < str.length; i++) {
//     ch = str[i]

//     if (closingBrackets.indexOf(ch) > -1) {
//       matchingOpeningBracket = openingBrackets[closingBrackets.indexOf(ch)]
//       if (stack.length == 0 || (stack.pop() != matchingOpeningBracket)) {
//         return false
//       }
//     } else {
//       stack.push(ch)
//     }
//   }

//   return (stack.length === 0)
// }


module.exports = function check(str, bracketsConfig) {
  for (let i = 0; i <= bracketsConfig.length; i++) {
    bracketsConfig.forEach(value => {
        const brackets = value[0] + value[1]
        while (str.indexOf(brackets) >= 0) {
          const index = str.indexOf(brackets)
          str = str.slice(0, index) + str.slice(index + 2)
        }
    })
  }
  return str ? false : true
}