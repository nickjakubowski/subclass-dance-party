var makeDrunkDancer = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);
  // this.node
  window.dancers.push(this);
  this.$node.addClass("drunkDancer");
  
};

makeDrunkDancer.prototype = Object.create(makeDancer.prototype);
makeDrunkDancer.prototype.constructor = makeDrunkDancer;
makeDrunkDancer.prototype.step = function() {

  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};


 
