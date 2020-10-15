class Town {

    constructor(name) {
        this.name = name;
        this.parks = [];
        this.streets = [];
        //this.parksAvarageAge = parksAvgAge();
    }

    addNewPark(parkObj) {
        this.parks.push(parkObj);
    }

    addNewStreet(streetObj) {
        this.streets.push(streetObj);
    }

    parksAvgAge() {
        let avarageAge = 0;
        let sum = 0;
        let numberOfParks = this.parks.length;

        if(sum !== 0) {
            
            for(let i = 0; i < this.parks.length; i++) {
                sum += this.parks[i].age;
            }
            avarageAge = sum / numberOfParks;
        }

        return `Our ${numberOfParks} parks have an avarage age of ${avarageAge} years.`;
    }
    parksReport() {
        let numberOfParks = this.parks.length;
        let parksAvarageAge = parksAvarageAge();
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
        this.age = (new Date().getFullYear()) - yearOfBuilt;
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

let town1 = new Town('Bszh');
//console.log('New empty town: ' + town1);
let park1 = new Park('P1', 1989, 1900, 200);

town1.addNewPark(park1);
console.log('Town after one park added: ' + town1);