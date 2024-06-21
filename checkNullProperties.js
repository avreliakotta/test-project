const data = require("./data.js");

function checkNullProperties(obj) {
    if (obj.address && obj.address.state === null) {
        console.log('State property is null');
    }
    if (obj.interests && obj.interests.sports === null) {
        console.log('Sports property is also null');
    }
}

checkNullProperties(data);
