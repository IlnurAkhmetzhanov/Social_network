import React from "react"

export const emptyError=(value)=>{
    if(value) return undefined
    else return "You enter empty"
}
export const maxLength=(value)=>{
    if(value.length>20) return  "Max length 20"
    else return undefined
}
