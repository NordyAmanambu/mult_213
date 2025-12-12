import './Header.css';

// Add a new component for the Header
export function Header(props) {
    // props is some JSON that looks like {title: str, message: str}
    return (<>
        <header>
            <h1>{props.title}</h1>
            <p>{props.message}</p>
        </header>
    </>);
}