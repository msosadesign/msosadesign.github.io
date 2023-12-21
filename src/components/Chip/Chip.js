import "./Chip.css"

export default function Chip(props) {
    return(
        <button className="chip caption">{props.label}</button>
    )
}