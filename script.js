/*
 * Created Date: Friday, December 16th 2022, 10:43:31 am
 * Author: Ondřej Kulhavý
 * 
 * Copyright (c) 2022 SPŠE Ječná
 */

setInterval(function () {
  var currentTime = new Date();

  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();

  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;

  var time = hours + "" + minutes + "" + seconds;
  var yiq = (hours * 299 + minutes * 587 + seconds * 114) / 1000;

  var background = document.querySelector("body");
  var text = document.querySelector("p");


  text.style.color = yiq >= 128 ? "black" : "white";
  background.style.background = "#" + time;
  text.innerHTML = "#" + time;
}, 1000);
