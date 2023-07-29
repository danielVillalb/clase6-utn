const express=require('express');
const app=express();
app.use(express.json());
const port=3004;
const {auth}=require('express-oauth2-jwt-bearer')
// Configuracion Middleware con el Servidor de Autorización
const autenticacion = auth({
audience: 'http://localhost:3004/libros',
issuerBaseURL: 'https://dev-q8qjb7oy53nilmb32.us.auth0.com/',
tokenSigningAlg: 'RS256'
});



const errorHandler=require('./middlewares/errorHandler');//llamamos al middleware

const routesLibros=require('./routes/libros');
app.use('/libros',autenticacion,routesLibros);
app.use(errorHandler)
app.listen(port,()=>{
    console.log('server andando')

})
app.get('/hola',(req,res)=>{
    res.send('hola mundo cruel')
})





/*
"access_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InBNSWhvbzg5VUxkeUlPRmFfNFBtXyJ9.eyJodHRwczovL2V4YW1wbGUuY29tL2NsaWVudF9uYW1lIjoiQ2xpZW50ZSBBUEkgUHJvZHVjdG8iLCJpc3MiOiJodHRwczovL2Rldi11dG4tZnJjLWlhZXcuYXV0aDAuY29tLyIsInN1YiI6IlFpVzhBbEg5b3lrQmc3b2ZCckhzNlRvWXZyZG1oT2VFQGNsaWVudHMiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3Byb2R1Y3RvcyIsImlhdCI6MTY5MDY2MzAyNSwiZXhwIjoxNjkwNzQ5NDI1LCJhenAiOiJRaVc4QWxIOW95a0JnN29mQnJIczZUb1l2cmRtaE9lRSIsInNjb3BlIjoicmVhZDpwcm9kdWN0b3Mgd3JpdGU6cHJvZHVjdG9zIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.QCUJqubC-R1_v3ltjTrgoNUwf-JqMVZ-VJQ2zeW-8dmucszyKB379I9ie8dKsn8Zj0ghIg6msv5Rksi19qg735uH7b79EcVId7522Zp07rHkJWBBZhKtEVypbm1ekbaEjjIn1NqLQlCYHFVtvPRhktwf_d7mN2ZohCnB5RMol65NyuTUpTv7BapX1eATYb5jn7f3YEET3NtcDMmaQ4xDsskxkxbmXIyBBjKT28z9SUt8D3ukMT65jAIeW6Uu42siTQLjURDTIuPj8u8pejld-dTjoO5fstgcd41z1ed9NexTvgaUbWnqEokU_vtOWg0-KSf8euvS8sLUWAtQYUPWcg",
    "scope": "read:productos write:productos",
    "expires_in": 86400,
    "token_type": "Bearer"
}*/















