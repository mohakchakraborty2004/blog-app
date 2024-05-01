import z, { TypeOf } from "zod";

// ===================== signup type inference =======================


export const signupInput = z.object({
    name : z.string(),
    email : z.string().email(), 
    password : z.number().min(6)
})

export type SignupInput = z.infer<typeof signupInput>






// ======================= signin type inference ============================


export const signinInput = z.object({
  
    email : z.string().email(), 
    password : z.string().min(6)
})

export type SigninInput = z.infer<typeof signinInput>

// ===================== signup type inference =======================


export const createBlog = z.object({
    title : z.string(),
    content : z.string()
 })
 
 export type CreateBlog = z.infer<typeof createBlog>
 
 
 
 
 
 
 // ======================= signin type inference ============================
 
 
 export const updateBlog = z.object({
     title: z.string().optional(),
     content: z.string().optional(),
 });
 
 export type UpdateBlog = z.infer<typeof updateBlog>;