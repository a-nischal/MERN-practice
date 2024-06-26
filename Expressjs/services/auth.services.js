const User = require("../model/User")
const bcrypt = require("bcryptjs")

const signUpService = async ({firstName, lastName, email, password, Role, Bio }) =>{
    const UserExist = await User.findOne({email});
    if(UserExist){
    throw new error("ALREADY_SIGNED_IN");
      }
    

    const salt = bcrypt.genSaltSync(10);
    const hashedpassword = bcrypt.hashSync(password,salt);
    await User.create({
      firstName,
      lastName,
      email,
      password : hashedpassword ,
      Role,
      Bio,
    });
};
  
module.exports = {
  signUpService,
};