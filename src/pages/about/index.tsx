import { StyledSectionWrapper } from "./style";

function AboutUs() {
  return (
    <StyledSectionWrapper>
      <div className="banner"></div>

      <div className="aboutText">
        <h1>Sobre nós</h1>

        <p>
          AL Fashion é uma loja de roupas online que combina moda acessível e
          sustentável. Nossa missão é oferecer peças modernas e versáteis,
          atendendo às necessidades de um público conectado e preocupado com o
          meio ambiente. Com foco em inovação e excelência no atendimento,
          buscamos profissionais criativos e apaixonados pela área para
          fortalecer nossa equipe.
        </p>
      </div>
    </StyledSectionWrapper>
  );
}

export default AboutUs;
