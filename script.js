const container = document.querySelector('#sketchContainer');
const gridSize = document.querySelector('#inp');
const eraser = document.querySelector('#eraser');
let isDrawing = false;
let SIZE = 16;
let isGridCreated = false;
let isErasing = false;

function createChild(){
    SIZE = parseInt(gridSize.value);
    console.log(gridSize.value);
    const cellSize = 400/SIZE;
    for(let i=0;i<SIZE;i++){
        let childNode = document.createElement('div');
        childNode.classList.add('columns');
        childNode.style.height = `${cellSize}px`
        for(let i=0;i<SIZE;i++){
            let grandchildNode = document.createElement('div');
            grandchildNode.classList.add('rows');
            grandchildNode.textContent = "";
            grandchildNode.style.width = `${cellSize}px`
            childNode.appendChild(grandchildNode);
        }
        container.appendChild(childNode);
    }
}
gridSize.addEventListener('keydown', function(event){
    if(event.key=="Enter"){
        if(isGridCreated==false){
            createChild();
            isGridCreated=true;
        }
        else{
            let child = container.lastElementChild;
            while(child){
                container.removeChild(child);
                child = container.lastElementChild;
            }
            createChild();
        }
    }
});

container.addEventListener('mousedown',function(event){
    const cell = event.target.closest('div.rows');
    if(!isErasing) cell.style.backgroundColor = "black";
    else cell.style.backgroundColor = "white";
    // console.log("Yes");
    isDrawing = true;
});

container.addEventListener('mouseover',function(event){
    if(isDrawing){
        const cell = event.target.closest('div.rows');
        if(!isErasing) cell.style.backgroundColor = "black";
        else cell.style.backgroundColor = "white";
    }
});

container.addEventListener('mouseup',()=>{ 
    isDrawing=false; 
    isErasing=false
})

eraser.addEventListener('mousedown',()=>{ isErasing=true;})