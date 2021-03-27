let LoveValue = 0
input.onPinPressed(TouchPin.P0, function () {
    basic.showIcon(IconNames.Yes)
    LoveValue = 0
})
/**
 * 두 사람 사이 손가략을 연결했을 때 무드가 좋은지 나쁜지를 측정하는 게임
 * 
 * P0와 GND를 두사람이 손가락으로 대면 무작위로 0~9숫자중에서 한 값을 LoveValue에 대입하고 
 * 
 * P0 <= 4이면 GOOD 문자 출력
 * 
 * 아니면 BAD문자 출력
 * 
 * P0 핀이 연결되면 아이콘을 출력하고 LoveValue=0으로 설정한다.
 */
basic.forever(function () {
    LoveValue = randint(0, 9)
    if (LoveValue <= 4) {
        basic.showNumber(LoveValue)
        basic.pause(200)
        basic.showString("GOOD")
    } else {
        basic.showNumber(LoveValue)
        basic.pause(200)
        basic.showString("BAD")
    }
})
