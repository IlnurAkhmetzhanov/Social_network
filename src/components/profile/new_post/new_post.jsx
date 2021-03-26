import React, { component } from "react";
import s from "./new_post.module.css"
import {print_post} from "../../../redux/state";


const New_post=(props)=>{
    let new_post=React.createRef();

    let add_new_post=()=> {

        props.add_post();
        print_post("")
    }

let post_change=()=>{
    let text = new_post.current.value;
    print_post(text);
}


    return(


            <div className={s.new_post}>
                <div>
                <input type="text" ref={new_post} onChange={post_change} value={props.new_post}  />
                <button type="button"   onClick={add_new_post}  >Опубликовать</button>

            </div>


         </div>







    )
}
export default New_post;