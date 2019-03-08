// console.log(`There are ${characters.length} characters in the array.`);

// console.log (characters[0].died)

// How many character names start with A
// function beginsWithA(character) {
//     return character.name.startsWith('A');
// }

// function findsACharacters(book) {
//     aCharacters = book.filter(beginsWithA)
//     return aCharacters.length
// }
// console.log(findsACharacters(characters))


// // How many character names start with Z
// function beginsWithZ(character) {
//     return character.name.startsWith('Z');
// }

// function findsACharacters(book) {
//     aCharacters = book.filter(beginsWithZ)
//     return aCharacters.length
// }
// console.log(findsACharacters(characters))

// //How many characters are dead?
// function deadCharacters (characterList) {
//     let deadArray = characterList.filter(function(personName) {
//         return personName.died !== '';
//     })
//     return deadArray.length;
// }
// console.log(deadCharacters(characters));

// Aprils code below
// function deadCount(characters) {
//     let count = 0;
//     characters.forEach(function(key) {
//     if (key.died !== '') {
//     count += 1;
//     }
//     })
//     return count;
//     }
    
//     console.log(deadCount(characters))

// Who has the most titles?
// function mostTitles(characterList) {
//     characterList.sort(function(a,b) {
//         return (b.titles.length - a.titles.length)
//     })
//     return characterList[0].name;
// }
// console.log(mostTitles(characters));

// How many are Valyrian?
// function areVarlyrian(characterList) {
//     let valyrianArray = characterList.filter(function(personName) {
//         return personName.culture === 'Valyrian';
//     })
//     return valyrianArray.length;
// }
// console.log(areVarlyrian(characters));

//What actor plays "Hot Pie" (and don't use IMDB)?
// function isHotPie(characterList) {
//     let hotPie = characterList.filter(function(personName) {
//         return personName.name === "Hot Pie";
//     })
//     return hotPie[0].playedBy[0];
// }
// console.log(isHotPie(characters));

// Find actor for...
// function findActorFor(characters, characterName) {
    // const theCharacter = characters.find(function (person) {
    //     return person.name === characterName;
    // });
    // return characters.find(function (person) {
    //     return person.name === characterName;
    // });
// }

// How many characters are *not* in the tv show?
// function notInShow(characterList) {
//     let notInShowArray = characterList.filter(function(personName){
//         return personName.tvSeries == '';
//     })
//     return notInShowArray.length
// }
// console.log(notInShow(characters));


// Produce a list characters with the last name "Targaryen"

// function isTargaryen(characterList) {
//     let targaryenArray = characterList.filter(function(personName){
//         return personName.name.includes('Targaryen');
//     });
//     targaryenNamesArray = targaryenArray.map(function(personName){
//         return personName.name;
//     })
//     return targaryenNamesArray;
// }
// console.log(isTargaryen(characters));

// Create a histogram of the houses (it's the "allegiances" key)
// function houseHistogram(characterList) {
    

    
//     characterList.forEach(function(chars) {
//         let houseHistogramArray = {};
//         let allegiances = chars.map(function(person) {
//             return person.allegiances
//         }
        
//         )
        
//         if (chars.allegiances in houseHistogramArray) {
//             houseHistogramArray[chars] += 1;
//         } else {
//             houseHistogramArray[chars] = 1;
//         }
//         return houseHistogramArray    
//     })
        
// }
// console.log(houseHistogram(characters))

// console.log(characters[2].allegiances)

// Histogram of the houses. ChrisAquino's code
function createHouseHistogram(characters) {
    const histogram = {};

    // Count allegiances by house (which will be a URL)
    // console.log(characters[0].allegiances);

    characters.forEach(function(person) {
        //person.allegiances is the array...
        // console.log(person.allgegiances);
        person.allegiances.forEach(function (house) {
            // do something with the house
            if (histogram[house]) {
                histogram[house] += 1
            } else {
                histogram[house] = 1;

            }
        })
    });
    return histogram;
}

function createHouseHistogram2(characters) {
    const histogram = new Map(); // call the Map constructor
    
    characters.forEach(function (person) {
        person.allegiances.forEach(function(house) {
            //if the house is already in the map
            if (histogram.has(house)) {
                //increment
                //get the current value
                const currentValue = histogram.get(house);
                //re-set to the new value
                histogram.set(house, currentValue + 1);
                // or on one line
                // histogram.set(house, histogram.get(house) + 1);
            } else {
                // add it to the map, setting its value to 1
                histogram.set(house, 1);
            }
                
        })
    })


    return histogram;
}

