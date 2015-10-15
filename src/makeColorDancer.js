var makeColorDancer = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);
  // this.node
  window.dancers.push(this);
  this.$node.addClass("dDancer");
  
};

makeColorDancer.prototype = Object.create(makeDancer.prototype);
makeColorDancer.prototype.constructor = makeColorDancer;
makeColorDancer.prototype.step = function() {

  makeDancer.prototype.step.call(this);
  this.$node.toggleClass("cDancer");
};

