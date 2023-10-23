import axios from 'axios';
import { HttpException } from '../middlewares/errorHandler';
import { HttpCode } from '../types/httpCode';
import { SearchResponse } from '../types/search';
import { Info } from '../types/info';

export default {
  searchKeyword: async (keyword: string) => {
    try {
      const result = await axios.get<SearchResponse>(
        //
        encodeURI(`${process.env.KAKAO_API_HOST}?query=${keyword}`),
        {
          headers: {
            Authorization: process.env.KAKAO_API_KEY,
          },
        }
      );

      const infos: Info[] = result.data.documents.map((item) => {
        const { id, place_name, address_name, x, y } = item;
        return {
          id: Number(id),
          placeName: place_name,
          addressName: address_name,
          position: {
            lat: Number(y),
            lng: Number(x),
          },
        };
      });

      return infos;
    } catch (error) {
      throw new HttpException(HttpCode.INTERNAL_SERVER_ERROR, 'Internal server error.');
    }
  },
};
