class Auto {
    constructor(rok, przebieg, cena_wejsciowa, cena_koncowa) {
        this.rok = rok;
        this.przebieg = przebieg;
        this.cena_wejsciowa = cena_wejsciowa;
        this.cena_koncowa = cena_koncowa;
    }
}

const autos = [
    new Auto(2010, 120000, 20000, 15000),
    new Auto(2015, 80000, 30000, 25000),
    new Auto(2020, 20000, 40000, 38000)
];

function createTableFromArray(array) {
    const table = document.createElement('table');
    const headerRow = document.createElement('tr');

    // Create table headers
    const headers = ['Rok', 'Przebieg', 'Cena Wejsciowa', 'Cena Koncowa'];
    headers.forEach(headerText => {
        const header = document.createElement('th');
        header.textContent = headerText;
        headerRow.appendChild(header);
    });
    table.appendChild(headerRow);

    // Create table rows
    array.forEach(auto => {
        const row = document.createElement('tr');
        Object.values(auto).forEach(text => {
            const cell = document.createElement('td');
            cell.textContent = text;
            row.appendChild(cell);
        });
        table.appendChild(row);
    });

    return table;
}

function addRow() {
    const rok = parseInt(document.getElementById('rok').value);
    const przebieg = parseInt(document.getElementById('przebieg').value);
    const cena_wejsciowa = parseInt(document.getElementById('cena_wejsciowa').value);
    const cena_koncowa = parseInt(document.getElementById('cena_koncowa').value);

    autos.push(new Auto(rok, przebieg, cena_wejsciowa, cena_koncowa));
    document.getElementById('table-container').innerHTML = '';
    document.getElementById('table-container').appendChild(createTableFromArray(autos));
}

// Insert the table into the HTML document
document.addEventListener('DOMContentLoaded', () => {
    const tableContainer = document.getElementById('table-container');
    const table = createTableFromArray(autos);
    tableContainer.appendChild(table);
});