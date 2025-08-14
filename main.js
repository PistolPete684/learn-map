function isolateIt(arr){
  //
  return arr.map(str => {
    const mid = Math.floor(str.length / 2);
    if (str.length % 2 === 0) {
    return str.slice(0, mid) + "|" + str.slice(mid);
  } else {
    return str.slice(0, mid) + "|" + str.slice(mid +1);
  }
    
  });

}

// code wars alternative
// function isolateIt(arr){
//   return arr.map(s=>s.slice(0,s.length/2)+"|"+s.slice(-s.length/2));
// }