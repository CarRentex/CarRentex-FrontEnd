import { axiosInstance } from './../lib/axios';
import { BaseService } from "./BaseService/BaseService";

class ImageDataService extends BaseService<

   any,
   any,
   any,
   any,
   any,
   any
>{
    constructor() {
        super();
        this.apiUrl = "imagedata";
    }

    image(request: any): Promise<any> {
        return  axiosInstance.post(this.apiUrl , request);
    }
}

export default new ImageDataService();