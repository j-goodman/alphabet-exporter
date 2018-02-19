onload = () => {
  var alphabet;
  var canvas;
  var ctx;
  var dataURL;
  var i;
  var image;
  alphabet = document.getElementById('alphabet');
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');

  for (i = 0; i < 75; i++) {
    ctx.clearRect(0, 0, 48, 48);
    ctx.drawImage(alphabet, -48 * i, 0);
    image = document.createElement('img');
    dataURL = canvas.toDataURL();
    image.src = dataURL;
    document.body.append(image);
  }
}

