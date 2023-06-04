const sendToken = (res,user,message,statusCode=200)=>{

  const token =  user.getJwtToken();

  // HttpOnly is an additional flag included in a Set-Cookie HTTP response header. Using the HttpOnly flag when generating a cookie helps mitigate the risk of client side script accessing the protected cookie

   const options = {
    expires:new Date(Date.now() + 60*60*1000),
    httpOnly:true,
    sameSite:"none",
   }

   res.status(statusCode).cookie('token',token,options).json({
    success:true,
    message,
    user,
   })
  
}

module.exports = sendToken;

// The introduction of the SameSite attribute (defined in RFC6265bis) allows you to declare if your cookie should be restricted to a first-party or same-site context. It's helpful to understand exactly what 'site' means here. The site is the combination of the domain suffix and the part of the domain just before it. For example, the www.web.dev domain is part of the web.dev site.

// Key Term

// If the user is on www.web.dev and requests an image from static.web.dev then that is a same-site request.