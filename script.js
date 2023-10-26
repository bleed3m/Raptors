const wpp = document.getElementById("home-page");
const wallpaper = document.querySelector(".main").offsetTop;
window.onscroll = function() {
    if (window.scrollY > 0) {
        var opac = ((window.scrollY / wallpaper) * 1.8);
        var translateY = (window.scrollY * -.5);
      console.log(opac, translateY);
        wpp.style.background = "linear-gradient(rgba(16, 16, 16, " + opac + "), rgba(16, 16, 16, " + opac + ")), url(https://cloudfront-us-east-1.images.arcpublishing.com/tgam/H4XPBBRKHFMTTLXEBVBLK65HOM.jpg) no-repeat";
    }
}
