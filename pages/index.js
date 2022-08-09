function Home(){
  // Handles the submit event on form submit.
  const handleSubmit = async (event) => {
    event.preventDefault()
    const data = {
      first: event.target.first.value,
      last: event.target.last.value,
    }
    const JSONdata = JSON.stringify(data)
    const endpoint = 'https://my-api-eight.vercel.app/api/tempo'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
      },
      body: JSONdata,
    }

    const response = await fetch(endpoint, options)

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json()
    console.log(result)
    alert(`Abra o console e veja o resultado`)

  }

  return <div>
    <h1>Home</h1>
    <form onSubmit={handleSubmit}>
    <label htmlFor="first">Nome:</label>
    <input type="text" id="first" name="first" /><br></br>
    <label htmlFor="last">Sobrenome: </label>
    <input type="text" id="last" name="last" /><br></br>
    <button type="submit">Enviar</button>
    </form>
    </div>
}


export default Home;