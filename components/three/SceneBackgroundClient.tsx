import dynamic from "next/dynamic"

const SceneBackground = dynamic(() => import("./SceneBackground"), {
  ssr: false,
})

export default SceneBackground
