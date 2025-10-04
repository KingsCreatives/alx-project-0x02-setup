import { ReactNode } from "react";

export interface CardProps{
    title: string;
    content: string;
}

export interface PostModalProps{
    onClose : ()=> void
    onSubmit: (data: PostProps) => void
}

export interface PostProps extends CardProps{
  id: number
  userId : number
}

export interface ButtonProps{
    size : "small" | "medium" | "large" ;
    shape: "rounded-sm" | "rounded-md" | "rounded-full";
    children?: ReactNode;
    onClick?: ()=> void;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    className?: string
}

interface GeoLocation {
    lat: string;
    lng: string
}

interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: GeoLocation;
}

interface Company {
    name : string;
    catchPhrase : string;
    bs: string
}

export interface UserProps{
    id: number;
    name : string;
    username: string;
    email: string;
    address : Address;
    phone: string;
    website: string;
    company : Company
}