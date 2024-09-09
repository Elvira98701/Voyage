import gsap from "gsap";

const items = [
  {
    title: "Portrait / February 5, 2024",
    tag: ["mix"],
    img: "./images/portfolio/14.jpg",
  },

  {
    title: "Portrait / February 5, 2024",
    tag: ["design"],
    img: "./images/portfolio/2.jpg",
  },

  {
    title: "Portrait / February 5, 2024",
    tag: ["music"],
    img: "./images/portfolio/19.jpg",
  },

  {
    title: "Portrait / February 5, 2024",
    tag: ["mix"],
    img: "./images/portfolio/4.jpg",
  },

  {
    title: "Portrait / February 5, 2024",
    tag: ["design"],
    img: "./images/portfolio/5.jpg",
  },

  {
    title: "Portrait / February 5, 2024",
    tag: ["music"],
    img: "./images/portfolio/6.jpg",
  },

  {
    title: "Portrait / February 5, 2024",
    tag: ["mix"],
    img: "./images/portfolio/7.jpg",
  },
];

export const works = () => {
  const itemsContainer = document.querySelector(".items");
  const itemsCols = document.querySelectorAll(".items-col");
  const filters = document.querySelectorAll(".filter");
  const defaultFontSize = "75px";
  const activeFontSize = "150px";

  const splitTextIntoSpans = (selector) => {
    const elements = document.querySelectorAll(selector);

    elements.forEach((element) => {
      const text = element.innerText;
      const splitText = text
        .split("")
        .map((char) => `<span>${char}</span>`)
        .join("");

      element.innerHTML = splitText;
    });
  };

  function animateFontSize(target, fontSize) {
    const spans = target.querySelectorAll("span");
    gsap.to(spans, {
      fontSize: fontSize,
      stagger: 0.025,
      duration: 0.4,
      ease: "power2.out",
    });
  }

  function clearItems() {
    itemsCols.forEach((col) => {
      col.innerHTML = "";
    });
  }

  function addItemsToCols(filter = "all") {
    let colIndex = 0;
    const filteredItems = items.filter(
      (item) => filter === "all" || item.tag.includes(filter)
    );

    filteredItems.forEach((item) => {
      const itemElement = document.createElement("div");
      itemElement.classList.add("item");
      itemElement.innerHTML = `
            <div class="item-img">
              <img src="${item.img}" alt="" >
            </div>
            <div class="item-copy"><p>${item.title}</p></div>
            `;

      itemsCols[colIndex % itemsCols.length].append(itemElement);
      colIndex++;
    });

    const images = document.querySelectorAll(".first .item-img");
    gsap.fromTo(
      images,
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".items-col",
          start: "top bottom",
          end: "100% top",
          scrub: true,
        },
        stagger: 0.4,
      }
    );

    const images2 = document.querySelectorAll(".second .item-img");
    gsap.fromTo(
      images2,
      {
        x: 100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".items-col",
          start: "top bottom",
          end: "100% top",
          scrub: true,
        },
        stagger: 0.3,
      }
    );
  }

  function animateItems(filter) {
    gsap.to(itemsContainer, {
      opacity: 0,
      duration: 0.25,
      onComplete: () => {
        clearItems();
        addItemsToCols(filter);
        gsap.to(itemsContainer, {
          opacity: 1,
          duration: 0.25,
        });
      },
    });
  }

  splitTextIntoSpans(".filter h1");
  animateFontSize(document.querySelector(".filter.active h1"), activeFontSize);
  addItemsToCols();

  filters.forEach((filter) => {
    filter.addEventListener("click", function () {
      if (this.classList.contains("active")) {
        return;
      }

      const previousActiveFilterH1 =
        document.querySelector(".filter.active h1");
      animateFontSize(previousActiveFilterH1, defaultFontSize);

      filters.forEach((f) => f.classList.remove("active"));
      this.classList.add("active");

      const newActiveFilterH1 = this.querySelector("h1");
      animateFontSize(newActiveFilterH1, activeFontSize);

      const filterValue = this.getAttribute("data-filter");
      animateItems(filterValue);
    });
  });
};
