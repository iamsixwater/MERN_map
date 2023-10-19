import { HttpCode } from './../types/httpCode';
import { HttpException } from './../middlewares/errorHandler';
import InfoModel from "../model/info";
import { Info } from "../types/info";


export default {
    createInfo: async (info: Info) => {
        try {
            const result = await InfoModel.create(info);
            return result;
        } catch(error) {
            throw new HttpException(HttpCode.INTERNAL_SERVER_ERROR, 'DB server error');
        }
        
    },

    getInfo: async (id: Number) => {
        try {
            const result = await InfoModel.findOne({id});
            return result;
        } catch(error) {
            throw new HttpException(HttpCode.INTERNAL_SERVER_ERROR, 'DB server error');
        }
    },

    getInfos: async () => {
        try {
            const result = await InfoModel.find({}, {_id: 0, __v: 0});
            return result;
        } catch(error) {
            throw new HttpException(HttpCode.INTERNAL_SERVER_ERROR, 'DB server error');
        }
    }
};