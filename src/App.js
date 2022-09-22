import useSWR from 'swr' ;
import "./App.css";
// import fetcher from "./fetcher";
// import Item from "./item"
// import fetch from 'unfetch'

const fetcher = (...args) => fetch(...args).then(res => res.json());






function App () 
{
  const { data } = useSWR('https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json', fetcher);

  if (!data) return <div>loading...</div>;

  return <div>youbikestation {data.map((item ) => 
    {
    return <table>
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
    })} </div>
}

// {/* <p>  ,{},{},{},{item.},{item.mday},{item.lat},{item.lng},{item.ar},{item.sareaen},{item.snaen},{item.aren}</p> */}

// function App () 
// {
//   const { data } = useSWR('https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json', fetcher);

//   if (!data) return <div>loading...</div>;

//   return <div>youbikestation {data.map((item) => {
//     return <p> {item.sno} ,{item.sna},{item.tot},{item.sbi},{item.sarea},{item.mday},{item.lat},{item.lng},{item.ar},{item.sareaen},{item.snaen},{item.aren}</p>
//   })} </div>
// }








// export async function getStaticProps () {
//   // `getStaticProps` is executed on the server side.
//   const article = await getArticleFromAPI()
//   return {
//     props: {
//       fallback: {
//         '/youbike.json': article
//       }
//     }
//   }
// }

// const App = () => {
//   const {
//       data,
//       error,
//   } = useSWR(`./youbike.json`, fetcher);
//   if ( error ) return <div>failed to load</div>;
//   if ( !data ) return <div>loading...</div>;
//   return <div className='bike'>
//       {
//           data.map((item: any, index: number) => {
//               return <ProductComponent key={ item.name } item={ item } index={ index } />
//           })
//       }
//   </div>;
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