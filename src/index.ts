import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign,decode,verify } from 'hono/jwt';
import { userRouter } from './route/user';
import { blogRouter } from './route/blog';
import { cors } from 'hono/cors';



const app = new Hono<{
  Bindings: {
  DATABASE_URL: string,
  JWT_SECRET: string,
}
  Variables:{
      userId:string;
  }

  
}>();
app.use( '/*',cors());
app.route("api/v1/user",userRouter);
app.route("api/v1/blog",blogRouter);


// app.post('api/v1/user/signup', async(c) => {
//   const body =await c.req.json();
//   const prisma = new PrismaClient({
//     datasourceUrl: c.env.DATABASE_URL,
// }).$extends(withAccelerate())
// try{
// const user=await prisma.user.create({
//     data:{
//     username:body.username,
//     password:body.password,
//     name:body.name
//     }
// })
// const jwt=await sign({
//   id:user.id
// },c.env.JWT_SECRET); 

//   return c.text(jwt)
// }
// catch(e){
//     c.status(411);
//     return c.text('User already exit ');
// }
// })




// app.post('api/v1/user/signin', async(c) => {
//   const body =await c.req.json();
//   const prisma = new PrismaClient({
//     datasourceUrl: c.env.DATABASE_URL,
// }).$extends(withAccelerate())
// try{
// const user=await prisma.user.findFirst({
//     where:{
//     username:body.username,
//     password:body.password,
   
//     }
// })
// if(!user){
//   c.status(403);
//     return c.json({
//       message:"Invalid creds"
//     })
// }

// const jwt=await sign({
//   id:user.id
// },c.env.JWT_SECRET); 

//   return c.text(jwt)
// }
// catch(e){
//     c.status(411);
//     return c.text('User already exit ');
// }
// })








// app.post('api/v1/blog', (c) => {
//   return c.text('Hello Hono!')
// })







// app.get('api/v1/blog', (c) => {
//   return c.text('Hello Hono!')
// })




// app.get('api/v1/blog/blog', (c) => {
//   return c.text('Hello Hono!')
// })





// app.put('api/v1/blog', (c) => {
//   return c.text('Hello Hono!')
// })







export default app
