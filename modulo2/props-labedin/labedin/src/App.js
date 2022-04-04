import React from "react";
import "./App.css";
import CardGrande from "./components/CardGrande/CardGrande";
import CardPequeno from "./components/CardPequeno/CardPequeno";
import ImagemButton from "./components/ImagemButton/ImagemButton";

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem="https://media-exp1.licdn.com/dms/image/C4E03AQFopDrC5yq-aw/profile-displayphoto-shrink_800_800/0/1580531274294?e=1653523200&v=beta&t=QEjntyNQDCptfKFHQPL4X6zwLI1D-Kusy0Vjei04mes"
          nome="Tácio Franco"
          descricao="Oi, eu sou o Tácio. Sou estudante da Labenu do curso Web Full Stack! Ah, e aos finais de semana, sou Barman. Sinta-se à vontade para entrar em contato comigo por e-mail ou redes sociais!"
        />

        <ImagemButton
          imagem="https://d29fhpw069ctt2.cloudfront.net/icon/image/38061/preview.svg"
          texto="Ver mais"
        />
        <CardPequeno
        imagem="https://cdn-icons-png.flaticon.com/512/4781/4781517.png"
        endereco="Rua Jacarandá, 98"
        />
        <CardPequeno
        imagem="https://w7.pngwing.com/pngs/963/737/png-transparent-computer-icons-email-icon-design-email-miscellaneous-angle-rectangle.png"
        email="tacio.francosjdr@gmail.com"/>
      </div>
      
      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://uploads-ssl.webflow.com/5e790d30d198385b09366d8f/5eff3d7d4dba18a22ca203c8_Logo_Labenu_vertical.png"
          nome="Labenu"
          descricao="Estudando JavaScript e desenvolvendo projetos"
        />

        <CardGrande
          imagem="https://scontent.fiza1-1.fna.fbcdn.net/v/t1.6435-9/32913006_568020943576370_421062788220190720_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=8cheEpmhecEAX8nXRe9&_nc_ht=scontent.fiza1-1.fna&oh=00_AT-tn2FBu1yl23z4WBQJHuT9X7fEj4K_nQuajY0xa8-mbQ&oe=62611BF4"
          nome="Bistrô Du Cheff"
          descricao="Faço um pouco de tudo, atendo pessoas, gerencio pedidos, atendo aplicativos de comida"
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
