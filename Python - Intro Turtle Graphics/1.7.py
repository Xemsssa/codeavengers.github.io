https://www.codeavengers.com/python/100#1.7

import turtle
erno = turtle.Turtle()
erno.pensize(12)
erno.pencolor("black")

# First row
erno.penup()
erno.goto(80, 80)
erno.pendown()

# Draw the orange square
erno.fillcolor("orange")
erno.begin_fill()
for i in range(4):
  erno.forward(80)
  erno.right(90)
erno.end_fill()

# Draw the lime square
erno.goto(160,80)
erno.fillcolor("lime")
erno.begin_fill()
for i in range(4):
  erno.forward(80)
  erno.right(90)
erno.end_fill()

# Draw the blue square
erno.goto(240,80)
erno.fillcolor("blue")
erno.begin_fill()
for i in range(4):
  erno.forward(80)
  erno.right(90)
erno.end_fill()

# Second row

# Draw the yellow square
erno.penup()
# erno.right(90)
erno.goto(80,160)
erno.pendown()

erno.fillcolor("yellow")
erno.begin_fill()
for i in range(4):
  erno.forward(80)
  erno.right(90)
erno.end_fill()

# Draw the orange square
erno.goto(160,160)
erno.fillcolor("orange")
erno.begin_fill()
for i in range(4):
  erno.forward(80)
  erno.right(90)
erno.end_fill()

# Draw the red square
erno.goto(240,160)
erno.fillcolor("red")
erno.begin_fill()
for i in range(4):
  erno.forward(80)
  erno.right(90)
erno.end_fill()

# Third row

erno.penup()
erno.goto(80,240)

# Draw the blue square
erno.pendown()

erno.fillcolor("blue")
erno.begin_fill()
for i in range(4):
  erno.forward(80)
  erno.right(90)
erno.end_fill()

# Draw the yellow square
erno.goto(160,240)
erno.fillcolor("yellow")
erno.begin_fill()
for i in range(4):
  erno.forward(80)
  erno.right(90)
erno.end_fill()

# Draw the white square
erno.goto(240,240)
erno.fillcolor("yellow")
erno.begin_fill()
for i in range(4):
  erno.forward(80)
  erno.right(90)
erno.end_fill()
