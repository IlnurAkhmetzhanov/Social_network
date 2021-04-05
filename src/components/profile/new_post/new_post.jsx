import React, { component } from "react";
import s from "./new_post.module.css"



const New_post=(props)=>{
    let new_post=React.createRef();

    // let add_new_post=()=> {
    //     props.dispatch({type:"add_post"})
    //
    //       props.dispatch({type:"print_post",text:""})
    // }

    let post_change=()=>{

        let text = new_post.current.value;

        props.print_post(text);

    }


    return(


            <div className={s.new_post}>
                <div>
                <textarea type="text" ref={new_post} onChange={post_change} value={props.new_post}  />
                <button type="button"   onClick={props.onClick}  >Опубликовать</button>

            </div>


         </div>







    )
}
export default New_post;