https://www.codeavengers.com/python/100#1.5

import turtle
tom = turtle.Turtle()

# Green stripe
tom.penup()
tom.goto(40, 40)
tom.pendown()

tom.color("limeGreen")
tom.begin_fill()
tom.forward(100)
tom.right(90)
tom.forward(240)
tom.right(90)
tom.forward(100)
tom.right(90)
tom.forward(40)
tom.right(90)
tom.end_fill()

# Gold Stripe
tom.penup()
tom.goto(140, 40)
tom.pendown()

tom.color("gold")
tom.begin_fill()
tom.forward(100)
tom.right(90)
tom.forward(240)
tom.right(90)
tom.forward(100)
tom.right(90)
tom.forward(240)
tom.right(90)
tom.end_fill()

# Red Stripe
tom.penup()
tom.goto(240, 40)
tom.pendown()

tom.color("red")

tom.begin_fill()
tom.forward(100)
tom.right(90)
tom.forward(240)
tom.right(90)
tom.forward(100)
tom.right(90)
tom.forward(240)
tom.end_fill()
tom.right(90)