// JavaScript Document
// DETTE ER JAVASCRPT DELEN 






        var whatToClose = 0;
        var span = document.getElementsByClassName("close")[0];
        var modal = document.getElementById('myModal');
        var btn = document.getElementById("WatchAgain");


        btn.onclick = function () {
            modal.style.display = "block";
        }

        span.onclick = function () {
            modal.style.display = "none";
        }

        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";

            }
        }
         
        let modalPopUp = false
        window.addEventListener("scroll", function () {

                let = document.getElementById('myModal');

                if (window.pageYOffset > 300 && !modalPopUp) {
                    modalPopUp = true
                    myModal.style.display = "block";
                }


        });

