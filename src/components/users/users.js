import React, { component } from "react";
import s from "./users.module.css"
import * as axios from "axios";

export  class Users extends React.Component{

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.current_page}&count=${this.props.users_page}`).then(response=>{

            this.props.set_users(response.data.items)
              // this.props.set_total_users(response.data.totalCount)


        })
    }
    set_page_server=(page)=>{
        this.props.set_current_page(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.current_page}`).then(response=>{

            this.props.set_users(response.data.items)


        })

    }


    render=()=>{

        let pages=[]
        for(let i=1;i<=Math.ceil(this.props.total_users/this.props.users_page);i++){

            pages.push(i);

        }


        return(<div>
            <div>

            {
                pages.map(el=>{return<button className={this.props.current_page===el&& s.pages_count} onClick={()=>{this.set_page_server(el) }} >{el}</button>})

            }



            </div>


            {


                this.props.users.map(el=> <div className={s.main} >
                    <div className={s.logo}>
                        <img src={el.photos.small?el.photos.small:"https://maxcdn.icons8.com/Share/icon/ultraviolet/Users/administrator1600.png"}/>
                    </div>
                    <div className={s.user_inf}>
                        <h2>{el.name}</h2>
                        <h3>{el.city}</h3>
                    </div>
                    <div className={s.button}>
                        {
                            (el.followed)
                                ? <button onClick={()=>{this.props.unfollow(el.id)}} >Удалить</button>

                                :<button onClick={()=>{this.props.follow(el.id)}} >Добавить</button>
                        }
                    </div>
                </div>)}

        </div>)
    }

    }






