import { createContext, useState } from "react";
import { doctors } from "../assets/assets";

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const [appointments, setAppointments] = useState([]);
    const currencySymbol = '$';

    const bookAppointment = (appointment) => {
        setAppointments(prev => [...prev, appointment]);
    };

    const cancelAppointment = (indexToRemove) => {
        setAppointments(prev => prev.filter((_, i) => i !== indexToRemove));
    };

    const value = {
        doctors,
        currencySymbol,
        appointments,
        bookAppointment,
        cancelAppointment
    };

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;