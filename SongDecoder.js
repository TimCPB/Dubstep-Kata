function songDecoder(song){
  array = song.split('')
  while(array[0] === 'W' && array[1] === 'U' && array[2] === 'B'){
    array.splice((array.length -3), 3)
    array.splice(0,3)
  }
  return array
  });
}