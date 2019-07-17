// Select color input
// Color is handled with jQuery snippet in the index.html file

// Select size input
var sizeForm = document.getElementById('sizePicker');
var width, height;
var canvas = document.querySelector('#pixelCanvas');
sizeForm.addEventListener('submit', function(){
    event.preventDefault();
    width = document.getElementById('inputWidth').value;
    height = document.getElementById('inputHeight').value;
    // console.log(width, height);
    makeGrid(height, width);

});




// When size is submitted by the user, call makeGrid()
function makeGrid(height, width) {
    // Firstly clear canvas and then start again
    while (canvas.hasChildNodes()){
        canvas.removeChild(canvas.firstChild);
    }
    // Iterate with given height and width to create the clear canvas
    for(var x = 0; x<height; x++){
        var row = document.createElement('tr');
        canvas.appendChild(row);
        for(var y = 0; y<width; y++){
            var column = document.createElement('td');
            row.appendChild(column);
        }
    }

}