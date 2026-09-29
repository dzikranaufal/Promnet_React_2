import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const socials = [
    { label: "Medium",    href: "#", className: "medium",   content: "M" },
    { label: "GitHub",    href: "#", content: <FaGithub /> },
    { label: "Email",     href: "#", className: "at",       content: "@" },
    { label: "Instagram", href: "#", content: <FaInstagram /> },
    { label: "LinkedIn",  href: "#", className: "linkedin", content: <FaLinkedinIn /> },
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