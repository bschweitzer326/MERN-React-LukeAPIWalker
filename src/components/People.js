import React, {useState, useEffect} from 'react';
import axios from 'axios'

const People = (props) => {

    const [peep, setPeep] = useState({});

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${props.Type}/${props.Id}/`)
        .then(response => setPeep(response.data))
        .catch(err => {
            setPeep(null)
        })
    }, [props.Type, props.Id])

    return (
        <div style={{backgroundColor: "#e9c7fd"}} className="container">
        {peep ?
            <fieldset>
            <h2>{peep.name}</h2>
            <p><span>Height: </span>{peep.height}</p>
            <p><span>Mass: </span>{peep.mass}</p>
            <p><span>Hair Color: </span>{peep.hair_color}</p>
            <p><span>Skin Color: </span>{peep.skin_color}</p>
            <p><span>Eye Color: </span>{peep.eye_color}</p>
            <p><span>Gender: </span>{peep.gender}</p></fieldset>:
            <>
                <p>These aren't the droids you're looking for</p>
                <img className="col-12" src="https://assets1.ignimgs.com/2017/03/02/kenobi-1280-1488494010895.jpg?width=1280"></img>
            </>
        }
        </div>
    )
}

export default People;