import './App.css';
import Card from './Components/Card';
import Footer from './Components/Footer';
import Header from './Components/Header';
import React from 'react';
import axios from 'axios'

function App() {
  // function toggle(x){
  //   fetch(https://pokeapi.co/api/v2/{x}/?limit=10&offset=10");
  //   return
  // fun={toggle}
  // }
  // const url = 
  // const url = `https://pokeapi.co/api/v2/pokemon/?limit=10&offset=10`;
  // const arr1=

  const [pokemon,setPokemon]=React.useState([]);
  const [arr,setarr]=React.useState([]);
  const [CurrPage,setCurrPage]=React.useState(1);
  const [totalPages,SetTotalPages]=React.useState(1);
  const[arr1,setarr1]=React.useState([]);
  

  React.useEffect(()=>async () => {
    const url = `https://pokeapi.co/api/v2/pokemon/?offset={}&limit=1000`;
    const response = await axios.get(url);
    const data = response.data;
    setPokemon(data.results)
   },[])

  function toggle(search){
    console.log(98)
    const temp=pokemon.filter(x => 
      x.name.includes(search)
    )
    console.log(temp)
    setarr(temp.map(x =>(
      <Card key={x.name} className="card" title={x.name} body="Pokemon" url={x.url} />
    )))
    console.log(arr)
    // SetPagination();
    if (arr === null) {
      console.log("empty");
    } else {
      SetTotalPages(Math.ceil(arr.length / 10));
      setarr1(arr.slice((CurrPage-1)*10,CurrPage*10))
    }
  }
  const nextPage = () => {
    if(CurrPage<totalPages){
      setCurrPage(x=>x+1);
      setarr1(arr.slice((CurrPage-1)*10,CurrPage*10))
    }
    
  };
  const prevPage = () => {
    if(CurrPage>1){
      setCurrPage(x=>x-1);
      setarr1(arr.slice((CurrPage-1)*10,CurrPage*10))
    }
  };
  // const SetPagination = () => {
    
  // };
  

  // React.useEffect(()=>{
  //   if(current+9>=arr1.length){
  //     setarr(arr1.slice(current));
  //   }else{
  //     setarr(arr1.slice(current,current+9));
  //   }
  // },[current])
  // const handlePrevious = () => {
  //   if (current > 1) {
  //     setcurrent(current - 10);
  //   }
  // };
  // const handleNext = () => {
  //   if (current < totalPages) {
  //     setcurrent(current + 10);
  //   }
  // }
  // handlePrevious={handlePrevious} handleNext={handleNext}
  return (
    <div className="App">
      <div className='header'>
        <Header fun={toggle} />
      </div>
      <div className='some'>
       {arr1}
      </div>
      <div className='footer'>
        <Footer next={nextPage} prev={prevPage} current={CurrPage} total={totalPages} />
      </div>
    </div>
  );
}

export default App;