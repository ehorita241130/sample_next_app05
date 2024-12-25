//堀:~/pnotes/Shouda_Tsuyano_A1257/P5580/sample_next_app05/src/app/item_create/page.tsx
//▼リスト6-8B
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
'use client';//Client Component.
// Server Component
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
const trcLev = 2;
const path = 'app/item_create/page.tsx';
//======================================================================
const url2 = '/api/createitem';
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
import { useState, useEffect } from 'react';//Added
import Link   from 'next/link';//Added
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//**********************************************************************
function Page(context){//<1
  //======================================================================
  let [id, setId] = useState('0');
  let [name, setName] = useState('');
  let [mail, setMail] = useState('');
  let [age, setAge] = useState('0');
  //======================================================================
  async function createItem(evt){//<4
    evt.preventDefault();
    console.log(`-- ${path}:createItem()#1:called.`);
    try{
      const id1 = parseInt(id);//New3
      const age1 = parseInt(age);//New3
      const headers1 =
        { 
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        };
      const body1 = 
            { 
              id: id1,
              name: name,
              mail: mail,
              age: age1
            };
      const ob1 =
        {
          method: 'POST',
          headers: headers1,
          body: JSON.stringify(body1)
        };
      console.log(`-- ${path}:createItem()#2:ob1=`);
      console.dir(ob1);
      const resp = await fetch(url2, ob1);//New
      const jsonData = await resp.json();
      const jsonMsg = jsonData.message;
      alert(`アイテム作成成功:jsonMsg=${jsonMsg}`);
    }
    catch(err){
      console.log(`-- ${path}.createItem()#3:err=`);
      console.dir(err);
      alert('アイテム作成失敗');
    }
  }//4>
  //======================================================================
  return (//<2
    <main className='msg'>
      <title id='title'></title>
      <h3 style={{color:'red'}}>アイテム定義：</h3>
      Link：<a href='/'>Go back to top</a><br/>
    <form onSubmit={createItem}>
      Id：
      <input className='msg' value={id} 
        onChange={(e) => setId(e.target.value)}
      /><br/>
      Name：
      <input className='msg' value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br/>
      Mail：
      <input className='msg' value={mail}
        onChange={(e) => setMail(e.target.value)}
      /><br/>
      Age：
      <input className='msg' value={age}
        onChange={(e) => setAge(e.target.value)}
      /><br/>
      <button>作成</button>
    </form> 
    <h3 style={{color:'red'}}>Result：</h3>
    <div id='data'></div>
    </main>
  );//2>
}//1>
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
export default Page
