const darkL = document.querySelector('.logo-l')
const darkM = document.querySelector('.logo-m')

darkM.addEventListener('click', ()=>{
    document.body.classList.toggle('light')
})
darkL.addEventListener('click', ()=>{
    document.body.classList.toggle('light')
})

let tl = gsap.timeline({ defaults: {
    ease: 'slow',
    repeat: -1,
    yoyo: true
}})
tl.to('svg', { display: 'block', opacity: 1, duration: 4, delay: 1,
    repeat: 0 })
    .to('#b-1',{ x: '120px', duration: .6 } , '-=5')
    .to('#b-2',{ x: '80px', duration: .8 } , '-=5')
    .to('#b-3',{ x: '50px', duration: 1 } , '-=5')
    .to('#b-4',{ x: '80px', duration: 1 } , '-=5')
    .to('#b-5',{ x: '120px', duration: .8 } , '-=5')
    .to('#b-6',{ x: '180px', duration: .6 } , '-=5')

let tl1 = gsap.timeline({ defaults: {
    opacity: 0
}})
tl1.from('nav', {opacity: 0, duration: 2 })
    .from('.profile img', { duration: 2, delay: 1 })
    .from('.heroText' , { y: '50%',color: "#dc1e1e" })
    .from('.btn1', {opacity: 0, duration: 0.2, x: '-50%' })
    .from('.btn2', {opacity: 0, duration: 0.2, x: '50%' })

gsap.timeline({ scrollTrigger: {
    trigger: '.about',
    start: '300px bottom',
    end: '-100px top'
}}).from('.about .title', { x: '-100%', rotation: -60, opacity: 0,
    duration: .7, })
    .from('.about-text h2', { y: '100%', rotation: -60, opacity: 0,
    duration: .7 })
    .from('.about-text p', { rotateX: '90deg', opacity: 0,
    duration: .7, stagger: .3 })

gsap.timeline({ scrollTrigger: {
    trigger: '.skills',
    start: '300px bottom',
    end: '-100px top'
}}).from('.skills .title', { x: '-100%', rotation: -60, opacity: 0,
    duration: .7, })
    .from('.skill-cards .card', {x: '100%', opacity: 0, duration: .6,
    stagger: .3, scale: '0' })

gsap.timeline({ scrollTrigger: {
    trigger: '.projects',
    start: '300px bottom',
    end: '-100px top'
}}).from('.projects .title', { x: '-100%', rotation: -60, opacity: 0,
    duration: .7 })
    .from('.project-cards .project-card', {y: '100%', opacity: 0, duration: .6, stagger: .3, })

gsap.timeline({ scrollTrigger: {
    trigger: '.contact',
    start: '100px bottom',
    end: '-200px top'
}}).from('.contact .title', { x: '-100%', rotation: -60, opacity: 0,
    duration: .7 })
    .from('.contact-icons a span', { x: '-100%', opacity: 0, duration: .7,
    stagger: .2 }, '-=0.6')
