import './hero.css';

const Hero = () => {
    return (
        <div className="hero">
            <img src="../pic1.png" alt="" />
            <div className="desc">
                <p>I used nearly every tracking tool on the market and I always come back to voluum. It provides the most user-friendly interface and has the in-depth reporting features I need.</p>
                <h6>
                    <span>
                    Luke Kling 
                    </span><br />
                   Affiliate Commmunity Leader
                </h6>
            </div>
            <img src="../pic2.png" alt=""  className='pic2'/>
        </div>
     );
}
 
export default Hero;