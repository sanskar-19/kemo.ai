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
      className={`font-base border rounded-lg h-10 w-[8rem] grid place-items-center font-bold ${
        variant === 'primary'
          ? 'bg-green text-white border-green'
          : 'bg-white text-green border-green'
      }`}
    >
      {label}
    </button>
  )
}

export default Button
