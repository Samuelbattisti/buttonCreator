const controles = document.querySelector('.controles')
const css = document.querySelector('.css')
const btn = document.querySelector('.btnClique')
const button = document.querySelector('.btn')

button.addEventListener('click', e => e.preventDefault())

controles.addEventListener('change', mudancas)

const style = {

    texto(value) {
        btn.innerText = value;
    },
    color(value) {
        btn.style.color = value;
    },
    backgroundColor(value) {
        btn.style.backgroundColor = value;
    },
    heigth(value) {
        btn.style.height = value + 'px';
    },
    width(value) {
        btn.style.width = value + 'px';
    },
    border(value) {
        btn.style.border = value;
    },
    borderRadius(value) {
        btn.style.borderRadius = value + 'px';
    },
    fontFamily(value) {
        btn.style.fontFamily = value;
    },
    fontSize(value) {
        btn.style.fontSize = value + 'px';
    }
}

function mudancas(event) {
    const eventName = event.target.name
    const eventValue = event.target.value

    style[eventName](eventValue)
    salvarValores(eventName, eventValue)
    mostrarCss()
}

function mostrarCss() {
    css.innerHTML = '<span>' + btn.style.cssText.split('; ').join(';</span><span>')
}

function setarValor() {
    const propriedades = Object.keys(localStorage)
    const valores = Object.values(localStorage)
    propriedades.forEach((propriedade) => {
        style[propriedade](localStorage[propriedade])
        controles.elements[propriedade].value = localStorage[propriedade]
    })
    mostrarCss()
}
setarValor()
function salvarValores(nome, valor) {
    localStorage[nome] = valor
}