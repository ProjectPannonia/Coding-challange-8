
class Town {
    constructor(name) {
        this.name = name;
        this.parks = [];
        this.streets = [];
        this.parksAvarageAge = calcParkAvAge();
    }
    addNewPark(parkObj) {
        this.parks.push(parkObj);
    }
    addNewStreet(streetObj) {
        this.streets.push(streetObj);
    }
    calcParkAvAge() {
        let sum = 0;
        let count = this.parks.length;
        for(let i = 0; i < this.parks.length; i++) {
            sum += this.parks[i].
        }
    }
    parksReport() {
        let numberOfParks = this.parks.length;
        console.log('-----PARKS REPORT-----');

    }
    streetsReport() {
        let numberOfStreets = this.streets.length;
        console.log('-----STREETS REPORT-----');
    }
    endOfYearReport() {
        this.parksReport();
        this.streetsReport();
    }
}

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
    }
    calcTreeDensity() {
        let treeDensity = this.numberOfTrees / this.parkArea;
        return `${this.name} park has a tree density of ${treeDensity} trees per square km.`;
    }
}
class Street extends TownElement {
    constructor(name, yearOfBuilt, length, sizeClassification = 'normal') {
        super(name, yearOfBuilt);
        this.length = length;
        this.sizeClassification = sizeClassification;
    }
}