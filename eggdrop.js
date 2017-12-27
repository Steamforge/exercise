let eggs = 2;
let seedFloor = Math.floor((Math.random() * 100) + 1);
let tries = 0;

const checkFloor = (level) => {
  return level >= seedFloor ? true : false;
};

const breakEgg = () => {
  for (let i = 10; i <= 100; i+=10) {
  tries++;
  if (checkFloor(i)) {
    eggs--;
    
    for (let x = i-9; x <= i; x++) {
      tries++;
      if (checkFloor(x)) {
        eggs--;
        console.log('Floor ' + (x - 1) + ' is the highest safe floor.');
        console.log(tries + ' tries. ' + (2 - eggs) + ' eggs broken.');
        break;
      }
    }
    
    break;
  }
}
};

breakEgg();
