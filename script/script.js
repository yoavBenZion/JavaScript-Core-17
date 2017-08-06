var daisy = {
  name: 'daisy',
  fetch : function () {
    return this.name + ' go get it !';
  
    function subfetch() {
      console.log(this);
      return this.name + 'i dident get it !'; 
    } 
    return subfetch();
  }
};

var name = 'chuck';

console.log(daisy.fetch());


function sum(a,b) {
  console.log(arguments);
  for(i=0; i<arguments.length; i++) {
    arguments[i] + arguments[i+1];
    
  }
//  we can use arguments with a loop to run all the variables, as it will not be possibole to run it otherwise.
  return a +b;
}

console.log(sum(1,2,3,4,5, [6,7]));



