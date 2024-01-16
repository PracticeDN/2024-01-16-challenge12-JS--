const clockEl = document.createElement("p");
const remainingTimeEl = document.createElement("p");

setInterval(() => {
  const now = new Date();
  const endOfYear = new Date(now.getFullYear(), 11, 31, 23, 59, 59, 999); 

  const currentTime = now.toLocaleString();
  clockEl.textContent = `현재 시간은: ${currentTime}`;

  const remainingTime = endOfYear - now;
  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  remainingTimeEl.textContent = `올해의 남은 시간: ${days}일 ${hours}시간 ${minutes}분 ${seconds}초`;
}, 1000);

document.body.appendChild(clockEl);
document.body.appendChild(remainingTimeEl);
