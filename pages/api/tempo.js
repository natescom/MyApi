function tempo(request, response){
  const dynamicDate = new Date();

  response.json({
    date: dynamicDate.toTimeString(),
    req: request
  })
}

export default tempo;