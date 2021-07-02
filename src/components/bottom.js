import React,{Component,useState} from 'react';
import './bottom.css'
import bottom_logo from '../Assets/bottom_logo.png'



class bottom extends Component{
    render(){

        return(
           <div >
                <div className='bottom'>
               <ul className='bottom_ul'>
                   <li>
                   <img className='bottom_img' src={bottom_logo} />

                   </li>
                   <li className='bottom_li'>
                   <ul className='ul'>
        <p><b>Support</b></p>
        <li>
          Whitepaper
        </li>
        <li>
          Team
        </li>
        <li>
          News
        </li>
      </ul>

      <ul className='ul'>
        <p><b>About</b></p>
        <li>
          Docs
        </li>
        <li>
          FAQ
        </li>
        <li>
          Privacy
        </li>
      </ul>


      <ul className='ul2'>
        <p><b>Stay Updated</b></p>
        <li className="li">
          <div className='circle'>
            <img alt='Logo'/>
        
          </div>

        </li>
        <li className="li">
          <div className='circle'>
            <img alt='Logo'/>
            
          </div>

        </li>
        <li className="li">
          <div className='circle'>
            <img alt='Logo'/>
            
          </div>

        </li>
        <li className="li">
          <div className='circle'>
            <img alt='Logo'/>
        
          </div>

        </li>
        <li className="li">
          <div className='circle'>
            <img alt='Logo'/>
          
          </div>

        </li>
        <li>
          <p>
            Powered by the Binance Smart Chain
          </p>
        </li>
       
      </ul>

                   </li>
               </ul>
               
               
                
      
    </div>

           
               
           </div>
          
        );
    }
}

export default  bottom