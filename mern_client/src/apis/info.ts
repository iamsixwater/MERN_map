import axios from 'axios';
import { Info } from '../types/info';

export const getInfos = () =>
  axios.get<{ message: 'string'; data: Info[] }>('/api/infos');
