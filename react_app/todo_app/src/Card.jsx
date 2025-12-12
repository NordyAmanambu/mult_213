import './Card.css';

// Add a new component for the Card
// Example Usage: <Card title="My Card Title" subtitle="My Card Subtitle" content="This is the content of my card." image="https://example.com/my-image.jpg" />
export function Card(props) {
    // props is some JSON that looks like {title: str, message: str}

    // Subtitle is optional
    let subtitleContent = null;
    if (props.subtitle) {
        subtitleContent = <h3>{props.subtitle}</h3>;
    }

    // Same thing, using a ternary operator
    const contentElement = (props.content ? <p>{props.content}</p> : null);


    let bgColor = "grey";
    if (props.backgroundColor) {
        bgColor = props.backgroundColor;
    }

    return (<>
        <div className="card" style={{ backgroundColor: bgColor }}>
            <h2>{props.title}</h2>
            {subtitleContent}
            {contentElement}
        </div>
    </>);
}