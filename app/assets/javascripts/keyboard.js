// Note: $(() => {}); is equivalent to $(document).ready(function(){})
class KeyboardController {

	constructor(key) {
		this.key = key;
		this.value = key.text();
	}

	print_value() {

		if (this.key.hasClass("key-space")) {
			var oldText = $(".text-output").text();
			$(".text-output").text(oldText + " ")
		} else if (this.key.hasClass("key-special") || this.key.hasClass("key-wide")) {

			if (this.value == "Bksp"){
				oldText = $(".text-output").text();
				var newText = oldText.substring(0, oldText.length-1);
				$(".text-output").text(newText);
			}
			

		} else {
			var oldText = $(".text-output").text();
			$(".text-output").text(oldText + this.value)
		}
	}
}

$(document).ready(function() { 
	console.log('Document ready! [app/assets/javascripts/keyboard.js]');
	
	$('.key').click(function(){
    	var key = new KeyboardController($(this));
    	key.print_value();
	});

	$("#keyboard-show").click(function(){

		$("#kcontainer").toggle("slide");
	});
});