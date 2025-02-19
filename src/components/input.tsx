import type { ComponentProps } from 'react'

interface InputRootsProps extends ComponentProps<'div'> {
  error?: boolean
}

export function InputRoot({ error = false, ...props }: InputRootsProps) {
  return (
    <div
      data-error={error}
      className="group bg-gray-800 h-12 flex items-center px-4 rounded-xl border border-gray-600 gap-2 focus-within:border-gray-100 data-error=true:bg-danger-500 data-[error=true]:border-danger"
      {...props}
    />
  )
}

interface InputIconProps extends ComponentProps<'span'> {}
export function InputIcon(props: InputIconProps) {
  return (
    <span
      className="text-gray-400 group-focus-within:text-gray-100 group-not-has-placeholder-shown:text-gray-100 group-data-[error=true]:text-danger"
      {...props}
    />
  )
}

interface InputFieldProps extends ComponentProps<'input'> {}
export function InputField(props: InputFieldProps) {
  return <input className="flex-1 outline-0 placeholder-gray-400" {...props} />
}

/*Input(props: InputProps) recebe todas as propriedades de um input quando o input está em ação, a cor do ícone muda para cinza-100
group: agrupa os elementos, permitindo que o ícone e o input sejam estilizados juntos,
indico o group para estilizar o ícone e o input juntos
flex-1: ocupa todo o espaço disponível do da caixa de input
gap-2: espaço entre o ícone e o input
outline-0: remove a borda padrão do input
focus-within:border-gray-100">: quando o input está em ação, a borda fica ativada pela cor cinza-100
*/
