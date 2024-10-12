import { useEffect, useState } from "react"
import { Container, Main } from "../../components"
import { useDeviceType } from "@app-hooks"
import { assets } from "@app-assets"

export default function Home() {
  type AdviceType = {
    id: number
    advice: string
  }
  const { deviceType } = useDeviceType()
  const [advice, setAdvice] = useState<AdviceType | null>(null)

  const renderImageDivider = () => {
    if (deviceType === 'mobile') {
      return assets.patternDividerMobile
    } else {
      return assets.patternDividerDesktop
    }
  }

  const getAdvice = () => {
    fetch('https://api.adviceslip.com/advice')
      .then((response) => response.json())
      .then((data) => {
        setAdvice(data.slip)
      })
  }

  const handleClick = () => getAdvice()

  useEffect(() => {
    if (advice === null) getAdvice()
  }, [advice])

  return (
    <Main className="font-manrope bg-blue-dark-main grid place-items-center px-4">
      <Container className="relative bg-blue-dark-grayish w-full max-w-[540px] min-h-[315px] md:min-h-[332px] px-6 py-10 md:p-12 rounded-[10px] flex flex-col items-center gap-6 font-extrabold text-center">
        <h1 className="text-green-neon  text-[11px] tracking-[3.46px] md:heading">ADVICE #{advice?.id}</h1>
        <p className="text-cyan-light text-[24px] md:quote">"{advice?.advice}"</p>
        <img src={renderImageDivider()} alt="Pattern Divider" className="md:mt-4" />

        <button onClick={handleClick} className="absolute -bottom-[calc(64px/2)] w-[64px] aspect-square bg-green-neon grid place-items-center rounded-full ">
          <img src={assets.iconDice} alt="Icon Dice" className="w-6 h-6" />
        </button>
      </Container>
    </Main>
  )
}