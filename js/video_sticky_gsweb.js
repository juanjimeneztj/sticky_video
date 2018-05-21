$(document).ready(function(){
    var $window = $( window );
    var $featuredMedia = $( ".video_sticky" );
    var top = $featuredMedia.offset().top;
    var offset = Math.floor( top + ( $featuredMedia.outerHeight() / 2 ) );
    var iframe;
    var player_vimeo = 0;
    
    if($featuredMedia.attr('external') == "true"){
        $featuredMedia.css("padding-top",0);
    }
    
    if($featuredMedia.attr('data-source') == "vimeo"){
        iframe = document.querySelector('iframe');
        player_vimeo = new Vimeo.Player(iframe);
    }
    
    if($featuredMedia.attr('data-source') == "wistia"){
        window._wq = window._wq || [];
        _wq.push({ id: "ve7pzy0d3y", onReady: function(video) {
            video.pause();
            $('img.gif-cover').click(function(){
                $(this).hide();
                video.play();
            });
        }});
    }
    
    /*Function to play or pause the video MP4*/
    $('video').click(function(){
        if($(this).get(0).paused){
            $(this).get(0).play();
            $(this).attr("controls","controls");
        }else{
            $(this).get(0).pause();
        }
    });
    
    $featuredMedia.parent().append('<div class=\"video_sticky_content\"></div>');
    $featuredMedia.appendTo('.video_sticky_content');
    
    $featuredMedia.append('<img src="img/gif_cover_video.gif" alt="" class="gif-cover">');
    
    var height_image = $('img.gif-cover').parent().parent().height();
    
    $window.on( "scroll", function() {
        $featuredMedia.toggleClass( "active",$window.scrollTop() > top);
        if($window.scrollTop() > top){
            $('.video_sticky_content').height(height_image);
        } 
    });
    
    
    $('img.gif-cover').click(function(){
        $(this).hide();
        if(player_vimeo != 0){
            player_vimeo.play();
        }else{
            if($('video').get(0).paused){
                $('video').get(0).play();
                $('video').attr("controls","controls");
            }else{
                $('video').get(0).pause();
            }
        }
    });
});