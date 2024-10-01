import React, { Component } from 'react'
import Bick from '../sx/bick-img.png'
import Undo from '../sx/unda img.png'

export class heroSection extends Component {
  render() {
    return (
      <div>
        
        <div className='container'>
            <div className='row'>
           
                <div className='col-md-6 mt-5 pt-5'>
                    <div className='fire-price mt-5 pt-5'>
                    <p className='fs-1'>Fair price ride</p>
                    <h1>Rent our <span className='scooter'>Scooter</span> </h1>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the <br/> 1500s, when an unknown printer took a galley of type and scrambled it to <br/>  make a type specimen book. </p>
                    </div>
                    </div>
                    
                    <div className='col-md-6'>
                        <div className='d-flex position-relative justify-content-center mt-3'>
                            <div className='bick-img position-absolute'>
                           <img src={Bick}/>
                           </div>
                           <div className='img-undo1'>
                           <img src={Undo}/>
                           </div>
                        </div>

                    </div>

                  
            </div>
        </div>

      </div>
    )
  }
}

export default heroSection
