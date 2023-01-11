//... tripple dot
let sizes = [38, 40, 42, 44]

//let new_Sizes = []

/* for (let i = 0; i <= sizes.length - 1; i++) {
    new_Sizes.push(sizes[i])
} */
let new_Sizes = sizes.map((size) => {
    return size
})
console.log(sizes)
console.log(new_Sizes)