import { useState, useEffect } from "react";

const QuizPage = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null); // 正誤判定

  useEffect(() => {
    fetch("/quiz_data.json")
      .then((res) => res.json())
      .then((data) => setQuestions(data));
  }, []);

  const handleAnswerClick = (choice) => {
    setSelectedAnswer(choice);
    setIsCorrect(choice === questions[currentQuestion].answer); // 正誤判定
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setIsCorrect(null);
    setCurrentQuestion((prev) => (prev + 1) % questions.length);
  };

  if (questions.length === 0) return <p>Loading...</p>;

  return (
    <div>
      <h2>{questions[currentQuestion].question}</h2>
      <ul>
        {questions[currentQuestion].choices.map((choice, index) => (
          <li key={index}>
            <button onClick={() => handleAnswerClick(choice)}>{choice}</button>
          </li>
        ))}
      </ul>
      {selectedAnswer !== null && (
        <p>{isCorrect ? "✅ 正解！" : "❌ 不正解！"}</p>
      )}
      <button onClick={handleNextQuestion}>次の問題へ</button>
    </div>
  );
};

export default QuizPage;
