const U = "https://images.unsplash.com/photo-";
const Q = "?auto=format&fit=crop&w=600&q=85";

const images = [
    { id: 1, src: `${U}1505740420928-5e560c06d30e${Q}`, alt: "Headphones" },
    { id: 2, src: `${U}1523275335684-37898b6baf30${Q}`, alt: "Smartwatch" },
    { id: 3, src: `${U}1586528116311-ad8dd3c8310d${Q}`, alt: "Packages" },
    { id: 4, src: `${U}1605901309584-818e25960a8f${Q}`, alt: "Gaming device" },
    { id: 5, src: `${U}1496181133206-80ce9b88a853${Q}`, alt: "Laptop" },
    { id: 6, src: `${U}1600080972464-8e5f35f63d08${Q}`, alt: "Game controller" },
    { id: 7, src: `${U}1556742049-0cfed4f6a45d${Q}`,    alt: "Products" },
    { id: 8, src: `${U}1518770660439-4636190af475${Q}`, alt: "Technology" },
    { id: 9, src: `${U}1551816230-ef5deaed4a26${Q}`,    alt: "Smart watches" },
];

function What() {
    return (
        <main className="what-page">
            {images.map((img) => (
                <div key={img.id} className={`image img-${img.id}`}>
                    <img src={img.src} alt={img.alt} />
                </div>
            ))}
        </main>
    );
}

export default What;