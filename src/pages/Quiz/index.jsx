import { useState } from 'react';
import { CartoonButton } from '../../components/Button';
import ProgressBar from '../../components/ProgressBar';
import Result from './Result';
import { quizData, maxScores } from './data';

const initialScores = {
  front: 0,
  back: 0,
  devops: 0,
  ux: 0
};

const QuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(-1);
  const [scores, setScores] = useState(initialScores);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (answer) => {
    const question = quizData[currentQuestion];
    const newScores = { ...scores };

    Object.entries(question.options[answer].weights).forEach(([area, value]) => {
      newScores[area] += value;
    });

    setScores(newScores);

    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="quiz-container">
      {currentQuestion === -1 ? (
        <div className="welcome-screen">
          <h1>Tech Profile Quiz</h1>
          <p>Descubra seu perfil em TI com {quizData.length} perguntas</p>
          <CartoonButton $primary onClick={() => setCurrentQuestion(0)}>
            Começar
          </CartoonButton>
        </div>
      ) : !showResult ? (
        <div className="question-wrapper">
          <ProgressBar 
            progress={(currentQuestion / quizData.length) * 100}
            label={`${currentQuestion + 1}/${quizData.length}`}
          />

          <div className="question-card">
            <h2>{quizData[currentQuestion].question}</h2>
            
            <div className="options-grid">
              {Object.entries(quizData[currentQuestion].options).map(([key, option]) => (
                <CartoonButton
                  key={key}
                  onClick={() => handleAnswer(key)}
                  $primary
                  $color={key === 'a' ? 'purple' : key === 'b' ? 'cyan' : 'orange'}
                >
                  {option.text}
                </CartoonButton>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <Result scores={scores} maxScores={maxScores} />
      )}
    </div>
  );
};

export default QuizPage;