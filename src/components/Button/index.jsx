import styled from 'styled-components'

export const CartoonButton = styled.button`
  background: ${({ $primary }) => $primary ? 'var(--accent-purple)' : 'var(--bg-secondary)'};
  padding: 12px 24px;
  border-radius: 15px;
  border: 2px solid var(--border-glow);
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  box-shadow: 
    0 4px 6px -1px rgba(0, 0, 0, 0.3),
    ${({ $primary }) => $primary ? '0 0 15px 2px rgba(124, 58, 237, 0.5)' : 'none'};
  transform: skewX(-5deg);
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: skewX(-5deg) translateY(-2px);
    box-shadow: 0 8px 15px rgba(124, 58, 237, 0.4);
  }

  &:active {
    transform: skewX(-5deg) translateY(1px);
  }

  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      45deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transform: rotate(45deg);
    transition: all 0.5s;
  }

  &:hover::after {
    animation: shine 1.5s;
  }

  @keyframes shine {
    0% { left: -50%; }
    100% { left: 150%; }
  }
`