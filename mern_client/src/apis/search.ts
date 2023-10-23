import axios from 'axios';
import { Info } from '../types/info';

export const searchKeyword = (keyword: string) =>
  axios.get<{ message: 'string'; data: Info[] }>(
    `/api/search?keyword=${keyword}`
  );
