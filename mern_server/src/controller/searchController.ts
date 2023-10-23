import { NextFunction, Request, Response } from 'express';
import searchService from '../service/searchService';
import { HttpCode } from '../types/httpCode';

export default {
  searchKeyword: async (req: Request, res: Response, next: NextFunction) => {
    const keyword = req.query.keyword as string;

    try {
      const data = await searchService.searchKeyword(keyword);
      res.status(HttpCode.OK).json({
        message: 'success',
        data,
      });
    } catch (error) {
      next(error);
    }
  },
};
