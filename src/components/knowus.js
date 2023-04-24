import { Button } from "@chakra-ui/react";
import './knowus.css';

const KnowUs = () => {
    return (
        <div className="knowus">
            <div className="all">
            <video controls  loop  src="../video1.mp4"  width={500} ></video>
            <div className="right">
                <h3>AFFILIATE MARKETING TRACKING</h3>
                <h2>An affiliate tracking platform made for affiliate, by affiliate </h2>
                <p>Watch a short video about an affiliate marketer who has inspired a team of 100+ creative minds to develop a truly game changing ad tracking software.</p>
                <div className="case-btn">
                <Button>GET TO KNOW US</Button>
                </div>
                </div>
            </div>
        </div>
     );
}
 
export default KnowUs;
