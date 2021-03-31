export let store= {
    rerender() {
        alert("")
    },

    _data: {
        new_message: "Напишите сообщение",
        messages_data: [{name: "Усманов Руш", message: "Халь ничек?"}, {
            name: "Лукоянов Михаил",
            message: "Закрой комнату"
        }],
        posts_data: [{name: "Малахов Владимир", post: "В Рыбушкино всегда солнечно"}],
        new_post: "text"
    },

    subscribe(observer) {
        this.rerender = observer;
    },

    getData() {
        return this._data;
    },


    dispatch(action) {
        if (action.type === "add_post") {
            let post = {
                name: "Усманов Рушан",
                post: this._data.new_post
            };
            this._data.posts_data.push(post);
            this.rerender(this._data);
        }
        else if (action.type === "print_post") {
            this._data.new_post = action.text;
            this.rerender(this._data);
        }

        else if (action.type === "print_message") {
            this._data.new_message = action.text;
            this.rerender(this._data)
        }
        else if (action.type === "add_message") {
            let message = {
                name: "Зайцев Георгий",
                message: this._data.new_message
            };
            this._data.messages_data.push(message);
            this.rerender(this._data);
        }
    }
};

export const add_post_ActionCreator= ()=>({type:"add_post"});
export const print_post_ActionCreator=(text)=>({type:"print_post",text:text})
export const add_message_ActionCreator= ()=>({type:"add_message"});
export const print_message_ActionCreator=(text)=>({type:"print_message",text:text})























