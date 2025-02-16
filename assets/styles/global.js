import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', sans-serif;
  }

  :root {
    --bg-dark: #0F172A;
    --bg-secondary: #1E293B;
    --accent-purple: #7C3AED;
    --accent-cyan: #06B6D4;
    --text-primary: #E2E8F0;
    --text-secondary: #94A3B8;
    --border-glow: rgba(124, 58, 237, 0.4);
    --accent-orange: #F59E0B;
    --accent-pink: #EC4899;
  --border-glow: rgba(124, 58, 237, 0.4);
}

// Ajuste o padding do container principal


  body {
    background: var(--bg-dark);
    color: var(--text-primary);
    min-height: 100vh;
  }

.app-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  padding-bottom: 100px; // Ajuste conforme necessário
}

// Estilo para foco nos links
a:focus-visible {
  outline: 2px solid var(--accent-cyan);
  outline-offset: 2px;
  border-radius: 4px;
}

  @keyframes slideIn {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  .result-card {
  background: var(--bg-secondary);
  padding: 2rem;
  border-radius: 20px;
  text-align: center;
  animation: slideIn 0.5s ease;

  h2 {
    margin-bottom: 2rem;
    color: var(--accent-cyan);
  }
}

.result-bars {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.bar {
  height: 20px;
  border-radius: 10px;
  transition: width 1s ease;
}

.frontend-bar {
  .bar {
    background: var(--accent-purple);
  }
}

.backend-bar {
  .bar {
    background: var(--accent-cyan);
  }
}

.options-grid {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    margin-top: 2rem;
    justify-content: center;
    align-items: stretch;
}

// Estilos para a tela de boas-vindas
.welcome-screen {
  text-align: center;
  padding: 2rem;
  animation: fadeIn 1s ease;

  h1 {
    color: var(--accent-cyan);
    margin-bottom: 1rem;
    font-size: 2.5rem;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    color: var(--text-secondary);
  }
}

// Estilos para o resultado
.result-container {
  text-align: center;
  
  h2 {
    color: var(--accent-cyan);
    font-size: 2rem;
    margin-bottom: 2rem;
  }
}

.result-image {
  margin: 2rem 0;
  
  .cartoon-image {
    width: 100px;
    height: 100px;
    object-fit: contain;
    filter: drop-shadow(0 0 15px var(--border-glow));
    animation: bounce 2s infinite;
  }
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

.stat-bar {
  height: 15px;
  border-radius: 8px;
  margin-top: 0.5rem;
  transition: width 1s ease;
  
  &.frontend-stat {
    background: var(--accent-purple);
  }
  
  &.backend-stat {
    background: var(--accent-cyan);
  }
}

.progress-header {
  width: 100%;
  margin-bottom: 2rem;
  
  span {
    display: block;
    text-align: center;
    margin-top: 0.5rem;
    color: var(--text-secondary);
    font-size: 0.9rem;
  }
}

.question-wrapper {
  animation: slideIn 0.5s ease;
}

@keyframes slideIn {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

.result-progress {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.progress-item {
  h3 {
    color: var(--text-primary);
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
  }

  span {
    display: block;
    text-align: right;
    margin-top: 0.5rem;
    color: var(--text-secondary);
    font-weight: bold;
  }
}

.result-grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  margin: 3rem 0;
}

.result-item {
  background: var(--bg-secondary);
  padding: 1.5rem;
  border-radius: 15px;
  border: 2px solid var(--border-glow);

  h3 {
    margin-bottom: 1rem;
    color: ${(props) => props.$color};
  }

  span {
    display: block;
    text-align: center;
    margin-top: 0.5rem;
    font-weight: bold;
  }
}

.dominant-result {
  text-align: center;
  margin: 2rem 0;
  padding: 2rem;
  background: var(--bg-secondary);
  border-radius: 20px;
  border: 2px solid var(--border-glow);

  .result-image {
    width: 200px;
    height: 200px;
    object-fit: contain;
    filter: drop-shadow(0 0 15px var(--border-glow));
    animation: bounce 2s infinite;
  }

  .result-title {
    margin-top: 1rem;
    color: var(--accent-cyan);
    font-size: 1.8rem;
  }
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}
`;
