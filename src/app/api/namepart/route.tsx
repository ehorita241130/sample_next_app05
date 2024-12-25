//堀
//######################################################################
// File: "route.js".
// On nepi40 : (*home-common="/cygdrive/g/home2/"):
// (concat *home-common 
//   "pnotes/Shouda_Tsuyano_A1257/P5580/sample_next_app05/src/app/api/namepart/"
//   "route.tsx")
// By Horita.
// On (2024 Nov 27).
//######################################################################
const cnt = 7;
const trcLev = 2;//Added.
const path = 'api/namepart/route';//new
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
async function getData4(namepart){
  const db = await openDatabase();
  let sql1 = `select * from mydata where name like '%${namepart}%'`;//This is OK?
  console.log('-- getData4(()#1:sql1=\n', sql1);//Debug
  const data1 = await db.all(sql1);
  return data1;
}
//**********************************************************************
//**********************************************************************
export async function POST(req){//<1
  const reqBody = await req.json();//New
  const namepart = reqBody.namepart;//New
  if( trcLev >= 2 ){//<2
    console.log(`-- ${path}.POST()#1:reqBody=`);
    console.dir(reqBody);
    console.log(`-- ${path}.POST()#2:namepart=${namepart}`);
  }//2>
  try{//<2
    const  matchingItems = await getData4(namepart);//New4
    //const  matchingItems = await serverActNamepart(namepart);//New3
    const rtnOb1 = 
      {message: 'アイテム一覧読み取り成功', matchingItems: matchingItems};
    return NextResponse.json(rtnOb1)//Added
  }//2>
  catch(err){//<2
    console.log(`-- ${path}.POST()#3:err=`);//Added
    console.dir(err);//Added
    let rtnOb2 = {message: `Failure in matching-itmes#${cnt}`};//New
    return NextResponse.json(rtnOb2)//Added
  }//2>
}//1>
//**********************************************************************
