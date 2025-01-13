import { create } from 'zustand';
import { Patient } from './interfaces';

interface PatientState {
  patients: Patient[];
}

export const usePatientStore = create<PatientState>(() => ({
  patients: [],
}));
