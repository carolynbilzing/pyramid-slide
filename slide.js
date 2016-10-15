

// set a handler function for the form's submission event
// $("#draw-form").submit(function(event) {
//     // draw pyramid with the specified height
//     drawPyramid(height);
// });
$("#slider").change(function(){
  var height= $("#slider").val();
  drawPyramid(height);
  $("#slider-value").text(height);
})

/**
 * drawPyramid
 *
 * Renders, in the HTML document, a Mario pyramid of the specified height
 */
function drawPyramid(height) {

    $('#pyramid').empty();
    // clear the old content from the #pyramid container


    // for each row....
    for (var row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            var spaceChar = "&nbsp";
            rowStr += spaceChar;
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += "#";
        }

        // make a <p> element for this row
        rowElem = $("<p>").html(rowStr);

        $('#pyramid').append(rowElem);
        // insert the paragraph into the #pyramid container

    }
}
