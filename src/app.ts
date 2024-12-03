const canvas = document.getElementById('mainCanvas') as HTMLCanvasElement;
const context = canvas.getContext('2d');


// TODO -> Auto resolution
const WIDTH  = 800;
const HEIGHT = 800;

canvas.width = WIDTH;
canvas.height = HEIGHT;

function init() {
    if(context == null) throw new Error("Failed to get 2D context");
    
    console.log("initializing .. ");

    context.fillStyle = 'black';
    context.fillRect(0, 0, WIDTH, HEIGHT);
}

try {
    init();
} catch (err) {
    console.log(err);
}