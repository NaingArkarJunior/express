const express = require("express");
const app = express();
const log = require("noogger")
const colors = require("colors")


app.get("/add",(req,res)=>{
    let query = req.query
    res.send({total:parseInt(query.f) + parseInt(query.s)})
})

app.get("/x",(req,res)=>{
    let query = req.query
    res.send({total:parseInt(query.f) * parseInt(query.s)})
})



const logo = `
╔═╗┌─┐┌┬┐┌─┐┬─┐┌─┐┬    ┌─┐┬─┐┌┬┐┬ ┬
╠╣ ├┤  ││├┤ ├┬┘├─┤│    ├─┤├┬┘│││└┬┘
╚  └─┘─┴┘└─┘┴└─┴ ┴┴─┘  ┴ ┴┴└─┴ ┴ ┴ 
`;
                                           

app.listen(8000, () => {
    console.log(logo.america);
    log.info("Status      : " + colors.green("Start"));
    log.info("Name        : " + colors.green("Uetron"));
    log.info(`Version     : ${colors.green(process.env.VERSION || "1.0.0.1")}`);
    log.info("Port Number : " + colors.green(8000));
  });
  