///<reference types="vite-plugin-svgr/client"/>
import Planning from "../../images/icon-planning.svg?react";
import Calendar from "../../images/icon-calendar.svg?react";
import Todo from "../../images/icon-todo.svg?react";
import Reminders from "../../images/icon-reminders.svg?react";

export interface ItemProps {
    text: string,
    icon?: React.FC
}

export const FEATURES: ItemProps[] = [
    {text: "Todo", icon: Todo},
    {text: "Calendar", icon: Calendar},
    {text: "Reminders", icon: Reminders},
    {text: "Planning", icon: Planning},
];

export const COMPANY: ItemProps[] = [
    {text: 'History'},
    {text: 'Our team'},
    {text: 'Blog'},
]