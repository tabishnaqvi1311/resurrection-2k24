import { EventSelectionFormProps } from "@/types/EventSelectionForm";
import FormWrapper from "./FormWrapper";

export default function EventSelectionForm({
    eventCategory,
    eventName,
    participantCount,
    updateFields
}: EventSelectionFormProps) {
    return (
        <FormWrapper title={`Event Details`} subtitle="Please fill in the event details">
            <div className="flex flex-col gap-4 text-black">
                <input
                    type="text"
                    placeholder="Event Category"
                    className="p-2 rounded-lg focus:outline-none"
                    required
                    value={eventCategory}
                    onChange={(e) => updateFields({ eventCategory: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Event Name"
                    className="p-2 rounded-lg focus:outline-none"
                    required
                    value={eventName}
                    onChange={(e) => updateFields({ eventName: e.target.value })}
                />
                <input
                    type="number"
                    placeholder="Participant Count"
                    className="p-2 rounded-lg focus:outline-none"
                    required
                    value={participantCount}
                    onChange={(e) => updateFields({ participantCount: parseInt(e.target.value) })}
                />
            </div>
        </FormWrapper>
    )
}