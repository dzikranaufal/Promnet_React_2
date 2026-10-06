import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const socials = [
    { label: "Medium",    href: "medium.com", className: "medium",   content: "M" },
    { label: "GitHub",    href: "github.com/dzikranaufal", content: <FaGithub /> },
    { label: "Email",     href: "dzikranaufalbaihaqi@gmail.com", className: "at",       content: "@" },
    { label: "Instagram", href: "instagram.com/jikurooo", content: <FaInstagram /> },
    { label: "LinkedIn",  href: "linkedin.com", className: "linkedin", content: <FaLinkedinIn /> },
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