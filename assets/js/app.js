// toggle or switch the .sticky-navbar class when the user scroll 100px

window.onscroll = () => {(webFunctions.scrollNavbar())};

let webFunctions = {
    scrollNavbar: function() 
    {
        // Target element
        let navBar = document.getElementById('navbar');
        let links = document.querySelectorAll('#navbar a');
        let nav_icons = document.querySelectorAll('#navbar i');
        let logo = document.querySelector('.logo-text');
    
    
        if(document.documentElement.scrollTop > 200){ //when scroll is greater than 100 pixels
            navBar.classList.add('sticky-navbar');
            logo.classList.add('logo');
            // change the color of links on scroll
            for(let i=0; i < links.length; i++){
                const element = links[i];
                element.classList.add('text-black');
            }
    
            for(let j=0; j < nav_icons.length; j++){
                const element = nav_icons[j];
                element.classList.add('text-black');
            }
        } else{
            navBar.classList.remove('sticky-navbar');
    
            // change the color of the links to default
            for(let i = 0; i < links.length; i++){
                let element = links[i];
                element.classList.remove('text-black');
            }
    
            for(let j = 0; j < nav_icons.length; j++){
                let element = nav_icons[j];
                element.classList.remove('text-black');
            }
        }
    
    },

    // function for the scrolling button
    scrollTotop: function(){
        let scrolling_btn = document.getElementById('scrollTop-btn');
        scrolling_btn.addEventListener('click', function(){
            // scrolling function
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        });

        while (window.scroll == 1) {
            // hide the scroll button
            scrolling_btn.style.display = 'none';
        }
    },

    

};

webFunctions.scrollTotop();