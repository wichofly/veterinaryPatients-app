export interface Patient {
  id: string;
  name: string;
  caretaker: string;
  email: string;
  date: Date;
  symptom: string;
}

// New type without `id` from `Patient`. It is better to use type.
export type DraftPatient = Omit<Patient, 'id'>;
