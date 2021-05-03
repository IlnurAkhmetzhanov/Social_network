import React, { component } from "react";
import s from "./new_message.module.css"
import {add_message_ActionCreator, print_message_ActionCreator} from "../../../redux/dialogsReducer";

import {connect} from "react-redux";
import {add_post_ActionCreator, print_post_ActionCreator} from "../../../redux/profileReducer";
import New_message from "./new_message";
import messageForm from "./new_message";

// const New_message_container=(props)=>{
//      let ref_new_message=React.createRef();
//
//     let print_message=(text)=>{
//         props.dispatch(print_message_ActionCreator(text))
//     }
//
//
//     let onchange=()=>{
//
//         let text=ref_new_message.current.value;
//         props.dispatch(print_message_ActionCreator(text))
//
//     }
//     let onclick=()=>{
//         props.dispatch(add_message_ActionCreator())
//          props.dispatch(print_message_ActionCreator(""))
//     }
//
//
//         return(
//             <New_message print_message={print_message} onclick={onclick} new_message={props.state.messages.new_message }  />
//
//         )
//     }
const mapDispatchToProps=(dispatch)=>{
    return (
        {

            onSubmit:(message)=>dispatch(add_message_ActionCreator(message))

        }
    )
}


    const mapStateToProps=(state)=>{
        return(
            {
                new_message:state.messages.new_message
            }

        )

    }

    const New_message_container=connect(mapStateToProps,mapDispatchToProps)(messageForm)


export default New_message_container;