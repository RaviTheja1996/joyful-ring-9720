import "https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js";

const scrollTracker = document.querySelector(".scroll-tracker");

// const animatedImages = document.querySelectorAll(".image-rotate-in");

const scrollTrackingTimeline = new ScrollTimeline({
        source: document.scrollingElement,
        orientation: "block",
        scrollOffsets: [CSS.percent(0), CSS.percent(100)],
});

// animatedImages.forEach(image => {
//         const imageOffsetTop = image.offsetTop;
//         const imageHeight = image.offsetHeight;
//         image.animate(
//                 {
//                         transform: [" perspective(1000px) rotateX(45deg)", "rotate(0)"],
//                 },
//                 {
//                         duration: 1,
//                         timeline: new ScrollTimeline({
//                                 scrollOffsets: [
//                                         CSS.px(imageOffsetTop + imageHeight - window.innerHeight - 200),
//                                         CSS.px(imageOffsetTop - 300),
//                                 ],
//                         }),
//                 }
//         );
// });


scrollTracker.animate(
        {
                transform: ["scaleX(0)", "scaleX(1)"],
        },
        {
                duration: 1,
                timeline: scrollTrackingTimeline,
        }
);