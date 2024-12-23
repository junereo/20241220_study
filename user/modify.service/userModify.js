const {userList} = require("../list.service/userList.js");

const userModify= (userId, name ) =>{
    let index = userList.findIndex(user => user.userId === userId);
    const userInfo = {
        userId: userId,
        name: name
    }
    return userList.splice(index, 1, userInfo);
}

module.exports = {userModify};