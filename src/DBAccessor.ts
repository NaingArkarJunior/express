import mysql from 'mysql2'
import { UserData, RatesData } from './Types/UserData';

// function DBConnection(){
//     return mysql.createConnection({
//       host:"localhost",
//       user:"root",
//       password:"admin",
//       database:"exchange"
//     })
// }


function DBConnection(){
  return mysql.createConnection({
    host:"ls-7c928d8727e366a0d534e5224a354ca49752882b.cr89if9deexb.ap-south-1.rds.amazonaws.com",
    user:"dbmasteruser",
    password:"OKzr%o}tK;iS_[QV.y#3-9H_t#EH6%gF",
    database:"exchange"
  })
}


  export const getUserLogin = (name:string,password:string,cb:(err:mysql.QueryError|null,results:UserData[]|null)=>void)=>{
    DBConnection().execute<UserData[]>(
      'SELECT * FROM `users` WHERE `username`=? AND `password`=?',
      [name,password],
      function(err, results) {
        console.log(err,results);
        cb(err,results)
      }
    )
  
  }

  export const createUser=(name:string,user_name:string,password:string,permission_id:number,cb:(err:mysql.QueryError|null,results:UserData[]|null)=>void)=>{
    DBConnection().execute<UserData[]>(
      "INSERT INTO `users` (`name`, `user_name`, `password`, `permission_id`) VALUES (?, ?, ?, ?)",
      [name,user_name,password,permission_id],
      function(err,result){
        cb(err,result)
      }
    )
  }

  export const getRatesData = (cb:(err:mysql.QueryError|null,results:RatesData[]|null)=>void) => {
    DBConnection().execute<RatesData[]>(
        'SELECT * FROM `rates`',
        function(err, results) {
          cb(err,results)
        }
    );
  }


  export const getRates = (cb:(err:mysql.QueryError|null,results:RatesData[]|null)=>void) => {
    DBConnection().execute<RatesData[]>(
        'SELECT * FROM `currencies` ORDER BY `id` DESC LIMIT 1',
        function(err, results) {
          cb(err,results)
        }
    );
  }