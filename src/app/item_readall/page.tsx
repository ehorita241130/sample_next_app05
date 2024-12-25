//堀:~/pnotes/Shouda_Tsuyano_A1257/P5580/sample_next_app03/src/app/other23_readall/page.tsx
//▼リスト6-2B
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
'use server';//Server Component
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
const path = 'app/other23_00/page';//New3
const dbFilePath = './mydb.db';//New.
//**********************************************************************
//const dbgFlg1 = false;
const dbgFlg1 = true;
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
import sqlite3  from 'sqlite3';//New
import { open } from 'sqlite';//New2
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
const dbSpec = {//<1
  filename: dbFilePath,
  driver: sqlite3.Database,
};//1>
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//v New2.
async function openDatabase(){//<1
  return open(dbSpec);
}//1>
//**********************************************************************
async function Home(){//<1
  const db = await openDatabase();
  let sql1 = 'select * from mydata';//This is OK.
  const data1 = await db.all(sql1);
  if( dbgFlg1 ){//<2
    console.log(`-- ${path}.Home()#1:\ndata1=${data1}`);//Debug
    data1.map((item, k) => {
      console.log(`-- ${path}.Home()#2:\nk=${k},item=${JSON.stringify(item)}`);
    });
  }//2>
  //======================================================================
  return (//<2
    <main>
      <h1 className='title'>● Index page (リスト6-2B, by App router)</h1>
      <div>
        <a href='/'>▶ Go back to top!</a>
      </div>
      <p className='msg'>■ data1：</p>
      {data1.map((item, k) => 
          <p className='msg' key={String(k)}>{k+1}：{JSON.stringify(item)}</p>
      )}
    </main>
  );//2>
}//1>
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
export default Home
