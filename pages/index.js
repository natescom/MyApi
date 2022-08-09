function Home(){

  return <div>
    <h1>Home</h1>
    <form action="/api/tempo" method="post">
    <label for="first">Nome:</label>
    <input type="text" id="first" name="first" /><br></br>
    <label for="last">Sobrenome: </label>
    <input type="text" id="last" name="last" /><br></br>
    <button type="submit">Enviar</button>
    </form>
    </div>
}


export default Home;