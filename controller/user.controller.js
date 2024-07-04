const User = require("../model/userModal");

// Create a new user
const createUser = async (req, res) => {
  console.log('req',req.body)
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json({ message: 'User created successfully', data: user });
  } catch (error) {
    console.log('error:',error)
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Get all users
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    if (users.length === 0) {
      res.status(404).json({ message: 'No users found' });
    } else {
      res.status(200).json({ message: 'Users retrieved successfully', data: users });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};


// Get user by Id
const getUserById = async (req, res) => {

  try {
    const user = await User.findById(req.params.id);
    console.log('user',user)
    if (user.length === 0) {
      res.status(404).json({ message: 'No user found' });
    } else {
      res.status(200).json({ message: 'User retrieved successfully', data: user });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};


const updateUser=async(req,res)=>{
  console.log('req.params.id',req.params.id)
  console.log('req.body',req.body)
  try{
    const updatedUser=User.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators: true})
    console.log("updatedUser",updatedUser)
    if (!updatedUser) {
      return res.status(404).json({ message: 'No user found' });
    }
    res.status(200).json({message:"User Updated successful",data:updatedUser})
  }catch(error){
    console.log('error',error)
  }
}
module.exports = {
    createUser,
    getUsers,
    getUserById,
    updateUser
  };

  