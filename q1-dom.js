function createName(name , family){
    const mainDiv = document.createElement('div')
    const nameDiv = document.createElement('div')
    const familyDiv = document.createElement('div')
    document.body.append(mainDiv)
    mainDiv.append(nameDiv, familyDiv)
    nameDiv.innerHTML += name
    familyDiv.innerHTML += family
    nameDiv.style = "text-decoration:underline; color: red; width:50px;hight:50px;"
    familyDiv.style = "border: 1px solid black; width:50px;hight:50px;"
}

createName('dor', 'golan')