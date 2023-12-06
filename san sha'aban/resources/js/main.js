    // dropdown nav
    const toggleBtn = document.querySelector('.toggle_btn')
    const toggleIcon = document.querySelector('.toggle_btn i')
    const dropDownMenu = document.querySelector('.dropdown_menu')

    toggleBtn.onclick = function() {
        dropDownMenu.classList.toggle('open')
        const isOpen = dropDownMenu.classList.contains('open')

        toggleIcon.classList = isOpen
        ? 'bi bi-x'
        : 'bi bi-list'
    }

    // Dynamically update the running text content infinitely for quote


    const messages = [
        { text: '2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas quisquam eius hic sed, pariatur sint solutadistinctio quam inventore est vitae excepturi cumquein voluptate suscipit quasi similique obcaecati!.', image: 'resources/img/sani6.jpg' },
        { text: '3 pariatur sint solutadistinctio quam inventore est vitae excepturi cumquein voluptate suscipit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas quisquam eius hic sed, quasi similique obcaecati!.', image: 'resources/img/sani1.jpg' },
        { text: '4 Quas quisquam eius hic sed, pariatur sint solutadistinctio quam inventore est vitae excepturi Lorem ipsum dolor, sit amet consectetur adipisicing elit.  cumquein voluptate suscipit quasi similique obcaecati!.', image: 'resources/img/politics1.jpg' }
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
// ----------------
    //landing page hero section advert
    
    const Advert = [
        { text: '2 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur?.', image: 'resources/img/sani6.jpg' },
        { text: '3 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur?.', image: 'resources/img/sani1.jpg' },
        { text: '4 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur?. ', image: 'resources/img/politics1.jpg' }
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

// ------------
    const Advert3 = [
        { text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur?.', image: 'resources/img/sani5.jpg' },
        { text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur?.', image: 'resources/img/sani4.jpg' },
        { text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur?.', image: 'resources/img/politics1.jpg' }
        // Add more messages as needed
    ];

    let Adver3tIndex = 0;
    const Advert3Element = document.querySelector('.advert3-text');
    const Advert3ImageElement = document.querySelector('.advert3-image');

    setInterval(function() {
        Advert3Element.textContent = Advert3[currentIndex].text;
        Advert3ImageElement.src = Advert3[currentIndex].image;

        currentIndex = (currentIndex + 1) % Advert3.length;
    }, 5000);
// ----------
    const Advert4 = [
        { text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur?.', image: 'resources/img/sani5.jpg' },
        { text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur?.', image: 'resources/img/sani4.jpg' },
        { text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur?.', image: 'resources/img/politics1.jpg' }
        // Add more messages as needed
    ];

    let Adver4tIndex = 0;
    const Advert4Element = document.querySelector('.advert4-text');
    const Advert4ImageElement = document.querySelector('.advert4-image');


    setInterval(function() {
        Advert4Element.textContent = Advert4[currentIndex].text;
        Advert4ImageElement.src = Advert4[currentIndex].image;

        currentIndex = (currentIndex + 1) % Advert4.length;
    }, 6000);

// -----------transition----------


// ====================scroll show/hiden======

const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// ===============================

 // -----------
 const politics = [
    { text:'1 Lorem ipsum dolor sit amet consectetur adipisicing elit.  Corrupti, neque. Delectus tempora quam, repellendus facilis quas dolorem distinctio possimus molestias debitis eum sunt reiciendis perferendis hic deleniti autem quae, ipsum voluptatem aut nihil corrupti culpa itaque laudantium iure. Qui, saepe neque quaerat dolore temporibus fugit eum odit placeat ipsa dolores earum quidem laborum. Sit similique esse, omnis asperiores deserunt reprehenderit distinctio. Aut dolores beatae eligendi illum nesciunt cum doloremque sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, neque. Delectus tempora quam, repellendus facilis quas dolorem distinctio possimus molestias debitis eum sunt reiciendis perferendis hic deleniti autem quae, ipsum voluptatem aut nihil corrupti culpa itaque laudantium iure. Qui, saepe neque quaerat dolore temporibus fugit eum odit placeat ipsa dolores earum quidem laborum. Sit similique esse, omnis asperiores deserunt reprehenderit distinctio. Aut dolores beatae eligendi illum nesciunt cum doloremque sequi. reiciendis perferendis hic deleniti autem quae, ipsum voluptatem '},
    { text:'2 Lorem ipsum dolor sit amet consectetur adipisicing elit.  Corrupti, neque. Delectus tempora quam, repellendus facilis quas dolorem distinctio possimus molestias debitis eum sunt reiciendis perferendis hic deleniti autem quae, ipsum voluptatem aut nihil corrupti culpa itaque laudantium iure. Qui, saepe neque quaerat dolore temporibus fugit eum odit placeat ipsa dolores earum quidem laborum. Sit similique esse, omnis asperiores deserunt reprehenderit distinctio. Aut dolores beatae eligendi illum nesciunt cum doloremque sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, neque. Delectus tempora quam, repellendus facilis quas dolorem distinctio possimus molestias debitis eum sunt reiciendis perferendis hic deleniti autem quae, ipsum voluptatem aut nihil corrupti culpa itaque laudantium iure. Qui, saepe neque quaerat dolore temporibus fugit eum odit placeat ipsa dolores earum quidem laborum. Sit similique esse, omnis asperiores deserunt reprehenderit distinctio. Aut dolores beatae eligendi illum nesciunt cum doloremque sequi. reiciendis perferendis hic deleniti autem quae, ipsum voluptatem '},
    { text:'3 Lorem ipsum dolor sit amet consectetur adipisicing elit.  Corrupti, neque. Delectus tempora quam, repellendus facilis quas dolorem distinctio possimus molestias debitis eum sunt reiciendis perferendis hic deleniti autem quae, ipsum voluptatem aut nihil corrupti culpa itaque laudantium iure. Qui, saepe neque quaerat dolore temporibus fugit eum odit placeat ipsa dolores earum quidem laborum. Sit similique esse, omnis asperiores deserunt reprehenderit distinctio. Aut dolores beatae eligendi illum nesciunt cum doloremque sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, neque. Delectus tempora quam, repellendus facilis quas dolorem distinctio possimus molestias debitis eum sunt reiciendis perferendis hic deleniti autem quae, ipsum voluptatem aut nihil corrupti culpa itaque laudantium iure. Qui, saepe neque quaerat dolore temporibus fugit eum odit placeat ipsa dolores earum quidem laborum. Sit similique esse, omnis asperiores deserunt reprehenderit distinctio. Aut dolores beatae eligendi illum nesciunt cum doloremque sequi. reiciendis perferendis hic deleniti autem quae, ipsum voluptatem '},

];

let politicsIndex = 1;
const politicsElement = document.querySelector('.Politics-text');

setInterval(function() {
    politicsElement.textContent = politics[currentIndex].text;
    currentIndex = (currentIndex + 1) % politics.length;   
}, 5000);
