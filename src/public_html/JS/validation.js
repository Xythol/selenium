/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var errorElement = document.getElementById("errorElement");

var errorString = "";

function CheckPassword() {

    //clear error string
    errorString = "";

    var password = document.getElementById("password").value;
    if (password.length < 10) {
        errorString += "Password length less than 10\n";
    }
    
    // Test for commonly used password
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            text = xhr.responseText;
            lines = text.split("\n"); 
            for(i = 0; i < lines.length; i++){ 
                if (password == lines[i]) {
                    errorString += "Password is commonly used\n";
                    break;
                }
            }

            if (errorString.length == 0) {
                window.open("welcome.html?password=" + password,'_self');
            }
            else {
                errorElement.innerText = errorString;
            }
        }
    }
    xhr.open("GET", "https://raw.githubusercontent.com/danielmiessler/SecLists/master/Passwords/Common-Credentials/10-million-password-list-top-100.txt", true);
    xhr.send();
}