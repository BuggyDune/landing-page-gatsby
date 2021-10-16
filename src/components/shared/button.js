import tw, { styled } from "twin.macro"

const Button = styled.button(() => [
  tw`py-1.5 px-6 text-base border-solid bg-blue-500`,
  tw`rounded-3xl text-white hover:bg-yellow-400 hover:text-black `,
  tw`transition duration-300 ease-in-out`,
])

const ButtonDashed = styled.button(() => [
  tw`py-1.5 px-6 text-base text-white `,
  tw`border-white border-solid border-2 ml-3 rounded-3xl hover:border-yellow-400 `,
  tw`transition duration-300 ease-in-out`,
])

export { Button, ButtonDashed }
