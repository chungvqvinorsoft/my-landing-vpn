import faceBookIcon from "../../access/icons/facebook.svg";
import twiterIcon from "../../access/icons/twiter.svg";
import instagramIcon from "../../access/icons/instagram.svg";
import { FormItem } from "../../types/formItem";
import { regexEmail, regexPhoneNumber } from "../../utils/regext";
export const social = [
    {
        key: "#fb",
        icon: faceBookIcon
    },
    {
        key: "#tw",
        icon: twiterIcon
    },
    {
        key: "#ig",
        icon: instagramIcon
    }
]

export const details = [
    {
        key: '#pr',
        label: 'Product',
        child: ["Download", "Pricing", "Locations", "Server", "Countries", "Blog"]
    },

    {
        key: '#eg',
        label: 'Engage',
        child: ["LaslesVPN ? ", "FAQ", "Tutorials", "About Us", "Privacy Policy", "Terms of Service"]
    },
    {
        key: '#em',
        label: 'Earn Money',
        child: ["Affiliate", "Become Partner"]
    },
]

export const userContact: Array<FormItem> = [
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
]