export const signupUser=(req,resp)=>{
    console.log(req.body);
    resp.json({"message":"success","saroj":req.body})
}
export const loginUser=(req,resp)=>{
    console.log(req.body);
    resp.json({"message":"success","saroj":req.body})
}