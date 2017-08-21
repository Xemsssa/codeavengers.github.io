https://www.codeavengers.com/python/100#1.9

import turtle
tia = turtle.Turtle()
tia.pencolor("black")
tia.pensize(5)
tia.fillcolor("white")

# Draw bottom circle (abdomen)
tia.penup()
tia.goto(200, 370)
tia.pendown()
tia.begin_fill()
tia.circle(100)
tia.end_fill()

# Draw middle circle (thorax)
tia.penup()
tia.goto(200, 250)
tia.pendown()
tia.begin_fill()
tia.circle(80)
tia.end_fill()
# Draw top circle (head)
tia.penup()
tia.goto(200, 130)
tia.pendown()
tia.begin_fill()
tia.circle(60)
tia.end_fill()

# Draw the face

# Left eye
tia.penup()
tia.goto(180, 60)
tia.fillcolor("black")
tia.pendown()
tia.begin_fill()
tia.circle(6)
tia.end_fill()

# Right eye
tia.penup()
tia.goto(220, 60)
tia.fillcolor("black")
tia.pendown()
tia.begin_fill()
tia.circle(6)
tia.end_fill()

# Mouth
tia.penup()
tia.goto(200, 100)
tia.fillcolor("black")
tia.pendown()
tia.begin_fill()
tia.circle(15)
tia.end_fill()

# Move turtle away
tia.penup()
tia.goto(40, 40)
