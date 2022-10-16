input.onButtonPressed(Button.A, function () {
    SuperBit.MotorRun(SuperBit.enMotors.M3, 119)
})
radio.onReceivedString(function (receivedString) {
    item = "receivedString"
    if ("C" == item) {
        SuperBit.MotorRun(SuperBit.enMotors.M3, 128)
    } else if ("D" == item) {
        SuperBit.MotorRun(SuperBit.enMotors.M3, -117)
    } else if ("0" == item) {
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
