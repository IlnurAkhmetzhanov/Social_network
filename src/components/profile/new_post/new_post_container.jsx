import React, { component } from "react";
import s from "./new_post.module.css"
import New_post from "./new_post";
import {add_post_ActionCreator, print_post_ActionCreator} from "../../../redux/profileReducer";
import {connect} from "react-redux";



// // const New_post_container=(props)=>{
//     let new_post=React.createRef();
//
//     let add_new_post=()=> {
//         props.dispatch({type:"add_post"})
//
//           props.dispatch({type:"print_post",text:""})
//     }
//
// let post_change=()=>{
//
//      let text = new_post.current.value;
//
//     props.dispatch({type:"print_post",text:text})
// }
//     let print_post=(text)=>{
//         props.dispatch(print_post_ActionCreator(text))}
//
//     return(
//         <New_post onClick={add_new_post} print_post={print_post} new_post={props.state.posts.new_post}/>)
// }

let mapDispatchToProps=(dispatch)=>{
    return({
            onClick: (text) => {
                 dispatch(add_post_ActionCreator())

                dispatch(print_post_ActionCreator(text))
                dispatch({type:"print_post",text:""})
            },
            print_post:(text)=>{
                dispatch(print_post_ActionCreator(text))
            }
        }



    )
}
let mapStateToProps=(state)=>{

    return(
        {

            new_post:state.posts.new_post
        }

    )
}


const New_post_container=connect(mapStateToProps,mapDispatchToProps)(New_post);

export default New_post_container;