

import { useEffect, useState } from "react";
import Card from "./components/card";
import SmallCard from "./components/smallcard";


function App() {
 const [data,setdata]=useState([])
 useEffect(()=>{
  const url = 'https://wawinner.its.ae/dev/public/api/v1/front-end/campaign';
const fetchdata=async()=>{

  const response=await fetch(url)
  const responsedata=await response.json();
 let data=[];
 for(let i=0;i<responsedata.data.length;i++){
data.push({
  key:1,
  name:responsedata.data[i].product_id.name,
  xname:responsedata.data[i].prize_id.name,
  ximg:responsedata.data[i].prize_id.image,
  img:responsedata.data[i].product_id.image,
})
 }
setdata(data)
}
  fetchdata()
},[])


let display=data.map((item)=><Card key={item.key} name={item.name} img={item.img} xname={item.xname} ximg={item.ximg}/>)
let displaysmall=data.map((item)=><SmallCard key={item.key} name={item.name} img={item.img} xname={item.xname} ximg={item.ximg}/>)
  return (
   <div>
   { displaysmall}
{ display}
   </div>
  );
}

export default App;
