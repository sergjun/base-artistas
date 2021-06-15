const cardArtista = document.querySelector(".card-artistas")

async function escreveNome() {
    
    try {
      const responseAsync = await fetch("https://reqres.in/api/users?page=2");
      const apiTransformada = await responseAsync.json();
      const arrayArtista = apiTransformada.data
      
      arrayArtista.forEach((element, index) => {

        
        const nomeArtista = `${element.first_name} ${element.last_name}`
        const emailArtista = element.email
        const fotoArray = element.avatar
        const fotoArtista = document.createElement('img') 
        const artistaNome = document.createElement('p')
        const artistaEmail = document.createElement('p')
        const containerArtistas = document.createElement('div')


        containerArtistas.setAttribute("class", "artista")
        fotoArtista.setAttribute("class", "foto-artista")
        fotoArtista.setAttribute("src", fotoArray)
        artistaNome.setAttribute("class", "nome-artista");
        artistaEmail.setAttribute("class", "email-artista")


        console.log(nomeArtista)
        console.log(index)
        console.log(cardArtista)
        console.log(artistaNome)
        console.log(emailArtista)
        artistaNome.textContent = nomeArtista 
        artistaEmail.textContent = emailArtista
        cardArtista.appendChild(containerArtistas)
        containerArtistas.appendChild(fotoArtista)
        containerArtistas.appendChild(artistaNome)
        containerArtistas.appendChild(artistaEmail)



        

      });
      
    } catch (error) {
      console.log(error);
    }
  }

  escreveNome()