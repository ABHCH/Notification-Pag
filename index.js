const button = document.getElementById('mark-btn');
const icon = document.querySelectorAll('.icon');
const noti = document.querySelectorAll('.noti-1');
const notNumber = document.querySelector('.notification-number');
button.addEventListener("click", () => {
  noti.forEach((myNoti) => {
    myNoti.style.backgroundColor = 'white';
  });
  icon.forEach((myIcon) => {
    myIcon.style.display = 'none';
  })
  notNumber.style.display = 'none';
});