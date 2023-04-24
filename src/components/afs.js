import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import './afs.css'
import Cards from './cards';

const AffiliateMarketingSoftware = () => {
    return (
        <div className="afs">
            <div className="afs-header">
                <h4>Improve your ad performance with our affiliate marketing software</h4>
            </div>
            <div className="afs-group">
                <ul>
                    <li>Track</li>
                    <li>Optimize</li>
                    <li>Automate</li>
                </ul>
            </div>
            <div className="afsleftright">
            <div className="afs-left">
                <h6>affiliate marketing tracking</h6>
                <h2>track everything in one place</h2>
                <p>What kind of ads do you run? Native, display, pop, email, push, social, video? Paid or organic? Voluum affiliate tracker helps you track it all! With or without redirects.</p>
                <p>Thanks to our superfast reporting you can easily monitor over 30 metrics about each visits, clicks and conversion coming from all your traffic sources - with one tool and in real time!</p>
                <div className="case-btn">
                    <Button>View Case Studies</Button>
                </div>
            </div>
            <div className="afs-right">
                <div className="flex">
                <div className="rule">
                <h5>New optimization rule</h5>
                <ol>
                    <li>Select campaign</li>
                    <li>Choose an act</li>
                    <li>Set condition</li>
                </ol>
                </div>
                <div className="rule-option">
                    <form>
                        <label htmlFor="create" className='create'>Create rule</label>
                        <div className="input1">
                        <input type="radio" />
                        <label htmlFor="campaign">Campaign</label>
                        </div>
                        <div className="input2">
                        <input type="radio" />
                        <label htmlFor="offer">Offer</label>
                        </div>
                        <div className="input3">
                        <input type="radio" />
                        <label htmlFor="dimension">Dimension</label>
                        </div>
                    </form>
                </div>
                </div>
                <div className="conditions">
                    <p className='c-p'>Set conditions that trigger the action</p>
                    <p className='condition-option'>IF
                      <select name="" id="">
                        <option value="">conversion</option>
                        <option value="">conversion</option>
                        <option value="">conversion</option>
                      </select>
                      <select name="" id="">
                        <option value="">is higher than</option>
                        <option value="">is lower than</option>
                      </select>
                      <input type="text" placeholder='Type value  - +' />
                    </p>
                </div>
                 <div className="case-btn">
                    <Button>SEE ALL FEATURES
                        <ArrowForwardIcon />
                    </Button>
                </div>
            </div>
            </div>
            <Cards />
        </div>
     );
}
 
export default AffiliateMarketingSoftware;