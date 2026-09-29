const NAME = "Dzikra Naufal Baihaqi";

const roles = [
    "Computer Science Education UPI",
    "Software Engineering Twotech",
    "Healthcare IT Support",
    "Fullstack Developer",
];

const stack = [
    { src: "/assets/icons/next.png",    alt: "Next.js" },
    { src: "/assets/icons/vue.png",     alt: "Vue" },
    { src: "/assets/icons/ts.png",      alt: "TypeScript" },
    { src: "/assets/icons/laravel.png", alt: "Laravel" },
    { src: "/assets/icons/react.png",   alt: "React" },
    { src: "/assets/icons/nuxt.png",    alt: "Nuxt" }, 
];

function Who() {
    return (
        <main className="who">
            <div className="name-list">
                {Array.from({ length: 14 }, (_, i) => (
                    <span key={i}>{NAME}</span>
                ))}
            </div>

            <div className="portrait">
                <img src="/assets/images/img.png" alt={NAME} />
            </div>

            <div className="info">
                <div className="info-list">
                    {roles.map((r) => <span key={r}>{r}</span>)}
                </div>

                <div className="tech-stack">
                    {stack.map((t) => <img key={t.alt} src={t.src} alt={t.alt} />)}
                </div>
            </div>
        </main>
    );
}

export default Who;