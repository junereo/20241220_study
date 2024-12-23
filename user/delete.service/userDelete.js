const {userList} = require("../list.service/userList.js");

const userDelete = (userId ) =>{

    let index = 0;
    for(let i = 0; i < userList.length; i++){
        if(userList[i].userId === userId){
            index = i;
            break;
        }
    }

    return userList.splice(index, 1);
}

module.exports = {userDelete};