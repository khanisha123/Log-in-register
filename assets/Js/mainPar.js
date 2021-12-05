
// Drop Down
/*= When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

 //eror

 function Submit() {
 
  let enterEmail = document.getElementById("email").value;
  let enterPassword = document.getElementById("password").value;
  
  var email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var letterNumber = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/;

  switch (true) {
      
      case enterEmail.length == 0:
          document.getElementById("errorEmail").innerHTML = "Enter email please";
          break;

      case !enterEmail.match(email):
          document.getElementById("errorEmail").innerHTML = "Please input correct form of Email";
          break;

      case enterPassword.length == 0:
          document.getElementById("errorPassword").innerHTML = "Enter password please";
          break;

      case enterPassword.length < 0:
          document.getElementById("errorPassword").innerHTML = "Enter more than 8 characters";
          break;

      case !enterPassword.match(letterNumber):
          document.getElementById("errorPassword").innerHTML = "Enter correct form of passord";
          break;
      default:
          
          window.open("https://code.edu.az/");
          
          break;
  }
}
    
  