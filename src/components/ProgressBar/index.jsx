import styled from 'styled-components';
import PropTypes from 'prop-types';

const ProgressContainer = styled.div`
  width: 100%;
  height: 10px;
  background: var(--bg-secondary);
  border-radius: 5px;
  margin: 15px 0;
  position: relative;
  overflow: hidden;

  &::after {
    content: '${props => props.label}';
    position: absolute;
    right: 0;
    bottom: -20px;
    font-size: 0.8rem;
    color: var(--text-secondary);
  }
`;

const ProgressFill = styled.div`
  height: 100%;
  background: ${props => props.$color || 'var(--accent-cyan)'};
  border-radius: 5px;
  transition: width 0.5s ease-in-out;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    animation: progress-glow 2s infinite;
  }

  @keyframes progress-glow {
    0% { opacity: 0; left: -100%; }
    50% { opacity: 1; }
    100% { opacity: 0; left: 100%; }
  }
`;

const ProgressBar = ({ progress, $color, label }) => (
  <ProgressContainer label={label}>
    <ProgressFill 
      style={{ width: `${progress}%` }} 
      $color={$color}
    />
  </ProgressContainer>
);

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
  $color: PropTypes.string,
  label: PropTypes.string
};

export default ProgressBar;