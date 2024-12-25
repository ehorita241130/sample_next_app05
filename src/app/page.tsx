//堀:▼リスト6-6B
//~/pnotes/Shouda_Tsuyano_A1257/P5580/sample_next_app/src/app/page.tsx
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
'use server'
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
import { serverActReadAll, serverActReadSingle, serverActNamepart, serverActCreate, serverActDelete} 
from './server-action';
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
async function Home(){//<1
  //======================================================================
  return (
    <main>
      <h1 className='title'>
      ● Page23：mydb/mydata の管理 (based on リスト6-6, by App router)
      </h1><br/>
      {/*======================================================================*/}
        <form className='form' action={serverActReadAll}>
          <span className='msg'>■ レコードの一覧表示：</span>
          <button className='btn'>▶ Click for listing</button>
        </form>
      {/*======================================================================*/}
      <p className='msg'>■ 表示のため, 数字 id を入力下さい．</p>
      <div>
        <form className='form' action={serverActReadSingle}>
          <p className='msg'>
            id：<input className='input' type='number' name='input'/>
            <button className='btn'>▶ Click for showing</button>
          </p>
        </form>
      </div>
      {/*======================================================================*/}
      <p className='msg'>■ 表示のため, 名前の部分文字列を入力下さい．</p>
      <div>
        <form className='form' action={serverActNamepart}>
          <p className='msg'>
            name-part：<input className='input' type='text' name='namepart'/>
            <button className='btn'>▶ Click for showing</button>
          </p>
        </form>
      </div>
      {/*======================================================================*/}
      <p className='msg'>■ 追加のためのページ：
      <a href='/item_create'>Create Item</a>
      </p>
      {/*======================================================================*/}
      <p className='msg'>■ 削除のため，数字 id を入力下さい．</p>
      <div>
        <form className='form' action={serverActDelete}>
          <p className='msg'>
            id：<input className='input' type='number' name='input'/>
            <button className='btn'>▶ Click for deletion</button>
          </p>
        </form>
      </div>
    </main>
  );
  //======================================================================
}//1>
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
export default Home;
