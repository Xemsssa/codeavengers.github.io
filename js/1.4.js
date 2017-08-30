var player = new Game.Player(150, 500, 'http://2.bp.blogspot.com/-hFGhuBXuTPA/UO3ccbqTImI/AAAAAAAAAVY/oU30JPTuUiM/s172/spaceshipspr.png');
player.scaling = 0.5;
player.rotateImage = true;
player.startingRotation = 180;
player.health = 5;

var gun = new Game.Gun();
gun.setPositions([new Point(0, -45), new Point(35, -35), new Point(45, 0), new Point(35, 35), new Point(0, 45), new Point(-35, 35), new Point(-45, 0), new Point(-35, -35)]);

var enemy = new Game.Enemy(200, 50, 'http://1.bp.blogspot.com/-MQE-zK1mVSE/UdSVGV3GP3I/AAAAAAAAAu8/EOsv__HnS-M/s512/spacestation.png');
enemy.scaling = 0.3;
enemy.power = 0.05;
enemy.health = 6;

gun.power = 2;

player.setGun(gun, "g");

