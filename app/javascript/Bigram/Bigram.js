const input = "the lord of the rings the fellowship of the ring";

let bigram = () => {
	let arr = input.split(" ");
  let result = [];
  let i, imax;
  
  for ( i = 0, imax = arr.length - 1; i < imax - 1; i++ ) {
    result.push( arr[i], arr[i+1], arr[i+2] );
  }
  return result.join(' ');
};
