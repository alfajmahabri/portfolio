const output = document.getElementById("output");
const commandInput = document.getElementById("command-input");

// Display welcome message and available commands on load
displayWelcomeMessage();

commandInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        const command = commandInput.value.trim();
        processCommand(command);
        commandInput.value = "";
    }
});

function displayWelcomeMessage() {
    const welcomeMessage = `
Welcome to Alfaj's Portfolio Terminal!
Type one of the following commands to explore:
    - about        : Learn about me
    - experience   : View my work experience
    - projects     : See my projects
    - certifications: View my certifications
    - achievements : See my awards & achievements
    - clear        : Clear the terminal
`;
    output.innerHTML += `<div>${welcomeMessage}</div>`;
    output.scrollTop = output.scrollHeight;
}

function processCommand(command) {
    const response = handleCommand(command);
    output.innerHTML += `<div>user@xyz:~$ ${command}</div><div>${response}</div>`;
    output.scrollTop = output.scrollHeight;
}

function handleCommand(command) {
    switch (command.toLowerCase()) {
        case "about":
            return `Name: XYZ
DevOps Engineer
Skills: Java, Android Studio, AWS, Open Source
Education: B.Tech CSE (2022 - 2026)
University: D Y Patil College of Engineering & Technology`;
        case "experience":
            return `i. Java Developer Intern - Neuralim
ii. Amazon Web Services – AICTE Eduskill (Virtual) 08/2024
iii. Android Developer – Softron Technologies (Kolhapur) 06/2024
iv. Amazon Web Service – Internship Studio (Virtual) 12/2023`;
        case "projects":
            return `i. Matrix Ai - AI chatbot using OpenAI API, HTML, CSS & JavaScript.
ii. File Converter - Java-based image converter (PNG/JPG/WEBP & PDF).
iii. Code Mate - Android app for hackathon team formation (Firebase integration).
iv. Fin Track - Finance tracking app with SMS-based transaction parsing.
v. 5G Setter - Android app for setting network to NR only.`;
        case "certifications":
            return `i. AWS & Cloud Computing Fundamental – Udemy
ii. Docker & Go Lang Workshop – Walchand College of Engineering
iii. Programming Using Java – Infosys Spring Board`;
        case "achievements":
            return `Runner Up – Capstone Project (D Y Patil College of Engineering) - 2023
English Typing 40 WPM – Government Certificate in Computer Typing Basic Course - 2023`;
        case "clear":
            output.innerHTML = "";
            displayWelcomeMessage();
            return "";
        default:
            return "Command not recognized. Type 'help' for a list of commands.";
    }
}
