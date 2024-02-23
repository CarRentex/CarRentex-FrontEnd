import { brandGetAll } from '../services/AuthService/auth';
import useToken from '../lib/useToken';

type Props = {}

const TestBrand = (props: Props) => {

  const { token, decodedToken, clearToken } = useToken();
  console.log(decodedToken);


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

export default TestBrand;