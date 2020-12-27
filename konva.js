const container = document.getElementById('container');

const office = new Konva.Stage({
    container: container.id,
    width: parseInt(container.style.width),
    height: parseInt(container.style.height),
});
const gridLayer = new Konva.Layer();
office.add(gridLayer);

const deskLayer = new Konva.Layer();
office.add(deskLayer);

const gridSize = 50;
for(let x = 0; x <= office.width(); x += gridSize) {
    const line = new Konva.Line({
        points: [x, 0, x, office.height()],
        strokeWidth: 1,
        stroke: "black",
    });
    gridLayer.add(line);
}
for(let y = 0; y <= office.height(); y += gridSize) {
    const line = new Konva.Line({
        points: [0, y, office.width(), y],
        strokeWidth: 1,
        stroke: "black",
    });
    gridLayer.add(line);
}
gridLayer.draw();

const desk = new Konva.Rect({
    width: 2 * gridSize,
    height: gridSize,
    fill: 'grey',
    stroke: 'black',
    strokeWidth: 4,
    cornerRadius: 4,
});
const deskTextPadding = 10
const deskText = new Konva.Text({
    x: desk.x() + deskTextPadding,
    y: desk.y() + deskTextPadding,
    text: '',
});
const deskGroup = new Konva.Group({
    x: gridSize,
    y: gridSize,
    draggable: true,
});
deskGroup.on('dragstart', () => {
    deskText.text('');
});
deskGroup.on('dragend', (e) => {
    e.target.to({
        x: Math.round(e.target.x() / gridSize) * gridSize,
        y: Math.round(e.target.y() / gridSize) * gridSize,
        onFinish: () => {
            deskText.text('x: ' + e.target.x() + '\ny: ' + e.target.y());
            deskLayer.draw();
        }
    });
});
deskGroup.add(desk);
deskGroup.add(deskText);
deskLayer.add(deskGroup);
deskLayer.draw();
