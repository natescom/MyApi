function tempo(request, response){

  const dynamicDate = new Date();
  console.log("body", request.body)
  
  response.json({
    date: dynamicDate.toTimeString(),
    nome: request.body.first,
    sobrenome: request.body.last
  })
  

}

export default tempo;