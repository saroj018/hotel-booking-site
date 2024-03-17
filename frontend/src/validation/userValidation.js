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


export const verifyFormValidation=z.object({
    firstname:z.string({
        required_error:"Firstname is required"
    }).trim().min(1),
    lastname:z.string({
        required_error:'Lastname is required'
    }).trim().min(1),
    address:z.string({
        invalid_type_error:'Address is required'
    }).trim().min(1),
    email:z.string({
        required_error:'Email is required'
    }).email(),
    cemail:z.string({
        required_error:'Confirm email is required'
    }).email(),
    gender:z.string({
        required_error:'Gender is required'
    }).trim().min(1).optional(),
    dob:z.date({
        required_error:'DOB is required'
    }),
    phone:z.number({
        required_error:"Phone is required"
    }).min(10)
}).refine(data=>data.email===data.cemail,{
    message:'email and confirm email must be same',
    path:['cemail']
})