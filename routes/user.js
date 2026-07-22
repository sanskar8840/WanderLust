const express = require("express");
const router = express.Router();
const User =require("../models/user.js");
const user = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
// const wrapAsync = require("../utils/wrapAsync.js");
// const passport = require("passport");
// const { saveRedirectUrl } = require("../middlewares.js");
// const userController = require("../controllers/users.js");

// router
//   .route("/signup")
//   .get(userController.renderSignupForm)
//   .post(wrapAsync(userController.signup));

// router
//   .route("/login")
//   .get(userController.renderLoginForm)
//   .post(
//     saveRedirectUrl,
//     passport.authenticate("local", {
//       failureRedirect: "/login",
//       failureFlash: true,
//     }),
//     userController.login
//   );

// router.get("/logout", userController.logout);
router.get("/signup",(req,res)=>{
  res.render("users/signup.ejs");
});


router.post("/signup",wrapAsync(async (req,res)=>{

  try{
 let { username,email,password}=req.body;
  const newUser=new user({ email,username});
  const registeredUser=await User.register(newUser,password);
  console.log(registeredUser);
req.login(registeredUser,(err)=>{
  if(err){
    return next(err);
  }
req.flash("success", "Welcome to Wanderlust");
  res.redirect("/listings");

});


  
  } catch(e){
    req.flash("error",e.message);
    res.redirect("/singup");
  }
 
}));

router.get("/login",(req,res)=>{
  res.render("users/login.ejs");
})

router.post("/login",
  saveRedirectUrl,
  passport.authenticate("local",{
    failureRedirect: "/login",
    failureFlash: true, 

  }),
  async (req,res)=>{
    req.flash("Success","Welcome back to Wanderlust ! you are logged in!");
    let redirectUrl = res.locals.redirectUrl || "/listings";
     res.redirect(redirectUrl);
  }
);

router.get("/logout",(req,res,next)=>{
  req.logout((err)=> {
    if(err){
      return next(err);
    }
    req.flash("success","you are logged out!");
    res.redirect("/listings");
  });
});

module.exports = router;