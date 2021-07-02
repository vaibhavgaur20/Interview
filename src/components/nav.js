import React,{Component,useState} from 'react';
import './nav.css'

import img1 from '../Assets/logo.png'
import img2 from '../Assets/banner.png'



class nav extends Component{
    render(){

        return(
           <div className='div_nav'>
               <div className='nav'>
       
        <table className='table_nav'>
            <tr>
                <td>
                <button type='button' className='button'>
          Apply for IDO
        </button>

                </td>
                <td>
                <button type='button' className='button'>
          Launch App
        </button>
                </td>
                <td className='td_table_nav'>
                <img className='img_nav' src={img1}/>
                </td>

                <td className='td_table_nav_menu'>
                <div className='menu_nav'/>
                <div className='menu_nav'/>
                <div className='menu_nav'/>
                </td>

                

            </tr>

        </table>
       

      </div>
      <img className='banner' src={img2}/>
               
           </div>
          
        );
    }
}

export default  nav 