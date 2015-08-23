function random() {
    return Math.floor(Math.random() * 10) + 1;
}

function GameRenderer(context) {
    this.context = context;

    this.render = function () {
        drawBlock(random(), random()); 
    };

    drawBlock = function (x, y) {
        var blockWidth = game.WIDTH / game.GRID.COLUMNS;
        var blockHeight = game.HEIGHT / game.GRID.ROWS; 

        x = blockWidth * x;
        y = blockHeight * y;

        context.fillStyle = "#FF0000";
        context.fillRect(x, y, blockWidth, blockHeight);
        console.log(x, y, blockWidth, blockHeight);
    };
}

var game = { 
    HEIGHT: 100, 
    WIDTH: 100, 
    GRID: {
        ROWS: 10,
        COLUMNS: 10
    }
};

var i = 0;

var canvas   = document.getElementById("canvas");
var renderer = new GameRenderer(canvas.getContext("2d"));

canvas.height = game.HEIGHT;
canvas.width  = game.WIDTH;

var entities = [
    {
        "type": "snake",
        "positions": [
            [1, 1],
            [1, 2],
            [2, 2]
        ]
    },
    {
        "type": "fruit",
        "positions": [
            [1, 4]
        ]
    }
];

setInterval(renderer.render, 8);