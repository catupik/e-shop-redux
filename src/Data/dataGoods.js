const dataGoods = [
    // Smart Blood Pressure Monitors
    {
        id: 101,
        price: 84,
        description: 'Wireless upper arm blood pressure monitor with Bluetooth synchronization.',
        name: 'Omron Platinum',
        brand: 'Omron',
        category: 'Smart Blood Pressure Monitors',
        img: 'omronplatinum'
    },
    {
        id: 102,
        price: 99,
        description: 'Automatic blood pressure monitor with touch screen and Wi-Fi connectivity.',
        name: 'QardioArm',
        brand: 'Qardio',
        category: 'Smart Blood Pressure Monitors',
        img: 'qudrioarm'
    },
    {
        id: 103,
        price: 97,
        description: 'Blood pressure monitor with Bluetooth, compatible with iOS and Android, includes heart health monitoring features.',
        name: 'Withings BPM Connect',
        brand: 'Withings',
        category: 'Smart Blood Pressure Monitors',
        img: 'withings'
    },
    {
        id: 104,
        price: 135,
        description: 'Upper arm blood pressure monitor with color display and Bluetooth connectivity.',
        name: 'Braun ExactFit 5',
        brand: 'Braun',
        category: 'Smart Blood Pressure Monitors',
        img: 'braun'
    },
    {
        id: 105,
        price: 140,
        description: 'Compact blood pressure monitor with app integration for health data management.',
        name: 'A&D Medical UltraConnect',
        brand: 'A&D',
        category: 'Smart Blood Pressure Monitors',
        img: 'A&D'
    },
    // Smart Glucometers
    {
        id: 201,
        price: 30,
        description: 'Compact glucometer with Bluetooth, easy syncing with smartphones.',
        name: 'Accu-Chek Guide',
        brand: 'Accu-Chek',
        category: 'Smart Glucometers',
        img: 'accu'
    },
    {
        id: 202,
        price: 29,
        description: 'Glucometer with trend analysis and Bluetooth connectivity for easy data sharing.',
        name: 'OneTouch Verio Flex',
        brand: 'OneTouch',
        category: 'Smart Glucometers',
        img: 'onetouch'
    },
    {
        id: 203,
        price: 95,
        description: 'Smart glucometer with app integration, provides real-time feedback.',
        name: 'FreeStyle Libre',
        brand: 'Abbott',
        category: 'Smart Glucometers',
        img: 'libre'
    },
    {
        id: 204,
        price: 85,
        description: 'Bluetooth-enabled glucometer with customizable alerts and easy data sharing.',
        name: 'Contour Next One',
        brand: 'Bayer',
        category: 'Smart Glucometers',
        img: 'nextone'
    },
    {
        id: 205,
        price: 90,
        description: 'Advanced glucometer with color display and wireless data transmission.',
        name: 'Dario LC Blood Glucose Monitor',
        brand: 'Dario Health',
        category: 'Smart Glucometers',
        img: 'dario'
    },
    // Smart Oximeters
    {
        id: 301,
        price: 288,
        description: 'Wireless oximeter with pulse and oxygen level display, compatible with smartphones.',
        name: 'Masimo MightySat',
        brand: 'Masimo',
        category: 'Smart Oximeters',
        img: 'masimomightysat'
    },
    {
        id: 302,
        price: 62,
        description: 'Portable oximeter with OLED display and Bluetooth connectivity for data tracking.',
        name: 'iHealth Air',
        brand: 'iHealth',
        category: 'Smart Oximeters',
        img: 'air'
    },
    {
        id: 303,
        price: 75,
        description: 'Compact oximeter with real-time data transmission to mobile devices.',
        name: 'Nonin Connect',
        brand: 'Nonin',
        category: 'Smart Oximeters',
        img: 'nonin'
    },
    {
        id: 304,
        price: 60,
        description: 'Finger pulse oximeter with advanced technology for accurate readings, includes Bluetooth.',
        name: 'Beurer PO60',
        brand: 'Beurer',
        category: 'Smart Oximeters',
        img: 'beurerpo'
    },
    {
        id: 305,
        price: 80,
        description: 'Smart oximeter with app connectivity for real-time monitoring and data analysis.',
        name: 'Zacurate Pro Series 500DL',
        brand: 'Zacurate',
        category: 'Smart Oximeters',
        img: 'zacurate'
    },
    // Smart Thermometers
    {
        id: 401,
        price: 32,
        description: 'Smart thermometer with fast reading and fever alert, app connectivity for tracking.',
        name: 'Kinsa Smart Ear',
        brand: 'Kinsa',
        category: 'Smart Thermometers',
        img: 'kinsa'
    },
    {
        id: 402,
        price: 65,
        description: 'Non-contact infrared thermometer with digital display, suitable for all ages.',
        name: 'Braun ThermoScan 7',
        brand: 'Braun',
        category: 'Smart Thermometers',
        img: 'braunterm'
    },
    {
        id: 403,
        price: 55,
        description: 'Digital thermometer with Bluetooth, syncs with a dedicated health monitoring app.',
        name: 'Withings Thermo',
        brand: 'Withings',
        category: 'Smart Thermometers',
        img: 'withingsterm'
    },
   
    {
        id: 404,
        price: 52,
        description: 'Smart temporal thermometer with high precision technology and Bluetooth connection.',
        name: 'Femometer Vinca II',
        brand: 'Femometer',
        category: 'Smart Thermometers',
        img: 'femometer'
    },
    // Smart Scales
    {
        id: 501,
        price: 120,
        description: 'Digital scale with body composition analysis, Bluetooth connectivity, and health app integration.',
        name: 'Withings Body+',
        brand: 'Withings',
        category: 'Smart Scales',
        img: 'withingsscale'
    },
    {
        id: 502,
        price: 150,
        description: 'Smart scale offering weight, body fat, BMI, muscle mass, and water percentage measurements.',
        name: 'Fitbit Aria Air',
        brand: 'Fitbit',
        category: 'Smart Scales',
        img: 'fitbitaria'
    },
    {
        id: 503,
        price: 180,
        description: 'Wi-Fi enabled smart scale with full body composition, heart rate monitoring, and automatic user recognition.',
        name: 'Garmin Index Smart Scale',
        brand: 'Garmin',
        category: 'Smart Scales',
        img: 'garmin'
    },
    {
        id: 504,
        price: 100,
        description: 'Smart scale with weight, BMI, body fat, and Bluetooth connectivity for seamless health tracking.',
        name: 'Eufy Smart Scale P1',
        brand: 'Eufy',
        category: 'Smart Scales',
        img: 'eufy'
    },
    // Smart Pill Dispensers
    {
        id: 601,
        price: 80,
        description: 'Automated pill dispenser with reminders, app connectivity for medication management.',
        name: 'MedMinder',
        brand: 'MedMinder',
        category: 'Smart Pill Dispensers',
        img: 'medminder'

    },
    {
        id: 602,
        price: 100,
        description: 'Intelligent pill organizer with alerts and tracking, ensures timely medication intake.',
        name: 'Hero Pill Dispenser',
        brand: 'Hero Health',
        category: 'Smart Pill Dispensers',
        img: 'hero'
    },
    {
        id: 603,
        price: 90,
        description: 'Smart pill dispenser with multiple alarms, lock feature, and medication adherence tracking.',
        name: 'PillDrill',
        brand: 'PillDrill',
        category: 'Smart Pill Dispensers',
        img: 'pilldrill'
    },
    {
        id: 604,
        price: 70,
        description: 'Compact pill organizer with built-in reminders and app connectivity for easy medication management.',
        name: 'Tricella Pillbox',
        brand: 'Tricella',
        category: 'Smart Pill Dispensers',
        img: 'tricella'
    },
    // Smart Sleep Monitors
    {
        id: 701,
        price: 160,
        description: 'Wearable sleep tracker that monitors sleep cycles, heart rate, and breathing.',
        name: 'Fitbit Sleep Tracker',
        brand: 'Fitbit',
        category: 'Smart Sleep Monitors',
        img: 'fitbit'
    },
    {
        id: 702,
        price: 200,
        description: 'Bedside sleep monitor that analyzes sleep quality, detects snoring and sleep apnea.',
        name: 'Withings Sleep Analyzer',
        brand: 'Withings',
        category: 'Smart Sleep Monitors',
        img: 'withingssleep'
    },
    {
        id: 703,
        price: 150,
        description: 'Non-wearable sleep monitor that tracks sleep stages, environment, and offers personalized insights.',
        name: 'Sense Sleep System',
        brand: 'Hello',
        category: 'Smart Sleep Monitors',
        img: 'sleep'
    },
    {
        id: 704,
        price: 170,
        description: 'Advanced sleep tracking pad that fits under your mattress, monitors heart rate, and detects snoring.',
        name: 'Beddit 3 Sleep Monitor',
        brand: 'Beddit',
        category: 'Smart Sleep Monitors',
        img: 'beddit'
    },
    // Smart Hearing Aids
    {
        id: 801,
        price: 2500,
        description: 'Advanced hearing aid with smartphone control, noise reduction, and selective amplification.',
        name: 'ReSound LiNX Quattro',
        brand: 'ReSound',
        category: 'Smart Hearing Aids',
        img: 'resound'
    },
    {
        id: 802,
        price: 2300,
        description: 'Smart hearing aid with customizable settings via an app, features superior sound quality.',
        name: 'Phonak Audéo Paradise',
        brand: 'Phonak',
        category: 'Smart Hearing Aids',
        img: 'phonak'
    },
    {
        id: 803,
        price: 2200,
        description: 'Bluetooth-enabled hearing aid with customizable sound settings and discreet design.',
        name: 'Widex EVOKE',
        brand: 'Widex',
        category: 'Smart Hearing Aids',
        img: 'widex'
    },
    {
        id: 804,
        price: 2400,
        description: 'Innovative hearing aid with AI-powered sound adjustments, app control, and superior clarity.',
        name: 'Starkey Livio AI',
        brand: 'Starkey',
        category: 'Smart Hearing Aids',
        img: 'livio'
    }
];
export default dataGoods;