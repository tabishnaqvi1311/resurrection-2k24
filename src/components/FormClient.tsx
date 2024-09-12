'use client';

import { EventCartProvider } from "@/context/EventCartContext";
import Form from "./Form";

export default function FormClient() {
    return (
        <EventCartProvider>
            <Form/>
        </EventCartProvider>
    )
}