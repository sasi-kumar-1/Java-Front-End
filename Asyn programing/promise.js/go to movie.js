let goToMovie = (success, failure) => {
    let amount = 100
    amount > 400 ? success("Go to Movie with POPCorn") : failure("GO TO PG! Take Blancket")
}
goToMovie((msg) => {
    console.log(msg)
}, (err) => {
    console.log(err)
})