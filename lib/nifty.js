/* Nifty.JS v0.1
 *
 * Author: John-Alan Simmons 
 *
 * A JQuery modal system based from http://tympanus.net/codrops/2013/06/25/nifty-modal-window-effects/
 *
 * Licensed under the MIT License
 * 2015 ConferenceCloud Inc.
 */
(function( $ ) {

	$(document).on("click", "[data-trigger='modal'], [data-trigger='nifty']", function() {
  		var target = $(this).data("target")
		$(target).nifty("show")
  	})

  	$(document).on("click", ".md-overlay", function() {
  		$(".nifty-modal.md-show").nifty("hide")
  	})

  	$(document).on("click", ".nifty-modal.md-show .md-close", function() {
  		$(this).closest(".nifty-modal.md-show").nifty("hide")
  	})

   	$.fn.extend({
   		nifty: function(cmd) {
		   	var self = this;
		   	var transitionEndEvents = "transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd"
		    
		    var showHandler = function(animation) {
	    		var handledTransitionEnd = false;
	    		
	    		// Check to see if we are allowed to continue showing the modal
	    		if (!fire($(self), "show.nifty.modal"))
	    			return

	    		$(self).one(transitionEndEvents, function(event) {
	    			if (!handledTransitionEnd) {
	    				handledTransitionEnd = true;
	    				event.preventDefault();
		    			event.stopPropagation();
		    			$(self).trigger("shown.nifty.modal")
	    			}
	    		})
	    		var xcenter = Math.floor($(self).width()/2)
	    		var ycenter = Math.floor($(self).height()/2)
	    		$(".nifty-modal").css("transform", "translateX(-" + xcenter + "px) translateY(-" + ycenter + "px)")
	    		$(self).addClass("md-show")
	    	}

	    	var hideHandler = function() {
	    		var handledTransitionEnd = false;
	    		
	    		// Check to see if we are allowed to continue showing the modal
	    		if (!fire($(self), "hide.nifty.modal"))
	    			return

	    		$(self).one(transitionEndEvents, function(event) {
	    			if (!handledTransitionEnd) {
	    				handledTransitionEnd = true;
	    				event.preventDefault();
		    			event.stopPropagation();
		    			$(self).trigger("hidden.nifty.modal")
	    			}
	    		})
	    		$(self).removeClass("md-show")
	    	}

		    if (cmd == "show") {
		    	showHandler();
		    } else if (cmd == "hide") {
		    	hideHandler();
		    }

	    	return this;
	   	}
	})	
	
	function setVendor(element, property, value) {
		element.style["webkit" + property] = value;
		element.style["moz" + property] = value;
		element.style["ms" + property] = value;
		element.style["o" + property] = value;
	}

	function fire(obj, name, data) {
      var event = $.Event(name);
      obj.trigger(event, data);
      return event.result !== false;
    }
	
})( jQuery );