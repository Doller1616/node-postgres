const router = require('express').Router();
const userController = require('../controller/userController');

(()=>{

    getRequest()

    postRequest()

    patchRequest()

    deleteRequest()

})();




function getRequest(){

}

function postRequest(){
    router.post('/add', userController.addUser)
}

function patchRequest(){
    
}

function deleteRequest(){
    
}

module.exports = router