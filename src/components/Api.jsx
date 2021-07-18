import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ApiCall = props => {
    const [pokemon, setPokemon] = useState({});
    const [getAll, setGetALL] = useState(null);
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/${getAll}`)
        .then(res => {
            console.log(res)
            setPokemon(res.data.results)
        })
        .catch(err => {
            console.log(err)
        })
    }, [getAll])
    const getAllPokemon = () => {
        setGetALL('pokemon?limit=807&offset=0');
    }
    return(
        <center>
            <button onClick={getAllPokemon}>Fetch Pokemon</button>
            <ul>
                {
                    pokemon ? 
                    pokemon.map(poke => {
                        return <li>{poke.name}</li>
                    })
                    : <li> </li>
                }
            </ul>
        </center>
    );
}

export default ApiCall;