import React , {Component} from 'react';

import { connect } from 'react-redux';

import { add ,remove ,clear } from '../actions/action';

// For Formatting The Element Which Show The Value Of --> Input type"date" .. We Got It By Setupping The moment In The Terminal--> npm i --save moment
import moment from 'moment';

// For Formatting The Input Itself --> type="date Or datetime-local" To Make It Appear In Good And Easy Show ..  We Got It By Setupping The react-datepicker In The Terminal--> npm i --save react-datepicker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Here We Call Sweetalert Library To Use It Instead Of window.alert() .  And We Can Use It By Setuping It In The Terminal By --> npm i sweetalert --save Then We Import swal from 'sweetalert' Then Use swal('strong or header', 'say Message', 'With Some Props Like success , warning , error' )
import swal from 'sweetalert';

class Input extends Component{

state={
    text:'',
    date: new Date(),
}

handleClick= ()=>{
    if(this.state.text === "" || this.state.date === ''){
        swal("Some Error!", "Please Enter Valid Data!", "error");
        return  false
    }else{
        this.props.add(this.state.text , this.state.date);
        this.setState( {text:'',date:''} )
    }
}


showData = () =>{
    
    const {show} = this.props;

    const All = show.map((el) => {

        return(
            <div key={el.id}>
                <div className="show-info row align-items-center ">

                        <div className='col-md-8 text-capitalize'>
                                <p className='the-data-show'>{el.text}</p>
                                <p className='text-danger'>{moment(new Date(el.data)).fromNow()}</p>
                        </div>

                        <div className='col-md-4 text-end delete-par'>
                            <span 
                            className='btn btn-success delete-it'
                            onClick={()=> this.props.remove(el.id)}>
                            X
                            </span>
                        </div>
                        
                </div>
                <hr />

            </div>
                )
            } ) 

return  show.length !== 0 ? (All) : (<p className='text-danger fs-3 fw-bold'>There Is Not Reminders</p> )

}


render(){

        return(
            <>

            <input 
            className='form-control the-input' 
            type="text" placeholder='Enter Your Job' 
            onChange={(e)=>this.setState({text:e.target.value})}
            value={this.state.text}
            />

            {/* DatePicker Is Instead Of input type="date" And It Accepts Some Props Like (selected -> It To Show The Value Of The Time You Want As A Placeholder)  , (onChange={(date)=>{ Modyfiy Your State With The Value Of date Which You Will Pick}})  , (showTimeSelect -> To Show The Value Of Minutes And Hours ) , (dateFormat -> It Is The Format Of The Dtae "mm:dd:yy:T h:m") , And The (value,className,placholderText) We Know All Of Them */}
            <DatePicker 
            className='form-control the-input' 
            value={this.state.date}
            selected={this.state.date}
            onChange={(date)=>this.setState({date})}
            showTimeSelect
            dateFormat="Pp"
            placeholderText='Enter Date'
            />

            <div className='parent'>
                {this.showData()}
            </div>

            <button 
            className='btn btn-primary d-block form-control' 
            onClick={()=>{this.handleClick()}} >
            Add 
            </button>

            <button
            className='btn btn-danger form-control' 
            onClick={()=> this.props.clear()} >
            Clear All Reminders
            </button>
        
            </>
        )
    }

}




// function mapDispatchToProps(dipatch){
//     return{
//         add : ()=> dipatch(add()),
//         remove : ()=> dispatch(remove()),
//         clear : ()=> dispatch(clear()),
//     }
// }

// function mapStateToProps(state){
//     return{
//         show : state,
//     }
// }


export default connect(state =>{
    return {
        // state === [] --> Comming From The Initial State In The Reducer Function
        show : state
    }
} ,{add,remove,clear})(Input);