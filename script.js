const container = document.querySelector('#sketchContainer');
const gridSize = document.querySelector('#inp');
const colorPallete = document.querySelector('#color');
const throwMessage = document.querySelector('.throw');
const opacityVal = document.querySelector('#opacityValue');
let isDrawing = false;
let SIZE = 16;
let isGridCreated = false;
let colorSelector = "black";
let opacityNumericValue = '100%';

let colorArray = [
    "white","red","blue","green","yellow","orange",
    "pink","purple","black"
]
for(let j = 0;j<colorArray.length;j++){
    let colorChildNode = document.createElement('div');
    colorChildNode.classList.add('colorSelect');
    colorChildNode.id = colorArray[j];
    colorChildNode.style.backgroundColor = colorArray[j];
    colorPallete.appendChild(colorChildNode);
    // console.log(colorArray[j]);
}

function createChild(){
    SIZE = parseInt(gridSize.value);
    // console.log(gridSize.value);
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
            throwMessage.textContent = "";
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
    if(isGridCreated){
        const cell = event.target.closest('div.rows');
        cell.style.backgroundColor = colorSelector;
        cell.style.opacity = opacityNumericValue;
        isDrawing = true;
    }
    else{
        throwMessage.textContent = "Please Enter a valid value";
    }
});

container.addEventListener('mouseover',function(event){
    if(isDrawing){
        const cell = event.target.closest('div.rows');
        cell.style.backgroundColor = colorSelector;
        cell.style.opacity = opacityNumericValue;
    }
});

container.addEventListener('mouseup',()=>{ 
    isDrawing=false; 
})

colorPallete.addEventListener('mousedown',(event)=>{ 
    let colorElement = event.target.closest('.colorSelect');
    colorSelector = colorElement.id;
})

opacityVal.addEventListener('keydown', function(event){
    if(event.key=="Enter"){
        opacityNumericValue = parseFloat(opacityVal.value)/100;
    }
})