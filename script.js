const header = document.querySelectorAll('.accordion-header')
const content = document.querySelectorAll('.accordion-content')
const title = document.querySelectorAll('.title')

for (let i = 0; i < header.length; i++) {
    header[i].addEventListener('click', e => {
        let display = content[i].style.display

        if (display !== 'flex') {
            content[i].style.display = 'flex'
            title[i].style.fontWeight = 'bold'
            
        }

        if (display !== 'none') {
            content[i].style.display = 'none'
            title[i].style.fontWeight = 'normal'
        }


    })
}
