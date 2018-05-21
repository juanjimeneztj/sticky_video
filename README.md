# Sticky Video
## Sticky video
**Sticky Video** - Function to move the video up and down without the need to lose sight of it.
## Demo URL:
[Demo Sticky Video](https://juanjimeneztj.github.io/sticky_video/)
## Use
### Scripts
Include this scripts on the <head>
```
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
  <script src="https://player.vimeo.com/api/player.js"></script>
  <script src="//fast.wistia.com/assets/external/E-v1.js" async></script>
```
Include this script before all content page:
```
```
  
  Include this code to embed bigstreamie videos MP4 with the function StickyVideo
  ```
<div class="video_sticky" external="false" data-source="bigstream">
  <!--BIGSTREAMIE-->
  <video controlsList="nodownload" src="http://techslides.com/demos/sample-videos/small.mp4"></video>
</div>
  ```
  Include this code to embed WISTIA videos with the function StickyVideo
  ```
<div class="video_sticky" external="false" data-source="wistia">                          
  <!--WISTIA-->
  <script src="https://fast.wistia.com/embed/medias/ve7pzy0d3y.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><div class="wistia_responsive_padding" style="position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><div class="wistia_embed wistia_async_ve7pzy0d3y seo=false videoFoam=true" style="height:100%;width:100%">&nbsp;</div></div></div>
</div>
  ```
  
  Include this code to embed VIMEO videos with the function StickyVideo
  
  ```
<div class="video_sticky" external="true" data-source="vimeo">
  <!--VIMEO-->
  <iframe src="https://player.vimeo.com/video/56282283" width="640" height="480" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
</div>
  ```
