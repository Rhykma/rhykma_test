def on_button_pressed_a():
    global a
    if a == 0:
        a = 1
    elif a == 1:
        a = 2
    elif a == 2:
        a = 3
    elif a == 3:
        a = 4
    elif a == 4:
        a = 5
    elif a == 5:
        a = 1
    else:
        pass
input.on_button_pressed(Button.A, on_button_pressed_a)

a = 0
a = 1

def on_forever():
    if a == 1:
        basic.show_icon(IconNames.HEART)
    if a == 2:
        basic.show_icon(IconNames.SMALL_HEART)
    if a == 3:
        basic.show_icon(IconNames.YES)
    if a == 4:
        basic.show_icon(IconNames.NO)
    if a == 5:
        basic.show_icon(IconNames.HAPPY)
basic.forever(on_forever)
