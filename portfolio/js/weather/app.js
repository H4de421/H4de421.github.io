async function populatetaleRows() {
    await fetch('https://api.openweathermap.org/data/2.5/weather?q=london,uk&units=metric&APPID=499fab87bac53a73af65a333d0389d21')
    .then(response => {
        if (response.status !== 200) {
           console.log('Error Status Code: ' + response.status);
           return;
        }
        response.json().then((data) => {
        let strTableRows = `<tr>
                                <td><span>Summary</span></td>
                                <td>${data["weather"][0]["description"]}</td>
                            </tr>
                            <tr>
                                <td><span>Temperture</span></td>
                                <td>${data["main"]["temp"] + " &deg;C"}</td>
                            </tr>
                            <tr>
                                <td><span>Humidity</span></td>
                                <td>${data["main"]["humidity"] + " %"}</td>
                            </tr>
                            <tr>
                                <td><span>Pressure</span></td>
                                <td>${data["main"]["pressure"] + " .P"}</td>
                            </tr>
                            ` ;
        document.querySelector("table-weather-dublin tbody").innerHTML = strTableRows
});
})
.catch(error => {
    // handle any error
});
}
