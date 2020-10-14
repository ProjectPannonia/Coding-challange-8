
class Town {
    constructor(name) {
        this.name = name;
        this.parks = [];
        this.streets = [];
    }
    addNewPark(parkObj) {
        this.parks.push(parkObj);
    }
    addNewStreet(streetObj) {
        this.streets.push(streetObj);
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
    treeDensity() {
        return `Park name: ${this.name} `
    }
}
class Street extends TownElement {
    constructor(name, yearOfBuilt, length, sizeClassification = 'normal') {
        super(name, yearOfBuilt);
        this.length = length;
        this.sizeClassification = sizeClassification;
    }
}