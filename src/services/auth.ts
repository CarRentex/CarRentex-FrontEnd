import {axios} from "../lib/axios"

 export const login = async (email: string, password: string) => {
    const response = await axios.post("auths/signIn", {
      email,
      password,
    });
    await response.data
    //console.log(response.data)
  };


  export const brandGetAll = async () => {

    const response = await axios.get("brands/getAll");
    console.log(response.data);
    return response.data;
  }