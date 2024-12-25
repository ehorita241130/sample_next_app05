//堀:~/pnotes/Shouda_Tsuyano_A1257/P5580/sample_next_app05/src/app//item_namepart/[namepart]/page.tsx
//▼リスト6-8B
'use client';//Client Component.
// Server Component
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
const trcLev = 2;
const path = 'app/item/item_namepart/_/page';
//======================================================================
const url2 = '/api/namepart';
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
import { useState, useEffect } from 'react';//Added
import Link   from 'next/link';//Added
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function Page(context){//<1
  //======================================================================
  useEffect( () =>//<2
    {//<3
      async function getMatchingItems(){//<4
        const params = await context.params;
        const namepart = params.namepart;
        const headers1 =
          { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          };
        const body1 = { namepart: namepart };
        const ob1 =
          {
            method: 'POST',
            headers: headers1,
            body: JSON.stringify(body1)
          };
        const link = '/';
        const resp = await fetch(url2, ob1);//New
        const jsonData = await resp.json();
        const jsonMsg = jsonData.message;
        const matchingItems =jsonData.matchingItems;
        let elmTitle = document.getElementById('title');
        let elmData = document.getElementById('data');
        if( matchingItems !== undefined ){//<5
          elmTitle.innerHTML = 'matchin-items';//New3
          let htmlText = '';//Added
          htmlText += `<p>Link：<a href="${link}">Top-page</Link></a></p>\n`;
          htmlText +=  `<p>${jsonMsg}</p>\n`;
          let lgt = matchingItems.length;//New3
          console.log(`-- Page()#1:lgt=${lgt}`);
          for(let k = 0; k < lgt; ++k){//<6.__________________________BGN <LOOP.1>
            let jsonItem = matchingItems[k];//New3
            const id = jsonItem.id;//New3
            const name = jsonItem.name;
            const email = jsonItem.mail;
            const age = jsonItem.age;
            const link = '/';
            htmlText += `<p>#${k+1}，Id：${id}</p>\n`;
            htmlText += `<p>Name：${name}</p>\n`;
            htmlText += `<p>Email：${email}</p>\n`;
            htmlText += `<p>Age：${age}</p>\n`;
          }//6>.______________________________________________________END <LOOP.1>
          elmData.innerHTML = htmlText;//New
        }//5>
        else{//<5
          elmTitle.innerHTML = 'no-maching-items';
          let htmlText = '';
          htmlText += `<p>${jsonMsg}</p>\n`;//Mdf
          elmData.innerHTML = htmlText;//New      
        }//5>
      }//4>
      getMatchingItems();
    },//3> 
    [context]
    //[]           
  );//2>
  //======================================================================
  return (//<2
    <main className='msg'>
      <title id='title'></title>
      <h3 style={{color:'red'}}>マッチするアイテム一覧：</h3>
      <div id='data'></div>
    </main>
  );//2>
}//1>
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
export default Page
