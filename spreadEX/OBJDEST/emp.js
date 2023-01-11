let state = {
    pid: 101,
    name: "Iphone",
    colors: { c1: 'blue', c2: 'red' }
}
/* 
console.log(state.pid)
console.log(state.colors.c1) */
let { pid, colors } = state
console.log(pid)
console.log(colors.c2)