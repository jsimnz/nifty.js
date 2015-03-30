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
	    		$(self).trigger("show.nifty.modal")
	    		$(self).one(transitionEndEvents, function(event) {
	    			if (!handledTransitionEnd) {
	    				handledTransitionEnd = true;
	    				event.preventDefault();
		    			event.stopPropagation();
		    			$(self).trigger("shown.nifty.modal")
	    			}
	    		})
	    		$(self).addClass("md-show")
	    	}

	    	var hideHandler = function() {
	    		var handledTransitionEnd = false;
	    		$(self).trigger("hide.nifty.modal")
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
})( jQuery );