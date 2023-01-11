let goToMovie = (success, failure) => {
    let amount = 800
    amount > 400 ? success("Go to Movie with POPCorn") : failure("GO TO PG! Take Blancket")
}
goToMovie(() => { }, () => { })