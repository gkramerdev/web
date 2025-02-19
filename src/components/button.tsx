import { type ComponentProps, ReactNode } from 'react'

interface ButtonProps extends ComponentProps<'button'> {}

export function Button(props: ButtonProps) {
  return (
    <button
      className="flex justify-between items-center px-5 h-12 bg-gray-500 text-blue font-semibold rounded-xl w-full cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-900"
      {...props}
    />
  )
}

/*extends ComponentProps<'button'>  : propriedade que estende os atributos que um botão tem*/

/* w-full: ocupa toda a largura do container,
cursor-pointer: muda o cursor para pointer quando passa por cima do botão,
transition-colors duration-300: tempo de transição de cor de 75ms,
npm i lucide-react: instalação do lucide-react para icones.
 children?: ReactNode: propriedade opcional que aceita qualquer tipo de dado,
  adicionando dentro do componente com a tag <Button> </Button>
flex: significa que o conteúdo do botão será flexível,  ou seja, ele se ajustará ao tamanho do conteúdo,
justify-between: alinha o conteúdo do botão de acordo com o espaço entre eles,
items-center: alinha o conteúdo do botão no centro,


*/
