const lightBulbImage = document.querySelector("#lightBulbImage");
const lightBulbSwitch = document.querySelector("#lightBulbSwitch");

let isLightBulbOn = false;

lightBulbSwitch.addEventListener("click", function () {
  if (isLightBulbOn) {
    isLightBulbOn = false;
    lightBulbImage.src = "off.png";
    lightBulbSwitch.innerHTML = "Turn ON";
  } else {
    isLightBulbOn = true;
    lightBulbImage.src = "on.png";
    lightBulbSwitch.innerHTML = "Turn OFF";
  }
});
