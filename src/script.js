const logo = document.querySelector(".logo");
const button = document.querySelector(".button-start");
const imageOne = document.querySelector(".destination-one");

const checkWidth = () => {
  if (window.innerWidth >= 1024) {
    return "bigScreen";
  } else {
    return "smallScreen";
  }
};

const width = checkWidth();

const applyAnimation = () => {
  if (window.innerWidth >= 1024) {
    gsap.from(".itemss, .logo, .name, .name-p, .cardss, .ul-list, i", {
      y: -100,
      duration: 0.3,
      opacity: 0,
      stagger: 0.2,
    });
  } else {
    gsap.from(".logo, .name, .name-p, .cardss, .ul-list, i", {
      y: -100,
      duration: 0.5,
      opacity: 0,
      stagger: 0.3,
    });
  }
};

applyAnimation();

button.addEventListener("mouseenter", () => {
  gsap.from(".start-button", {
    rotateX: 360,
  });
});

const menuFunction = () => {
  let tl = gsap.timeline();
  const menu = document.querySelector(".menu-icon");
  const closeMenu = document.querySelector(".close-menu");

  tl.to(".menu-items", {
    right: 0,
    duration: 0.5,
  });

  tl.pause();

  menu.addEventListener("click", () => {
    tl.play();
    menu.classList.add("hidden");
  });

  closeMenu.addEventListener("click", () => {
    tl.reverse();

    setTimeout(() => {
      menu.classList.remove("hidden");
    }, 200);
  });
};

menuFunction();

const breakTheTexts = () => {
  const logoText = logo.textContent;

  const splittedText = logoText.split("");
  const half = splittedText.length / 2;

  let clutter = "";

  splittedText.forEach((e, idx) => {
    if (idx < half) {
      clutter += `<span class="left hover:text-black">${e}</span>`;
    } else {
      clutter += `<span class="right hover:text-black">${e}</span>`;
    }
  });

  logo.innerHTML = clutter;
};

breakTheTexts();

const animateTheLogo = () => {
  gsap.from("h1 .left", {
    duration: 0.5,
    rotationX: 360,
  });

  gsap.from("h1 .right", {
    duration: 0.5,
    rotateY: 360,
  });
};

logo.addEventListener("mouseenter", () => {
  animateTheLogo();
});

gsap.from(".destination-one", {
  duration: 1,
  x: -500,
  opacity: 0,
  scrollTrigger: {
    trigger: ".destination-one",
    scroller: "body",
    // markers: true,
    start: "top 100%",
    end: "top -10%",
    scrub: true,
  },
});
gsap.from(".destination-one-text", {
  duration: 1,
  x: 500,
  opacity: 0,
  scrollTrigger: {
    trigger: ".destination-one-text",
    scroller: "body",
    // markers: true,
    start: width == "smallScreen" ? "top 300%" : "top 100%",
    scrub: true,
  },
});

gsap.from(".destination-two", {
  duration: 1,
  x: 1000,
  opacity: 0,
  scrollTrigger: {
    trigger: ".destination-two",
    scroller: "body",
    // markers: true,
    start: width == "smallScreen" ? "top 600%": "top 250%",
    scrub: true,
  },
});
gsap.from(".destination-two-text", {
  duration: 1,
  x: -500,
  opacity: 0,
  scrollTrigger: {
    trigger: ".destination-two-text",
    scroller: "body",
    // markers: true,
    start: width == "smallScreen" ? "top 500%" : "top 200%",
    scrub: true,
  },
});

gsap.from(".destination-three", {
  duration: 1,
  x: -1000,
  opacity: 0,
  scrollTrigger: {
    trigger: ".destination-three",
    scroller: "body",
    // markers: true,
    start: width == "smallScreen" ? "top 600%" : "top 200%",
    end: "top -40%",
    scrub: true,
  },
});
gsap.from(".destination-three-text", {
  duration: 1,
  x: 500,
  opacity: 0,
  scrollTrigger: {
    trigger: ".destination-three-text",
    scroller: "body",
    // markers: true,
    start: width == "smallScreen" ? "top 350%" : "top 100%",
    scrub: true,
  },
});

gsap.from(".destination-four", {
  duration: 1,
  x: 500,
  opacity: 0,
  scrollTrigger: {
    trigger: ".destination-four",
    scroller: "body",
    // markers: true,
    start: "top 110%",
    end: "top 50%",
    scrub: true,
  },
});
gsap.from(".destination-four-text", {
  duration: 1,
  x: -1000,
  opacity: 0,
  scrollTrigger: {
    trigger: ".destination-four-text",
    scroller: "body",
    // markers: true,
    start: width == "smallScreen" ? "top 1000%" : "top 400%",
    scrub: true,
  },
});
