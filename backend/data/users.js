import bcrypt from "bcryptjs"

const users = [
  {
    name:'Admin Usesr',
    email:'admin@example.com',
    password:bcrypt.hashSync('123456',10),
    isAdmin: true
  },
  {
    name:'John Adam',
    email:'john@example.com',
    password:bcrypt.hashSync('123456',10)
    
  },
  {
    name:'Jane Adams',
    email:'jane@example.com',
    password:bcrypt.hashSync('123456',10)
   
  },
];

export default users;