/* File name: app.js
Student Name: Alex Tang
StudentID: 301238850
Date: Oct/17/2022
*/

(function () {
    function Start() {
      console.log("App Started");
    }
    window.addEventListener("load", Start);
  })();
  
  //Function for redirecting to home page
  function redirectToHome() {
    window.location.href = "http://localhost:3000/home";
  }
  