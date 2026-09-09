import dynamic from "next/dynamic"

const ProjectsGallery = dynamic(() => import("./ProjectsGallery"), {
  ssr: false,
})

export default ProjectsGallery
