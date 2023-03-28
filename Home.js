import React from 'react';
import { Link } from 'react-router-dom';
import img7 from './images/img7.jpg';
import img5 from './images/img5.jpg';
import img4 from './images/img4.jpg';
import img8 from './images/img8.jpg';
import './Home.css';
//import Navbar1 from './Navbar';
function Home() {
  return (
    <div className='flag'>
        <div className='col '>
            <div className="card c1">
            <img src={img5} className='card-img-top cf' alt='Not found'/>
                <div className="card-body">
                    <h5 className="card-title"><span className='textcolor'>Carbon Footprint</span></h5>
                    <p className="card-text"><span className='textcolor'>Measure of greenhouse gases produced by human activities. Reduce by using renewable energy, public transportation, and eating plant-based</span></p>
                <div className='like'>
                <Link to='/Cprint'><button className="btn btn-primary">Go</button></Link>
                </div>
                </div> 
            </div>
        </div>
        <div className='col'>
            <div className="card c2">
            <img src={img4} className='card-img-top cf' alt='Not Found'/>
                <div className="card-body">
                    <h5 className="card-title"><span className='textcolor'>Car Pooling</span></h5>
                    <p className="card-text"><span className='textcolor'>"Save money and reduce your carbon footprint by carpooling with others. Split the cost and enjoy a more social commute. Find reliable carpool partners."</span></p>
                <div className='like'>
                <Link to='/Carpool'><button className="btn btn-primary">Go</button></Link>
                </div>
                </div> 
            </div>
        </div>
    <div>
        <div className='col'>
            <div className="card c3">
            <img src={img7} className='card-img-top cf' alt='Not found'/>
                <div className="card-body">
                    <h5 className="card-title"><span className='textcolor'>Eco-Friendly Shopping</span></h5>
                    <p className="card-text"><span className='textcolor'>Buy renewable sources to reduce carbon footprint, keep on card for easy access, and support sustainable energy practices. Go green! Go Eco-friendly!</span></p>
                <div className='like'>
                <button className="btn btn-primary">Go</button>
                </div>
                </div> 
            </div>
        </div>
    </div>
    <div>
        <div className='col'>
            <div className="card c4">
            <img src={img8} className='card-img-top cf' alt='Not found'/>
                <div className="card-body">
                    <h5 className="card-title"><span className='textcolor'>Energy Conservation</span></h5>
                    <p className="card-text"><span className='textcolor'>"Save energy, save money. Turn off lights, unplug devices when not in use. Reduce waste, recycle properly. Small actions can make a big impact on our planet."</span></p>
                <div className='like'>
                <button className="btn btn-primary">Go</button>
                </div>
                </div> 
            </div>
        </div>
    </div>
    </div>
  )
}

export default Home
