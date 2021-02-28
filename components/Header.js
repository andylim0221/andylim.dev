const style = {
    "display": "flex",
   "align-content": "center",
    "justify-content": "space-between"
}

export default function Header() {
    return(
        <div style={{style}}>
        <p>Andy</p>
        <p>Profile</p>
        <p>Blog</p>
        <p>Contact</p>
        </div>
    )
}