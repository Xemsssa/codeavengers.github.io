
// https://www.codeavengers.com/javascript/106#1.10

var player = new Game.Player(150, 500, 'http://2.bp.blogspot.com/-hFGhuBXuTPA/UO3ccbqTImI/AAAAAAAAAVY/oU30JPTuUiM/s172/spaceshipspr.png');
player.scaling = 0.5;
player.rotateImage = true;
player.startingRotation = 180;
player.health = 5;

var gun = new Game.Gun();
gun.setPositions([new Point(0, -45), new Point(35, -35), new Point(45, 0), new Point(35, 35), new Point(0, 45), new Point(-35, 35), new Point(-45, 0), new Point(-35, -35)]);
gun.power = 2;
gun.bullet.source = 'http://4.bp.blogspot.com/-kFG6rO-l8jE/UpOZbucLaRI/AAAAAAAABGY/wFelOPj7ZVE/s1600/aliendropping0001.png';
gun.bullet.scaling = 0.3;
gun.bullet.startingRotation = 270;
gun.fireSpeed = 4;

player.setGun(gun, 'g');

var enemy = new Game.Enemy(200, 50, 'http://1.bp.blogspot.com/-MQE-zK1mVSE/UdSVGV3GP3I/AAAAAAAAAu8/EOsv__HnS-M/s512/spacestation.png');
enemy.scaling = 0.3;
enemy.power = 0.05;
enemy.health = 6;

Game.GoodItem.source = 'http://2.bp.blogspot.com/-WFBXJpw2KM8/UdNYDNsJwTI/AAAAAAAAAtk/MwYFwFu1VX0/s210/blueship4.png';
var goodItem = new Game.GoodItem(350, 150);
goodItem.scaling = 0.4;
goodItem.health = 2;
goodItem.value = 6;
goodItem.speed = 3;

Game.BadItem.source = 'http://2.bp.blogspot.com/-Fdu3sq_sAl8/UdSJOYWW3yI/AAAAAAAAAus/OmWAI2EKrGU/s200/alien4.png';
var badItem = new Game.BadItem(350, 300);
badItem.scaling = 0.4;
badItem.health = 6;
badItem.power = 6;
badItem.speed = 2;

Game.Obstacle.source = 'http://4.bp.blogspot.com/-v8HVu8bE-Gg/UxVAHyQMheI/AAAAAAAABdI/PzHTvxalpRg/s1600/tribase-u1-d0.png';
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

var goal = new Game.Goal(50, 50, 0.3, 'http://2.bp.blogspot.com/-d1vVOCsXAWc/UuAjYDtmmcI/AAAAAAAABVY/hSZxe9e9bY8/s1600/greenplanet.png');
goal.scaling = 0.2;
goal.setUnlock(6);
goal.setFadeOut("Prepare for level 2...", "https://www.codeavengers.com/c/aaron25/test_level_2", 5000)


