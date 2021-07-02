import React,{Component,useState} from 'react';
import './container.css'
import img1 from '../Assets/logo.png'



class container extends Component{
    render(){

        return(
           <div className='container' >
              



               <table className='table'>
            <tr>
                <td>
                <img className='img_size' src={img1} />
                </td>
                <td>
                    Naut
                    Pool
                </td>
                <td>
                    0.000
                </td>
                <td>
                    126.51%
                </td>
                <td>
                    0.00000
                </td>
                <td>
                    Core
                </td>
                <td>
                    Details
                </td>
                <td>
                <button type='button' className='button'>
                    Umlock Wallet
                  </button>
                </td>
                

                

            </tr>

        </table>
             
           </div>
          
        );
    }
}

export default  container