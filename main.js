// let str = `
// 010-1234-5678
// thesecon@gmail.com
// https://www.omdbapi.com/?apikey=7035c60c&s=frozen
// The quick brown fox jumps over the lazy dog.
// abbcccdddd
// http://localhost:1234
// 동해물과_백두산이 마르고 닳도록
// `

// const h = `  the hello  world   !

// `

// const regexp = new RegExp('the', 'gi')
// const regexp = /the/gi

// console.log(str.match(regexp))

// console.log(regexp.test(str))

// str = str.replace(regexp, 'AAA')
// console.log(str)

const str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

console.log(
  // str.match(/\bf\w{1,}\b/g)
  // str.match(/\d{1,}-\d{1,}-\d{1,}/g)
  // h.replace(/\s/g, '')
  str.match(/.{1,}(?=@)/g),
  str.match(/(?<=@).{1,}/g)
)
