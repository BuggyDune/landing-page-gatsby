import React from "react"
import tw, { css, styled } from "twin.macro"

const Button = styled.button(() => [
  tw`py-1.5 px-6 text-base border-solid bg-blue-500`,
  tw`rounded-3xl text-white mr-3 hover:bg-yellow-400 hover:text-black `,
  tw`transition duration-300 ease-in-out`,
  tw`md:border-t-2`,
  css`
    background: red;
    & > span {
      ${tw`bg-blue-500`}
    }

    @media screen(minWidth: 720px) {
      background: green;
    }
  `,
])

export default Button
