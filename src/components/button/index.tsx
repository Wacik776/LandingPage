const borderStyles = 'border-2 border-almost-black rounded-lg'
const filledStyles = 'text-almost-white bg-black rounded-lg font-bold py-4 px-6 mx-0 hover:bg-transparent hover:text-almost-black border-2 border-almost-black'

export const Button = ({
    children ='',
    hasBorder = false,
    isFilled = false,
    color = 'black'
}) => {
  return (
    <button className={`${color} px-5 py-2 ${hasBorder && borderStyles} ${isFilled && filledStyles}`}>{children}</button>
  )
}
