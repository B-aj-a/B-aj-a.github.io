var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);

        var tuneup1 = $('#tuneUpOne').text(myObj.services[0].lbtuneup);
        var tuneup2 = $('#tuneUpTwo').text(myObj.services[0].gtuneup);
        var stuneup = $('#supreme').text(myObj.services[0].ssptuneup);

        var flat = $('#flat').text(myObj.services[2].bflat);
        var twheel = $('#trueWheel').text(myObj.services[2].twheel);
        var ispoke = $('#spoke').text(myObj.services[2].ispoke);

        var bleed = $('#bleed').text(myObj.services[3].bleedhdb);
        var chain = $('#chain').text(myObj.services)[3].chain);
        var shifter = $('#shifter').text(myObj.services)[3].chain);

    }
};
xmlhttp.open("GET", "data/tabledata.json", true);
xmlhttp.send();