//회원가입 sign up
const bcrypt = require('bcryptjs');
const {generateAccessToken, generateRefreshToken} = require('../utils/token');
const userService = require('../services/userService');

//sing up
const register = async(req, res)=>{
    const {email, name, password} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10); //10:솔트값?
    try{
        const user = await userService.createUser({
            email: email, name:name, password: hashedPassword,
        });
        res.status(201).json({message:'ok', data:user});
    }catch(e){
        res.status(500).json({message: e.message});
    }
}

//로그인
const login = async(req, res)=>{
    const {email, password} = req.body;

    try{
        const user = await userService.findUserByEmail(email);
        if(!user){
            return res.status(400).json({message: 'Invalid email and password'});
        }
        const isMatch = await bcrypt.compare(password, user.password); //평문과 암호화된 패스워드를 비교
        if(!isMatch){
            return res.status(400).json({message: 'Invalid email and password'});
        }
        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);
        res.status(200).json({
            accessToken, refreshToken
        });
    }catch(e){
        res.status(500).json({message: e.message});
    }
}

const jwt = require('jsonwebtoken');
const refresh = async(req, res)=>{
    const {token} = req.body; //refresh token
    if(!token) return res.sendStatus(401);

    jwt.verify(token, 'refresh', (err, user)=>{
        if(err) return res.sendStatus(403);
        const accessToken = generateAccessToken(user);
        res.status(200).json({
            accessToken,
        })
    });
}

module.exports = {
    register, login, refresh
}