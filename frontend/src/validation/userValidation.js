import {z} from 'zod'

 export const user=z.object({
    fullname:z.string({
        required_error:"Fullname is required"
    }).min(1).optional(),
    email:z.string({
        required_error:"Email is required"
    }).min(1).email(),
    password:z.string({
        required_error:"Password is required"
    }).min(1).min(4,{message:"Password must be min 4 character"})
})


export const dateValidate = z.tuple([z.date(), z.date()]);