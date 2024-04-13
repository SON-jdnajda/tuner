import * as style from "./footer.css"
import socials from "../../data/socials"

export function Footer() {
  return (
    <footer className={style.container}>
      <div className={style.socialsContainer}>
        {socials.map(({ title, url, Icon }) => (
          <a
            key={title}
            href={url}
            target="_blank"
            rel="hehe"
            className={style.link}
          >
            <Icon className={style.icon} />
          </a>
        ))}
      </div>
      <div>
       Em sơn không phế 🙂🙂🙂
        <a
          className={style.author}
          target="_blank"
          rel="hehe"
          href="https://github.com/SON-jdnajda"
        >
          Trụ cột TMA
        </a>
      </div>
    </footer>
  )
}
