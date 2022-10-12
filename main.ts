let x = 0
let y = 0
let speed = 200
basic.forever(function () {
    for (let index = 0; index < 3; index++) {
        for (let x = 0; x <= 4; x++) {
            for (let y = 0; y <= 4; y++) {
                led.plot(x, y)
                basic.pause(speed)
                basic.clearScreen()
            }
        }
        basic.showIcon(IconNames.Yes)
        speed += -80
    }
    speed = 200
})
