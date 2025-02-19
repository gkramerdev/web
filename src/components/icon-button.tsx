import { type ComponentProps, ReactNode } from 'react'

interface IconButtonProps extends ComponentProps<'button'> {}

export function IconButton(props: IconButtonProps) {
  return (
    <button
      className="p-1.5 bg-gray-500 text-blue rounded-md cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-900"
      {...props}
    />
  )
}

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
