document.getElementById('input').focus();

let dateSetting = false;

function changeDateSetting() {
    dateSetting = !dateSetting;
    document.getElementById('dateSetting').innerHTML = (
        dateSetting ? "Show date [x]" : "Show date [ ]"
    );
}

function addLeadingZero(number) {
    number = number.toString();
    if (number.length <= 1) {
        number = "0" + number;
    }
    return number;
}

function getTimestampString(showDate) {
    const today = new Date();
    const clock =
        addLeadingZero(today.getHours()) +
        ":" +
        addLeadingZero(today.getMinutes()) +
        ":" +
        addLeadingZero(today.getSeconds());
    const date =
        addLeadingZero(today.getDay()) +
        "." +
        addLeadingZero(today.getMonth()) +
        "." +
        addLeadingZero(today.getFullYear());

    if (showDate) {
        return "[" + date + " " + clock + "]";
    }

    return "[" + clock + "]";
}

function submitLogEntry() {
    let row = document.createElement("tr");
    let timestamp = document.createElement("td");
    timestamp.appendChild(document.createTextNode(getTimestampString(dateSetting)));
    let logEntry = document.createElement("tb");
    logEntry.appendChild(
        document.createTextNode(document.getElementById("input").value)
    );
    row.appendChild(timestamp);
    row.appendChild(logEntry);
    document.getElementById("log").appendChild(row);
    document.getElementById("input").value = "";

    window.scrollTo(0, document.body.scrollHeight);
}

$(document).bind("keyup", function (e) {
    if (e.which == 13) {
        submitLogEntry();
    }
});