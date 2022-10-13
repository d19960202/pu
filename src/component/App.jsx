import { useState } from 'react';
import useSWR from 'swr' ;
import "./App.css";

const fetcher = (...args) => fetch(...args).then(res => res.json());

const App = () => 
{ 
  const [keyword ,setKeyword] = useState ('') ;
  const [filtered , setFilter] = useState ([]) ;
  const { data } = useSWR('https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json', fetcher);

  // useEffect(()=>{
  //   if (keyword.length === 0 ) {
  //     return data
  //   }
  // }
  // );

  if (!data) return <div>loading...</div>;

  function handleChange (e) {
    setKeyword(e.target.value)
  };

  const search = () =>{
    let reg = new RegExp (keyword) ; 
    let filter = data.filter (function (ff) {
    return ff.sna = reg.test();
    });
    setFilter(filter);
  };

  return(
  <div>
    <input type = 'text' value={keyword} onChange ={handleChange} /> 

    <button onClick={search}> 搜尋 </button> 

    <div>
      {filtered.map((item ) => 
        { 
        return<div>
        <table>
          <thead>
    
            <tr>
              <th> 站點代號 </th>
              <th> 中文場站名稱 </th>
              <th> 場站總停車格 </th>
              <th> 可借車位數 </th>
              <th> 中文場站區域 </th>
              <th> 資料更新時間 </th>
              <th> 緯度 </th>
              <th> 經度 </th>
              <th> 中文地址 </th>
              <th> 英文場站區域 </th>
              <th> 英文場站名稱 </th>
              <th> 英文地址 </th>
              <th> 可還空位數 </th>
              <th> 場站是否暫停營運 </th>
            </tr>
    
          </thead>
    
          <tbody>
    
          <tr>
              <td> {item.sno} </td>
              <td> {item.sna} </td>
              <td> {item.tot} </td>
              <td> {item.sbi} </td>
              <td> {item.sarea} </td>
              <td> {item.mday} </td>
              <td> {item.lat} </td>
              <td> {item.lng} </td>
              <td> {item.ar} </td>
              <td> {item.sareaen} </td>
              <td> {item.snaen} </td>
              <td> {item.aren} </td>
              <td> {item.bemp} </td>
              <td> {item.act} </td>
    
            </tr>
          </tbody>
        
        </table> 
    
        </div>
    
        })}
    
      </div>
    </div>);

    };
  
  
  


  
  
  // const App = function App () 
  // {const { data } = useSWR('https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json', fetcher);
  
  //   if (!data) return <div>loading...</div>;
  
  //   return <div class ='item'>youbikestation 
    
  //   <form>
  //       <div>
  //           <input type="search" id="mySearch" name="q"/>
  //           <button onClick={myFunction()} >Search</button>
  //       </div>
  //   </form>
    
  //   {data.map((item ) => 
  //     { 
  //     return<div>
  //     <table>
  //       <thead>
  
  //         <tr>
  //           <th> 站點代號 </th>
  //           <th> 中文場站名稱 </th>
  //           <th> 場站總停車格 </th>
  //           <th> 可借車位數 </th>
  //           <th> 中文場站區域 </th>
  //           <th> 資料更新時間 </th>
  //           <th> 緯度 </th>
  //           <th> 經度 </th>
  //           <th> 中文地址 </th>
  //           <th> 英文場站區域 </th>
  //           <th> 英文場站名稱 </th>
  //           <th> 英文地址 </th>
  //           <th> 可還空位數 </th>
  //           <th> 場站是否暫停營運 </th>
  //         </tr>
  
  //       </thead>
  
  //       <tbody>
  
  //        <tr>
  //           <td> {item.sno} </td>
  //           <td> {item.sna} </td>
  //           <td> {item.tot} </td>
  //           <td> {item.sbi} </td>
  //           <td> {item.sarea} </td>
  //           <td> {item.mday} </td>
  //           <td> {item.lat} </td>
  //           <td> {item.lng} </td>
  //           <td> {item.ar} </td>
  //           <td> {item.sareaen} </td>
  //           <td> {item.snaen} </td>
  //           <td> {item.aren} </td>
  //           <td> {item.bemp} </td>
  //           <td> {item.act} </td>
  
  //         </tr>
  //       </tbody>
      
  //      </table> 
  
  //      </div>
  
  //     })}
  
  //  </div>
  // }
  


// const Map = function App () 
// {const { data } = useSWR('https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json', fetcher);

//   if (!data) return <div>loading...</div>;

//   return <div class ='item'>youbikestation 
  
  
//   {data.map((item ) => 
//     { 
//     return<div>
//     <table>
//       <thead>

//         <tr>
//           <th> 站點代號 </th>
//           <th> 中文場站名稱 </th>
//           <th> 場站總停車格 </th>
//           <th> 可借車位數 </th>
//           <th> 中文場站區域 </th>
//           <th> 資料更新時間 </th>
//           <th> 緯度 </th>
//           <th> 經度 </th>
//           <th> 中文地址 </th>
//           <th> 英文場站區域 </th>
//           <th> 英文場站名稱 </th>
//           <th> 英文地址 </th>
//           <th> 可還空位數 </th>
//           <th> 場站是否暫停營運 </th>
//         </tr>

//       </thead>

//       <tbody>

//        <tr>
//           <td> {item.sno} </td>
//           <td> {item.sna} </td>
//           <td> {item.tot} </td>
//           <td> {item.sbi} </td>
//           <td> {item.sarea} </td>
//           <td> {item.mday} </td>
//           <td> {item.lat} </td>
//           <td> {item.lng} </td>
//           <td> {item.ar} </td>
//           <td> {item.sareaen} </td>
//           <td> {item.snaen} </td>
//           <td> {item.aren} </td>
//           <td> {item.bemp} </td>
//           <td> {item.act} </td>

//         </tr>
//       </tbody>
    
//      </table> 

//      </div>

//     })}

//  </div>
// };

// const App = Map.filter(function(element, index){ 
//   return Map.indexOf(element) === '大安'  ; }); 



// const App = function App () 
// {const { data } = useSWR('https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json', fetcher);

//   if (!data) return <div>loading...</div>;

//   return <div class ='item'>youbikestation 
  
//   <form>
//       <div>
//           <input type="search" id="mySearch" name="q"/>
//           <button onClick={myFunction()} >Search</button>
//       </div>
//   </form>
  
//   {data.map((item ) => 
//     { 
//     return<div>
//     <table>
//       <thead>

//         <tr>
//           <th> 站點代號 </th>
//           <th> 中文場站名稱 </th>
//           <th> 場站總停車格 </th>
//           <th> 可借車位數 </th>
//           <th> 中文場站區域 </th>
//           <th> 資料更新時間 </th>
//           <th> 緯度 </th>
//           <th> 經度 </th>
//           <th> 中文地址 </th>
//           <th> 英文場站區域 </th>
//           <th> 英文場站名稱 </th>
//           <th> 英文地址 </th>
//           <th> 可還空位數 </th>
//           <th> 場站是否暫停營運 </th>
//         </tr>

//       </thead>

//       <tbody>

//        <tr>
//           <td> {item.sno} </td>
//           <td> {item.sna} </td>
//           <td> {item.tot} </td>
//           <td> {item.sbi} </td>
//           <td> {item.sarea} </td>
//           <td> {item.mday} </td>
//           <td> {item.lat} </td>
//           <td> {item.lng} </td>
//           <td> {item.ar} </td>
//           <td> {item.sareaen} </td>
//           <td> {item.snaen} </td>
//           <td> {item.aren} </td>
//           <td> {item.bemp} </td>
//           <td> {item.act} </td>

//         </tr>
//       </tbody>
    
//      </table> 

//      </div>

//     })}

//  </div>
// }






















// function App () {
//   const { data, error } = useSWR('/youbike.json', fetcher)

//   if ( error ) return <div>failed to load</div>;
//   if ( !data ) return <div>loading...</div>;
//   // console.log(youbike);
//     return <div>
//       {data.map(item => <div key={item.id}>{item.name}</div>)}
//     </div>
//   }


export default App;