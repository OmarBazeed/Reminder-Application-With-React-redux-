import React,{Component} from 'react';

import Input from './input.jsx';

import ImageOne from '../images/notes2.jpg'

class App extends Component {

render(){

return (
    <div className='theBackground'>
        <div className="App">
            <h1 className="the_header"> Reminder Application</h1>
            
            <div className='img-info'>
                <img src={ImageOne} alt='...' className='img-fluid photo' />
                <span className='img-text'> That Is A Sample Reminder Created By <br /> <span className='text-danger'>Omar Bazeed</span> Using React Redux-tooltip</span>
            </div>
            
            <Input  />
        </div>
    </div>
);
}
}
export default  App;