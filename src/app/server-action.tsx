//堀:~/pnotes/Shouda_Tsuyano_A1257/P5580/sample_next_app05/src/app/page23/server-action.tsx
'use server'
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
import { redirect } from 'next/navigation';//Added
import sqlite3 from 'sqlite3';//New
import { open } from 'sqlite';//New2
//**********************************************************************
const dbFilePath = './mydb.db';//New.
const path = 'app/page23/server-action.tsx';//New3
//**********************************************************************
const dbSpec = {
  filename: dbFilePath,
  driver: sqlite3.Database,
};
//**********************************************************************
//v New2.
async function openDatabase(){
  return open(dbSpec);
}
//**********************************************************************
//**********************************************************************
export async function serverActReadAll(){
  redirect('/item_readall');
}
//**********************************************************************
//**********************************************************************
/*
async function getData(num){
  const db = await openDatabase();
  let sql1 = `select * from mydata where id=${num}`;//This is OK.
  const data1 = await db.all(sql1);
  return data1;
}
*/
//**********************************************************************
export async function serverActReadSingle(form){//<1
  let id1 = form.get('input');
  redirect(`/item_readsingle/${id1}`);
}//1>
//**********************************************************************
//**********************************************************************
/*
async function getData4(namepart){
  const db = await openDatabase();
  let sql1 = `select * from mydata where name like '%${namepart}%'`;//This is OK?
  console.log('-- getData4(()#1:sql1=\n', sql1);//Debug
  const data1 = await db.all(sql1);
  return data1;
}
*/
//**********************************************************************
export async function serverActNamepart(form){
  let namepart = form.get('namepart');
  console.log(`-- serverActNamepart()#1:namepart=${namepart}`);//Debug
  redirect(`/item_namepart/${namepart}`);//New3
}
//**********************************************************************
//**********************************************************************
async function insertData(id, name, mail, age){
  const db = await openDatabase();
  let sql1 = `insert into mydata values(${id}, '${name}', '${mail}', ${age})`;//This is OK.
  const rtn1 = await db.run(sql1);
  return rtn1;
}
//**********************************************************************
export async function serverActCreate(form){
  let id = form.get('id');
  let name = form.get('name');
  let mail = form.get('mail');
  let age = form.get('age');
  console.log(`-- page23/server-action.tsx:serverActCreate()#1:`+
              `id=${id},name=${name},mail=${mail},age=${age}` );//For tracing.
  let rtn1 = await insertData(id, name, mail, age);
  console.log('-- page23/server-action.tsx:serverActCreate()#2:rtn1=\n', 
              rtn1 );//For tracing.
  let query = `id=${id}&name=${name}&mail=${mail}&age=${age}`;
  let searchParams = new URLSearchParams(query);
  redirect(`/item_create?${searchParams.toString()}`);
}
//**********************************************************************
//**********************************************************************
/*
async function deleteData(num){
  const db = await openDatabase();
  let sql1 = `delete from mydata where id=${num}`;//This is OK.
  const rtn1 = await db.run(sql1);
  return rtn1;
}
*/
//**********************************************************************
export async function serverActDelete(form){//<1
  let id = form.get('input');
  console.log(`-- ${path}:serverActDelete()#1:id=${id}`);
  redirect(`/item_delete/${id}`);//New3
  /*
  let rtn1 = await deleteData(id);
  console.log(`-- ${path}:serverActDelete()#2:rtn1=\n`, rtn1);//Debug
  let query = `id=${id}`;
  let searchParams = new URLSearchParams(query);
  redirect(`/item_delete?${searchParams.toString()}`);
  */
}//1>
//**********************************************************************
//**********************************************************************
