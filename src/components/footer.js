import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Button, Link } from '@chakra-ui/react';
import './footer.css';
import { FaFacebook, FaLinkedin, FaTelegram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return ( 
        <div className="footer">
            <footer>
                <div className="footer1">
                    <div className="footer-left">
                    <h2>Control all your advertising from just one platform!</h2>
                    <div className="case-btn">
                        <Button>GET STARTED 
                            <ArrowForwardIcon />
                        </Button>
                    </div>
                    </div>
                    <div className="footer-right">
                        <h4>TRACK ON THE GO</h4>
                        <div className="img">
                        <img src="../image36.png" alt="" width={200} 
                        className="gp" />
                        <img src="../image35.png" alt="" />
                        </div>
                    </div>
                </div>
                <hr />
                <div className="footer2">
                    <div className="footer-logo">
                        <p>BUY NATIVE TRAFFIC</p>
                        <figure>
                        <img src="../logo.png" alt="" />
                        <figcaption>DSP</figcaption>
                        </figure>
                        <p className='join'>Join our communities of affiliates on
                        <div className="social-p">
                            <div className="facebook">
                            <FaFacebook /> 
                            <p>Facebook</p>
                            </div>
                            <div className="telegram">
                            <FaTelegram />
                            <p>Telegram</p> 
                            </div>
                            </div>
                        </p>
                    </div>
                    <div className="footer-links">
                        <div className="company">
                            <h3>Company</h3>
                            <Link>About Us</Link>
                            <Link>Become a Partner</Link>
                            <Link>Referral Program</Link>
                            <Link>Contact Us</Link>
                        </div>
                        <div className="feature">
                            <h3>Features</h3>
                            <Link>Automate</Link>
                            <Link>Traffic Distribution AI</Link>
                            <Link>Anti-fraud Kit</Link>
                            <Link>Mobilr Notifications</Link>
                            <Link>Collaboration Tools</Link>
                        </div>
                        <div className="integrations">
                            <h3>Integrations</h3>
                            <Link>Taboola</Link>
                            <Link>MGID</Link>
                            <Link>Revcontent</Link>
                            <Link>PropellerAds</Link>
                            <Link>ExoClick</Link>
                            <Link>Zeropark</Link>
                            <Link>Outbrain</Link>
                            <Link>Content.ad</Link>
                            <Link>Adsterra</Link>
                            <Link>TrafficJunky</Link>
                            <Link>and more!</Link>
                        </div>
                        <div className="resources">
                            <h3>Resources</h3>
                            <Link>Beginner AM Guide</Link>
                            <Link>Webinars</Link>
                            <Link>Video Tutorials</Link>
                            <Link>Documentation</Link>
                            <Link>Case Studies</Link>
                            <Link>Trackers Comparison</Link>
                            <Link>Blog</Link>
                            <Link>Affiliate Networks</Link>
                            <Link>Change Log</Link>
                        </div>
                    </div>
                </div>
                    <hr />
                    <div className="copyright">
                        <p>&copy; Voluum by CentralNic 2023</p>
                        <div className="terms">
                            <Link>End User Privacy Policy</Link>
                            <Link>Privacy Policy</Link>
                            <Link>Cookies Policy</Link>
                            <Link>Terms & Conditions</Link>
                            <Link>DPA</Link>
                            <Link>Security</Link>
                        </div>
                        <div className="social-logo">
                            <FaFacebook />
                            <FaLinkedin />
                            <FaYoutube />
                        </div>
                    </div>
            </footer>
        </div>
     );
}
 
export default Footer;