//堀:~/pnotes/Shouda_Tsuyano_A1257/P5580/sample_next_app05/src/app/other23_readsingle/page.tsx
//▼リスト6-8B
'use client';//Client Component.
// Server Component
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
const trcLev = 2;
const path = 'app/item/readsingle/_/page';
//======================================================================
const url2 = '/api/readsingle';
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
import { useState, useEffect } from 'react';//Added
import Link   from 'next/link';//Added
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function Page(context){//<1
  //======================================================================
  useEffect( () =>//<2
    {//<3
      async function getSingleItem(){//<4
        const params = await context.params;
        const id = params.id;
        const headers1 =
          { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          };
        const body1 = { id: id };
        const ob1 =
          {
            method: 'POST',
            headers: headers1,
            body: JSON.stringify(body1)
          };
        const resp = await fetch(url2, ob1);//New
        const jsonData = await resp.json();
        const jsonMsg = jsonData.message;
        const jsonItem =jsonData.singleItem;
        let elmTitle = document.getElementById('title');
        let elmData = document.getElementById('data');
        if( jsonItem !== undefined ){//<5
          const id = jsonItem.id;//New3
          const name = jsonItem.name;
          //----------------------------------------------------------------------
          let htmlText0 = '';//Added
          htmlText0 += `${name}`;//Added
          elmTitle.innerHTML = htmlText0;
          //----------------------------------------------------------------------
          const email = jsonItem.mail;
          const age = jsonItem.age;
          const link = '/';
          let htmlText = '';
          htmlText += `<p>Link：<a href="${link}">Top-page</Link></a></p>\n`;
          htmlText += `<p>${jsonMsg}</p>\n`;
          htmlText += `<p>Id：${id}</p>\n`;
          htmlText += `<p>Name：${name}</p>\n`;
          htmlText += `<p>Email：${email}</p>\n`;
          htmlText += `<p>Age：${age}</p>\n`;
          elmData.innerHTML = htmlText;//New
        }//5>
        else{//<5
          let htmlText = '';
          htmlText += `<p>${jsonMsg}</p>\n`;//Mdf
          elmData.innerHTML = htmlText;//New      
        }//5>
      }//4>
      getSingleItem();
    },//3> 
    [context]
    //[]           
  );//2>
  //======================================================================
  return (//<2
    <main className='msg'>
      <title id='title'></title>
      <h3 style={{color:'red'}}>個別アイテム：</h3>
      <div id='data'></div>
    </main>
  );//2>
}//1>
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
export default Page
