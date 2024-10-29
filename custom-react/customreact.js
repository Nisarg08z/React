function customRander(ReactElement, Container) {
    const domElement = document.createElement(ReactElement.type)
    domElement.innerHTML = ReactElement.children
    for(const prop in ReactElement.props){
        if(prop === 'children') continue
        domElement.setAttribute(prop,ReactElement.props[prop])
    }
    Container.appendChild(domElement)
}

const ReactElement = {
    type : 'a',
    props : {
        href : 'https://www.google.com',
        target : '_blank'
    },
    children : 'Click me, I am Google'

}

const mainContainer = document.querySelector('#root')

customRander(ReactElement,mainContainer)