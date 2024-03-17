import { Hono } from "hono"
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { Bindings } from 'hono/types'
import { decode, sign, verify } from 'hono/jwt'
import z from 'zod'
import { createBlog, updateBlog } from "@dev60sprint69/dev100-types"

export const blogRouter = new Hono<{
    Bindings: {
      DATABASE_URL: string,
    
    },
    Variables : {
      id : string
    }
  }>()



// auth middleware 
blogRouter.use('/*' , async (c, next) => {

    const authToken = c.req.header('Authorization')
  
    // console.log(authToken)
  
    if(!authToken || !authToken.startsWith('Bearer ')){
      return c.text('no token detected , try again')
    }
  
    const token = authToken.split(' ')[1] 
  
   // console.log(token)
  
  
    try {
     const secret = "mysecretkey"
     const decoded = await verify(token, secret)
    
    // console.log(decoded)
    
     c.set('id', decoded.id)
     await next()
    
    } catch (error) {
      console.log(error)
    }
  })
  
// ------------------------ creating a blog ---------------------------------------
  
  blogRouter.post('/', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
      }).$extends(withAccelerate())
    
    const authorId = c.get('id')

    try {
      const body = await c.req.json()

      const {success} = createBlog.safeParse(body)

      if(!success){
        return c.json({
          msg : "wrong inputs"
        })
      }

      const blog = await prisma.blog.create({
          data : {
              title : body.title,
              content : body.content,
              published : true ,
              authorId : authorId
          }
      })
      
      const blogID = blog.id
      console.log(blog)
    
      return c.json({
          blogID
      })
    } catch (error) {
     return  c.json({
        error
      })
    }
  
  })

// ------------------------- updating a blog ------------------------------


  
  blogRouter.put('/', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
      }).$extends(withAccelerate())


      try {
        const body  = await c.req.json()
        const userId = c.get('id')
        
        const {success} = updateBlog.safeParse(body)
    
        if(!success){
          return c.json({
            msg : "wrong inputs"
          })
        }
    
        const update = await prisma.blog.update({
            where : {
                id : body.id,
                authorId : userId
            } , 
            data : {
                title : body.title ,
                content : body.content
            }
        })
    
        return c.json({
            msg : 'updated successfully' ,
            update
        })
      } catch (error) {
        c.json({
          error
        })
      }

  })


  // -------------------------- getting a particular blog --------------------------
  
  blogRouter.get('/unique/:id', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
      }).$extends(withAccelerate())
 
      try {
        
    const id = c.req.param('id')
    
    const getBlog = await prisma.blog.findUnique({
        where : {
            id : id
        }  
    })
    console.log(getBlog)

    


    return c.json({
      getBlog
    })
      } catch (error) {
        c.json({
          error
        })
      }

  })


  // ---------------------------getting all blogs ----------------------------
  // pagination 
  // debouncing 
  blogRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
      }).$extends(withAccelerate())
    

try {
  const blogs = await prisma.blog.findMany()

    return c.json({
     blogs
    })
} catch (error) {
  c.json({
    error
  })
}

    
  })