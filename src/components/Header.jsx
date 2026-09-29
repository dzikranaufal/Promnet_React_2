function Header({ words }) {
    return (
        <div className="top-row">
            {words.map((word) => (
                <span key={word}>{word}</span>
            ))}
        </div>
    );
}

export default Header;