import { Price } from "../../types/price";

export const prices:Array<Price> = [
    {
        key: '#fr',
        name: "Free Plan",
        features: [
            "Unlimited Bandwitch",
            "Encrypted Connection",
            "No Traffic Logs",
            "Works on All Devices"
        ],
        price: "Free"
    },
    {
        key: '#st',
        name: "Standard Plan",
        features: [
            "Unlimited Bandwitch",
            "Encrypted Connection",
            "No Traffic Logs",
            "Works on All Devices",
            "Connect Anyware"
        ],
        price: '$9 / mo'
    },
    {
        key: '#pr',
        name: "Premium Plan",
        features: [
            "Unlimited Bandwitch",
            "Encrypted Connection",
            "No Traffic Logs",
            "Works on All Devices",
            "Connect Anyware",
            "Get New Features"
        ],
        price: '$12 / mo'
    },
    
]