import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
   let loggedUser = []
   const logged = localStorage.getItem('userInfo')
    if(logged !== null){
       loggedUser = JSON.parse(logged)
       console.log(loggedUser)
    }
  const cloneRequest = req.clone({
     setHeaders:{
        Authorization:`Bearer ${loggedUser.token}`
     }
  })
  return next(cloneRequest);
};
