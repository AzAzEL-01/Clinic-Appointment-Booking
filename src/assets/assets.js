import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Naruto Uzumaki',
        image: doc1,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '5 Years',
        about: 'Experienced general physician providing comprehensive healthcare and preventive services.',
        fees: 50,
        address: {
            line1: '123 Konoha Street',
            line2: 'Melbourne, Australia'
        }
    },
    {
        _id: 'doc2',
        name: 'Sakura Haruno',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '7 Years',
        about: 'Dedicated gynecologist specializing in women\'s health and wellness.',
        fees: 60,
        address: {
            line1: '456 Cherry Blossom Avenue',
            line2: 'Sydney, Australia'
        }
    },
    {
        _id: 'doc3',
        name: 'Levi Ackerman',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dermatologist focused on skin care, diagnosis, and treatment of skin conditions.',
        fees: 30,
        address: {
            line1: '789 Titan Road',
            line2: 'Brisbane, Australia'
        }
    },
    {
        _id: 'doc4',
        name: 'Kim Dokja',
        image: doc4,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Pediatrician committed to children\'s health and development.',
        fees: 40,
        address: {
            line1: '321 Reader Lane',
            line2: 'Perth, Australia'
        }
    },
    {
        _id: 'doc5',
        name: 'Charlotte Linlin',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '6 Years',
        about: 'Neurologist with expertise in diagnosing and treating neurological disorders.',
        fees: 50,
        address: {
            line1: '654 Pirate Street',
            line2: 'Adelaide, Australia'
        }
    },
    {
        _id: 'doc6',
        name: 'L Lawliet',
        image: doc6,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '5 Years',
        about: 'Specialist in neurology, providing care for a range of neurological conditions.',
        fees: 50,
        address: {
            line1: '654 Detective Street',
            line2: 'Adelaide, Australia'
        }
    },
    {
        _id: 'doc7',
        name: 'Goku Son',
        image: doc7,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '8 Years',
        about: 'General physician offering primary care and preventive health services.',
        fees: 50,
        address: {
            line1: '123 Saiyan Street',
            line2: 'Melbourne, Australia'
        }
    },
    {
        _id: 'doc8',
        name: 'Okabe Rintarou',
        image: doc8,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '6 Years',
        about: 'Gynecologist with a focus on reproductive health and patient education.',
        fees: 60,
        address: {
            line1: '456 Capsule Avenue',
            line2: 'Sydney, Australia'
        }
    },
    {
        _id: 'doc9',
        name: 'Sailor Moon',
        image: doc9,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dermatologist skilled in treating a variety of skin conditions.',
        fees: 30,
        address: {
            line1: '789 Moonlight Road',
            line2: 'Brisbane, Australia'
        }
    },
    {
        _id: 'doc10',
        name: 'Edward Elric',
        image: doc10,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '5 Years',
        about: 'Pediatrician dedicated to providing quality healthcare for children.',
        fees: 40,
        address: {
            line1: '321 Alchemy Lane',
            line2: 'Perth, Australia'
        }
    },
    {
        _id: 'doc11',
        name: 'Mikasa Ackerman',
        image: doc11,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '7 Years',
        about: 'Neurologist experienced in managing complex neurological cases.',
        fees: 50,
        address: {
            line1: '654 Ereh Street',
            line2: 'Adelaide, Australia'
        }
    },
    {
        _id: 'doc12',
        name: 'Natsu Dragneel',
        image: doc12,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '6 Years',
        about: 'Neurologist providing patient-centered neurological care.',
        fees: 50,
        address: {
            line1: '654 Dragon Street',
            line2: 'Adelaide, Australia'
        }
    },
    {
        _id: 'doc13',
        name: 'AUdrey Hall',
        image: doc13,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '9 Years',
        about: 'General physician with a focus on holistic patient care.',
        fees: 50,
        address: {
            line1: '123 Telepathic Street',
            line2: 'Melbourne, Australia'
        }
    },
    {
        _id: 'doc14',
        name: 'Klien Morretti',
        image: doc14,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '8 Years',
        about: 'Gynecologist specializing in comprehensive women\'s healthcare.',
        fees: 60,
        address: {
            line1: '456 Tingen Avenue',
            line2: 'Sydney, Australia'
        }
    },
    {
        _id: 'doc15',
        name: 'Makise Kurisu',
        image: doc15,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dermatologist with experience in cosmetic and medical dermatology.',
        fees: 30,
        address: {
            line1: '789 Steins Road',
            line2: 'Brisbane, Australia'
        }
    },
]