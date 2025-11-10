document.addEventListener("click", function (e) {
  const words = [
    "富强", "民主", "文明", "和谐",
    "自由", "平等", "公正", "法治", 
    "爱国", "敬业", "诚信", "友善", 
  ];
  const span = document.createElement("span");
  span.textContent = words[Math.floor(Math.random() * words.length)];
  span.style.position = "absolute";
  span.style.left = e.pageX + "px";
  span.style.top = e.pageY + "px";
  span.style.fontSize = "20px";
  span.style.fontWeight = "600";
  span.style.color = "#ff6b81";
  span.style.zIndex = 9999;
  span.style.transition = "all 1.2s ease-out";
  document.body.appendChild(span);

  setTimeout(() => {
    span.style.top = (e.pageY - 60) + "px";
    span.style.opacity = 0;
  }, 10);

  setTimeout(() => span.remove(), 1300);
});
