var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);

        var tuneup1 = $('#tuneup1').text(myObj.services[0].tuneup1);
        var tuneup2 = $('#tuneup2').text(myObj.services[0].tuneup2);
        var supreme = $('#supreme').text(myObj.services[0].supreme);

        var flat = $('#flat').text(myObj.services[1].bflat);
        var truewheel = $('#truewheel').text(myObj.services[1].truewheel);
        var spoke = $('#spoke').text(myObj.services[1].spoke);

        var bleed = $('#bleed').text(myObj.services[2].bleed);
        var chains = $('#chains').text(myObj.services[2].chains);
        var shifter = $('#shifter').text(myObj.services[2].shifter);

    }
};
xmlhttp.open("GET", "https://B-aj-a.github.io/FinalProject/data/tabledata.json", true);
xmlhttp.send();