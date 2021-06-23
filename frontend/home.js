function ajax(cmd) {
    
    var xhr = new XMLHttpRequest();


    xhr.open("GET", "http://192.168.72.126/cgi-bin/docker.py?x="+cmd, true);

    xhr.send();

    // Output from above url

    xhr.onload = function () {
        var output = xhr.responseText;
        document.getElementById("d2").innerHTML = output;
    }


}

function printer() {
    var keyword = document.getElementById("myEmail");
    return keyword;
}

function box() {
    document.getElementById("d2").innerHTML = "bye";
}
