import useSWR, { SWRConfig } from 'swr'
// import fetcher from "./fetcher";
// import Item from "./item"
// import fetch from 'unfetch'

const fetcher = (...args) => fetch(...args).then(res => res.json());



const App = function App () {
  const { data } = useSWR('https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json', fetcher);

  if (!data) return
{
    data.map((item) =>{
      return <>
      <p> {item.sno} </p>,
      <p> {item.sna} </p>,
      <p> {item.sarea} </p>,
      <p> {item.mday} </p>,
      <p> {item.ar} </p>,
      <p> {item.snaen} </p>,
      <p> {item.aren} </p>,
      </>
    })}
  console.log(data);

    
}








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