import s from "./dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogUser = (props) => {
    return (

        <NavLink to={"/dialog/" + props.id}>{props.name}</NavLink>
    );


}


const Dialogs = () => {

    return (

        <div className={s.dialogs_main}>

            <div className={s.dialogs_users}>
                <DialogUser name="Азат" id="1"/>
                <DialogUser name="Рушан" id="2" />
            </div>

            <div className={s.dialogs_message}>
                <div className={s.message}> Hi</div>
                <div className={s.message}>Who</div>
                <div className={s.message}>Hi</div>
                <div className={s.message}>who</div>
            </div>


        </div>


    );


}
export default Dialogs;

