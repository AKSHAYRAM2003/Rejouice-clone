//locomotive scroll trigger codepen

function locoScroll(){
  gsap.registerPlugin(ScrollTrigger);


// --- SETUP START ---
// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, {duration: 0, disableLerp: true}) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".smooth-scroll").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.defaults({ scroller: ".smooth-scroll" });
// --- SETUP END ---

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
locoScroll()



function cursorEffect(){
    
   let page1Content =  document.querySelector("#page2")
   let cursor = document.querySelector("#cursor")
//  Raw js method
   page2.addEventListener("mousemove",function(dets){
    //  cursor.style.left = move.x+"px"
    //  cursor.style.top = move.y+"px"
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y
    })
   })

   page2.addEventListener("mouseenter",function(){
         gsap.to(cursor,{
            scale:1
            
         })
   })
   page2.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        scale:0
     })
   })

}
cursorEffect()



function page3Annimation(){
    gsap.from(".elem h1",{
        y:100,
        stagger:0.2,
        duration:1,
        scrollTrigger:{
            trigger:"#page3",
            scroller:"#main",
            start:"top 47%",
            end:"top 45%",
            markers:true,
            scrub:1
        }
    })
}
pagr3Annimation()
