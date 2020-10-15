class TownElement {
    constructor(name, yearOfBuilt) {
        this.name = name;
        this.yearOfBuilt = yearOfBuilt;
    }
}

class Park extends TownElement {

    constructor(name, yearOfBuilt, numberOfTrees, parkArea) {
        super(name,yearOfBuilt);
        this.numberOfTrees = numberOfTrees;
        this.parkArea = parkArea;
        this.age = (new Date().getFullYear()) - yearOfBuilt;
    }

    calcTreeDensity() {
        let treeDensity = this.parkArea / this.numberOfTrees;
        console.log(`${this.name} park has a tree density of ${treeDensity} trees per square km.`);
    }
}

class Street extends TownElement {
    constructor(name, yearOfBuilt, length, size = 3) {
        super(name, yearOfBuilt);
        this.length = length;
        this.size = size;
    }

    classifyStreet() {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');

        console.log(`${this.name}, build in ${this.yearOfBuilt}, is a ${classification.get(this.size)} street.`);
    }
}


const allParks = [new Park('Green Park', 1987, 0.2, 215), new Park('National Park', 1894, 2.9, 3541), new Park('Oak Park', 1953, 0.4, 949)];

const allStreets = [new Street('Ocean Avenue', 1999, 1.1, 4), new Street('Evergreen Street', 2008, 2.7, 2), new Street('4th Street', 2015, 0.8), new Street('Sunset Boulevard', 1982, 2.5, 5)];

function calc(arr) {

    const sum = arr.reduce((prev, curr, index) => prev + curr, 0);
     
    return [sum, sum / arr.length];

}

function reportParks(p) {

    console.log('----PARKS REPORT----');

    // Density
    p.forEach(el => el.calcTreeDensity());

    // Avarage age
    const ages = p.map(el => new Date().getFullYear() - el.yearOfBuilt);
    const [totalAge, avgAge] = calc(ages);
    console.log(`Our ${p.length} parks have an avarage of ${avgAge} years.`);

    // Which park  has more than 1000 trees
    const i = p.map(el => el.numberOfTrees).findIndex(el => el >= 1000);
    console.log(`${p[i].name} has more than 1000 trees.`);
}

function reportStreets(s) {
    console.log('----STREETS REPORT----');

    const [totalLength, avgLength] = calc(s.map(el  => el.length));
    console.log(`Our ${s.length} streets have a total length of ${totalLength} km, with  an avarage of f${avgLength} km.`);

    s.forEach(el => el.classifyStreet());
}

reportParks(allParks);
reportStreets(allStreets);