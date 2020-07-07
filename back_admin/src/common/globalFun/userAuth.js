
import { getUserAuth } from "@/api/api_group.js";
var userAuth = {}
userAuth.getAuth = function(callback){
    callback("1010,1011,1012,102,200,600,800");
    // getUserAuth().then(res=>{
    //     if(res.code == 200){
    //         if(callback){
    //             callback(res.data.permission);
    //         }
    //     }
    // })
}
userAuth.checkAuth = function(auth,val){
    return auth.search(val)>=0;
}

export default  userAuth;