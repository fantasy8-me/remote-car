basic.forever(function () {
    SuperBit.MotorRun(SuperBit.enMotors.M1, 255)
    SuperBit.MotorRun(SuperBit.enMotors.M3, 0)
    basic.pause(2000)
})
