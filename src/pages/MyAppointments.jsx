
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const MyAppointments = () => {
    const { appointments, cancelAppointment } = useContext(AppContext);

    return (
        <div>
            <p className='pb-3 mt-12 font-medium text-zinc-700 border-b'>My Appointments</p>
            <div>
                {appointments.length === 0 ? (
                    <p className="text-gray-500 mt-4">No appointments booked.</p>
                ) : appointments.map((item, index) => (
                    <div key={index} className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-4 border-b'>
                        <div>
                            <img className='w-32 bg-indigo-50 rounded' src={item.doctor.image} alt="" />
                        </div>
                        <div className='flex-1 text-sm text-zinc-600'>
                            <p className='text-neutral-800 font-semibold'>{item.doctor.name}</p>
                            <p>{item.doctor.speciality}</p>
                            <p className='text-zinc-700 font-medium mt-1'>Address:</p>
                            <p className='text-xs'>{item.doctor.address.line1}</p>
                            <p className='text-xs'>{item.doctor.address.line2}</p>
                            <p className='text-xs mt-1'>
                                <span className='text-sm text-neutral-700 font-medium'>Date & Time:</span> {item.date} | {item.time}
                            </p>
                        </div>
                        <div className='flex flex-col gap-2 justify-end'>
                            <button className='text-sm text-stone-500 py-2 border rounded hover:bg-primary hover:text-white transition-all duration-300'>
                                Pay Online
                            </button>
                            <button
                                className='text-sm text-stone-500 py-2 border rounded hover:bg-red-600 hover:text-white transition-all duration-300'
                                onClick={() => {
                                    if (window.confirm('Are you sure you want to cancel this appointment?')) {
                                        cancelAppointment(index);
                                        alert('Appointment cancelled successfully');
                                    }
                                }}
                            >
                                Cancel Appointment
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyAppointments;