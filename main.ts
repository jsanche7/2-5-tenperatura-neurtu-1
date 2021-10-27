let Tenperatura = 0
basic.forever(function () {
    Tenperatura = input.temperature()
    basic.showNumber(input.temperature() + 3)
})
