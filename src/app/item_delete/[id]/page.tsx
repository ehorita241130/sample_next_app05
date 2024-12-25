//堀:~/pnotes/Shouda_Tsuyano_A1257/P5580/sample_next_app05/src/app/item_delete/_/page.tsx
//▼リスト6-8B
'use client';//Client Component.
// Server Component
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
const trcLev = 2;
const path = 'app/item/item_delete/_/page.tsx';//New3
//======================================================================
const url2 = '/api/deleteitem';
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
import { useState, useEffect } from 'react';//Added
import Link   from 'next/link';//Added
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function Page(context){//<1
  //======================================================================
  useEffect( () =>//<2
    {//<3
      async function deleteItem(){//<4
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
        //const jsonItem =jsonData.singleItem;
        let elmTitle = document.getElementById('title');
        let elmData = document.getElementById('data');
        /*
        const id = jsonItem.id;//New3
        const name = jsonItem.name;
				*/
        //----------------------------------------------------------------------
        let htmlText0 = '';//Added
        htmlText0 += `${name}`;//Added
        elmTitle.innerHTML = htmlText0;
        //----------------------------------------------------------------------
        const link = '/';
        let htmlText = '';
        htmlText += `<p>Link：<a href="${link}">Top-page</Link></a></p>\n`;
        htmlText += `<p>${jsonMsg}</p>\n`;
        elmData.innerHTML = htmlText;//New
        /*
        const email = jsonItem.mail;
        const age = jsonItem.age;
        const link = '/';
        htmlText += `<p>Link：<a href="${link}">Top-page</Link></a></p>\n`;
        htmlText += `<p>${jsonMsg}</p>\n`;
        htmlText += `<p>Id：${id}</p>\n`;
        htmlText += `<p>Name：${name}</p>\n`;
        htmlText += `<p>Email：${email}</p>\n`;
        htmlText += `<p>Age：${age}</p>\n`;
        elmData.innerHTML = htmlText;//New
				*/
      }//4>
      deleteItem();
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
