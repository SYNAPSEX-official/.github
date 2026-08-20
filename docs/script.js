const moments = new Swiper(".moments-stack", {
        effect: "cards",

        grabCursor: true,
        loop: false,

        speed: 700,

        cardsEffect: {
                perSlideOffset: 8,
                perSlideRotate: 1,
                rotate: true,
                slideShadows: false,
        },
});