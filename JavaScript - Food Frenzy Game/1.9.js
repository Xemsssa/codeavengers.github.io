//Add a player object to the game
new Game.Player(100, 100, '/images/players/cat.png')

//Create a variable to store the score
var score = new Game.Score()

//Add some good items for the player to collect
new Game.GoodItem(50, 50, '/images/food/hotdog.png')
new Game.GoodItem(300, 100, '/images/food/sandwich.png')
new Game.GoodItem(150, 200, '/images/food/fries.png')
new Game.GoodItem(350, 550, '/images/food/chicken.png')
new Game.GoodItem(50, 500, '/images/food/fish.png')
new Game.GoodItem(250, 400, '/images/food/cheese.png')

//Add some obstacles for the player to avoid
new Game.Obstacle(50, 350, '/images/items/plant.png')
new Game.Obstacle(150, 250, '/images/items/rock.png')
new Game.Obstacle(150, 100, '/images/items/bin.png')
new Game.Obstacle(300, 250, '/images/items/plant.png')
new Game.Obstacle(350, 350, '/images/items/rock.png')
new Game.Obstacle(200, 500, '/images/items/bin.png')

//Create a timer
var timer = new Game.Timer(15)
//Start the timer
timer.start()

//Set a background image

Game.setBackgroundImage( '/images/backgrounds/mars.png')
