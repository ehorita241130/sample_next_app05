//堀
//######################################################################
// File: "route.js".
// On nepi40 : (*home-common="/cygdrive/g/home2/"):
// (concat *home-common 
//   "pnotes/Miyoshi_Aki_A3570/P5613/next-market05/app/api/createitem/"
//   "route.tsx")
// By Horita.
// On (2024 Nov 27).
//######################################################################
const cnt = 7;
const trcLev = 2;//Added.
const path = 'api/createitem/route.tsx';//new
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
import { NextResponse } from "next/server";
import sqlite3 from 'sqlite3';//New3
import { open } from 'sqlite';//New3
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
const dbFilePath = './mydb.db';//New3
//**********************************************************************
const dbSpec = {
  filename: dbFilePath,
  driver: sqlite3.Database,
};
//**********************************************************************
//v New3
async function openDatabase(){
  return open(dbSpec);
}
//**********************************************************************
async function insertData(id, name, mail, age){
  const db = await openDatabase();
  let sql1 = `insert into mydata values(${id}, '${name}', '${mail}', ${age})`;//This is OK.
  const rtn1 = await db.run(sql1);
  return rtn1;
}
//**********************************************************************
export async function POST(req){//<1
  const reqBody = await req.json();//New
  const id = reqBody.id;//New3
  const name = reqBody.name;//New3
  const mail = reqBody.mail;//New3
  const age = reqBody.age;//New3 
  if( trcLev >= 2 ){//<2
    console.log(`-- ${path}:POST()#1:reqBody=`);
    console.dir(reqBody);
    console.log(`-- ${path}:POST()#2:id=${id}`);
    console.log(`-- ${path}:POST()#3:name=${name}`);
    console.log(`-- ${path}:POST()#4:mail=${mail}`);
    console.log(`-- ${path}:POST()#4:age=${age}`);
  }//2>
  try{//<2
    const rtn1 = await insertData(id, name, mail, age);//New3
    const rtnOb1 = 
      {message: 'アイテム作成成功', rtn1: rtn1};
    return NextResponse.json(rtnOb1)//Added
  }//2>
  catch(err){//<2
    console.log(`-- ${path}:POST()#5:err=`);//Added
    console.dir(err);//Added
    let rtnOb2 = {message: `Failure in createitem#${cnt}`};//New
    return NextResponse.json(rtnOb2)//Added
  }//2>
}//1>
//**********************************************************************
