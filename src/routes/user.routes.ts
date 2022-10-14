import {Router,Request,Response,NextFunction} from 'express';
import { StatusCodes} from 'http-status-codes'

const usersRoutes = Router();

usersRoutes.get('/users', ( req:Request, res:Response, next:NextFunction)=>{
    const users = [{ userName: 'Renan' }];
    res.status(StatusCodes.OK).send(users);
   

});

usersRoutes.get('/users/:uuid', ( req:Request<{uuid:string}>, res:Response, next:NextFunction)=>{
    const uuid = req.params.uuid;
    res.status(StatusCodes.OK).send({uuid});

});
usersRoutes.post('/users', ( req:Request, res:Response, next:NextFunction)=>{
   const newUser = req.body;
    const modfUser = req.body 
    res.status(StatusCodes.CREATED).send(newUser);

});
usersRoutes.put('/users/:uuid', ( req:Request<{uuid:string}>, res:Response, next:NextFunction)=>{
    const uuid = req.params.uuid;
    const modfUser = req.body

    modfUser.uuid = uuid

     res.status(StatusCodes.OK).send(modfUser);
 });

 usersRoutes.delete('users/:uuid',(req:Request<{uuid:string}>, res:Response, next:NextFunction)=>{
    const uuid = req.params.uuid;
    const delUser = req.body

    delUser.uuid = uuid
    res.sendStatus(StatusCodes.OK);
 })


export default usersRoutes ;