import React from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import axios from 'axios';

export default function Card(props) {
    const Title= props.title
    const body= props.body
    // const st={
    //     width:"18rem"
    // style={st}
    // };
    // class="card-img-top"
    const [pokestat,setpokestat]=React.useState([]);
    // const fetchUserData = () => {
    //   fetch(props.url)
    //     .then(response => {
    //       return response.json()
    //     })
    //     .then(data => data.stats)
    //     .then(x=>setpokestat(x))
    // }
    // React.useEffect(()=>{
    //   fetchUserData()
    // },[])
    React.useEffect(()=>async () => {
      const url = props.url;
      const response = await axios.get(url);
      // const response1=response.json();
      const data = response.stats;
      setpokestat(data)
     },[])
    // console.log(pokestat)
    return (
    <div class="card" >
      <img 
        className="some2"
        src={`https://img.pokemondb.net/artwork/large/${Title}.jpg`}
        alt="Card image cap" 
      />
      <div class="card-body">
        <h5 class="card-title">{Title}</h5>
        <p class="card-text">
            {/* HP:{pokestat[0].base_stat}
            AT:{pokestat[1].base_stat}
            DF:{pokestat[2].base_stat}
            SAT:{pokestat[3].base_stat}
            SDF:{pokestat[4].base_stat}
            SP:{pokestat[5].base_stat} */}
            some
        </p>
        <a href="#" class="btn btn-primary">
          Find More
        </a>
       </div> 
    </div>
    )}