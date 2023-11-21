Instalar as dependencias: npm install

Rodar projeto: npm run start

Acessar: http://localhost:4000/graphql

query{
  findAll{
    id,
    firstName,
    lastName,
    email
  }
}

query{
  findOneById(id: 1){
    id,
    firstName,
    lastName,
    email
  }
}

mutation{
  create(newUserData: {firstName: "Teste", lastName: "testeeee", email: "teste@gmail.com"}){
    id,
    firstName,
    lastName,
    email
  }
}

mutation{
  delete(id: 10)
}
