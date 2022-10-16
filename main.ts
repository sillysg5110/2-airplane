input.onButtonPressed(Button.A, function () {
    SuperBit.MotorRun(SuperBit.enMotors.M3, 119)
})
radio.onReceivedString(function (receivedString) {
    item = receivedString
    if (receivedString == "C") {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # . . .
            . # . . .
            . # # # .
            `)
        SuperBit.MotorRun(SuperBit.enMotors.M3, 255)
    } else if ("D" == item) {
        basic.showLeds(`
            . # # # .
            . # . . #
            . # . . #
            . # . . #
            . # # # .
            `)
        SuperBit.MotorRun(SuperBit.enMotors.M3, -255)
    } else if ("E" == item) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        SuperBit.MotorRun(SuperBit.enMotors.M3, 0)
    } else {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    SuperBit.MotorRun(SuperBit.enMotors.M3, 0)
})
let item = ""
radio.setGroup(77)
radio.setTransmitPower(7)
basic.showLeds(`
    # . . . #
    . # . # #
    . . # . #
    . # . # #
    # . . . #
    `)
