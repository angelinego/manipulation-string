console.log("LEVEL 0")
const sentenceA = "Hello World!"
const sentenceB = "Good Bye"

console.log(sentenceA)
console.log(sentenceB)
console.log("--------------------------------------------------------------------------");

console.log("LEVEL 1")
const sentenceC = sentenceA + " " + sentenceB
const sentenceD = `${sentenceA} ${sentenceB}`

console.log(sentenceC)
console.log(sentenceD)

console.log("LEVEL 2")
console.log(sentenceA.toUpperCase())
console.log(sentenceB.toUpperCase())
console.log(sentenceA.toLowerCase())
console.log(sentenceB.toLowerCase())
console.log("--------------------------------------------------------------------------");

console.log("LEVEL 3")
var str = "hello goodness" // "Hello Goodness"

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

console.log(toTitleCase(str));