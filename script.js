const itens = document.querySelectorAll('.accordion-item')

itens.forEach((e, index) => {
    const header = e.querySelector('.accordion-header')
    const icon = e.querySelector('.image-arrow')
    // Tá capturando certo cada header

    e.addEventListener('click', () => {
        let content = e.querySelector('.accordion-content')
        let title = e.querySelector('.title')

        if(content.classList.contains('hide')){
            content.classList.remove('hide')
            content.classList.add('show')
        }else{
            content.classList.remove('show')
            content.classList.add('hide')
        }
    })
})
