import { Quiz } from "./components/Quiz";
import TodoApp from "./components/TodoApp";
export default function page() {
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      correctAnswer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      correctAnswer: "Mars",
    },
    {
      question: "What is the largest ocean on Earth?",
      options: [
        "Atlantic Ocean",
        "Indian Ocean",
        "Arctic Ocean",
        "Pacific Ocean",
      ],
      correctAnswer: "Pacific Ocean",
    },
    {
      question: "What is the boiling point of water?",
      options: ["90°C", "100°C", "120°C", "150°C"],
      correctAnswer: "100°C",
    },
    {
      question: "What is the square root of 64?",
      options: ["6", "7", "8", "9"],
      correctAnswer: "8",
    },
    {
      question: 'Who wrote "Romeo and Juliet"?',
      options: [
        "Charles Dickens",
        "Mark Twain",
        "William Shakespeare",
        "Jane Austen",
      ],
      correctAnswer: "William Shakespeare",
    },
    {
      question: "What is the chemical symbol for gold?",
      options: ["Au", "Ag", "Pb", "Fe"],
      correctAnswer: "Au",
    },
    {
      question: "What is the largest mammal in the world?",
      options: ["Elephant", "Blue Whale", "Giraffe", "Great White Shark"],
      correctAnswer: "Blue Whale",
    },
    {
      question: 'Which continent is known as the "Dark Continent"?',
      options: ["Asia", "Africa", "South America", "Australia"],
      correctAnswer: "Africa",
    },
    {
      question: "What is the capital of Japan?",
      options: ["Seoul", "Tokyo", "Beijing", "Bangkok"],
      correctAnswer: "Tokyo",
    },
    {
      question: "What is the fastest land animal?",
      options: ["Cheetah", "Lion", "Tiger", "Horse"],
      correctAnswer: "Cheetah",
    },
    {
      question: "Who painted the Mona Lisa?",
      options: [
        "Vincent Van Gogh",
        "Pablo Picasso",
        "Leonardo da Vinci",
        "Claude Monet",
      ],
      correctAnswer: "Leonardo da Vinci",
    },
    {
      question: "What is the primary language spoken in Brazil?",
      options: ["Spanish", "Portuguese", "English", "French"],
      correctAnswer: "Portuguese",
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      correctAnswer: "Jupiter",
    },
    {
      question: "What gas do plants absorb from the atmosphere?",
      options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
      correctAnswer: "Carbon Dioxide",
    },
    {
      question: "Which element has the chemical symbol O?",
      options: ["Osmium", "Oxygen", "Gold", "Silver"],
      correctAnswer: "Oxygen",
    },
    {
      question: "What is the main ingredient in guacamole?",
      options: ["Tomato", "Avocado", "Onion", "Pepper"],
      correctAnswer: "Avocado",
    },
    {
      question: "Who discovered penicillin?",
      options: [
        "Marie Curie",
        "Alexander Fleming",
        "Isaac Newton",
        "Albert Einstein",
      ],
      correctAnswer: "Alexander Fleming",
    },
    {
      question: "Which planet is known for its rings?",
      options: ["Earth", "Mars", "Saturn", "Neptune"],
      correctAnswer: "Saturn",
    },
    {
      question: "What is the hardest natural substance on Earth?",
      options: ["Gold", "Iron", "Diamond", "Ruby"],
      correctAnswer: "Diamond",
    },
    {
      question: "Who was the first President of the United States?",
      options: [
        "Abraham Lincoln",
        "George Washington",
        "Thomas Jefferson",
        "John Adams",
      ],
      correctAnswer: "George Washington",
    },
    {
      question: "What is the currency of Japan?",
      options: ["Dollar", "Yen", "Euro", "Pound"],
      correctAnswer: "Yen",
    },
    {
      question: "What is the longest river in the world?",
      options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
      correctAnswer: "Nile",
    },
    {
      question: "Which planet is closest to the sun?",
      options: ["Venus", "Earth", "Mars", "Mercury"],
      correctAnswer: "Mercury",
    },
    {
      question: "What is the primary ingredient in bread?",
      options: ["Flour", "Sugar", "Salt", "Yeast"],
      correctAnswer: "Flour",
    },
    {
      question: "What is the tallest mountain in the world?",
      options: ["K2", "Kilimanjaro", "Mount Everest", "Mont Blanc"],
      correctAnswer: "Mount Everest",
    },
    {
      question: "Which animal is known as the King of the Jungle?",
      options: ["Elephant", "Tiger", "Lion", "Giraffe"],
      correctAnswer: "Lion",
    },
    {
      question: "What is the capital of Italy?",
      options: ["Rome", "Florence", "Milan", "Venice"],
      correctAnswer: "Rome",
    },
    {
      question:
        "Which organ is responsible for pumping blood in the human body?",
      options: ["Liver", "Brain", "Heart", "Lungs"],
      correctAnswer: "Heart",
    },
    {
      question: "What is the most spoken language in the world?",
      options: ["English", "Mandarin", "Spanish", "Hindi"],
      correctAnswer: "Mandarin",
    },
    {
      question: "Which country is known as the Land of the Rising Sun?",
      options: ["Japan", "China", "South Korea", "Thailand"],
      correctAnswer: "Japan",
    },
    {
      question: "What is the main gas found in the air we breathe?",
      options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"],
      correctAnswer: "Nitrogen",
    },
    {
      question: 'Who wrote the play "Hamlet"?',
      options: [
        "William Shakespeare",
        "George Bernard Shaw",
        "Tennessee Williams",
        "Arthur Miller",
      ],
      correctAnswer: "William Shakespeare",
    },
    {
      question: "What is the capital of Canada?",
      options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
      correctAnswer: "Ottawa",
    },
    {
      question: "Which vitamin is known as the sunshine vitamin?",
      options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
      correctAnswer: "Vitamin D",
    },
  ];
  return (
    <>
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <TodoApp />
      </main>
      <main className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div>
          <h1 className="text-2xl text-center font-bold my-4">
            Quiz Application
          </h1>
          <Quiz questions={questions} />
        </div>
      </main>
    </>
  );
}
