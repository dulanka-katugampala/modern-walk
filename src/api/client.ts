import axios from 'axios';
import envs from '../Envs';

const options = {
  timeout: envs.API_DEFAULT_TIME_OUT,
};

export const axiosClient = axios.create(options);
