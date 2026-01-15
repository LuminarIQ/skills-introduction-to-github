// Exam data with sample questions
const examData = {
    neet: {
        name: 'NEET',
        fullName: 'Medical Entrance Exam',
        questions: [
            {
                question: 'What is the powerhouse of the cell?',
                options: ['Nucleus', 'Mitochondria', 'Ribosome', 'Endoplasmic Reticulum'],
                correct: 1,
                explanation: 'Mitochondria are known as the powerhouse of the cell because they produce ATP through cellular respiration.'
            },
            {
                question: 'Which element is essential for the formation of hemoglobin?',
                options: ['Calcium', 'Iron', 'Sodium', 'Potassium'],
                correct: 1,
                explanation: 'Iron is essential for the formation of hemoglobin, the protein in red blood cells that carries oxygen.'
            },
            {
                question: 'What is the SI unit of force?',
                options: ['Joule', 'Newton', 'Watt', 'Pascal'],
                correct: 1,
                explanation: 'Newton (N) is the SI unit of force, named after Sir Isaac Newton.'
            },
            {
                question: 'Which organelle is responsible for protein synthesis?',
                options: ['Golgi Apparatus', 'Lysosome', 'Ribosome', 'Vacuole'],
                correct: 2,
                explanation: 'Ribosomes are responsible for protein synthesis in cells.'
            },
            {
                question: 'What is the chemical formula of glucose?',
                options: ['C₆H₁₂O₆', 'C₁₂H₂₂O₁₁', 'CH₄', 'H₂O'],
                correct: 0,
                explanation: 'Glucose has the molecular formula C₆H₁₂O₆.'
            },
            {
                question: 'Which part of the brain controls balance and coordination?',
                options: ['Cerebrum', 'Cerebellum', 'Medulla', 'Hypothalamus'],
                correct: 1,
                explanation: 'The cerebellum is responsible for balance, coordination, and fine motor control.'
            },
            {
                question: 'What is the pH of pure water?',
                options: ['5', '7', '9', '11'],
                correct: 1,
                explanation: 'Pure water has a neutral pH of 7 at 25°C.'
            },
            {
                question: 'Which gas is produced during photosynthesis?',
                options: ['Carbon Dioxide', 'Nitrogen', 'Oxygen', 'Hydrogen'],
                correct: 2,
                explanation: 'Oxygen is released as a byproduct during photosynthesis.'
            },
            {
                question: 'What is the unit of electric current?',
                options: ['Volt', 'Ampere', 'Ohm', 'Coulomb'],
                correct: 1,
                explanation: 'Ampere (A) is the SI unit of electric current.'
            },
            {
                question: 'Which vitamin is produced when skin is exposed to sunlight?',
                options: ['Vitamin A', 'Vitamin B', 'Vitamin C', 'Vitamin D'],
                correct: 3,
                explanation: 'Vitamin D is synthesized in the skin upon exposure to sunlight.'
            }
        ]
    },
    jee: {
        name: 'JEE',
        fullName: 'Engineering Entrance Exam',
        questions: [
            {
                question: 'What is the derivative of sin(x)?',
                options: ['cos(x)', '-cos(x)', 'tan(x)', '-sin(x)'],
                correct: 0,
                explanation: 'The derivative of sin(x) with respect to x is cos(x).'
            },
            {
                question: 'What is the value of acceleration due to gravity on Earth (approximately)?',
                options: ['8.9 m/s²', '9.8 m/s²', '10.8 m/s²', '11.8 m/s²'],
                correct: 1,
                explanation: 'The acceleration due to gravity on Earth is approximately 9.8 m/s².'
            },
            {
                question: 'What is the integral of 1/x dx?',
                options: ['ln|x| + C', 'x² + C', '1/x² + C', 'e^x + C'],
                correct: 0,
                explanation: 'The integral of 1/x is ln|x| + C, where C is the constant of integration.'
            },
            {
                question: 'Which law states that energy cannot be created or destroyed?',
                options: ['Newton\'s First Law', 'Law of Conservation of Energy', 'Ohm\'s Law', 'Faraday\'s Law'],
                correct: 1,
                explanation: 'The Law of Conservation of Energy states that energy cannot be created or destroyed, only transformed.'
            },
            {
                question: 'What is the chemical formula for sulfuric acid?',
                options: ['HCl', 'H₂SO₄', 'HNO₃', 'CH₃COOH'],
                correct: 1,
                explanation: 'Sulfuric acid has the chemical formula H₂SO₄.'
            },
            {
                question: 'What is the value of π (pi) approximately?',
                options: ['2.14', '3.14', '4.14', '5.14'],
                correct: 1,
                explanation: 'The value of π is approximately 3.14159...'
            },
            {
                question: 'What is Ohm\'s Law?',
                options: ['V = IR', 'F = ma', 'E = mc²', 'PV = nRT'],
                correct: 0,
                explanation: 'Ohm\'s Law states that V = IR, where V is voltage, I is current, and R is resistance.'
            },
            {
                question: 'What is the slope of the line y = 2x + 3?',
                options: ['1', '2', '3', '5'],
                correct: 1,
                explanation: 'In the equation y = mx + b, m is the slope. Here, the slope is 2.'
            },
            {
                question: 'What is the molecular geometry of methane (CH₄)?',
                options: ['Linear', 'Tetrahedral', 'Trigonal Planar', 'Octahedral'],
                correct: 1,
                explanation: 'Methane has a tetrahedral molecular geometry with bond angles of 109.5°.'
            },
            {
                question: 'What is the speed of light in vacuum?',
                options: ['3 × 10⁸ m/s', '3 × 10⁶ m/s', '3 × 10⁵ m/s', '3 × 10⁷ m/s'],
                correct: 0,
                explanation: 'The speed of light in vacuum is approximately 3 × 10⁸ m/s or 300,000 km/s.'
            }
        ]
    },
    cybersecurity: {
        name: 'Cyber Security',
        fullName: 'Security Fundamentals',
        questions: [
            {
                question: 'What does CIA stand for in cybersecurity?',
                options: ['Central Intelligence Agency', 'Confidentiality, Integrity, Availability', 'Computer Information Access', 'Cyber Investigation Agency'],
                correct: 1,
                explanation: 'CIA in cybersecurity refers to Confidentiality, Integrity, and Availability - the three main principles of information security.'
            },
            {
                question: 'What is a firewall?',
                options: ['A type of virus', 'A network security device', 'An encryption method', 'A password manager'],
                correct: 1,
                explanation: 'A firewall is a network security device that monitors and filters incoming and outgoing network traffic based on security rules.'
            },
            {
                question: 'What is phishing?',
                options: ['A type of fishing', 'A social engineering attack', 'A programming language', 'An encryption algorithm'],
                correct: 1,
                explanation: 'Phishing is a social engineering attack where attackers impersonate legitimate entities to steal sensitive information.'
            },
            {
                question: 'What does VPN stand for?',
                options: ['Virtual Private Network', 'Very Private Network', 'Verified Public Network', 'Virtual Public Node'],
                correct: 0,
                explanation: 'VPN stands for Virtual Private Network, which creates a secure connection over the internet.'
            },
            {
                question: 'What is two-factor authentication (2FA)?',
                options: ['Using two passwords', 'Using two security methods', 'Logging in twice', 'Having two accounts'],
                correct: 1,
                explanation: 'Two-factor authentication adds an extra layer of security by requiring two different authentication methods to verify identity.'
            },
            {
                question: 'What is malware?',
                options: ['Good software', 'Malicious software', 'Mail software', 'Management software'],
                correct: 1,
                explanation: 'Malware is short for malicious software designed to harm, exploit, or otherwise compromise computer systems.'
            },
            {
                question: 'What is encryption?',
                options: ['Deleting data', 'Converting data into coded form', 'Backing up data', 'Sharing data'],
                correct: 1,
                explanation: 'Encryption is the process of converting information into a coded format to prevent unauthorized access.'
            },
            {
                question: 'What is a DDoS attack?',
                options: ['Data Download Service', 'Distributed Denial of Service', 'Direct Data Operation System', 'Digital Domain Server'],
                correct: 1,
                explanation: 'DDoS (Distributed Denial of Service) is an attack that overwhelms a system with traffic from multiple sources.'
            },
            {
                question: 'What port does HTTPS use by default?',
                options: ['80', '443', '8080', '22'],
                correct: 1,
                explanation: 'HTTPS (HTTP Secure) uses port 443 by default for secure web communication.'
            },
            {
                question: 'What is SQL injection?',
                options: ['A type of database', 'A code injection attack', 'A programming language', 'A security certificate'],
                correct: 1,
                explanation: 'SQL injection is a code injection attack where malicious SQL statements are inserted into application queries.'
            }
        ]
    },
    cbse10: {
        name: '10th CBSE',
        fullName: 'Board Examination',
        questions: [
            {
                question: 'What is the Pythagorean theorem?',
                options: ['a + b = c', 'a² + b² = c²', 'a × b = c', 'a/b = c'],
                correct: 1,
                explanation: 'The Pythagorean theorem states that in a right triangle, a² + b² = c², where c is the hypotenuse.'
            },
            {
                question: 'What is the capital of India?',
                options: ['Mumbai', 'Kolkata', 'New Delhi', 'Chennai'],
                correct: 2,
                explanation: 'New Delhi is the capital of India.'
            },
            {
                question: 'What is the process by which plants make their food?',
                options: ['Respiration', 'Photosynthesis', 'Transpiration', 'Digestion'],
                correct: 1,
                explanation: 'Photosynthesis is the process by which plants convert light energy into chemical energy to produce food.'
            },
            {
                question: 'Who wrote "Romeo and Juliet"?',
                options: ['Charles Dickens', 'William Shakespeare', 'Jane Austen', 'Mark Twain'],
                correct: 1,
                explanation: 'William Shakespeare wrote the famous tragedy "Romeo and Juliet".'
            },
            {
                question: 'What is the least common multiple (LCM) of 4 and 6?',
                options: ['10', '12', '24', '8'],
                correct: 1,
                explanation: 'The LCM of 4 and 6 is 12, the smallest number divisible by both.'
            },
            {
                question: 'What is the periodic table used for?',
                options: ['Organizing elements', 'Measuring time', 'Calculating distance', 'Recording history'],
                correct: 0,
                explanation: 'The periodic table organizes chemical elements based on their atomic number and properties.'
            },
            {
                question: 'What is the sum of angles in a triangle?',
                options: ['90°', '180°', '270°', '360°'],
                correct: 1,
                explanation: 'The sum of all interior angles in any triangle is always 180°.'
            },
            {
                question: 'Who is known as the Father of the Nation in India?',
                options: ['Jawaharlal Nehru', 'Mahatma Gandhi', 'Subhas Chandra Bose', 'Bhagat Singh'],
                correct: 1,
                explanation: 'Mahatma Gandhi is known as the Father of the Nation in India for his leadership in the independence movement.'
            },
            {
                question: 'What is the atomic number of carbon?',
                options: ['4', '6', '8', '12'],
                correct: 1,
                explanation: 'Carbon has an atomic number of 6, meaning it has 6 protons in its nucleus.'
            },
            {
                question: 'What is the area of a rectangle with length 5 and width 3?',
                options: ['8', '15', '12', '20'],
                correct: 1,
                explanation: 'The area of a rectangle is length × width = 5 × 3 = 15 square units.'
            }
        ]
    },
    cbse12: {
        name: '12th CBSE',
        fullName: 'Board Examination',
        questions: [
            {
                question: 'What is the determinant of a 2×2 matrix [[a,b],[c,d]]?',
                options: ['a+d-b-c', 'ad-bc', 'ac-bd', 'ab-cd'],
                correct: 1,
                explanation: 'The determinant of a 2×2 matrix [[a,b],[c,d]] is ad-bc.'
            },
            {
                question: 'What is the formula for kinetic energy?',
                options: ['mgh', '½mv²', 'mv', 'ma'],
                correct: 1,
                explanation: 'Kinetic energy is calculated using the formula ½mv², where m is mass and v is velocity.'
            },
            {
                question: 'What is the hybridization of carbon in methane?',
                options: ['sp', 'sp²', 'sp³', 'sp³d'],
                correct: 2,
                explanation: 'In methane (CH₄), carbon undergoes sp³ hybridization forming four equivalent bonds.'
            },
            {
                question: 'What is the limit of sin(x)/x as x approaches 0?',
                options: ['0', '1', '∞', 'undefined'],
                correct: 1,
                explanation: 'The limit of sin(x)/x as x approaches 0 is 1, a fundamental limit in calculus.'
            },
            {
                question: 'Which scientist proposed the theory of relativity?',
                options: ['Isaac Newton', 'Albert Einstein', 'Niels Bohr', 'Stephen Hawking'],
                correct: 1,
                explanation: 'Albert Einstein proposed the theory of relativity, revolutionizing physics.'
            },
            {
                question: 'What is an electrolyte?',
                options: ['A non-conductor', 'A substance that conducts electricity in solution', 'A type of battery', 'An insulator'],
                correct: 1,
                explanation: 'An electrolyte is a substance that produces ions in solution and conducts electricity.'
            },
            {
                question: 'What is the rank of a zero matrix?',
                options: ['1', '0', 'undefined', 'infinite'],
                correct: 1,
                explanation: 'The rank of a zero matrix is 0 as all its rows and columns are linearly dependent.'
            },
            {
                question: 'What is Faraday\'s law of electromagnetic induction?',
                options: ['Relates to static electricity', 'Induced EMF is proportional to rate of change of magnetic flux', 'Relates to resistance', 'Relates to capacitance'],
                correct: 1,
                explanation: 'Faraday\'s law states that induced EMF is proportional to the rate of change of magnetic flux through a circuit.'
            },
            {
                question: 'What is the order of reaction if rate = k[A]²[B]?',
                options: ['1', '2', '3', '4'],
                correct: 2,
                explanation: 'The overall order is the sum of the exponents: 2 + 1 = 3.'
            },
            {
                question: 'What is the second derivative of x³?',
                options: ['3x²', '6x', 'x²', '3x'],
                correct: 1,
                explanation: 'The first derivative of x³ is 3x², and the second derivative is 6x.'
            }
        ]
    }
};

// User data storage
let userData = {
    totalScore: 0,
    streak: 0,
    questionsAnswered: 0,
    correctAnswers: 0,
    examProgress: {
        neet: 0,
        jee: 0,
        cybersecurity: 0,
        cbse10: 0,
        cbse12: 0
    }
};

// Quiz state
let currentExam = null;
let currentQuestionIndex = 0;
let selectedAnswer = null;
let quizStartTime = null;
let timerInterval = null;
let quizAnswers = [];

// DOM Elements
const examSelection = document.getElementById('examSelection');
const quizSection = document.getElementById('quizSection');
const quizResults = document.getElementById('quizResults');
const resultFeedback = document.getElementById('resultFeedback');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadUserData();
    updateStats();
    setupEventListeners();
});

// Load user data from localStorage
function loadUserData() {
    const saved = localStorage.getItem('examPrepUserData');
    if (saved) {
        userData = JSON.parse(saved);
    }
}

// Save user data to localStorage
function saveUserData() {
    localStorage.setItem('examPrepUserData', JSON.stringify(userData));
}

// Update statistics display
function updateStats() {
    document.getElementById('totalScore').textContent = userData.totalScore;
    document.getElementById('streak').textContent = userData.streak;
    document.getElementById('questionsAnswered').textContent = userData.questionsAnswered;
    
    const accuracy = userData.questionsAnswered > 0 
        ? Math.round((userData.correctAnswers / userData.questionsAnswered) * 100) 
        : 0;
    document.getElementById('accuracy').textContent = accuracy + '%';

    // Update exam progress
    Object.keys(userData.examProgress).forEach(exam => {
        const card = document.querySelector(`[data-exam="${exam}"]`);
        if (card) {
            const progressEl = card.querySelector('.progress-value');
            if (progressEl) {
                progressEl.textContent = userData.examProgress[exam] + '%';
            }
        }
    });
}

// Setup event listeners
function setupEventListeners() {
    // Exam card clicks
    document.querySelectorAll('.exam-card').forEach(card => {
        card.addEventListener('click', () => {
            const examType = card.dataset.exam;
            startQuiz(examType);
        });
    });

    // Back button
    document.getElementById('backButton').addEventListener('click', () => {
        stopTimer();
        showExamSelection();
    });

    // Submit answer
    document.getElementById('submitAnswer').addEventListener('click', submitAnswer);

    // Skip question
    document.getElementById('skipButton').addEventListener('click', skipQuestion);

    // Next question
    document.getElementById('nextQuestion').addEventListener('click', nextQuestion);

    // Results actions
    document.getElementById('retryQuiz').addEventListener('click', () => {
        startQuiz(currentExam);
    });

    document.getElementById('backToExams').addEventListener('click', showExamSelection);

    document.getElementById('reviewAnswers').addEventListener('click', reviewAnswers);
}

// Start quiz
function startQuiz(examType) {
    currentExam = examType;
    currentQuestionIndex = 0;
    selectedAnswer = null;
    quizAnswers = [];
    quizStartTime = Date.now();

    const exam = examData[examType];
    document.getElementById('examTitle').textContent = exam.name + ' Practice';
    document.getElementById('totalQuestions').textContent = exam.questions.length;

    examSelection.classList.add('hidden');
    quizResults.classList.add('hidden');
    quizSection.classList.remove('hidden');

    startTimer();
    displayQuestion();
}

// Display question
function displayQuestion() {
    const exam = examData[currentExam];
    const question = exam.questions[currentQuestionIndex];

    document.getElementById('currentQuestion').textContent = currentQuestionIndex + 1;
    document.getElementById('questionText').textContent = question.question;

    // Update progress bar
    const progress = ((currentQuestionIndex + 1) / exam.questions.length) * 100;
    document.getElementById('quizProgressFill').style.width = progress + '%';

    // Display options
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const optionEl = document.createElement('div');
        optionEl.className = 'option';
        optionEl.textContent = option;
        optionEl.dataset.index = index;

        optionEl.addEventListener('click', () => selectOption(index));

        optionsContainer.appendChild(optionEl);
    });

    selectedAnswer = null;
    document.getElementById('submitAnswer').disabled = true;
}

// Select option
function selectOption(index) {
    selectedAnswer = index;

    document.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected');
    });

    document.querySelectorAll('.option')[index].classList.add('selected');
    document.getElementById('submitAnswer').disabled = false;
}

// Submit answer
function submitAnswer() {
    if (selectedAnswer === null) return;

    const exam = examData[currentExam];
    const question = exam.questions[currentQuestionIndex];
    const isCorrect = selectedAnswer === question.correct;

    // Record answer
    quizAnswers.push({
        question: question.question,
        selectedAnswer: selectedAnswer,
        correctAnswer: question.correct,
        isCorrect: isCorrect,
        explanation: question.explanation
    });

    // Update user data
    userData.questionsAnswered++;
    if (isCorrect) {
        userData.correctAnswers++;
        userData.totalScore += 10;
    }

    // Disable all options
    document.querySelectorAll('.option').forEach(opt => {
        opt.classList.add('disabled');
        opt.style.pointerEvents = 'none';
    });

    // Highlight correct/incorrect
    document.querySelectorAll('.option')[question.correct].classList.add('correct');
    if (!isCorrect) {
        document.querySelectorAll('.option')[selectedAnswer].classList.add('incorrect');
    }

    // Show feedback
    showFeedback(isCorrect, question.explanation);
}

// Skip question
function skipQuestion() {
    const exam = examData[currentExam];
    const question = exam.questions[currentQuestionIndex];

    quizAnswers.push({
        question: question.question,
        selectedAnswer: null,
        correctAnswer: question.correct,
        isCorrect: false,
        explanation: question.explanation,
        skipped: true
    });

    userData.questionsAnswered++;
    nextQuestion();
}

// Show feedback
function showFeedback(isCorrect, explanation) {
    const feedbackIcon = document.getElementById('feedbackIcon');
    const feedbackTitle = document.getElementById('feedbackTitle');
    const feedbackText = document.getElementById('feedbackText');

    if (isCorrect) {
        feedbackIcon.textContent = '✅';
        feedbackTitle.textContent = 'Correct!';
        feedbackTitle.style.color = 'var(--success-color)';
    } else {
        feedbackIcon.textContent = '❌';
        feedbackTitle.textContent = 'Incorrect';
        feedbackTitle.style.color = 'var(--error-color)';
    }

    feedbackText.textContent = explanation;
    resultFeedback.classList.remove('hidden');
}

// Next question
function nextQuestion() {
    resultFeedback.classList.add('hidden');

    const exam = examData[currentExam];
    currentQuestionIndex++;

    if (currentQuestionIndex < exam.questions.length) {
        displayQuestion();
    } else {
        finishQuiz();
    }
}

// Finish quiz
function finishQuiz() {
    stopTimer();
    
    const exam = examData[currentExam];
    const correctCount = quizAnswers.filter(a => a.isCorrect).length;
    const totalQuestions = exam.questions.length;
    const accuracy = Math.round((correctCount / totalQuestions) * 100);
    const timeTaken = Math.floor((Date.now() - quizStartTime) / 1000);
    const pointsEarned = correctCount * 10;

    // Update exam progress
    const currentProgress = userData.examProgress[currentExam];
    const newProgress = Math.min(100, currentProgress + 10);
    userData.examProgress[currentExam] = newProgress;

    // Update streak
    userData.streak++;

    saveUserData();
    updateStats();

    // Show results
    document.getElementById('finalScore').textContent = `${correctCount}/${totalQuestions}`;
    document.getElementById('finalAccuracy').textContent = accuracy + '%';
    document.getElementById('finalTime').textContent = formatTime(timeTaken);
    document.getElementById('pointsEarned').textContent = '+' + pointsEarned;

    // Update proficiency
    const proficiencyPercent = Math.min(100, (userData.examProgress[currentExam] / 100) * 100);
    document.getElementById('proficiencyFill').style.width = proficiencyPercent + '%';

    let proficiencyLevel = 'Beginner';
    if (proficiencyPercent >= 80) proficiencyLevel = 'Expert';
    else if (proficiencyPercent >= 60) proficiencyLevel = 'Advanced';
    else if (proficiencyPercent >= 40) proficiencyLevel = 'Intermediate';

    document.getElementById('proficiencyText').textContent = proficiencyLevel;

    quizSection.classList.add('hidden');
    quizResults.classList.remove('hidden');
}

// Review answers
function reviewAnswers() {
    alert('Review feature coming soon! Check your answers in the console.');
    console.table(quizAnswers);
}

// Timer functions
function startTimer() {
    const timerEl = document.getElementById('timer');
    let seconds = 0;

    timerInterval = setInterval(() => {
        seconds++;
        timerEl.textContent = formatTime(seconds);
    }, 1000);
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

// Show exam selection
function showExamSelection() {
    quizSection.classList.add('hidden');
    quizResults.classList.add('hidden');
    examSelection.classList.remove('hidden');
    updateStats();
}
