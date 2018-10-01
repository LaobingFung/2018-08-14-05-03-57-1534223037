module.exports = function main() {
  var sum =0;
  arguments[0].split('').forEach(function(element){
    sum += (parseInt(element));
  })
  return sum;
};