import { Hono } from "hono"
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { Bindings } from 'hono/types'
import { decode, sign, verify } from 'hono/jwt'
import z from 'zod'
import { signinInput, signupInput } from "@dev60sprint69/dev100-types"




export const userRouter = new Hono<{
    Bindings: {
      DATABASE_URL: string
    },
    Variables : {
      id : string
    }
  }>()



userRouter.post('/signup', async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())
  
    try {
      const body = await c.req.json()
      const {success} = signupInput.safeParse(body)
      
      if(!success){
        return c.json ({
          msg : "wrong input types , please check again"
        })
      }

      const user = await prisma.user.create({
        data: {
          name: body.name,
          email: body.email,
          password: body.password
        }
      })
   
      // generating jwt
      const userID = user.id
  
    
      const secret = "mysecretkey"
  
      const token = await sign({id : userID}, secret)
      // generated the jwt 
  
      console.log(token)
  
      return c.text(token)
  
    } catch (error) {
      console.log(error)
      return c.text('invalid inputs')
    }
  
  
  })
  
  userRouter.post('/signin', async (c) => {
  
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())
  
   
  
    try {
    const body = await c.req.json()
    const {success} = signinInput.safeParse(body)
    
    if(!success){
      return c.json ({
        msg : "wrong input types , please check again"
      })
    } 

    const user =   await prisma.user.findUnique({
        where : {
          email : body.email 
        }
      })
      const password = body.password
  
      if(!user){
        return c.text('user not found')
      }
       const id = user?.id
      if(user?.password == password){
        const secret = "mysecretkey"
        const token = await sign({id : id} , secret)
        console.log(token)
      } else {
        return c.text('incorrect pw')
      }
      
      return c.text('loggedin')
  
  
    } catch (error) {
      console.log (error)
    }
  
  
   
  })