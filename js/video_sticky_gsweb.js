$(document).ready(function(){
    /*Function to play or pause the video MP4*/
    $('video').click(function(){
        if($(this).get(0).paused){
            $(this).get(0).play();
        }else{
            $(this).get(0).pause();
        }
    });
});