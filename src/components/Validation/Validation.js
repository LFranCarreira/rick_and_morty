// export default function Validation(input){
//     const errors={}
//     const regexPass=new RegExp ("[0-9]")
//     const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
//     if(!regexEmail.test(input.email)){
//         errors.email="Debe ser un correo electrónico"
//     }
//     else if(input.email.length>35){
//         errors.email="Debe tener menos de 35 caracteres"
//     }
//     else if(!regexPass.test(input.password)){
//         errors.password="Debe tener uno o mas numeros"
//     }
//     else if(input.password.length<6 || input.password.length>10){
//         errors.password="Debe tener entre 6 y 10 caracteres"
//     }
//     return errors
// }