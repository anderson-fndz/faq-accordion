const itens = document.querySelectorAll('.accordion-item')

itens.forEach((e, index) => {
    const header = e.querySelector('.accordion-header')
    const icon = e.querySelector('.image-arrow')
    // Tá capturando certo cada header

    e.addEventListener('click', () => {
        let content = e.querySelector('.accordion-content')
        let title = e.querySelector('.title')
        let display = content.style.display

        if (display !== 'flex') {
            content.style.display = 'flex'
            title.style.fontWeight = 'bold'
            icon.style.transform = 'rotate(180deg)'
        }

        if (display !== 'none') {
            content.style.display = 'none'
            title.style.fontWeight = 'normal'
            icon.style.transform = 'rotate(0deg)'

        }
    })
})
