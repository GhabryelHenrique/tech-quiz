import styled from "styled-components";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";

const FooterContainer = styled.footer`
  background: var(--bg-dark);
  padding: 1.5rem;
  text-align: center;
  border-top: 2px solid var(--border-glow);
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  backdrop-filter: blur(5px);
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const Links = styled.div`
  display: flex;
  gap: 1.5rem;

  a {
    color: var(--text-primary);
    text-decoration: none;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:hover {
      color: var(--accent-cyan);
      transform: translateY(-2px);
    }

    svg {
      transition: transform 0.3s ease;
    }

    &:hover svg {
      transform: scale(1.1);
    }
  }
`;

const Copyright = styled.span`
  color: var(--text-secondary);
  font-size: 0.9rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Copyright>
          © 2025 Ghabryel Henrique. Todos os direitos reservados.
        </Copyright>

        <Links>
          <a
            href="https://github.com/GhabryelHenrique"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FiGithub size={20} />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/ghabryelhenrique/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={20} />
            LinkedIn
          </a>
          <a href="https://www.instagram.com/ghabryel.dev/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FiInstagram size={20} />
            Instagram
          </a>

          {/* <a
            href="https://ghabryelhenrique.com.br/home"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Website"
          >
            <FiGlobe size={20} />
            Website
          </a> */}
        </Links>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
