const fs = require('fs');
fs.readFile('check.js', 'utf8', function (err, data) {
  fs.writeFile('hero.js', data);
});




/*function User() {
  this.name = "";
  this.life = 100;
  this.giveLife = function (targetPlayer) {
    targetPlayer.life += 1;
    console.log('Life is incresased');
  };
};
var ankit = new User();
var suman = new User();
ankit.name = "Ankit";
suman.name = "Suman";
ankit.giveLife(suman);
console.log('Life of ankit'+ankit.life);
console.log('Life of suman'+suman.life);
User.prototype.getHead = function (targetPlayer) {
  targetPlayer.life -= 5;
};
suman.getHead(ankit);
console.log('Life of ankit'+ankit.life);
console.log('Life of suman'+suman.life); */
