var makeBlinkyDancer = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);
  // this.node
  window.dancers.push(this);

  this.$node.addClass("bDancer");
  
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;
makeBlinkyDancer.prototype.step = function() {

  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};


