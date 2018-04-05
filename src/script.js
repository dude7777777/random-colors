function myFunction() {
    var c = document.getElementById("myCanvas");

    for (i = 0; i < c.width; i++) {
        for (j = 0; j < c.height; j++) {
            var r = Math.floor((Math.random() * 255));
            var g = Math.floor((Math.random() * 255));
            var b = Math.floor((Math.random() * 255));
            var a = Math.floor((Math.random() * 255));

            drawPixel(i, j, r, g, b, a);
        }
    }
}

function drawPixel(x, y, r, g, b, a) {
    var canvas = document.getElementById("myCanvas");
    var canvasWidth = canvas.width;
    var canvasHeight = canvas.height;
    var ctx = canvas.getContext("2d");
    var canvasData = ctx.getImageData(0, 0, canvasWidth, canvasHeight);

    var index = (x + y * canvasWidth) * 4;

    canvasData.data[index + 0] = r;
    canvasData.data[index + 1] = g;
    canvasData.data[index + 2] = b;
    canvasData.data[index + 3] = a;

    ctx.putImageData(canvasData, 0, 0);
}