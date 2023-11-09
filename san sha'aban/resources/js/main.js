
 // Dynamically update the running text content infinitely
 const messages = [
    ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas quisquam eius hic sed, pariatur sint solutadistinctio quam inventore est vitae excepturi cumquein voluptate suscipit quasi similique obcaecati! Perspiciatis!.',
    ' pariatur sint solutadistinctio quam inventore est vitae excepturi cumquein voluptate suscipit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas quisquam eius hic sed, quasi similique obcaecati! Perspiciatis!.',
    ' Quas quisquam eius hic sed, pariatur sint solutadistinctio quam inventore est vitae excepturi Lorem ipsum dolor, sit amet consectetur adipisicing elit.  cumquein voluptate suscipit quasi similique obcaecati! Perspiciatis!.',
];

let currentIndex = 0;

setInterval(function() {
    document.querySelector('.qoute-text').textContent = messages[currentIndex];
    currentIndex = (currentIndex + 1) % messages.length;
}, 5000); 