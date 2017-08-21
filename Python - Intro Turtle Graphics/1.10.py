import turtle
tia = turtle.Turtle()
tia.penup()
tia.goto(0, 0)
tia.pendown()
 
# Draw a blue background
tia.color("lightSkyBlue")
tia.begin_fill()
for i in range(4):
  tia.forward(400)
  tia.right(90)
tia.end_fill()

# Draw the black semicircle
tia.penup()
tia.goto(360, 180)
tia.pendown()
tia.setheading(90)

tia.color("black")
tia.begin_fill()
tia.circle(150, 180)
tia.end_fill()

# Draw the blue cut out semicircles
positions = [120, 180, 240, 300, 360]
tia.color("lightSkyBlue")
for position in positions:
  tia.goto(position, 180)
  tia.setheading(90)
  tia.begin_fill()
  tia.circle(30, 180)
  tia.end_fill()

# Draw the straight part of the handle
tia.penup()
tia.goto(210, 150)
tia.pendown()
tia.pensize(15)
tia.color("black")
tia.goto(210, 340)

# Draw the curved part
tia.circle(20, 180)


# Keep tia safe from the rain
tia.penup()
tia.goto(210, 240)
