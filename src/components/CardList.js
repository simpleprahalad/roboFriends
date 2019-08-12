import React from 'react'
import Card from './Card'

const CardList = ({robots}) => {
    // if(true) {
    //     throw new Error("OPPS THIS IS ERROR");
    // }
    const cardArray = robots.map((item, index)=>{
        return (
            <Card 
                key={index}
                id={robots[index].id} 
                name={robots[index].name} 
                email={robots[index].email}
            />
        )
    })

    return (
        <div>
            {cardArray}
        </div>
    )
}

export default CardList