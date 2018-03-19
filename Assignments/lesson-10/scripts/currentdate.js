window.onload = function () {
    var month = new Array("January", "February", "March", "April",
        "May", "June", "July", "August", "September", "October", "November", "December");

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth();
    var currentMonth = month[mm];
    var yyyy = today.getFullYear();
    today = currentMonth + ' ' + dd + ', ' + yyyy;
    document.getElementById('currentdate').innerText = today;
};