const component = (): HTMLElement => {
  const element: HTMLElement = document.createElement('div')

  element.innerHTML = ['H11ello', 'webpack'].join(', ')

  return element
}

document.body.appendChild(component())

console.log('index.ts')
