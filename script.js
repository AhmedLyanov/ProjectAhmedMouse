const desk = document.querySelector('.desk');
let isDrawing = false;

function draw(el, x, y){
    const point = document.createElement('div');
    point.className = 'point';
    point.style.left = x - 1 + 'px'
    point.style.top = y - 1 + 'px'
    el.append(point);
}

function drawPoint(e){
    console.log(e.type);
    switch (e.type){
        case 'mousedown':
            isDrawing = true;
            draw(e.currentTarget, e.offsetX, e.offsetY);
            break;
        case 'mouseup':
            isDrawing = false
            break;


        case 'mousemove':
            if(isDrawing){
                draw(e.currentTarget, e.offsetX, e.offsetY);

            }
            break;
        }
}
desk.addEventListener('mousedown', drawPoint);
desk.addEventListener('mouseup',  drawPoint);
desk.addEventListener('mousemove',  drawPoint);





