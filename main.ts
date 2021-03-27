let LoveValue = 0
/**
 * P0와 GND를 두사람이 손가락으로 대면 무작위로 0~9숫자중에서 한 값을 LoveValue에 대입하고 
 * 
 * P0 <= 4이면 GOOD 문자 출력
 * 
 * 아니면 TRY문자 출력
 * 
 * P0 핀이 연결되면 아이콘을 출력하고 LoveValue=0으로 설정한다.
 */
input.onPinPressed(TouchPin.P0, function () {
    basic.showIcon(IconNames.Yes)
    LoveValue = 0
})
basic.forever(function () {
    LoveValue = randint(0, 9)
    if (LoveValue <= 4) {
        basic.showNumber(LoveValue)
        basic.pause(200)
        basic.showString("GOOD")
    } else {
        basic.showNumber(LoveValue)
        basic.pause(200)
        basic.showString("TRY")
    }
})
