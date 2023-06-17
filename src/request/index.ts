import { axiosGet } from './index';
import $http from './axios';

const axiosGet = (url: string, data: any) => {
    return $http({ method: 'get', url, data })
}

export default axiosGet
