
let worksButton = document.querySelectorAll('.order')
let worksImages = document.querySelectorAll('.test_img')
let worksCircles = document. querySelectorAll('.point')

for(let i = 0; i < 4; i++) {
    worksButton[i].addEventListener('click', () => {
        for(let i = 0; i < 4; i++) {
            worksButton[i].classList.remove('active')
            worksImages[i].classList.remove('active')
            worksCircles[i].classList.remove('active')

        }
        worksButton[i].classList.add('active')
        worksImages[i].classList.add('active')
        worksCircles[i].classList.add('active')
    })
}
 let mobileButton = document.querySelector('.bt-menu')
 let mobileMenu = document.querySelector('.mobile_menu')

 mobileButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('active')
    mobileButton.classList.toggle('active')
 })

let switchButton = document.querySelectorAll('.buttons_left_right') 
let slideContent = document.querySelectorAll('.slide_parent_teacher')

 for(let i = 0; i < 2; i++) {
    switchButton[i].addEventListener('click', () => {
        for(let i = 0; i < 2; i++) {
            switchButton[i].classList.remove('active')
            slideContent[i].classList.remove('active')
        }
        switchButton[i].classList.add('active')
        slideContent[i].classList.add('active')
    })
 }

//  new WOW().init();

let linkButton = document.querySelectorAll('.linkactive')
let valueHeight = window.innerHeight
let allinks = document.querySelectorAll('.nav-menu a')
// let activeSection
// let prevSection

window.addEventListener('scroll', () => {
    // if (prevSection != activeSection){
    //     for (let i = 0; i < allinks.length; i++) {
    //         allinks[i].classList.remove('active')  
    //     }
    //     prevSection = activeSection
    // }
    for (let i = 0; i < linkButton.length; i++) {
        let lop = linkButton[i].getBoundingClientRect().y - valueHeight / 2
        let heightitem = linkButton[i].getBoundingClientRect().height
        let hiddenBlock = linkButton[i].getBoundingClientRect().y + heightitem - valueHeight / 2
        let id = linkButton[i].getAttribute('id')
        let link = document.querySelector(`a[href='#${id}']`)
        if (lop < 0 && hiddenBlock > 0 && !link.classList.contains('active')) {
            activeSection = i  
            link.classList.add('active')
        }
        if(lop > 0 && link.classList.contains('active') || hiddenBlock < 0 && link.classList.contains('active')){
            link.classList.remove('active')
        }
    }
})









//  let animateItem = document.querySelectorAll('.animate')
//  let valueHeight = window.innerHeight

//  window.addEventListener('scroll', () => {
//      for( let i = 0; i < animateItem.length; i++) {
//         let lop = animateItem[i].getBoundingClientRect().y
//         if (lop < valueHeight && lop > 100 && !animateItem[i].classList.contains('end_animation')) {
//             animateItem[i].classList.add('end_animation')
//             TweenMax.to(animateItem[i], 0.3, {y: 0, opacity: 1, delay: 0.1})
//         } else if(lop > valueHeight && animateItem[i].classList.contains('end_animation') || lop < 100 && animateItem[i].classList.contains('end_animation')){
//             animateItem[i].classList.remove('end_animation')
//             TweenMax.to(animateItem[i], 0.3, {y: -40, opacity: 0, delay: 0.1})
//         }   
//      }
//  })



//  let switchButton = document.querySelectorAll('.buttons_left_right')

//  for(let i = 0; i < 1; i++) {
//     switchButton[i].addEventListener('click', () => {
//         for(let i = 0; i < 4; i++) {
//             switchButton[i].classList.remove('active')
//         }
//         switchButton[i].classList.add('active')
//     })
 