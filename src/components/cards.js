import { Button } from "@chakra-ui/react";
import Data from "../data";
import './cards.css';

const Cards = () => {
    return ( 
        <div className="cards">
            {Data.map((item) => {
                return(
                    <div className="card" key={item.id}>
                        <img src={item.image} alt="" />
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                        <Button>{item.btn}</Button>
                    </div>
                )
            })
            }
        </div>
     );
}
 
export default Cards;