import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const socials = [
    { label: "Medium",    href: "https://medium.com", className: "medium",   content: "M" },
    { label: "GitHub",    href: "https://github.com/dzikranaufal", content: <FaGithub /> },
    { label: "Email",     href: "https://dzikranaufalbaihaqi@gmail.com", className: "at",       content: "@" },
    { label: "Instagram", href: "https://instagram.com/jikurooo", content: <FaInstagram /> },
    { label: "LinkedIn",  href: "https://linkedin.com", className: "linkedin", content: <FaLinkedinIn /> },
];

function Where() {
    return (
        <main className="where-page">
            <div className="socials">
                {socials.map((s) => (
                    <a
                        key={s.label}
                        href={s.href}
                        className={`social ${s.className ?? ""}`}
                        aria-label={s.label}
                    >
                        {s.content}
                    </a>
                ))}
            </div>
        </main>
    );
}

export default Where;