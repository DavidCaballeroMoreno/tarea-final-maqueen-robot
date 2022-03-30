radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
    }
    if (receivedNumber == 2) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
    }
})
radio.setGroup(999)
basic.forever(function () {
	
})
