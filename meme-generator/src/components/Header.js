import trollFace from "../trollFace.svg";

export default function Header() {
    return (
        <div className="header">
            <img src={trollFace} className="header-img" />
            <span className="header-title" >Meme Generator</span>
        </div>
    )
}