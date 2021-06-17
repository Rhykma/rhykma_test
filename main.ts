input.onButtonPressed(Button.A, function () {
    if (a == 0) {
        a = 1
    } else if (a == 1) {
        a = 2
    } else if (a == 2) {
        a = 3
    } else if (a == 3) {
        a = 4
    } else if (a == 4) {
        a = 5
    } else if (a == 5) {
        a = 1
    } else {
    	
    }
})
let a = 0
a = 1
basic.forever(function () {
    if (a == 1) {
        basic.showIcon(IconNames.Heart)
    }
    if (a == 2) {
        basic.showIcon(IconNames.SmallHeart)
    }
    if (a == 3) {
        basic.showIcon(IconNames.Yes)
    }
    if (a == 4) {
        basic.showIcon(IconNames.No)
    }
    if (a == 5) {
        basic.showIcon(IconNames.Happy)
    }
})
