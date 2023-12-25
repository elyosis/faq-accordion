const box = document.querySelector(".image--box");
const questions = document.querySelectorAll("summary");

questions.forEach((question) => {
  question.addEventListener("mouseenter", () => {
    box.classList.add("moved");
  });

  question.addEventListener("mouseleave", () => {
    box.classList.remove("moved");
  });
});
