var offices = [
    { id: "GD", name: "Gdańsk", headquarter: true },
    { id: "GL", name: "Gliwice" },
    { id: "KO", name: "Koszalin" }
];

var workers = [
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

// Stworzenie obiektu firma
let company = {};


//  Przygotowanie struktury firmy

const addOfficesToCompany = () => {
    company.offices = offices.map(office => {
        office.workers = workers.filter(worker => office.id === worker.office);
    office.headquarter = office.headquarter || false;
    return office;
});
};

// Zadanie 1.

const getAvgSalaryInOffice = workers => {
    return workers.reduce((acc, next) => acc + next.salary, 0) / workers.length;
};

const getOfficeInfo = officeId => {
    const office = company.offices.find(({ id }) => id === officeId);
    return {
        localization: office.name,
        numberOfWorkers: office.workers.length,
        avgSalary: getAvgSalaryInOffice(office.workers)
    }
};

// Zadanie 2.

const addOffice = (office, headquarter = false, workers = []) => {
    company.offices.push(Object.assign(office, { headquarter, workers }));
};

// Zadanie 3.

const addWorker = worker => {
    company.offices
        .find(office => office.id === worker.office)
.workers.push(worker);
};
// Zadanie 4. - korzystamy z funkcji, którą zrobiliśmy w zadaniu 1.
// Zadanie 5.

// sposób A. Jeśli chcemy policzyć średnią ze średnich z biur

const getAvgSalaryInCompany = () => {
    return company.offices
        .reduce((acc, next) => acc + getAvgSalaryInOffice(next.workers), 0) / company.offices.length;
};

// sposób B. Jeśli chcemy policzyć średnią pensję wszystkich pracowików

const getAvgSalaryInCompany2 = () => {
    const workers = company.offices
        .map(office => office.workers)
.reduce((acc, next) => acc.concat(next), []);

    return workers.reduce((acc, next) => acc + next.salary, 0) / workers.length;
};

// Zadanie 6.

// funkcja pomociczna, którą wykorzystam w zadaniu 6 i 7

const getBestPaidWorkers = workers => {
    const salaries = workers.map(({ salary }) => salary);
    const highestSalary = Math.max(...salaries);

    return workers.filter(({ salary }) => salary === highestSalary);
};

const getBestPaidWorkersByOffice = () => {
    return company.offices
        .map(office => getBestPaidWorkers(office.workers))
.reduce((acc, next) => acc.concat(next), [])
.sort((prev, next) => next.salary - prev.salary);
};

// Zadanie 7.

// Uwzględniamy, że pare osób może zarabiać tak samo.

const getBestPaidWorkersInCompany = () => {
    const workers = getBestPaidWorkersByOffice();
    return getBestPaidWorkers(workers);
};

// Uzupełnienie firmy biurami oraz stworzenie nowego biura i pracownika, których dodamy.

addOfficesToCompany();
const newOffice = {
    id: 'PO',
    name: 'Poznań'
};
const newWorker = { id: 16,  name: "Olek", type: "M", office: "PO", salary: 500 };

console.log('(EX.1) ', getOfficeInfo('GL'));
console.log('(EX.2) ', addOffice(newOffice));
console.log('(EX.3) ', addWorker(newWorker));
console.log('(EX.4) ', getOfficeInfo('PO'));
console.log('(EX.5.A) ', getAvgSalaryInCompany());
console.log('(EX.5.B) ', getAvgSalaryInCompany2());
console.log('(EX.6) ', getBestPaidWorkersByOffice());
console.log('(EX.7) ', getBestPaidWorkersInCompany());