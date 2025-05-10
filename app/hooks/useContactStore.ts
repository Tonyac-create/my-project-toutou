import { create } from 'zustand'

interface ContactForm {
    firstName: string
    lastName: string
    email: string
    phone: string
    message: string
}

interface ContactStore {
    formData: ContactForm
    setFormData: (newData: Partial<ContactForm>) => void
    resetForm: () => void
}

const initialState: ContactForm = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
}

export const useContactStore = create<ContactStore>((set) => ({
    formData: initialState,
    setFormData: (newData) => 
        set((state) => ({
            formData: {
                ...state.formData,
                ...newData
            }
        })),
    resetForm: () => set({ formData: initialState })
}))
