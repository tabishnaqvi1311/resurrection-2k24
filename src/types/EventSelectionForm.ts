import { Team } from "./Team";

export type EventSelectionFormProps = {
    collegeName: string
    eventCategory: string,
    eventName: string,
    team: Team[]
    updateFields: (fields: any) => void;
}