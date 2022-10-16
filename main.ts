radio.onReceivedString(function (receivedString) {
    item = receivedString
    if (item == "A") {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        SuperBit.MotorRun(SuperBit.enMotors.M1, 255)
        SuperBit.MotorRun(SuperBit.enMotors.M3, 255)
    } else if ("B" == item) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        SuperBit.MotorRun(SuperBit.enMotors.M1, -255)
        SuperBit.MotorRun(SuperBit.enMotors.M3, -255)
    } else if ("C" == item) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        SuperBit.MotorRun(SuperBit.enMotors.M1, -255)
        SuperBit.MotorRun(SuperBit.enMotors.M3, 255)
    } else if ("D" == item) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        SuperBit.MotorRun(SuperBit.enMotors.M1, 255)
        SuperBit.MotorRun(SuperBit.enMotors.M3, -255)
    } else if ("0" == item) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        SuperBit.MotorRun(SuperBit.enMotors.M3, 0)
        SuperBit.MotorRun(SuperBit.enMotors.M1, 0)
    } else if ("E" == item) {
        duoji_s1 = "1"
    } else if ("H" == item) {
        duoji_s1 = "2"
    } else {
    	
    }
})
let i = 0
let duoji_s1 = ""
let item = ""
radio.setGroup(77)
radio.setTransmitPower(7)
SuperBit.Servo2(SuperBit.enServo.S1, 0)
basic.showLeds(`
    # . . . #
    . # . # #
    . . # . #
    . # . # #
    # . . . #
    `)
basic.forever(function () {
    if ("1" == duoji_s1) {
        SuperBit.Servo2(SuperBit.enServo.S1, 0)
        i = 0
        for (let index = 0; index < 260; index++) {
            i += 1
            SuperBit.Servo2(SuperBit.enServo.S1, i)
            basic.pause(2)
        }
        duoji_s1 = "270"
    } else if ("2" == duoji_s1) {
        SuperBit.Servo2(SuperBit.enServo.S1, 270)
        i = 270
        for (let index = 0; index < 260; index++) {
            i += -1
            SuperBit.Servo2(SuperBit.enServo.S1, i)
            basic.pause(2)
        }
        duoji_s1 = "0"
    } else {
    	
    }
})
