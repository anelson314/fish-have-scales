input.onButtonPressed(Button.A, function () {
    basic.showString("Fish have scales.")
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . # .
        . # # # .
        # # # # .
        . # # # .
        . . . # .
        `)
    basic.showLeds(`
        . . # . .
        # # # . .
        # # # . .
        # # # . .
        . . # . .
        `)
    basic.showLeds(`
        . # . . .
        # # . . .
        # # . . .
        # # . . .
        . # . . .
        `)
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
basic.forever(function () {
	
})
