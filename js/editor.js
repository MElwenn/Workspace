const container = document.getElementById('office');

const office = new Konva.Stage({
    container: container.id,
    width: container.clientWidth,
    height: container.clientHeight,
});
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