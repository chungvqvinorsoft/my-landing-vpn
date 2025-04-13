import { FormItem } from "../../types/formItem"
import { regexEmail, regexPassword, regexPhoneNumber } from "../../utils/regext"



export const listItemLogin: Array<FormItem> = [
    {
        label: "Username",
        name: 'username',
        layout: 'vertical',
        rules: [{ required: true, message: 'Please input your Username!' }],
        placeholder: 'Username',
        inputType: 'INPUT'
    },
    {
        label: "Password",
        name: 'password',
        layout: 'vertical',
        rules: [
            { required: true, message: 'Please input your Password!' },
            {
                pattern: regexPassword
                , message: 'Password must be at least 6 characters long and include uppercase letters, lowercase letters, numbers, and special characters.'
            }],
        placeholder: 'Password',
        inputType: 'INPUT'
    },
]
export const listItemSignUp: Array<FormItem> = [
    {
        label: "Username",
        name: 'username',
        layout: 'vertical',
        rules: [{ required: true, message: 'Please input your Username!' }],
        placeholder: 'Username',
        inputType: 'INPUT'
    },
    {
        label: "Email",
        name: 'email',
        layout: 'vertical',
        rules: [
            { required: true, message: 'Please input your Email!' },
            {
                pattern: regexEmail
                , message: 'Email format is invalid!'
            }
        ],
        placeholder: 'Email',
        inputType: 'INPUT'
    },
    {
        label: "Phone Number",
        name: 'phoneNumber',
        layout: 'vertical',
        rules: [
            { required: true, message: 'Please input your Phone Number!' },
            {
                pattern: regexPhoneNumber,
                message: 'Phone Number format is invalid!'
            }
        ],
        placeholder: 'Phone Number',
        inputType: 'INPUT'
    },
    {
        label: "Password",
        name: 'password',
        layout: 'vertical',
        rules: [
            { required: true, message: 'Please input your Password!' },
            {
                pattern: regexPassword
                , message: 'Password must be at least 6 characters long and include uppercase letters, lowercase letters, numbers, and special characters.'
            }],
        placeholder: 'Password',
        inputType: 'INPUT'
    },
]

export const tabs = [
    {
        key: '#si',
        label: 'Sign in',
        children: listItemLogin
    },
    {
        key: '#su',
        label: 'Sign up',
        children: listItemSignUp
    },
]