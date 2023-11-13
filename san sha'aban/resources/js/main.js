
    // Dynamically update the running text content infinitely

    const messages = [
        { text: '2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas quisquam eius hic sed, pariatur sint solutadistinctio quam inventore est vitae excepturi cumquein voluptate suscipit quasi similique obcaecati! Perspiciatis!.', image: 'resources/img/sani6.jpg' },
        { text: '3 pariatur sint solutadistinctio quam inventore est vitae excepturi cumquein voluptate suscipit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas quisquam eius hic sed, quasi similique obcaecati! Perspiciatis!.', image: 'resources/img/sani1.jpg' },
        { text: '4 Quas quisquam eius hic sed, pariatur sint solutadistinctio quam inventore est vitae excepturi Lorem ipsum dolor, sit amet consectetur adipisicing elit.  cumquein voluptate suscipit quasi similique obcaecati! Perspiciatis!..', image: 'resources/img/politics1.jpg' }
        // Add more messages as needed
    ];

    let currentIndex = 0;
    const textElement = document.querySelector('.quote-text');
    const imageElement = document.querySelector('.quote-image');

    setInterval(function() {
        textElement.textContent = messages[currentIndex].text;
        imageElement.src = messages[currentIndex].image;

        currentIndex = (currentIndex + 1) % messages.length;
    }, 5000);

    //landing page hero section advert
    
    const Advert = [
        { text: '2 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur?.', image: 'resources/img/sani6.jpg' },
        { text: '3 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur?.', image: 'resources/img/sani1.jpg' },
        { text: '4 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur?.!..', image: 'resources/img/politics1.jpg' }
        // Add more messages as needed
    ];

    let AdvertIndex = 0;
    const AdvertElement = document.querySelector('.advert-text');
    const AdvertImageElement = document.querySelector('.advert-image');

    setInterval(function() {
        AdvertElement.textContent = Advert[currentIndex].text;
        AdvertImageElement.src = Advert[currentIndex].image;

        currentIndex = (currentIndex + 1) % Advert.length;
    }, 4000);

    // -----

    const Advert2 = [
        { text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur?.', image: 'resources/img/sani5.jpg' },
        { text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur?.', image: 'resources/img/sani4.jpg' },
        { text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur?.', image: 'resources/img/politics1.jpg' }
        // Add more messages as needed
    ];

    let Adver2tIndex = 0;
    const Advert2Element = document.querySelector('.advert2-text');
    const Advert2ImageElement = document.querySelector('.advert2-image');

    setInterval(function() {
        Advert2Element.textContent = Advert2[currentIndex].text;
        Advert2ImageElement.src = Advert2[currentIndex].image;

        currentIndex = (currentIndex + 1) % Advert2.length;
    }, 5000);


// //running text

//     const running = [
//         'Message 1 goes here. ',
//         'Message 2 goes here. ',
//         'Message 3 goes here. '
        
//     ];

//     let currentMessage = 0;
//     let currentPos = 0;
//     const runningElement = document.querySelector('.running-text');
//     runningElement.textContent = running[currentMessage];

//     function scrollText() {
//         if (currentPos < runningElement.scrollWidth) {
//             currentPos++;
//         } else {
//             currentPos = -runningElement.clientWidth;
//             currentMessage = (currentMessage + 1) % running.length;
//             runningElement.textContent = running[currentMessage];
//         }
//         runningElement.style.transform = `translateX(${-currentPos}px)`;
//         requestAnimationFrame(scrollText);
//     }

//     scrollText();