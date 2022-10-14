import express from 'express'
import usersRoutes from './routes/user.routes';
import statusRoutes from './routes/status.routes'

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(usersRoutes);
app.use(statusRoutes);



app.listen(3000,() =>{
    console.log('aplicação subiuuuuu ')
});