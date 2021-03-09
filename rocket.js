async function loadRockets() {
    let rockets = await getRockets()
    for (let index = 0; index < rockets.length; index++) {
        let table = document.getElementById("Table2").getElementsByTagName('tbody')[0];
        let row = table.insertRow(table.rows.length);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);

        cell1.innerHTML = rockets[index].name;
        cell2.innerHTML = rockets[index].first_flight;
        cell3.innerHTML = rockets[index].description;
        let link = document.createElement("a");
        link.setAttribute("href", "moreInfoRockets.html?id=" + rockets[index].id)
        let linkText = document.createTextNode("More info");
        link.appendChild(linkText);
        cell4.appendChild(link);
    }
}

async function getRockets() {
    try {
        const response = await fetch('https://api.spacexdata.com/v4/rockets');
        const data = await response.json();
        return data;
    } catch (err) {
        console.error('Fetching data failed...');
    }
}

console.log(getRockets());