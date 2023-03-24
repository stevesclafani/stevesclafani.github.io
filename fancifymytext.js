function embiggenFont() {
    // alert("Hello, world!");
    document.getElementById("textBox1").style.fontSize = "24px";
}

function emboldenFont(){
    // alert("alertyyy");
    if(document.getElementById("FancyShmancy").checked == true)
    {
        document.getElementById("textBox1").style.fontWeight = "bold";
        document.getElementById("textBox1").style.color = "blue";
        document.getElementById("textBox1").style.textDecoration = "underline";
    }
}

function normalFont(){
    if(document.getElementById("BoringBetty").checked == true)
    {
        document.getElementById("textBox1").style.fontWeight = "normal";
        document.getElementById("textBox1").style.color = "black";
        document.getElementById("textBox1").style.textDecoration = "none";

    }
}

function uppercaseFont()
{
    // changes all text to uppercase
    document.getElementById("textBox1").style.textTransform = "uppercase";
    // -moo suffix to the last word of each sentence
    var str = document.getElementById("textBox1").value;
    var parts = str.split(".");
    str = parts.join("-Moo");
    document.getElementById("textBox1").value = str;
}

