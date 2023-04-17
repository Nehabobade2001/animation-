var tl=gsap.timeline()
tl
.from("#left h1",{
    y:50,
   opacity:0,
    duration:1,
    delay:0.5,
})
.from("#left h2",{
    x:50,
    opacity:0,
    duration:1,
    delay:1,
})
.from("#center-first img",{
    y:-100,
    opacity:0,
    scale:0,
    rotate:360,


})
.from("#center-second img",{
    y:100,
    opacity:0,
    scale:0,
    rotate:360,

})
.from("#center-thread img",{
    x:100,
    opacity:0,
    scale:0,
    rotate:360,

})
gsap.from("#bottom",{
    x:-100,
    opacity:0,
    duration:1,
    delay:3,
})
