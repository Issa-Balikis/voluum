import { Button } from '@chakra-ui/react';
import './home.css'

const Home = () => {
    return (
        <div className="home">
            <h3>the all-in-one affiliate software</h3>
            <h2>Track, Optimize & Automate</h2>
            <p>your advertising with affiliate tracking software recommended by digital marketers from around the globe!</p>
            <div className="home-btn">
            <Button className="btn-demo">View Demo</Button>
            <Button className="btn-gt">Get Started</Button>
            </div>
        </div>
     );
}
 
export default Home;