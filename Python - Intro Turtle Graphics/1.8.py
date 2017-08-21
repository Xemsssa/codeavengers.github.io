https://www.codeavengers.com/python/100#1.8

import turtle
tia = turtle.Turtle()

tia.penup()
tia.goto(40, 40)
tia.pendown()
tia.pensize(40)

# Create a list of colors
colors = ["red", "blue", "gold", "green"]

# Use a loop to draw a square with one side each color
for color in colors:
  tia.color(color);
  tia.forward(320)
  tia.right(90)