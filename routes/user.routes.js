const express=require('express')
const router=express.Router()
const userController=require('../controller/user.controller')



router.post('/createUser', userController.createUser)
router.get('/getUser', userController.getUsers)
router.get('/getUser/:id', userController.getUserById)
router.put('/updateUser/:id',userController.updateUser)


module.exports=router