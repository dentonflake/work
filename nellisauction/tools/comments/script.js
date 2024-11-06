let tags = []

function handleCopy() {
    let comment = tags.join(", ")
    
    navigator.clipboard.writeText(`**${comment}**`)

    tags = []
    let parent = document.getElementById('builder')
    parent.innerHTML = 'Copied!'
}

function handleAdd(element) {
    let tag = document.createElement('div')
    tag.textContent = element.textContent
    tag.classList.add('grid-item')
    tag.classList.add('tag')

    let parent = document.getElementById('builder');

    if (parent.innerHTML == 'Copied!') {
        parent.innerHTML = ""
    }

    parent.appendChild(tag)

    tags.push(element.textContent)
}