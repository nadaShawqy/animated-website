
function toggleClass(){
    const container = document.querySelector('.sign-container');
    container.classList.toggle('active');
}

const cloud1 = document.getElementById('cloud1');
const background = document.getElementById('background');
const cloud2 = document.getElementById('cloud2');
const text = document.getElementById('text');

gsap.to(background, {
    scrollTrigger: {
        scrub: 1
    },
    scale: 2
})
gsap.to(cloud1, {
    scrollTrigger: {
        scrub: 1
    },
    x: 1000
})
gsap.to(cloud2, {
    scrollTrigger: {
        scrub: 1
    },
    x: -1000
})
gsap.to(text, {
    scrollTrigger: {
        scrub: 1
    },
    y: 600
});

const arrowRight = document.querySelector('.icon.right');
const arrowLeft = document.querySelector('.icon.left');

arrowRight.addEventListener('click', function(){
    const activeClient = document.querySelector('.client.active');
    if(activeClient.classList.contains('last')){
        return;
    }
    activeClient.classList.remove('active');
    activeClient.nextElementSibling.classList.add('active');
    check();
    activateBullet();
})
arrowLeft.addEventListener('click', function(){
    const activeClient = document.querySelector('.client.active');
    if(activeClient.classList.contains('first')){
        arrowLeft.classList.add('disable');
        return;
    }
    activeClient.classList.remove('active');
    activeClient.previousElementSibling.classList.add('active');
    check();
    activateBullet();
})
function check(){
    const activeClient = document.querySelector('.client.active');
    if(activeClient.classList.contains('first')){
        arrowLeft.classList.add('disable');
    }else{
        arrowLeft.classList.remove('disable');
    }
    if(activeClient.classList.contains('last')){
        arrowRight.classList.add('disable');
    }else{
        arrowRight.classList.remove('disable');
    }
}
function activateBullet(){
    const activeClient = document.querySelector('.client.active');
    const bulletId = activeClient.getAttribute('id');
    const bullets = document.querySelectorAll('.bullets li');
    bullets.forEach((bullet) => {
        bullet.classList.remove('active');
        if('bullet'+bulletId === bullet.id){
            bullet.classList.add('active');
        }
    })
}

const elements = document.querySelectorAll('.ele');
const items = document.querySelectorAll('.item');
const engineers = document.querySelectorAll('.eng');

const options = {
    threshold: 0.5
}
const observing = new IntersectionObserver(function(entries, observing){
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return;
        }else{
            entry.target.classList.add('appear');
            observing.unobserve(entry.target)
        }
    })
},options);

const counters = document.querySelectorAll('.counter');
const observing2 = new IntersectionObserver(function(entries, observing2){
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return;
        }else{
            const counterUp = () =>{
                const target = +entry.target.getAttribute('data-target');
                const initialValue = +entry.target.innerText;
                const increament = target / 500;
        
                if(initialValue < target){
                    entry.target.innerText = Math.ceil(initialValue + increament);
                    setTimeout(counterUp , 1);
                }else{
                    entry.target.innerText = target;
                }
            };
            counterUp();
            observing.unobserve(entry.target)
        }
    })
},options);

counters.forEach(counter => {
    observing2.observe(counter)
})

elements.forEach(element => {
    observing.observe(element)
});
items.forEach(item => {
    observing.observe(item)
});
engineers.forEach(eng => {
    observing.observe(eng)
});

// go to sections
$('.about_button').click(function(){
    $('html, body').animate({
        scrollTop: $('.about').offset().top
    }, 2000)
});
$('.home_button').click(function(){
    $('html, body').animate({
        scrollTop: $('.home').offset().top
    }, 2000)
});
$('.testim_button').click(function(){
    $('html, body').animate({
        scrollTop: $('.testimonial').offset().top
    }, 1500)
});
$('.team_button').click(function(){
    $('html, body').animate({
        scrollTop: $('.team').offset().top
    }, 1500)
});
$('.join_button').click(function(){
    $('html, body').animate({
        scrollTop: $('.join').offset().top
    }, 1500)
});
$('.portfolio_button').click(function(){
    $('html, body').animate({
        scrollTop: $('.portfolio').offset().top
    }, 2000)
})
