import { log } from "console"

type GreetProps = {
    name:string
    messageCount:number
    isLoggedIn:boolean
    messageCount2?:number
}

export const Greet = (props:GreetProps) => {
    const {messageCount2 = 0} =props
    return(
        <div>
            <h2> 
                {props.isLoggedIn
                ? `Welcome ${props.name}! You have ${props.messageCount} unread Messages`
                :'Welcome Guest'}
            </h2>
        </div>
    )
}