import {RiLinkedinBoxFill,RiLinkedinBoxLine,RiGithubFill,RiFacebookBoxFill,RiFacebookBoxLine,RiMailLine, RiMailFill} from 'react-icons/ri'
export default function SocialMediaIcon({link,icon}) {
    console.log(link,icon)
    
    const renderIcon = function(icon) {
        switch(icon) {
            case "linkedin":
            return <RiLinkedinBoxFill href={link}/>
            case "facebook":
            return <RiFacebookBoxFill href={link}/>
            case "github":
            return <RiGithubFill href={link}/>
            case "mail":
            return <RiMailFill href={link}/>
                    
    }}

    return(
        <div className="text-5xl">
        {
            renderIcon(icon)
        }
        </div>
    )
}
