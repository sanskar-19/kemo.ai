export interface ButtonProps {
  variant?: string
  label: string
  callback?: Function
}
const Button = ({
  variant = 'primary',
  label,
  callback = () => {}
}: ButtonProps) => {
  return (
    <button
      onClick={() => {
        callback()
      }}
      className={`font-base font-greycliff border rounded-lg h-10 w-[8rem] grid place-items-center font-bold transition-all tracking-wide ${
        variant === 'primary'
          ? 'bg-green text-white border-green hover:bg-transparent hover:text-green'
          : 'bg-white text-green border-green hover:bg-green hover:text-white'
      }`}
    >
      {label}
    </button>
  )
}

export default Button
