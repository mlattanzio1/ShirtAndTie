
// Start of wrapper function

$(function() {

   var item = 'shirt';

   // Listen for toggle change
   $('input[name="toggle"]').on("change",function() {
      item = $('input[name="toggle"]:checked').val();
      colorPicker(item);
   });

   function colorPicker(attribute) {

      // Turn off color event listener
      $('input.color').off('change');

   if (attribute === 'shirt') {
      var opposite = 'tie';
   } else {
      opposite = 'shirt';
   };

   // Turn on color event listener
	$('input.color').on("change",function() {
      
      // Pick color
      var colorValue = $('input.color').val();
      // Fill shirt or tie with chosen color
   	  $("."+attribute).css("fill", colorValue);
   	  
   	  // Get complementary color
   	  var complement = $.xcolor.complementary(colorValue);
   	  // Fill shirt or tie with complementary color
   	  $("."+opposite).css("fill", complement);
   	  
   	  // Get triad color
   	  var triad = $.xcolor.triad(colorValue);
   	  var triad1 = triad.pop();
   	  // Fill shirt or tie 1 with triad colory
        $("."+attribute+"1").css("fill", colorValue);
   	  $("."+opposite+"1").css("fill", triad1);
   	  
   	  // Get tetrad color
   	  var tetrad = $.xcolor.tetrad(colorValue);
   	  var tetrad1 = tetrad.pop();
   	  // Fill shirt or tie 2 with tetrad color
        $("."+attribute+"2").css("fill", colorValue);
   	  $("."+opposite+"2").css("fill", tetrad1);
   	  
   	  // Get analogous color
   	  var analogous = $.xcolor.analogous(colorValue);
   	  var analogous1 = analogous.pop();
   	  // Fill shirt or tie 3 with analogous color
        $("."+attribute+"3").css("fill", colorValue);
   	  $("."+opposite+"3").css("fill", analogous1);
   	  
   	  // Get monochromatic color
   	  var monochromatic = $.xcolor.monochromatic(colorValue);
   	  var monochromatic1 = monochromatic[2];
   	  // Fill shirt or tie 4 with monochromatic color
        $("."+attribute+"4").css("fill", colorValue);
   	  $("."+opposite+"4").css("fill", monochromatic1);
   	  
   	  // Get random color
   	  var random = $.xcolor.random(colorValue);
   	  // Fill shirt or tie 5 with random color
        $("."+attribute+"5").css("fill", colorValue);
   	  $("."+opposite+"5").css("fill", random);
    
    }); // End of color event listener function

    } // End of wrapper function

});