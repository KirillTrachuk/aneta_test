$(function() {

    let worksButton = document.querySelectorAll('.order')
    let worksImages = document.querySelectorAll('.test_img')
    let worksCircles = document.querySelectorAll('.point')

    for (let i = 0; i < 4; i++) {
        worksButton[i].addEventListener('click', () => {
            for (let i = 0; i < 4; i++) {
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

    for (let i = 0; i < 2; i++) {
        switchButton[i].addEventListener('click', () => {
            for (let i = 0; i < 2; i++) {
                switchButton[i].classList.remove('active')
                slideContent[i].classList.remove('active')
            }
            switchButton[i].classList.add('active')
            slideContent[i].classList.add('active')
        })
    }

    let linkButton = document.querySelectorAll('.linkactive')
    let valueHeight = window.innerHeight
    let allinks = document.querySelectorAll('.nav-menu a')
    window.addEventListener('scroll', () => {
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
            if (lop > 0 && link.classList.contains('active') || hiddenBlock < 0 && link.classList.contains('active')) {
                link.classList.remove('active')
            }
        }
    })

    //pagescroll 2 id
    $('.nav-menu a').mPageScroll2id();
    $('.footer_menu a').mPageScroll2id();
    $('a.learn_more').mPageScroll2id();


    wow = new WOW({
        boxClass: 'wow', // default
        animateClass: 'animated', // default
        offset: 0, // default
        mobile: true, // default
        live: true // default
    })
    wow.init();
})