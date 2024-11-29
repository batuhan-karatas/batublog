import Link from "next/link"

type navButtonsPropType = {
    buttonsStyle:string,
    buttonStyle:string,
}
type navButtonsType = {
    button: string,
    path: string,
}

const navButtons:navButtonsType[] = [
  {
    button : 'Home',
    path:  '/',
  },
  {
    button : 'Science',
    path:  '/science',
  },
  {
    button : 'Technology',
    path:  '/technology',
  },
  {
    button : 'Sports',
    path:  '/sports',
  },
  {
    button : 'Home',
    path:  '/others',
  },
]

function NavButtons({buttonsStyle, buttonStyle}:navButtonsPropType) {
  return (
    <ul className={buttonsStyle}>

          {navButtons.map((item) =>(
            <li
            className={buttonStyle}
            key={item.button}
          >
            <Link href={item.path} tabIndex={0}>{item.button}</Link>
          </li>
          ))}
        </ul>
  )
}

export default NavButtons