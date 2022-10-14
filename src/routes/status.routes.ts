import {Router,Request,Response,NextFunction} from 'express';
import { StatusCodes} from 'http-status-codes'

const usersRoutes = Router();
usersRoutes.get('/status', (req:Request, res:Response , next:NextFunction)=>{
    const uuid = req.params.uuid;
    res.status(StatusCodes.OK).send({uuid});
   
});
export default usersRoutes ;