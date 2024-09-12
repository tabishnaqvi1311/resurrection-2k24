import { EventSelectionFormProps } from "@/types/EventSelectionForm";
import FormWrapper from "./FormWrapper";
import { useEventCart } from "@/hooks/useEventCart";
import { eventCategories, eventData } from "@/constants";

export default function EventSelectionForm({
    eventCategory,
    eventName,
    team,
    updateFields
}: EventSelectionFormProps) {

    const { addToCart, cart } = useEventCart();

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

            {eventName.length > 0 && (
                <button
                    type="button"
                    onClick={() => {
                        addToCart({
                            eventCategory,
                            eventName,
                            team: []
                        });
                        updateFields({ eventCategory: "" });
                        updateFields({ eventName: "" });
                        updateFields({ team: [] });
                    }}
                    className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Add to Cart
                </button>
            )}

        </FormWrapper>
    )
}