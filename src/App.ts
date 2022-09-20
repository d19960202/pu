import useSWR, { SWRConfig } from 'swr'
import fetcher from "./fetcher";
// import fetch from 'unfetch'



const App = function App () {
  const { data } = useSWR('/youbike.json', fetcher)

  if (!data) return 
  {
    data.map(() => {
        <p> {data} </p>
    })
  }
  console.log(data);
}

export default App;