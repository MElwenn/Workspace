const container = document.getElementById('office');

const office = new Konva.Stage({
    container: container.id,
    width: container.clientWidth,
    height: container.clientHeight,
});

// GRID

const gridLayer = new Konva.Layer();
office.add(gridLayer);

const gridSize = 100;
for(let x = 0; x <= office.width(); x += gridSize) {
    const line = new Konva.Line({
        points: [x, 0, x, office.height()],
        strokeWidth: 0.5,
        stroke: "grey",
    });
    gridLayer.add(line);
}

for(let y = 0; y <= office.height(); y += gridSize) {
    const line = new Konva.Line({
        points: [0, y, office.width(), y],
        strokeWidth: 0.5,
        stroke: "grey",
    });
    gridLayer.add(line);
}

gridLayer.draw();


// WALLS

var wallsLayer = new Konva.Layer();
office.add(wallsLayer);

var isPaint = false;
var mode = 'brush';
var lastLine;

office.on('mousedown touchstart', function (e) {
    isPaint = true;
    var pos = office.getPointerPosition();
    lastLine = new Konva.Line({
      stroke: '#df4b26',
      strokeWidth: 5,
      globalCompositeOperation:
        mode === 'brush' ? 'source-over' : 'destination-out',
      points: [pos.x, pos.y, pos.x, pos.y],
    });
    wallsLayer.add(lastLine);
  });

office.on('mouseup touchend', function () {
    isPaint = false;
});

// and core function - drawing
office.on('mousemove touchmove', function () {
    if (!isPaint) {
        return;
    }

    const pos = office.getPointerPosition();
    var newPoints = lastLine.points();
    newPoints[2] = pos.x;
    newPoints[3] = pos.y;
    lastLine.points(newPoints);
    wallsLayer.batchDraw();
});

