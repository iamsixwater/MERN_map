import { HttpCode } from './../types/httpCode';
import { Request, Response, NextFunction } from 'express';
import infosService from '../service/infosService';
import { Info } from '../types/info';
import { HttpException } from '../middlewares/errorHandler';
export default {
    createInfo: async(req: Request, res: Response, next: NextFunction) => {
        const info = req.body as Info;

        try {
            const target = await infosService.getInfo(info.id);
            if(target) throw new HttpException(HttpCode.CONFLICT, 'Duplicated data');

            const returned = await infosService.createInfo(info);
            if(returned) res.status(HttpCode.OK).json({
                message: 'success'
            });
        } catch(error) {
            next(error);
        }
    },

    getInfos: async(req: Request, res: Response, next: NextFunction) => {
        try {
            const returned = await infosService.getInfos();
            if(returned) res.status(HttpCode.OK).json({
                message: 'success',
                data: returned
            });

        } catch(error) {
            next(error);
        }
    },
};