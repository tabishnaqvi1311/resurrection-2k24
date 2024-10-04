import { Team } from "./Team";

type ParticipationType = 'solo' | 'duet' | 'group';

export type EventSelectionFormProps = {
    collegeName: string
    eventCategory: string,
    eventName: string,
    participationType: ParticipationType | string,
    team: Team[]
    updateFields: (fields: any) => void;
}