import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import { useState } from 'react';
import './afs.css'
import Cards from './cards';

const AffiliateMarketingSoftware = () => {
     const [formData, setFormData] = useState({
       /*  campaign: "", */
       /*  offer: "", */
       /*  dimension: "", */
        create: "",
        conversion: "",
        higher: ""
     })

      const handleChange = (event) => {
        const { name, value, type, defaultChecked } = event.target
        setFormData(prevState => {
            return {
                ...prevState,
                [name]: type === "checkbox" ? defaultChecked :  value
            }
        })
    }

      const handleSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <div className="afs">
          <div className="afs-head">
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
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="create" className='create'>Create rule</label>
                        <div className="input1">
                        <input type="radio"
                               name="create"
                               id="campaign"
                               value="campaign"
                               defaultChecked={formData.create === "campaign"}
                                onChange={handleChange}
                         />
                        <label htmlFor="campaign">Campaign</label>
                        </div>
                        <div className="input2">
                        <input type="radio"
                               name="create"
                               id="offer"
                               value="offer"
                               defaultChecked={formData.create === "offer"}
                                onChange={handleChange}
                         />
                        <label htmlFor="offer">Offer</label>
                        </div>
                        <div className="input3">
                        <input type="radio" 
                               name="create"
                               id="dimension"
                               value="dimension"
                              defaultChecked={formData.create === "dimension"}
                               onChange={handleChange}
                        />
                        <label htmlFor="dimension">Dimension</label>
                        </div>
                    </form>
                </div>
                </div>
                <div className="conditions">
                    <p className='c-p'>Set conditions that trigger the action</p>
                    <div className='condition-option'>
                        <h4>IF</h4>
                      <select 
                            id="conversion"
                            value={formData.conversion}
                            onChange={handleChange}
                            name= "conversion"
                            className="select"
                      >
                        <option value="conversion">conversion</option>
                        <option value="converiosn1">conversion1</option>
                        <option value="converison2">conversion2</option>
                      </select>
                      <select 
                            id="higher"
                            value={formData.higher}
                            onChange={handleChange}
                            name= "higher"
                            className="select"
                      >
                        <option value="higher">is higher than</option>
                        <option value="lower">is lower than</option>
                      </select>
                      <div className="value">
                      <input type="text" placeholder='Type value' 
                      />
                      <div className="id">
                      <Button className='increment'>+</Button>
                      <Button className='decrement'>-</Button>
                      </div>
                      </div>
                    </div>
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