let SSP123 = 0
input.onGesture(Gesture.Shake, function () {
    SSP123 = randint(1, 3)
    if (SSP123 == 1) {
        basic.showLeds(`
            . # # . .
            . # # # #
            # # # # #
            # # # # .
            . . # # .
            `)
    } else if (SSP123 == 2) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    } else {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    }
})
