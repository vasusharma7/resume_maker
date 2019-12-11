function update(input){
    var text = input.value;
    if(input.id == "inp_cont"){
        text = "PHONE - " + text;
        document.getElementById("contact").innerHTML = text;
        return;
    }
    if(input.id == "inp_email"){
        text = "EMAIL - " + text;
        document.getElementById("email").innerHTML = text;
        return;
    }
    if(input.id == "inp_web"){
        text = "WEBSITE - " + text;
        document.getElementById("web").innerHTML = text;
        return;
    }
    var id = String(input.id).substring(4);
    if(id == "fos1"){
        if(text != "")
            text =  "," + text;
        var temp = String(document.getElementById("stdp1").innerHTML).split(',');   //bug in here
        document.getElementById("stdp1").innerHTML = temp[0] + text;
        return;
    }

    document.getElementById(id).innerHTML = text;

}