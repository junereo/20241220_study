const {userList} = require("../list.service/userList.js");

const userModify= (userId, name ) =>{

    let index = 0;
    for(let i = 0; i < userList.length; i++){
        if(userList[i].userId === userId){
            index = i;
            break;
        }
    }
    const userInfo = {
        userId: userId,
        name: name
    }
    return userList.splice(index, 1, userInfo);
}

module.exports = {userModify};