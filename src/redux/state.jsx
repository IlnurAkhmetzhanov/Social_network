import {rerender} from "../render";


let data={
    messages_data:[{name:"Усманов Рушан", message:"Халь ничек?"},{name:"Лукоянов Михаил",message:"Закрой комнату"}],
    posts_data:[{name:"Малахов Владимир",post:"В Рыбушкино всегда солнечно"},{name:"Малахов Владимир",post:"В Рыбушкино всегда солнечно"}],
    new_post:"azat"
}
window.data=data;


export let add_post=()=>{
    let post={
        name:"Усманов Рушан",
            post:data.new_post
    };
    data.posts_data.push(post);
    rerender(data);
}

export let print_post=(text)=>{
    data.new_post=text;
         rerender(data);
}


export default data;