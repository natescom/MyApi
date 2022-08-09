function tempo(request, response){
  
  const { method } = request;
  // This will allow OPTIONS request
  if (method === "OPTIONS") {
    return res.status(200).send("ok");
  }

  const dynamicDate = new Date();

  
  console.log("body", request.body)

  
  response.json({
    date: dynamicDate.toTimeString(),
    nome: request.body.first,
    sobrenome: request.body.last
  })
  

  //response.json(JSON.parse(request.body))

}

export default tempo;