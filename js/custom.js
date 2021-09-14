$(document).ready(function() {
    // Preloader
	$(window).on('load', function() {
		$("#status").fadeOut();
		$("#preloader").delay(1000).fadeOut("slow");
	})
    function myFunction() {
        setInterval(function(){ 
            $("#status").fadeOut();
            $("#preloader").delay(1000).fadeOut("slow");
        }, 6000);
    }
    myFunction();
    // Parallax
    $.fn.moveIt = function(){
        var $window = $(window);
        var instances = [];
        $(this).each(function(){
            instances.push(new moveItItem($(this)));
        });

        window.addEventListener('scroll', function(){
            var scrollTop = $window.scrollTop();
            instances.forEach(function(inst){
                inst.update(scrollTop);
            });
        }, {passive: true});
    }

    var moveItItem = function(el){
        this.el = $(el);
        this.speed = parseInt(this.el.attr('data-scroll-speed'));
    };

    moveItItem.prototype.update = function(scrollTop){
        this.el.css('transform', 'translateY(' + -(scrollTop / this.speed) + 'px)');
    };
    $(function(){
      $('[data-scroll-speed]').moveIt();
    });
    // Smooth Scroll
    $(function(){
        var $window = $(window);
        var scrollTime = .8;
        var scrollDistance = 400;
        $window.on("mousewheel DOMMouseScroll", function(event){
            event.preventDefault();	
            var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
            var scrollTop = $window.scrollTop();
            var finalScroll = scrollTop - parseInt(delta*scrollDistance);
            TweenMax.to($window, scrollTime, {
                scrollTo : { y: finalScroll, autoKill:true },
                ease: Power1.easeOut,
                autoKill: true,
                overwrite: 5							
            });

        });

    });
});


