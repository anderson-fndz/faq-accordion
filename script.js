const itens = document.querySelectorAll('.accordion-item')
const contents = document.querySelectorAll('.accordion-content')
let count = 0

itens.forEach((e, index, array) => {
    const header = e.querySelector('.accordion-header')
    const icon = e.querySelector('.image-arrow')
    let content = e.querySelector('.accordion-content')
    let title = e.querySelector('.title')


    // Tá capturando certo cada header

    e.addEventListener('click', () => {


        if (content.classList.contains('hide')) {
            content.classList.remove('hide')
            content.classList.add('show')

            title.style.fontWeight = 'bold'
            icon.style.transform = 'rotate(180deg)'

            console.log(content.classList)
            count = count + 1
        } else {
            content.classList.remove('show')
            content.classList.add('hide')
            title.style.fontWeight = 'normal'
            icon.style.transform = 'rotate(0deg)'

            count = count - 1
        }

        if (count >= 2) {
                    content.classList.remove('show')

        }

    })

})




/*
    for (let i = 0; i < itens.length; index++) {
        var removeContent = document.querySelectorAll('.accordion-content')
        removeContent.classList.remove('show')
        
    }

*/