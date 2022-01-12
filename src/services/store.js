import createHook from "zustand";

export const useStore = createHook((set) => ({
    loading: false,
    setLoading: (loading) => set({ loading }),

    firstName: '',
    setFirstName: (firstName) => set({ firstName }),

    lastName: '',
    setLastName: (lastName) => set({ lastName }),

    statusToChange: '',
    setStatusToChange: (statusToChange) => set({ statusToChange }),

    idOfChange: '',
    setidOfChange: (idOfChange) => set({ idOfChange }),

    usersList: [],
    setUsersList : (usersList) => set({ usersList }),

    modalOpen: false,
    setModalOpen: (modalOpen) => set({ modalOpen }),

    errorMessage: '',
    setErrorMessage: (errorMessage) => set({ errorMessage }),
}));


