const {userList} = require("../../user/list.service/userList.js");

const userCreate = (userId,name ) =>{
    return userList.push({userId, name});
}

module.exports = {userCreate};