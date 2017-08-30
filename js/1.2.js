var player = new Game.Player(150, 500, 'http://2.bp.blogspot.com/-hFGhuBXuTPA/UO3ccbqTImI/AAAAAAAAAVY/oU30JPTuUiM/s172/spaceshipspr.png');
player.scaling = 0.5;
player.rotateImage = true;
player.startingRotation = 180;

var enemy = new Game.Enemy(200, 50, 'http://1.bp.blogspot.com/-MQE-zK1mVSE/UdSVGV3GP3I/AAAAAAAAAu8/EOsv__HnS-M/s512/spacestation.png');
   
  enemy.scaling = 0.3;
  enemy.power = 0.05;
  
player.health = 5;    
   