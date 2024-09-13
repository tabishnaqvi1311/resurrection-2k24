import { EventSelectionFormProps } from "@/types/EventSelectionForm";
import FormWrapper from "./FormWrapper";
import { useEventCart } from "@/hooks/useEventCart";
import { eventCategories, eventData } from "@/constants";
import { useState } from "react";

export default function EventSelectionForm({
    collegeName,
    eventCategory,
    eventName,
    team,
    updateFields
}: EventSelectionFormProps) {


    const { addToCart, cart } = useEventCart();

    const [teamState, setTeamState] = useState(team);

    const getEventNames = (category: string): string[] => {
        let eventNames: string[] = [];
        eventData.map((eve) => {
            if (eve.category === category) {
                eventNames.push(eve.name);
            }
        })
        return eventNames;
    }


    return (
        <FormWrapper title={`Event Details`} subtitle="Please fill in the event details">
            <div className="mb-4">

                <div className="flex flex-col items-start">
                    <label className="">College Name</label>
                    <input
                        type="text"
                        placeholder="College Name"
                        className="p-2 focus:outline-none w-full rounded-lg text-background"
                        required
                        value={collegeName}
                        onChange={(e) => updateFields({ collegeName: e.target.value })}
                    />
                </div>

                <label htmlFor="eventCategory" className="block text-sm font-medium text-gray-200">Event Category</label>
                <select
                    id="eventCategory"
                    value={eventCategory}
                    onChange={(e) => updateFields({ eventCategory: e.target.value })}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
                >
                    <option value="" disabled>Select Event Category</option>
                    {eventCategories.map((category) => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>
            </div>

            {
                getEventNames(eventCategory).length > 0 && (
                    <div className="mb-4">

                        <label htmlFor="eventName" className="block text-sm font-medium text-gray-200">Event Name</label>
                        <select
                            id="eventName"
                            value={eventName}
                            onChange={(e) => updateFields({ eventName: e.target.value })}
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
                        >
                            <option value="" disabled>Select Event Name</option>
                            {getEventNames(eventCategory).map((event) => (
                                <option key={event} value={event}>{event}</option>
                            ))}
                        </select>

                    </div>
                )
            }


            {
                teamState.map((team, index) => (
                    <div key={index} className="mb-4">
                        <div className="flex flex-col items-start">
                            <label className="">Team Member {index + 1}</label>
                            <input
                                type="text"
                                placeholder="Team Member Name"
                                className="p-2 focus:outline-none w-full rounded-lg text-background"
                                required
                                value={team.name}
                                onChange={(e) => {
                                    let newTeam = teamState;
                                    newTeam[index].name = e.target.value;
                                    setTeamState([...newTeam]);
                                    updateFields({ team: newTeam });
                                }}
                            />
                        </div>
                        <div className="flex flex-col items-start">
                            <label className="">Member {index + 1} Phone</label>
                            <input
                                type="text"
                                placeholder="Team Member Name"
                                className="p-2 focus:outline-none w-full rounded-lg text-background"
                                required
                                value={team.phone}
                                onChange={(e) => {
                                    let newTeam = teamState;
                                    newTeam[index].phone = e.target.value;
                                    setTeamState([...newTeam]);
                                    updateFields({ team: newTeam });
                                }}
                            />
                        </div>
                    </div>
                ))
            }

            <button
                type="button"
                onClick={() => {
                    setTeamState([...teamState, { name: "", phone: "" }]);
                }}
                className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" >
                Add Team Member
                </button>
            



            {eventName.length > 0 && (
                <button
                    type="button"
                    onClick={() => {
                        addToCart({
                            eventCategory,
                            eventName,
                            team: teamState
                        });
                        updateFields({ eventCategory: "" });
                        updateFields({ eventName: "" });
                        updateFields({ team: [] });
                        setTeamState([]);
                    }}
                    className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Add to Cart
                </button>
            )}

        </FormWrapper>
    )
}