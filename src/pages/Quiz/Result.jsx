import PropTypes from 'prop-types';
import { CartoonButton } from '../../components/Button';
import ProgressBar from '../../components/ProgressBar';

const Result = ({ scores, maxScores }) => {
  const calculatePercentage = (area) => {
    return Number(((scores[area] / maxScores[area]) * 100).toFixed(0)); // Convertendo para número
  };

  const getDominantArea = () => {
    const percentages = {
      front: calculatePercentage('front'),
      back: calculatePercentage('back'),
      devops: calculatePercentage('devops'),
      ux: calculatePercentage('ux')
    };

    const maxValue = Math.max(...Object.values(percentages));
    const dominantAreas = Object.entries(percentages)
      .filter(([, value]) => value === maxValue);

    // Caso padrão para múltiplas áreas dominantes
    if (dominantAreas.length > 1) {
      return {
        area: 'fullstack',
        percentage: maxValue,
        image: 'fullstack.png',
        title: 'Desenvolvedor FullStack'
      };
    }

    // Garantindo que sempre retorne pelo menos um valor
    const [dominant] = dominantAreas.length > 0 ? dominantAreas : [['front', 0]];
    
    return {
      area: dominant[0],
      percentage: dominant[1],
      image: `${dominant[0]}.png`,
      title: getAreaTitle(dominant[0])
    };
  };

  const getAreaTitle = (area) => {
    const titles = {
      front: 'Desenvolvedor Front-end',
      back: 'Desenvolvedor Back-end',
      devops: 'Engenheiro DevOps',
      ux: 'Designer UX/UI',
      fullstack: 'Desenvolvedor FullStack'
    };

    return titles[area] || 'Perfil Técnico';
  };

  const { area, percentage, image, title } = getDominantArea();

  return (
    <div className="result-container">
      <h2>Seu perfil predominante é:</h2>
      
      <div className="dominant-result">
        <img 
          src={`/tech-quiz/images/${image}`} 
          alt={area}
          className="result-image"
        />
        <h3 className="result-title">
          {title} ({percentage}%)
        </h3>
      </div>

      
      <div className="result-grid">
        <div className="result-item">
          <h3>Front-end</h3>
          <ProgressBar 
            progress={calculatePercentage('front')} 
            $color="var(--accent-purple)"
          />
          <span>{calculatePercentage('front')}%</span>
        </div>

        <div className="result-item">
          <h3>Back-end</h3>
          <ProgressBar 
            progress={calculatePercentage('back')} 
            $color="var(--accent-cyan)"
          />
          <span>{calculatePercentage('back')}%</span>
        </div>

        <div className="result-item">
          <h3>DevOps</h3>
          <ProgressBar 
            progress={calculatePercentage('devops')} 
            $color="var(--accent-orange)"
          />
          <span>{calculatePercentage('devops')}%</span>
        </div>

        <div className="result-item">
          <h3>UX/UI</h3>
          <ProgressBar 
            progress={calculatePercentage('ux')} 
            $color="var(--accent-pink)"
          />
          <span>{calculatePercentage('ux')}%</span>
        </div>
      </div>

      <CartoonButton $primary onClick={() => window.location.reload()}>
        Refazer Teste
      </CartoonButton>
    </div>
  );
};

Result.propTypes = {
  scores: PropTypes.shape({
    front: PropTypes.number.isRequired,
    back: PropTypes.number.isRequired,
    devops: PropTypes.number.isRequired,
    ux: PropTypes.number.isRequired
  }).isRequired,
  maxScores: PropTypes.shape({
    front: PropTypes.number.isRequired,
    back: PropTypes.number.isRequired,
    devops: PropTypes.number.isRequired,
    ux: PropTypes.number.isRequired
  }).isRequired
};

export default Result;