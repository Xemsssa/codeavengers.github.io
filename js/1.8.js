

Xemsssa
1,576
 EN 
MY APP  SOLUTION APP
 

 TASK 9  

goal
Line 51‑52 creates a Game.Goal object.

If you use the setUnlock function, the image will not be visible until enough points have been scored.

The following code reveals the goal at 2 points:

goal.setUnlock(2)
There are a few ways to create a goal. Use the reference section to see all of the options.

The following code will make the image start with an opacity of 0.5 instead of being completely invisible:

goal = new Game.Goal(95, 250, 0.5, '/image/game/goodItem/2.png')
The opacity will change to 1 when the goal is unlocked.

If you do not set an unlock value, the goal will unlock as soon as the game starts.

Change line 51 so the image starts with an opacity of  0.3.
Set the unlock value of the goal to 6.
SUPPORTREFERENCENOTESTOOLS
 CHECK  NEXT RESET  SOLUTION SHARE


15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
player.setGun(gun, 'g');
var enemy = new Game.Enemy(200, 50, 'http://1.bp.blogspot.com/-MQE-zK1mVSE/UdSVGV3GP3I/AAAAAAAAAu8
  /EOsv__HnS-M/s512/spacestation.png');
enemy.scaling = 0.3;
enemy.power = 0.05;
enemy.health = 6;
Game.GoodItem.source = 'http://2.bp.blogspot.com/-WFBXJpw2KM8/UdNYDNsJwTI/AAAAAAAAAtk/MwYFwFu1VX0/s210
  /blueship4.png';
var goodItem = new Game.GoodItem(350, 150);
goodItem.scaling = 0.4;
goodItem.health = 2;
goodItem.value = 6;
goodItem.speed = 3;
Game.BadItem.source = 'http://2.bp.blogspot.com/-Fdu3sq_sAl8/UdSJOYWW3yI/AAAAAAAAAus/OmWAI2EKrGU/s200
  /alien4.png';
var badItem = new Game.BadItem(350, 300);
badItem.scaling = 0.4;
badItem.health = 6;
badItem.power = 6;
badItem.speed = 2;
Game.Obstacle.source = 'http://4.bp.blogspot.com/-v8HVu8bE-Gg/UxVAHyQMheI/AAAAAAAABdI/PzHTvxalpRg/s1600
  /tribase-u1-d0.png';
var obstacle = new Game.Obstacle(350, 450);
obstacle.scaling = 0.2;
obstacle.health = 4;
obstacle.power = 1;
obstacle.speed = 1;
var path = new Path();
path.add(350, 450);
path.add(100, 450);
obstacle.setPath(path);
new Game.Score();
Game.soundOn = false;
var goal = new Game.Goal(50, 50, 0.3, 'http://2.bp.blogspot.com/-d1vVOCsXAWc/UuAjYDtmmcI/AAAAAAAABVY
  /hSZxe9e9bY8/s1600/greenplanet.png');
goal.scaling = 0.2;
goal.setUnlock(6);
 
Heading 1

Heading 2
Heading 3
Heading 4
Heading 5
Heading 6
CodeAvengers');
This is a test paragraph');

Item 1
Item 2
Item 1
Item 2
');  CA icon

Need help? Click to chat with us.

How can we help you?
 SEND