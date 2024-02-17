import jwt from 'jsonwebtoken'

export const genToken=(payload)=>{
    const token= jwt.sign(payload,process.env.SECRETE_KEY)
    return token
}

export const verifyToken=(token)=>{
    const result=jwt.verify(token,process.env.SECRETE_KEY)
    return result
}