
import express, { Application, Request, Response, query } from "express";
import cors from "cors";
import {IWelcomeBody,IAdminObject } from "./Types/common";
import { getUserLogin,createUser,getRatesData, getRates } from "./DBAccessor";
import bodyParser from "body-parser";  
import jwt from 'jsonwebtoken'
import path from "path";
import { resFail, resSuccess } from "./utils";
export const app: Application = express();

const APP_PASSWORD = "@token"


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(8000,()=>{
    console.log("server start...")
})


app.use(express.static('public'))


app.get('/login', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/register', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/register.html'));
});

app.get('/rates', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/rates.html'));
});


app.get("/rates/last",(req,res)=>{
    getRates((err,data)=>{
        if(data)  {
            let resData = data[0]
            resData.rates = JSON.parse(resData.rates)
            resData.currency = "MMK"
            return res.send(resSuccess(resData))
        }
        else{
            return res.send(resFail(err))
        }
     
    })
})