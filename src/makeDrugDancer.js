var makeDrugDancer = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);
  // this.node
  
};

makeDrugDancer.prototype = Object.create(makeDancer.prototype);
makeDrugDancer.prototype.constructor = makeDrugDancer;
makeDrugDancer.prototype.step = function() {

  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};

