const isDrawing = false;
const container = document.querySelector('#sketchContainer');
const gridSize = document.querySelector('#inp');
const SIZE = 16;

gridSize.addEventListener('keydown', function(event){
    if(event.key=="Enter"){
        SIZE = gridSize.value;
    }
});

console.log(SIZE);