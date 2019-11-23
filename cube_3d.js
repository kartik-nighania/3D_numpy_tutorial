function setup() {
  createCanvas(710, 400, WEBGL);
  img = loadImage('cat.jpg');
}

function draw() {
  background(250);

  // //translate(-240, -100, 0);
  // normalMaterial();
  // push();
  // texture(img)
  // //rotateZ(frameCount * 0.01);
  // //rotateX(frameCount * 0.01);
  // //rotateY(frameCount * 0.01);
  // plane(400, 250);
  // //angle(2)
  // pop();

  translate(240, 0, 0);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(70, 70, 70);
  texture(img)
  pop();

  console.log(frameCount)
}
