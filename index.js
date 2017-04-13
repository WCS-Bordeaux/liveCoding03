
// listen when DOM is loaded.
document.addEventListener("DOMContentLoaded", function (event) {

    var specialisations = {
        degatVariables: {
            strength: {
                bonusDegat: 20,
                bonusMagicDegat: 2,
            },
            magic: {
                bonusDegat: 2,
                bonusMagicDegat: 20,
            },
        },
        Defense: {
            stamina: {
                bonusDegat: 2,
                bonusMagicDegat: 20,
            }
        }
    }

    var classes = {
        "guerrier": {
            specialisations: ["strength", "stamina"]
        },
        "mage": {
            specialisations: ["magic", "mana"]
        },
        "voleur": {
            specialisations: ["speed", "hide"]
        }

    }

    // we can start code here
    var animals = {

        chien: {
            skinColor: "red",
            maxSpeed: 100
        },

        tortue: {
            skinColor: "green",
            maxSpeed: 100
        }

    }

    var animalNames = [
        "lapin",
        "gorille",
        "cheval",
        "chien", "tortue"];

    var i = 0,
        len = animalNames.length;

    while (i < len) {

        var currentAnimal = animalNames[i];

        if (animals.hasOwnProperty(currentAnimal)) {
            console.log(currentAnimal + " founded !", animals[currentAnimal]);
        }

        ++i;
    }

});