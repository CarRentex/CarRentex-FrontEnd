import React from 'react'
import { Button } from 'reactstrap'
import { brandGetAll } from '../services/AuthService/auth';

type Props = {}

const testbrand = (props: Props) => {

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    try {
      const response = await brandGetAll();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
<button type='submit' className=' mt-40 ml-[50px] pt-5' onClick={handleSubmit}>Kirala</button>
    </div>
  )
}

export default testbrand;