radio.setGroup(999)
basic.forever(function () {
    if (receivedNumber == 1) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 30)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else {
        maqueen.motorStop(maqueen.Motors.All)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 6) {
        maqueen.motorStop(maqueen.Motors.M1)
        radio.sendNumber(66)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 30)
    }
})
