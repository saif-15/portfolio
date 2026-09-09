import dynamic from "next/dynamic"

const SkillsSphere = dynamic(() => import("./SkillsSphere"), {
  ssr: false,
})

export default SkillsSphere
