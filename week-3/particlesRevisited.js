let time = 0;
let gravity = 0.5;

function Particle(startX, startY){
  this.x = startX;
  this.y = startY;
}

const particles = [];

Particle.prototype = {
  getVelocity: function(){
    return time * gravity
  },
  move: function(){
  this.y += this.getVelocity()
  if (this.y >= 500) {
    console.log('bottom');
  }else{
    this.y += this.getVelocity()
  }
  }
}

setInterval(function(){
  time ++;
  particles.map(function(particle){
    console.log(particle.x)
  })
  particles.filter(function(particle){
    return particle.y < 500;
  }).map(function(particle){
    particle.move()
  })
}.bind(this), 1000)

for (var i = 0; 100 > particles.length; i++) {
  particles.push(new Particle(i, (Math.random()*500)));
}

console.log(particles);
