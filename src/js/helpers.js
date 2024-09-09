export const splitTextIntoSpans = (selector) => {
  const element = document.querySelector(selector);

  if (element) {
    const text = element.innerText;
    const splitText = text
      .split("")
      .map((char) => `<span>${char}</span>`)
      .join("");

    element.innerHTML = splitText;
  }
};
