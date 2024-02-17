import React from 'react'
import { brandGetAll } from '../../services/auth'
import { Button } from 'reactstrap'

type Props = {}

const About = (props: Props) => {

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
<button type='submit' className='btn btn-success mt-5 pt-5' onClick={handleSubmit}>Kirala</button>
    </div>
  )
}

export default About