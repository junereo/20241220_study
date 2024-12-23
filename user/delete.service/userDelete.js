const {userList} = require("../list.service/userList.js");

const userDelete = (userId ) =>{
    let index = userList.findIndex(user => user.userId === userId);
    return userList.splice(index, 1);
}

module.exports = {userDelete};