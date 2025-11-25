/**
 * for buttonand function of the web
 */
function openNav() {
            document.getElementById("mySidebar").style.width = "250px";
            document.getElementById("main").style.marginLeft = "250px";
        }
        function closeNav() {
            document.getElementById("mySidebar").style.width = "0";
            document.getElementById("main").style.marginLeft = "0";
        }
/**
 * for text message only
 * dont change it*/
   const button = document.getElementById('N');
        const text = document.getElementById('my message');

        button.addEventListener('click', () => {
            if (text.style.display === 'none') {
                text.style.display = 'block';
                button.textContent = 'EXIT ';
            } else {
                text.style.display = 'none';
                button.textContent = 'READ IT AGAIN';
            }
        });
/**For about */
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}