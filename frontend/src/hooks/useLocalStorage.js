export const useLocalStorage=(payload,type,name)=>{
    if(type==='set'){
       return localStorage.setItem(name,payload)
    }
     if(type==='get'){
       return localStorage.getItem(name)
    }
    if(type==='remove'){
       return localStorage.removeItem(name)
    }
}