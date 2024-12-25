//堀
//######################################################################
// File: "route.js".
// On nepi40 : (*home-common="/cygdrive/g/home2/"):
// (concat *home-common 
//   "pnotes/Miyoshi_Aki_A3570/P5613/next-market/app/api/readsingle/"
//   "route.tsx")
// By Horita.
// On (2024 Nov 27).
//######################################################################
const cnt = 7;
const trcLev = 2;//Added.
const path = 'api/readsingle/route';//new
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
async function getData(num){
  const db = await openDatabase();
  let sql1 = `select * from mydata where id=${num}`;//This is OK.
  const data1 = await db.all(sql1);
  //return data1;
  let data1A = undefined;
  if( data1.length >= 1 ){//<2
    data1A = data1[0];
  }//2>
  else{//<2
    data1A = {id:'-',name:'-',mail:'-',age:0};
  }//2>
  return data1A;//New4
}
//**********************************************************************
export async function POST(req){//<1
  const reqBody = await req.json();//New
  const id1 = reqBody.id;//New
  if( trcLev >= 2 ){//<2
    console.log(`-- ${path}.POST()#1:reqBody=`);
    console.dir(reqBody);
    console.log(`-- ${path}.POST()#2:id1=${id1}`);
  }//2>
  try{//<2
    const singleItem = await getData(id1);//New3
    const rtnOb1 = 
      {message: 'アイテム読み取り(シングル)成功', singleItem: singleItem};
    return NextResponse.json(rtnOb1)//Added
  }//2>
  catch(err){//<2
    console.log(`-- ${path}.POST()#3:err=`);//Added
    console.dir(err);//Added
    let rtnOb2 = {message: `Failure in readsingle2#${cnt}`};//New
    return NextResponse.json(rtnOb2)//Added
  }//2>
}//1>
//**********************************************************************
