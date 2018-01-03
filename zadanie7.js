let offices = [
    { id: "GD", name: "Gdansk", headquarter: true },
    { id: "GL", name: "Gliwice" },
    { id: "KO", name: "Koszalin" }
];

let workers = [
    { id: 1,  name: "Bartek",     type: "P", office: "GD", salary: 300 },
    { id: 2,  name: "Wojtek",     type: "P", office: "GD", salary: 210 },
    { id: 3,  name: "Piotr",      type: "M", office: "GL", salary: 250 },
    { id: 4,  name: "Damian",     type: "P", office: "KO", salary: 290 },
    { id: 5,  name: "Jan",        type: "P", office: "GL", salary: 210 },
    { id: 6,  name: "Mateusz",    type: "P", office: "GD", salary: 290 },
    { id: 7,  name: "Weronika",   type: "M", office: "KO", salary: 240 },
    { id: 8,  name: "Gabriela",   type: "M", office: "GD", salary: 290 },
    { id: 9,  name: "Alina",      type: "M", office: "KO", salary: 290 },
    { id: 10, name: "Aleksander", type: "P", office: "GL", salary: 260 },
    { id: 11, name: "Tomek",      type: "P", office: "GD", salary: 200 },
    { id: 12, name: "Krzysztof",  type: "M", office: "KO", salary: 290 },
    { id: 13, name: "Marcin",     type: "P", office: "GD", salary: 280 },
    { id: 14, name: "Agata",      type: "P", office: "GD", salary: 230 },
    { id: 15, name: "Magda",      type: "P", office: "KO", salary: 220 }
];

let company = {};

company.offices = offices.map((office) => {
    return {
        id: office.id,
        name: office.name,
        headquarter: office.headquarter || false,
        workers: workers.filter((worker) => {
            return worker.office === office.id
        })
    }
});
console.log(company);

function getTotalSalary (){
    let sum = 0;
    for (let i=0; i<workers.length; i++) {
        sum += workers[i].salary;
    }
    return sum;
}
function getAvarageSalary() {
    return getTotalSalary() / workers.length;
}
console.log (Math.round(getAvarageSalary()));

// 1) Wyswietl, informacje o biurze w Gliwicach (lokalizacja, liczba przypisanych pracowników, srednia pensja),

const officeInfo = office => company.offices
    .map(office => {
        return {
        locationName: office.name,
        numOfWorkers: office.workers.length,
        averageSalary: (office.workers.reduce((acc, next) => acc + next.salary, 0) / office.workers.length)
}
})
    .find(city => city.locationName === office);

console.log(officeInfo('Gliwice'));

// 2) Dodaj nowe biuro (w Poznaniu),

let addNewOffice = (id, name, headquarter) => {
    company.offices.push({
        id: id,
        name: name,
        headquarter: headquarter,
        workers: []
    });
};

addNewOffice("PO", "Poznań", false);

// 3) Dodaj nowego pracownika do biura w Poznaniu: { id: 16, name: "Olek", type: "M", office: "PO", salary: 500 }



// 4) Wyswietl, informacje o biurze w Poznaniu

console.log(officeInfo("Poznań"));

// 5) Wyswietl srednia pensje w calej firmie,

// 6) Wyswietl najlepiej oplacanego pracownika w poszczególnych biurach,
// function getBestPaidWorker () {
//     for (var i=0; i<company.length; i++) {
//         return Math.max([...salary])
//     }
// }
// console.log(getBestPaidWorker());


// 7) Wyswietl najlepiej oplacanego pracownika w calej firmie oraz nazwe jego biura.

