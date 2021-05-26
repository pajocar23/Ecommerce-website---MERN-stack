const User = require('../models/user');

const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');

//Register a user => /api/v1/register
exports.registerUser = catchAsyncErrors(async(req,res,next)=>{

    const{ name, email, password }=req.body;

    const user = await User.create({
        name,
        email,
        password,
        avatar:{
            public_id:'avatars/PNG_transparency_demonstration_2_xmmyng',
            url: 'https://res.cloudinary.com/dmects8t7/image/upload/v1620817580/avatars/PNG_transparency_demonstration_2_xmmyng.png'
        }
    })
    res.status(201).json({
        success:true,
        user
    })

})