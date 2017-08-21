https://www.codeavengers.com/python/100#1.4

import turtle
tom = turtle.Turtle()
tom.penup()
tom.goto(80, 40)
tom.pendown()

# Draw the window frame
tom.pensize(10)
tom.color("tan")

tom.begin_fill()
tom.forward(240)
tom.right(90)
tom.forward(320)
tom.right(90)
tom.forward(240)
tom.right(90)
tom.forward(320)
tom.right(90)
tom.end_fill()

# Draw the glass
tom.goto(100,60)

tom.color("lightCyan")

tom.begin_fill()

tom.forward(200)
tom.right(90)

tom.forward(280)
tom.right(90)

tom.forward(200)
tom.right(90)

tom.forward(280)

tom.end_fill()

# Draw the inner frames
tom.pencolor("tan")
tom.penup()

tom.goto(200, 40)
tom.right(180)

tom.pendown()
tom.forward(320)
tom.penup()
tom.goto(80, 200)
tom.left(90)
tom.pendown()
tom.forward(220)


