document.addEventListener('DOMContentLoaded', function() {
    // Custom cursor
    const cursor = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-dot-outline');

    // Add hover class on link hover
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursor.classList.add('cursor-hover');
            cursorOutline.classList.add('cursor-hover');
        });
        
        link.addEventListener('mouseleave', () => {
            cursor.classList.remove('cursor-hover');
            cursorOutline.classList.remove('cursor-hover');
        });
    });

    window.addEventListener('mousemove', function(e) {
        const posX = e.clientX;
        const posY = e.clientY;

        cursor.style.left = `${posX}px`;
        cursor.style.top = `${posY}px`;

        // Add a slight delay to the outline for a smooth trailing effect
        setTimeout(() => {
            cursorOutline.style.left = `${posX}px`;
            cursorOutline.style.top = `${posY}px`;
        }, 80);
    });

    // Hide cursor when mouse leaves the window
    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
        cursorOutline.style.opacity = '0';
    });

    // Show cursor when mouse enters the window
    document.addEventListener('mouseenter', () => {
        cursor.style.opacity = '1';
        cursorOutline.style.opacity = '1';
    });

    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-links a');

    // Add click event listener to each link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Remove active class from all links
            navLinks.forEach(link => link.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
        });
    });

    // Set active class based on current section in view
    function setActiveNavOnScroll() {
        const sections = document.querySelectorAll('div[id]');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if(window.scrollY >= (sectionTop - sectionHeight/3)) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if(link.getAttribute('href').slice(1) === section.getAttribute('id')) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // Add scroll event listener
    window.addEventListener('scroll', setActiveNavOnScroll);
}); 

const observer=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    });
});


const hiddenelements=document.querySelectorAll('.project');
hiddenelements.forEach((el)=>observer.observe(el));

const observer2=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    });
});


const hiddenelements2=document.querySelectorAll('.innerskill');
hiddenelements2.forEach((el)=>observer2.observe(el));

const observer3=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    });
});


const hiddenelements3=document.querySelectorAll('.seperation');
hiddenelements3.forEach((el)=>observer3.observe(el));
