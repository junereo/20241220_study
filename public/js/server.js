const express = require("express");
const {userList} = require("../../user/list.service/userList.js");
const {userCreate} = require("../../user/create.service/userCreate.js");
const {userModify} = require("../../user/modify.service/userModify.js");
const {userDelete} = require("../../user/delete.service/userDelete.js");

app = express();

//유저 목록 조회
app.get('/list', (req,res) => {
    console.log(userList.length);
    let str = "<div>아이디</div>"
    for(let i = 0; i < userList.length; i++){
        str += `<div style="display: flex; gap:30px; padding: 10px 0">
                    <div>
                        ${userList[i].userId}
                    </div>
                    <div>
                        ${userList[i].name}
                    </div>
                </div>
        `;
    }
    res.send(str);
});

//유저 목록 수정
app.get('/modify', (req, res) => {
    const { userId, name } = req.query;
    userModify(userId, name);
    res.redirect(`/list`);
});

//특정 유저 생성
app.get('/create', (req, res) => {
    const { userId, name } = req.query;
    userCreate(userId, name);
    res.redirect(`/list`);
});

//특정 유저 삭제
app.get('/delete', (req, res) => {
    const { userId } = req.query;
   userDelete(userId);
    res.redirect(`/list`);
});

app.listen(3000, () =>{
    console.log("서버가 열렸습니다.");
});