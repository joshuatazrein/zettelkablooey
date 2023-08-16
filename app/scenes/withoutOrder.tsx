import { useLoaderData } from '@remix-run/react'
import GptMesh from '~/components/GptMesh'
import Kablooey from '~/components/Kablooey'
import Line from '~/components/Line'
import { generatePrompt } from '~/services/gpt.server'

export default function WithoutOrder({ gptText, showEffect, index }: Props) {
  return (
    <Kablooey
      {...{ gptText, showEffect, index }}
      title={`without-order${index}`}
    >{`
      For there to be a spark
      mainly without us, the original
      classic idea: a commenced measurement
      of the—
      somewhat offset by the theoretical considerations of
      and if they could be reordered—a minimum standard of
      daily renewal
    `}</Kablooey>
  )
}
