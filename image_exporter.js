onload = () => {
  var alphabet;
  var image;
  var canvas;
  var ctx;
  var dataURL;
  alphabet = document.getElementById('alphabet');
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');
  ctx.drawImage(alphabet, 0, 0);
  image = document.createElement('img');
  dataURL = canvas.toDataURL();
  image.src = dataURL;
  document.body.append(image);
  
  ctx.clearRect(0, 0, 48, 48);
  ctx.drawImage(alphabet, -48 * 5, 0);
  image = document.createElement('img');
  dataURL = canvas.toDataURL();
  image.src = dataURL;
  document.body.append(image);
}

