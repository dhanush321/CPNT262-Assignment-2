const hamclick = document.querySelector('.ham-tab')
const hamopen = document.querySelector('.hamburger')
const hamclose = document.querySelector('.close')

hamopen.addEventListener('click', function() {
    hamclick.className='ham-open ham-tab transition'
    document.querySelector('.ham-links').innerHTML = 
    `<ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Contact</a></li>
    </ul>`
})

hamclose.addEventListener('click', function() {
    hamclick.className='ham-tab transition'
})