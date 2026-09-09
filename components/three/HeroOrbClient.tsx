import dynamic from "next/dynamic"

const HeroOrb = dynamic(() => import("./HeroOrb"), {
  ssr: false,
})

export default HeroOrb
