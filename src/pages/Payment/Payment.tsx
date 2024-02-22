import React from 'react'
import BrandService from '../../services/BrandService'

type Props = {}

const Payment = (props: Props) => {

  return (
    <div
    className='mt-40'
    onClick={() => {
      BrandService.add({name:"burak"}).then((response) => {
        console.log(response)
      }
      )  
    }
    }
    >Payment</div>
  )
}

export default Payment