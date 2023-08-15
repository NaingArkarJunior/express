import mysql from 'mysql2'



export interface UserData extends mysql.RowDataPacket {
    id:number,
    name:string,
    username:string,
    password:string,
    permission:string
}

export interface RatesData extends mysql.RowDataPacket {
    id:number,
    usd:number,
    rates:string,
    created_at: string,
    updated_at:string,
    currency?:string
}
