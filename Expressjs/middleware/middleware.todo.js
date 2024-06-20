const jwt = require("jsonwebtoken")
const { secretKey } = require("../controller/auth.controller");

const authenticate = (req, res,next) => {
    const { token } = req.headers;
  
    try {
      const decoded = jwt.verify(token, secretKey);
      next()
    } catch (err) {
      console.log(err)
      res.status(401).json({
        message: "Unauthorized",
      });
    }
  
    
  };

  module.exports=authenticate