import { Hono } from 'hono'
import { userRouter } from './routes/user'
import { blogRouter } from './routes/blog'


const app = new Hono<{
  Bindings: {
    DATABASE_URL: string
  },
  Variables : {
    id : string
  }
}>()



app.route('/api/v1/user', userRouter);
app.route('/api/v1/blog', blogRouter);





export default app

