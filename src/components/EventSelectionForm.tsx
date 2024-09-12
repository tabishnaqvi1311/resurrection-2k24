'use client';

import { EventSelectionFormProps } from "@/types/EventSelectionForm";
import FormWrapper from "./FormWrapper";
import { useState } from "react";

export default function EventSelectionForm({
    eventName,
    eventCategory,
    members,
    updateFields
}: EventSelectionFormProps) {

    const [finalEventData, setFinalEventData] = useState([]);

    return (
        <FormWrapper title={`Event Details`} subtitle="Please fill in the event details">
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                    <label htmlFor="eventName" className="block text-sm font-medium text-gray-700">
                        Event Name
                    </label>
                    <input
                        type="text"
                        name="eventName"
                        id="eventName"
                        autoComplete="eventName"
                        value={eventName}
                        onChange={(e) => updateFields({ eventName: e.target.value })}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                </div>
                <div>
                    <label htmlFor="eventCategory" className="block text-sm font-medium text-gray-700">
                        Event Category
                    </label>
                    <input
                        type="text"
                        name="eventCategory"
                        id="eventCategory"
                        autoComplete="eventCategory"
                        value={eventCategory}
                        onChange={(e) => updateFields({ eventCategory: e.target.value })}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                </div>
            </div>
        </FormWrapper>
    )
}