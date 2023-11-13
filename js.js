document.addEventListener("DOMContentLoaded", function() {

  'use strict';


  gsap.registerPlugin(ScrollTrigger);

  const gsapItem = gsap.utils.toArray('.reveal_img-item');

  gsapItem.forEach((gsIt)=>{

    const imgNum = gsIt.querySelector('.reveal_img_num');
    const imgInner = gsIt.querySelector('.reveal_img-inner');
    const imgBl = gsIt.querySelector('.reveal_img-bl');
    const imgImg = gsIt.querySelector('.reveal_img-img');

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: gsIt,
        start: "top 70%",
        toggleActions: "play none none none",
        markers: false
      }
    });

      tl.from(imgNum, 1, {opacity: 0, translateY: "80px", ease: "expo.out"})
      tl.to(imgInner, .5, { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", ease: "expo.out" }, "-=1")
      tl.to(imgBl, 1.5, { clipPath: "polygon(0% 0%, 100% 0% 100% 100%, 0% 100%", ease: "expo.out" }, "-=0.5")
      tl.from(imgImg, 5, { scale: 1.5, filter: "blur(15px)", ease:"expo.out"}, "-=1.7")

  });


});