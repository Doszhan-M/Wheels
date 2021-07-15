window.addEventListener('load', slider => {
    // Find buttons
    const autoBtn = document.querySelector('.js_auto')
    const sizeBtn = document.querySelector('.js_size')

    // Find images
    const autoImg = document.querySelector('.car_finder')
    const sizeImg = document.querySelectorAll('.size_finder')

    const autoTitle = document.querySelector('.search_title_car')
    const sizeTitle = document.querySelector('.search_title_tire')
    


    sizeBtn.addEventListener('click', () => {
        autoImg.style.opacity = '0';
        sizeImg[0].style.opacity = '1';
        sizeImg[1].style.opacity = '1';
        sizeImg[0].style.transform = 'translateY(+410px)';
        sizeImg[1].style.transform = 'translateY(+410px)';
        autoTitle.style.display = 'none';
        sizeTitle.style.display = 'block';

    })

    autoBtn.addEventListener('click', () => {
        sizeImg[0].style.transform = 'translateY(+0px)';
        sizeImg[1].style.transform = 'translateY(+0px)';
        sizeImg[0].style.opacity = '0';
        sizeImg[1].style.opacity = '0';
        autoImg.style.opacity = '1';
        autoTitle.style.display = 'block';
        sizeTitle.style.display = 'none';


    })
})