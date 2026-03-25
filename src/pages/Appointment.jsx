import React, { useContext, useEffect, useState, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import RelatedDoctors from '../components/RelatedDoctors'

const Appointment = () => {
    const { docId } = useParams()
    const { doctors, currencySymbol, bookAppointment: saveAppointment } = useContext(AppContext);
    const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

    const [docInfo, setDocInfo] = useState(null)
    const [docSlots, setDocSlots] = useState([])
    const [slotIndex, setSlotIndex] = useState(0)
    const [slotTime, setSlotTime] = useState('')
    

    // Define constants to avoid magic numbers
    const START_HOUR = 10
    const END_HOUR = 21
    const INTERVAL_MINUTES = 30

    // Fetch doctor information based on the docId parameter.
    const fetchDocInfo = () => {
        const foundDoc = doctors.find(doc => doc._id === docId)
        setDocInfo(foundDoc)
    }

    // Generate available time slots for the next 7 days.
    const getAvailableSlots = useCallback(() => {
        const newDocSlots = []
        // Get current date
        const today = new Date()

        for (let i = 0; i < 7; i++) {
            // Create a new date instance for each day
            const currentDate = new Date(today)
            currentDate.setDate(today.getDate() + i)

            // Set the end time (today's date with END_HOUR) for the current day
            const endTime = new Date(currentDate)
            endTime.setHours(END_HOUR, 0, 0, 0)

            // Set starting time based on whether it is today or a future day
            if (today.getDate() === currentDate.getDate()) {
                if (currentDate.getHours() < START_HOUR) {
                    currentDate.setHours(START_HOUR, 0, 0, 0)
                } else {
                    // If current hour is already past the start hour, shift ahead
                    currentDate.setHours(currentDate.getHours() + 1)
                    currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
                }
            } else {
                currentDate.setHours(START_HOUR, 0, 0, 0)
            }

            const timeSlots = []

            // Generate slots in INTERVAL_MINUTES increments until the endTime
            while (currentDate < endTime) {
                const formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                timeSlots.push({
                    datetime: new Date(currentDate),
                    time: formattedTime
                })
                currentDate.setMinutes(currentDate.getMinutes() + INTERVAL_MINUTES)
            }

            newDocSlots.push(timeSlots)
        }
        setDocSlots(newDocSlots)
    }, [])

    // When booking, validate that a slot is selected and the slots exist.
    const bookAppointment = async () => {
        if (!docSlots[slotIndex] || !docSlots[slotIndex][0]) {
            alert("No available slots for this day.")
            return
        }
        if (!slotTime) {
            alert("Please select a time slot before booking.")
            return
        }

        const date = docSlots[slotIndex][0].datetime
        const day = date.getDate()
        const month = date.getMonth() + 1
        const year = date.getFullYear()

        const slotDate = `${day}/${month}/${year}`
        
        // Create the appointment object
        const appointmentData = {
            doctor: docInfo,
            date: slotDate,
            time: slotTime
        }

        // Save the appointment using the context function
        saveAppointment(appointmentData)
        
        // Show success message
        alert(`Appointment booked successfully for ${slotDate} at ${slotTime}`)
        
        // Reset selections
        setSlotTime('')
        
        console.log("Booking appointment for:", slotDate, slotTime)
    }

    // When the doctors array is populated, fetch the doctor info.
    useEffect(() => {
        if (doctors.length > 0) {
            fetchDocInfo()
        }
    }, [doctors, docId])

    // Once the doctor info is available, generate the available slots.
    useEffect(() => {
        if (docInfo) {
            getAvailableSlots()
        }
    }, [docInfo, getAvailableSlots])

    return docInfo ? (
        <div>
            {/* ---------- Doctor Details ----------- */}
            <div className="flex flex-col sm:flex-row gap-4">
                <div>
                    <img className="bg-primary w-full sm:max-w-72 rounded-lg" src={docInfo.image} alt={docInfo.name} />
                </div>

                <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
                    {/* Doctor Info: name, degree, experience */}
                    <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
                        {docInfo.name}
                        <img className="w-5" src={assets.verified_icon} alt="Verified" />
                    </p>
                    <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
                        <p>{docInfo.degree} - {docInfo.speciality}</p>
                        <button className="py-0.5 px-2 border text-xs rounded-full">{docInfo.experience}</button>
                    </div>

                    {/* About the Doctor */}
                    <div>
                        <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
                            About <img className="w-3" src={assets.info_icon} alt="Info" />
                        </p>
                        <p className="text-sm text-gray-500 max-w-[700px] mt-1">{docInfo.about}</p>
                    </div>

                    <p className="text-gray-500 font-medium mt-4">
                        Appointment fee: <span className="text-gray-600">{currencySymbol}{docInfo.fees}</span>
                    </p>
                </div>
            </div>

            {/* ---------- Booking Slots ---------- */}
            <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
                <p>Booking slots</p>
                <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
                    {docSlots.length > 0 && docSlots.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => setSlotIndex(index)}
                            className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-primary text-white' : 'border border-gray-200'}`}
                        >
                            <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                            <p>{item[0] && item[0].datetime.getDate()}</p>
                        </div>
                    ))}
                </div>

                <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
                    {docSlots.length > 0 && docSlots[slotIndex].map((item, index) => (
                        <p
                            key={index}
                            onClick={() => setSlotTime(item.time)}
                            className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-primary text-white' : 'text-gray-400 border border-gray-300'}`}
                        >
                            {item.time.toLowerCase()}
                        </p>
                    ))}
                </div>

                <button
                    onClick={bookAppointment}
                    className="bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6"
                >
                    Book an appointment
                </button>
            </div>

            {/* -------- Related Doctors -------- */}
            <RelatedDoctors speciality={docInfo.speciality} docId={docId} />
        </div>
    ) : null
}

export default Appointment
