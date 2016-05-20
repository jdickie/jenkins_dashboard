$(document).ready(
    var makeBoxes = function(rgbText) {
      var boxes = rgbText.split(',');
        console.log(boxes);
        
    };

    $.ajax({
        url: "http://dev-jenkins.npr.org:3000/build/rgb",
        success: function(data) {
            makeBoxes(data);
        }
    });
);