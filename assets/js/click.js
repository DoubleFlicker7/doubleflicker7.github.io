
const words = [
    "CVPR + 1", "ICCV + 1", "ECCV + 1", 
    "NeurIPS + 1", "AAAI + 1", "IJCAI + 1",
    "ACL + 1", "ICML + 1", "ICLR + 1",
    "TPAMI + 1", "IEEE Transaction + 1"
  ]

function randomColor() {
  const r = Math.floor(50 + Math.random() * 205); // 150–255
  const g = Math.floor(50 + Math.random() * 205);
  const b = Math.floor(50 + Math.random() * 205);
  return `rgb(${r}, ${g}, ${b})`;
}

document.addEventListener("click", function (e) {  
  const span = document.createElement("span");
  span.textContent = words[Math.floor(Math.random() * words.length)];
  span.style.position = "absolute";
  span.style.left = e.pageX + "px";
  span.style.top = e.pageY + "px";
  span.style.fontSize = "20px";
  span.style.fontWeight = "600";
  span.style.color = randomColor();
  span.style.zIndex = 9999;
  span.style.transition = "all 1.2s ease-out";
  document.body.appendChild(span);

  setTimeout(() => {
    span.style.top = (e.pageY - 60) + "px";
    span.style.opacity = 0;
  }, 10);

  setTimeout(() => span.remove(), 1300);
});
