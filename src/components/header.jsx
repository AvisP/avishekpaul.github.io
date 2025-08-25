

const headerOptions = [
    {
        name: "Home",
        link: "#home"
    },
    {
        name: "About",
        link: "#about"
    },
    {
        name: "Projects",
        link: "#projects"
    },
    {
        name: "Blog",
        link: "#blog"
    },
    {
        name: "Contact",
        link: "#contact"
    }
]

export default function Header() {
  return (
    <>
        <header className="flex w-lvw justify-between bg-white text-black text-md fixed h-15 items-center px-60 border-b-1 border-gray-200 shadow-2xs">
            <div className="font-bold text-2xl">
                Avishek Paul
            </div>
            <div className="flex gap-15">
                {headerOptions.map((option) => (
                    <a className="hover:text-gray-700 font-semibold" key={option.name} href={option.link}>
                        {option.name}
                    </a>
                ))}
            </div>
        </header>
    </>
  )
}
