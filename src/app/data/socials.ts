import { IconType } from "react-icons"
import { FiGithub, FiLinkedin, FiInstagram, FiTwitter } from "react-icons/fi"
import { SiMedium } from "react-icons/si"

export type Social = {
  title: string
  url: string
  Icon: IconType
}

const socials: Social[] = [
  {
    title: "GitHub",
    url: "https://github.com/SON-jdnajda",
    Icon: FiGithub,
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com",
    Icon: FiLinkedin,
  },
  {
    title: "Twitter",
    url: "https://twitter.com",
    Icon: FiTwitter,
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com",
    Icon: FiInstagram,
  },
]

export default socials
