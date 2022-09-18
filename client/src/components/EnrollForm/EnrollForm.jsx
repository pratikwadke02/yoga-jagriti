import React from "react";
import { Box, Typography } from "@mui/material";
import { theme } from "../../theme";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ContactForm.css";

const ContactForm = () => {

  const {name} = useParams();
  console.log(name);

  const state = [
    {
      state: "Andhra Pradesh",
      districts: [
        "Anantapur",
        "Chittoor",
        "East Godavari",
        "Guntur",
        "Krishna",
        "Kurnool",
        "Nellore",
        "Prakasam",
        "Srikakulam",
        "Visakhapatnam",
        "Vizianagaram",
        "West Godavari",
        "YSR Kadapa",
      ],
    },
    {
      state: "Arunachal Pradesh",
      districts: [
        "Tawang",
        "West Kameng",
        "East Kameng",
        "Papum Pare",
        "Kurung Kumey",
        "Kra Daadi",
        "Lower Subansiri",
        "Upper Subansiri",
        "West Siang",
        "East Siang",
        "Siang",
        "Upper Siang",
        "Lower Siang",
        "Lower Dibang Valley",
        "Dibang Valley",
        "Anjaw",
        "Lohit",
        "Namsai",
        "Changlang",
        "Tirap",
        "Longding",
      ],
    },
    {
      state: "Assam",
      districts: [
        "Baksa",
        "Barpeta",
        "Biswanath",
        "Bongaigaon",
        "Cachar",
        "Charaideo",
        "Chirang",
        "Darrang",
        "Dhemaji",
        "Dhubri",
        "Dibrugarh",
        "Goalpara",
        "Golaghat",
        "Hailakandi",
        "Hojai",
        "Jorhat",
        "Kamrup Metropolitan",
        "Kamrup",
        "Karbi Anglong",
        "Karimganj",
        "Kokrajhar",
        "Lakhimpur",
        "Majuli",
        "Morigaon",
        "Nagaon",
        "Nalbari",
        "Dima Hasao",
        "Sivasagar",
        "Sonitpur",
        "South Salmara-Mankachar",
        "Tinsukia",
        "Udalguri",
        "West Karbi Anglong",
      ],
    },
    {
      state: "Bihar",
      districts: [
        "Araria",
        "Arwal",
        "Aurangabad",
        "Banka",
        "Begusarai",
        "Bhagalpur",
        "Bhojpur",
        "Buxar",
        "Darbhanga",
        "East Champaran (Motihari)",
        "Gaya",
        "Gopalganj",
        "Jamui",
        "Jehanabad",
        "Kaimur (Bhabua)",
        "Katihar",
        "Khagaria",
        "Kishanganj",
        "Lakhisarai",
        "Madhepura",
        "Madhubani",
        "Munger (Monghyr)",
        "Muzaffarpur",
        "Nalanda",
        "Nawada",
        "Patna",
        "Purnia (Purnea)",
        "Rohtas",
        "Saharsa",
        "Samastipur",
        "Saran",
        "Sheikhpura",
        "Sheohar",
        "Sitamarhi",
        "Siwan",
        "Supaul",
        "Vaishali",
        "West Champaran",
      ],
    },
    {
      state: "Chandigarh (UT)",
      districts: ["Chandigarh"],
    },
    {
      state: "Chhattisgarh",
      districts: [
        "Balod",
        "Baloda Bazar",
        "Balrampur",
        "Bastar",
        "Bemetara",
        "Bijapur",
        "Bilaspur",
        "Dantewada (South Bastar)",
        "Dhamtari",
        "Durg",
        "Gariyaband",
        "Janjgir-Champa",
        "Jashpur",
        "Kabirdham (Kawardha)",
        "Kanker (North Bastar)",
        "Kondagaon",
        "Korba",
        "Korea (Koriya)",
        "Mahasamund",
        "Mungeli",
        "Narayanpur",
        "Raigarh",
        "Raipur",
        "Rajnandgaon",
        "Sukma",
        "Surajpur  ",
        "Surguja",
      ],
    },
    {
      state: "Dadra and Nagar Haveli (UT)",
      districts: ["Dadra & Nagar Haveli"],
    },
    {
      state: "Daman and Diu (UT)",
      districts: ["Daman", "Diu"],
    },
    {
      state: "Delhi (NCT)",
      districts: [
        "Central Delhi",
        "East Delhi",
        "New Delhi",
        "North Delhi",
        "North East  Delhi",
        "North West  Delhi",
        "Shahdara",
        "South Delhi",
        "South East Delhi",
        "South West  Delhi",
        "West Delhi",
      ],
    },
    {
      state: "Goa",
      districts: ["North Goa", "South Goa"],
    },
    {
      state: "Gujarat",
      districts: [
        "Ahmedabad",
        "Amreli",
        "Anand",
        "Aravalli",
        "Banaskantha (Palanpur)",
        "Bharuch",
        "Bhavnagar",
        "Botad",
        "Chhota Udepur",
        "Dahod",
        "Dangs (Ahwa)",
        "Devbhoomi Dwarka",
        "Gandhinagar",
        "Gir Somnath",
        "Jamnagar",
        "Junagadh",
        "Kachchh",
        "Kheda (Nadiad)",
        "Mahisagar",
        "Mehsana",
        "Morbi",
        "Narmada (Rajpipla)",
        "Navsari",
        "Panchmahal (Godhra)",
        "Patan",
        "Porbandar",
        "Rajkot",
        "Sabarkantha (Himmatnagar)",
        "Surat",
        "Surendranagar",
        "Tapi (Vyara)",
        "Vadodara",
        "Valsad",
      ],
    },
    {
      state: "Haryana",
      districts: [
        "Ambala",
        "Bhiwani",
        "Charkhi Dadri",
        "Faridabad",
        "Fatehabad",
        "Gurgaon",
        "Hisar",
        "Jhajjar",
        "Jind",
        "Kaithal",
        "Karnal",
        "Kurukshetra",
        "Mahendragarh",
        "Mewat",
        "Palwal",
        "Panchkula",
        "Panipat",
        "Rewari",
        "Rohtak",
        "Sirsa",
        "Sonipat",
        "Yamunanagar",
      ],
    },
    {
      state: "Himachal Pradesh",
      districts: [
        "Bilaspur",
        "Chamba",
        "Hamirpur",
        "Kangra",
        "Kinnaur",
        "Kullu",
        "Lahaul &amp; Spiti",
        "Mandi",
        "Shimla",
        "Sirmaur (Sirmour)",
        "Solan",
        "Una",
      ],
    },
    {
      state: "Jammu and Kashmir",
      districts: [
        "Anantnag",
        "Bandipore",
        "Baramulla",
        "Budgam",
        "Doda",
        "Ganderbal",
        "Jammu",
        "Kargil",
        "Kathua",
        "Kishtwar",
        "Kulgam",
        "Kupwara",
        "Leh",
        "Poonch",
        "Pulwama",
        "Rajouri",
        "Ramban",
        "Reasi",
        "Samba",
        "Shopian",
        "Srinagar",
        "Udhampur",
      ],
    },
    {
      state: "Jharkhand",
      districts: [
        "Bokaro",
        "Chatra",
        "Deoghar",
        "Dhanbad",
        "Dumka",
        "East Singhbhum",
        "Garhwa",
        "Giridih",
        "Godda",
        "Gumla",
        "Hazaribag",
        "Jamtara",
        "Khunti",
        "Koderma",
        "Latehar",
        "Lohardaga",
        "Pakur",
        "Palamu",
        "Ramgarh",
        "Ranchi",
        "Sahibganj",
        "Seraikela-Kharsawan",
        "Simdega",
        "West Singhbhum",
      ],
    },
    {
      state: "Karnataka",
      districts: [
        "Bagalkot",
        "Ballari (Bellary)",
        "Belagavi (Belgaum)",
        "Bengaluru (Bangalore) Rural",
        "Bengaluru (Bangalore) Urban",
        "Bidar",
        "Chamarajanagar",
        "Chikballapur",
        "Chikkamagaluru (Chikmagalur)",
        "Chitradurga",
        "Dakshina Kannada",
        "Davangere",
        "Dharwad",
        "Gadag",
        "Hassan",
        "Haveri",
        "Kalaburagi (Gulbarga)",
        "Kodagu",
        "Kolar",
        "Koppal",
        "Mandya",
        "Mysuru (Mysore)",
        "Raichur",
        "Ramanagara",
        "Shivamogga (Shimoga)",
        "Tumakuru (Tumkur)",
        "Udupi",
        "Uttara Kannada (Karwar)",
        "Vijayapura (Bijapur)",
        "Yadgir",
      ],
    },
    {
      state: "Kerala",
      districts: [
        "Alappuzha",
        "Ernakulam",
        "Idukki",
        "Kannur",
        "Kasaragod",
        "Kollam",
        "Kottayam",
        "Kozhikode",
        "Malappuram",
        "Palakkad",
        "Pathanamthitta",
        "Thiruvananthapuram",
        "Thrissur",
        "Wayanad",
      ],
    },
    {
      state: "Lakshadweep (UT)",
      districts: [
        "Agatti",
        "Amini",
        "Androth",
        "Bithra",
        "Chethlath",
        "Kavaratti",
        "Kadmath",
        "Kalpeni",
        "Kilthan",
        "Minicoy",
      ],
    },
    {
      state: "Madhya Pradesh",
      districts: [
        "Agar Malwa",
        "Alirajpur",
        "Anuppur",
        "Ashoknagar",
        "Balaghat",
        "Barwani",
        "Betul",
        "Bhind",
        "Bhopal",
        "Burhanpur",
        "Chhatarpur",
        "Chhindwara",
        "Damoh",
        "Datia",
        "Dewas",
        "Dhar",
        "Dindori",
        "Guna",
        "Gwalior",
        "Harda",
        "Hoshangabad",
        "Indore",
        "Jabalpur",
        "Jhabua",
        "Katni",
        "Khandwa",
        "Khargone",
        "Mandla",
        "Mandsaur",
        "Morena",
        "Narsinghpur",
        "Neemuch",
        "Panna",
        "Raisen",
        "Rajgarh",
        "Ratlam",
        "Rewa",
        "Sagar",
        "Satna",
        "Sehore",
        "Seoni",
        "Shahdol",
        "Shajapur",
        "Sheopur",
        "Shivpuri",
        "Sidhi",
        "Singrauli",
        "Tikamgarh",
        "Ujjain",
        "Umaria",
        "Vidisha",
      ],
    },
    {
      state: "Maharashtra",
      districts: [
        "Ahmednagar",
        "Akola",
        "Amravati",
        "Aurangabad",
        "Beed",
        "Bhandara",
        "Buldhana",
        "Chandrapur",
        "Dhule",
        "Gadchiroli",
        "Gondia",
        "Hingoli",
        "Jalgaon",
        "Jalna",
        "Kolhapur",
        "Latur",
        "Mumbai City",
        "Mumbai Suburban",
        "Nagpur",
        "Nanded",
        "Nandurbar",
        "Nashik",
        "Osmanabad",
        "Palghar",
        "Parbhani",
        "Pune",
        "Raigad",
        "Ratnagiri",
        "Sangli",
        "Satara",
        "Sindhudurg",
        "Solapur",
        "Thane",
        "Wardha",
        "Washim",
        "Yavatmal",
      ],
    },
    {
      state: "Manipur",
      districts: [
        "Bishnupur",
        "Chandel",
        "Churachandpur",
        "Imphal East",
        "Imphal West",
        "Jiribam",
        "Kakching",
        "Kamjong",
        "Kangpokpi",
        "Noney",
        "Pherzawl",
        "Senapati",
        "Tamenglong",
        "Tengnoupal",
        "Thoubal",
        "Ukhrul",
      ],
    },
    {
      state: "Meghalaya",
      districts: [
        "East Garo Hills",
        "East Jaintia Hills",
        "East Khasi Hills",
        "North Garo Hills",
        "Ri Bhoi",
        "South Garo Hills",
        "South West Garo Hills ",
        "South West Khasi Hills",
        "West Garo Hills",
        "West Jaintia Hills",
        "West Khasi Hills",
      ],
    },
    {
      state: "Mizoram",
      districts: [
        "Aizawl",
        "Champhai",
        "Kolasib",
        "Lawngtlai",
        "Lunglei",
        "Mamit",
        "Saiha",
        "Serchhip",
      ],
    },
    {
      state: "Nagaland",
      districts: [
        "Dimapur",
        "Kiphire",
        "Kohima",
        "Longleng",
        "Mokokchung",
        "Mon",
        "Peren",
        "Phek",
        "Tuensang",
        "Wokha",
        "Zunheboto",
      ],
    },
    {
      state: "Odisha",
      districts: [
        "Angul",
        "Balangir",
        "Balasore",
        "Bargarh",
        "Bhadrak",
        "Boudh",
        "Cuttack",
        "Deogarh",
        "Dhenkanal",
        "Gajapati",
        "Ganjam",
        "Jagatsinghapur",
        "Jajpur",
        "Jharsuguda",
        "Kalahandi",
        "Kandhamal",
        "Kendrapara",
        "Kendujhar (Keonjhar)",
        "Khordha",
        "Koraput",
        "Malkangiri",
        "Mayurbhanj",
        "Nabarangpur",
        "Nayagarh",
        "Nuapada",
        "Puri",
        "Rayagada",
        "Sambalpur",
        "Sonepur",
        "Sundargarh",
      ],
    },
    {
      state: "Puducherry (UT)",
      districts: ["Karaikal", "Mahe", "Pondicherry", "Yanam"],
    },
    {
      state: "Punjab",
      districts: [
        "Amritsar",
        "Barnala",
        "Bathinda",
        "Faridkot",
        "Fatehgarh Sahib",
        "Fazilka",
        "Ferozepur",
        "Gurdaspur",
        "Hoshiarpur",
        "Jalandhar",
        "Kapurthala",
        "Ludhiana",
        "Mansa",
        "Moga",
        "Muktsar",
        "Nawanshahr (Shahid Bhagat Singh Nagar)",
        "Pathankot",
        "Patiala",
        "Rupnagar",
        "Sahibzada Ajit Singh Nagar (Mohali)",
        "Sangrur",
        "Tarn Taran",
      ],
    },
    {
      state: "Rajasthan",
      districts: [
        "Ajmer",
        "Alwar",
        "Banswara",
        "Baran",
        "Barmer",
        "Bharatpur",
        "Bhilwara",
        "Bikaner",
        "Bundi",
        "Chittorgarh",
        "Churu",
        "Dausa",
        "Dholpur",
        "Dungarpur",
        "Hanumangarh",
        "Jaipur",
        "Jaisalmer",
        "Jalore",
        "Jhalawar",
        "Jhunjhunu",
        "Jodhpur",
        "Karauli",
        "Kota",
        "Nagaur",
        "Pali",
        "Pratapgarh",
        "Rajsamand",
        "Sawai Madhopur",
        "Sikar",
        "Sirohi",
        "Sri Ganganagar",
        "Tonk",
        "Udaipur",
      ],
    },
    {
      state: "Sikkim",
      districts: ["East Sikkim", "North Sikkim", "South Sikkim", "West Sikkim"],
    },
    {
      state: "Tamil Nadu",
      districts: [
        "Ariyalur",
        "Chennai",
        "Coimbatore",
        "Cuddalore",
        "Dharmapuri",
        "Dindigul",
        "Erode",
        "Kanchipuram",
        "Kanyakumari",
        "Karur",
        "Krishnagiri",
        "Madurai",
        "Nagapattinam",
        "Namakkal",
        "Nilgiris",
        "Perambalur",
        "Pudukkottai",
        "Ramanathapuram",
        "Salem",
        "Sivaganga",
        "Thanjavur",
        "Theni",
        "Thoothukudi (Tuticorin)",
        "Tiruchirappalli",
        "Tirunelveli",
        "Tiruppur",
        "Tiruvallur",
        "Tiruvannamalai",
        "Tiruvarur",
        "Vellore",
        "Viluppuram",
        "Virudhunagar",
      ],
    },
    {
      state: "Telangana",
      districts: [
        "Adilabad",
        "Bhadradri Kothagudem",
        "Hyderabad",
        "Jagtial",
        "Jangaon",
        "Jayashankar Bhoopalpally",
        "Jogulamba Gadwal",
        "Kamareddy",
        "Karimnagar",
        "Khammam",
        "Komaram Bheem Asifabad",
        "Mahabubabad",
        "Mahabubnagar",
        "Mancherial",
        "Medak",
        "Medchal",
        "Nagarkurnool",
        "Nalgonda",
        "Nirmal",
        "Nizamabad",
        "Peddapalli",
        "Rajanna Sircilla",
        "Rangareddy",
        "Sangareddy",
        "Siddipet",
        "Suryapet",
        "Vikarabad",
        "Wanaparthy",
        "Warangal (Rural)",
        "Warangal (Urban)",
        "Yadadri Bhuvanagiri",
      ],
    },
    {
      state: "Tripura",
      districts: [
        "Dhalai",
        "Gomati",
        "Khowai",
        "North Tripura",
        "Sepahijala",
        "South Tripura",
        "Unakoti",
        "West Tripura",
      ],
    },
    {
      state: "Uttarakhand",
      districts: [
        "Almora",
        "Bageshwar",
        "Chamoli",
        "Champawat",
        "Dehradun",
        "Haridwar",
        "Nainital",
        "Pauri Garhwal",
        "Pithoragarh",
        "Rudraprayag",
        "Tehri Garhwal",
        "Udham Singh Nagar",
        "Uttarkashi",
      ],
    },
    {
      state: "Uttar Pradesh",
      districts: [
        "Agra",
        "Aligarh",
        "Allahabad",
        "Ambedkar Nagar",
        "Amethi (Chatrapati Sahuji Mahraj Nagar)",
        "Amroha (J.P. Nagar)",
        "Auraiya",
        "Azamgarh",
        "Baghpat",
        "Bahraich",
        "Ballia",
        "Balrampur",
        "Banda",
        "Barabanki",
        "Bareilly",
        "Basti",
        "Bhadohi",
        "Bijnor",
        "Budaun",
        "Bulandshahr",
        "Chandauli",
        "Chitrakoot",
        "Deoria",
        "Etah",
        "Etawah",
        "Faizabad",
        "Farrukhabad",
        "Fatehpur",
        "Firozabad",
        "Gautam Buddha Nagar",
        "Ghaziabad",
        "Ghazipur",
        "Gonda",
        "Gorakhpur",
        "Hamirpur",
        "Hapur (Panchsheel Nagar)",
        "Hardoi",
        "Hathras",
        "Jalaun",
        "Jaunpur",
        "Jhansi",
        "Kannauj",
        "Kanpur Dehat",
        "Kanpur Nagar",
        "Kanshiram Nagar (Kasganj)",
        "Kaushambi",
        "Kushinagar (Padrauna)",
        "Lakhimpur - Kheri",
        "Lalitpur",
        "Lucknow",
        "Maharajganj",
        "Mahoba",
        "Mainpuri",
        "Mathura",
        "Mau",
        "Meerut",
        "Mirzapur",
        "Moradabad",
        "Muzaffarnagar",
        "Pilibhit",
        "Pratapgarh",
        "RaeBareli",
        "Rampur",
        "Saharanpur",
        "Sambhal (Bhim Nagar)",
        "Sant Kabir Nagar",
        "Shahjahanpur",
        "Shamali (Prabuddh Nagar)",
        "Shravasti",
        "Siddharth Nagar",
        "Sitapur",
        "Sonbhadra",
        "Sultanpur",
        "Unnao",
        "Varanasi",
      ],
    },
    {
      state: "West Bengal",
      districts: [
        "Alipurduar",
        "Bankura",
        "Birbhum",
        "Burdwan (Bardhaman)",
        "Cooch Behar",
        "Dakshin Dinajpur (South Dinajpur)",
        "Darjeeling",
        "Hooghly",
        "Howrah",
        "Jalpaiguri",
        "Kalimpong",
        "Kolkata",
        "Malda",
        "Murshidabad",
        "Nadia",
        "North 24 Parganas",
        "Paschim Medinipur (West Medinipur)",
        "Purba Medinipur (East Medinipur)",
        "Purulia",
        "South 24 Parganas",
        "Uttar Dinajpur (North Dinajpur)",
      ],
    },
  ];

  const [data, setData] = useState({
    courseName: name,
    country: "",
    title: "",
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    dob: "",
    nationality: "",
    fatherName: "",
    motherName: "",
    spouseName: "",
    category: "",
    pwdCertificate: "",
    idType: "",
    idNumber: "",
    phone: "",
    address: "",
    state: "",
    district: "",
    pincode: "",
    permanentAddress: "",
    permanentState: "",
    permanentDistrict: "",
    permanentPincode: "",
    permanentCountry: "",
    email: "",
  });

  const [sameAddress, setSameAddress] = useState(false);

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
    console.log(data);
  };

  const handleAddressChange = ({ currentTarget: input }) => {
    setSameAddress(!sameAddress);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(data);
      await axios
        .post("https://yogajagriti.herokuapp.com/api/yoga/addStudent", data)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      setData({
        country: "",
        title: "",
        firstName: "",
        middleName: "",
        lastName: "",
        gender: "",
        dob: "",
        nationality: "",
        fatherName: "",
        motherName: "",
        spouseName: "",
        category: "",
        pwdCertificate: "",
        idType: "",
        idNumber: "",
        phone: "",
        address: "",
        state: "",
        district: "",
        pincode: "",
        permanentAddress: "",
        permanentState: "",
        permanentDistrict: "",
        permanentPincode: "",
        permanentCountry: "",
        email: "",
      });
      alert("Enrolled Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Box
        sx={{
          mt: 2,
          backgroundColor: theme.palette.background.default,
          p: { xs: 1, md: 2 },
          borderRadius: "5px",
        }}
      >
        <form id="contactForm" onSubmit={handleSubmit}>
          <div className="row justify-content-center align-items-center">
            <Typography
              variant="h2"
              sx={{
                fontWeight: theme.typography.fontWeightBold,
                color: theme.palette.primary.main,
                textAlign: "center",
                mb: { md: 4 },
              }}
            >
              COURSE ENROLLMENT
            </Typography>
            <Typography variant="h6" sx={{ mb: 1 }}>
              Personal Details
            </Typography>
            <div className="col-lg-6 col-md-12">
              <div className="form-group">
                <select
                  name="title"
                  id="title"
                  className="form-select form-select-lg mb-3"
                  required
                  data-error="Select a title"
                  placeholder="Title"
                  aria-label="Default select example"
                  value={data.title}
                  onChange={handleChange}
                >
                  <option value="" >Select a title</option>
                  <option value="Shri">Shri</option>
                  <option value="Smt">Smt</option>
                  <option value="Ms">Ms</option>
                </select>
                <div className="help-block with-errors"></div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="form-group">
                <input
                  type="text"
                  name="firstName"
                  id="first-name"
                  className="form-control"
                  required
                  data-error="Please enter your name"
                  placeholder="First Name"
                  value={data.firstName}
                  onChange={handleChange}
                />
                <div className="help-block with-errors"></div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="form-group">
                <input
                  type="text"
                  name="middleName"
                  id="middle-name"
                  className="form-control"
                  data-error="Please enter your name"
                  placeholder="Middle Name"
                  value={data.middleName}
                  onChange={handleChange}
                />
                <div className="help-block with-errors"></div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="form-group">
                <input
                  type="text"
                  name="lastName"
                  id="last-name"
                  className="form-control"
                  data-error="Please enter your name"
                  placeholder="Last Name"
                  value={data.lastName}
                  onChange={handleChange}
                />
                <div className="help-block with-errors"></div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="form-group">
                <select
                  name="gender"
                  id="gender"
                  className="form-select form-select-lg mb-3"
                  required
                  data-error="Select a gender"
                  placeholder="Gender"
                  aria-label="Default select example"
                  value={data.gender}
                  onChange={handleChange}
                >
                  <option value="" >Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                <div className="help-block with-errors"></div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="form-group">
                <input
                  type="date"
                  name="dob"
                  id="dob"
                  className="form-select form-select-lg mb-3"
                  required
                  data-error="Select a gender"
                  placeholder="Date of Birth"
                  aria-label="Default select example"
                  value={data.dob}
                  onChange={handleChange}
                ></input>
                <div className="help-block with-errors"></div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="form-group">
                <select
                  name="country"
                  id="country"
                  className="form-select form-select-lg mb-3"
                  required
                  data-error="Select a country"
                  placeholder="Country"
                  value={data.country}
                  onChange={handleChange}
                >
                  <option value="" >Select a country</option>
                  <option value="India">India</option>
                </select>
                <div className="help-block with-errors"></div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="form-group">
                <input
                  type="text"
                  name="nationality"
                  id="nationality"
                  className="form-control"
                  required
                  data-error="Please enter your nationality"
                  placeholder="Nationality"
                  value={data.nationality}
                  onChange={handleChange}
                />
                <div className="help-block with-errors"></div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="form-group">
                <input
                  type="text"
                  name="fatherName"
                  id="father-name"
                  className="form-control"
                  data-error="Please enter your father name"
                  placeholder="Father's Name"
                  value={data.fatherName}
                  onChange={handleChange}
                />
                <div className="help-block with-errors"></div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="form-group">
                <input
                  type="text"
                  name="motherName"
                  id="mother-name"
                  className="form-control"
                  required
                  data-error="Please enter your mother name"
                  placeholder="Mother's Name"
                  value={data.motherName}
                  onChange={handleChange}
                />
                <div className="help-block with-errors"></div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="form-group">
                <input
                  type="text"
                  name="spouseName"
                  id="spouse-name"
                  className="form-control"
                  data-error="Please enter your spouse name"
                  placeholder="Spouse's Name"
                  value={data.spouseName}
                  onChange={handleChange}
                />
                <div className="help-block with-errors"></div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="form-group">
                <input
                  type="text"
                  name="spouseName"
                  id="spouse-name"
                  className="form-control"
                  data-error="Please enter your spouse name"
                  placeholder="Spouse's Name"
                  value={data.courseName}
                  disabled
                />
                <div className="help-block with-errors"></div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="form-group">
                <select
                  name="category"
                  id="category"
                  className="form-select form-select-lg mb-3"
                  required
                  data-error="Select a category"
                  placeholder="Category"
                  aria-label="Default select example"
                  value={data.category}
                  onChange={handleChange}
                >
                  <option value="" >Select Category</option>
                  <option value="General">General</option>
                  <option value="OBC">OBC</option>
                  <option value="SC">SC</option>
                  <option value="ST">ST</option>
                  <option value="EWS">EWS</option>
                  <option value="Other">Other</option>
                </select>
                <div className="help-block with-errors"></div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="form-group">
                <input
                  type="text"
                  name="pwdCertificate"
                  id="pwd-certficate"
                  className="form-control"
                  data-error="Please enter your pwd certificate"
                  placeholder="PwD Certificate"
                  value={data.pwdCertificate}
                  onChange={handleChange}
                />
                <div className="help-block with-errors"></div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="form-group">
                <select
                  name="idType"
                  id="photo-id"
                  className="form-select form-select-lg mb-3"
                  required
                  data-error="Select a photo id"
                  placeholder="Photo Id"
                  aria-label="Default select example"
                  value={data.idType}
                  onChange={handleChange}
                >
                  <option value="" >Select ID</option>
                  <option value="Passport">Passport</option>
                  <option value="Aadhar Card">Aadhar Card</option>
                  <option value="Govt. issued photo ID">
                    Govt. issued photo id
                  </option>
                  <option value="Driving license">Driving License</option>
                  <option value="Voter ID">voter ID</option>
                </select>
                <div className="help-block with-errors"></div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="form-group">
                <input
                  type="number"
                  name="idNumber"
                  id="id-number"
                  className="form-control"
                  required
                  data-error="Please enter your id number"
                  placeholder="ID Number"
                  value={data.idNumber}
                  onChange={handleChange}
                />
                <div className="help-block with-errors"></div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                  required
                  data-error="Please enter your email"
                  placeholder="Email"
                  value={data.email}
                  onChange={handleChange}
                />
                <div className="help-block with-errors"></div>
              </div>
            </div>
            {/* <div className="col-lg-12 col-md-12">
              <div className="form-group">
                <input
                  type="file"
                  name="govt-photo-id"
                  id="govt-photo-id"
                  className="form-choose"
                  
                  data-error="Please upload your govt photo id"
                  placeholder="Govt Photo Id"
                />
                <div className="help-block with-errors"></div>
              </div>
            </div> */}
            <div className="col-lg-6 col-md-12">
              <div className="form-group">
                <input
                  type="number"
                  name="phone"
                  id="contact-number"
                  required
                  data-error="Please enter your number"
                  className="form-control"
                  placeholder="Contact Number"
                  value={data.phone}
                  onChange={handleChange}
                />
                <Typography variant="h7" color="error">
                  Note: Please enter phone number with country code.
                </Typography>
                <div className="help-block with-errors"></div>
              </div>
            </div>
            {/* <div className="col-lg-12 col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="msg_subject"
                    id="msg_subject"
                    className="form-control"
                    required
                    data-error="Please enter your subject"
                    placeholder="Subject"
                  />
                  <div className="help-block with-errors"></div>
                </div>
              </div> */}
            {/* <div className="col-lg-12 col-md-12">
              <div className="form-group">
                <input
                  type="file"
                  name="photo-id"
                  id="photo-id"
                  className="form-choose"
                  
                  data-error="Please upload your photo id"
                  placeholder="Photo Id"
                />
                <div className="help-block with-errors"></div>
              </div>
            </div> */}
            <Box sx={{ display: "flex",flexDirection:{xs:'column', md:'row'}, width: "100%" }}>
              <Box sx={{ width: "100%", mr: {xs:0, md:1.25} }}>
                <Typography variant="h6" sx={{ mb: 1 }}>
                  Correspondence Address
                </Typography>
                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <textarea
                      name="address"
                      className="form-control"
                      id="address"
                      cols="30"
                      rows="5"
                      required
                      data-error="Write your address"
                      placeholder="Address"
                      value={data.address}
                      onChange={handleChange}
                    ></textarea>
                    <div className="help-block with-errors"></div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <select
                      name="state"
                      id="state"
                      className="form-select form-select-lg mb-3"
                      data-error="Select a state"
                      placeholder="State"
                      aria-label="Default select example"
                      value={data.state}
                      onChange={handleChange}
                    >
                      <option value="" >Select State</option>
                      {state.map((item, index) => {
                        return <option key={index} value={item.state}>{item.state}</option>;
                      })}
                    </select>
                    <div className="help-block with-errors"></div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <select
                      name="district"
                      id="district"
                      className="form-select form-select-lg mb-3"
                      data-error="Select a district"
                      placeholder="District"
                      aria-label="Default select example"
                      value={data.district}
                      onChange={handleChange}
                    >
                      <option value="" >Select District</option>
                      {state
                        .filter((item) => item.state === data.state)
                        .map((item) => {
                          return item.districts.map((x, index) => {
                            return <option key={index} value={x}>{x}</option>;
                          });
                        })}
                    </select>
                    <div className="help-block with-errors"></div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <input
                      type="number"
                      name="pincode"
                      id="pincode"
                      className="form-control"
                      required
                      data-error="Please enter your pincode"
                      placeholder="Pincode"
                      value={data.pincode}
                      onChange={handleChange}
                    />
                    <div className="help-block with-errors"></div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <Box className="form-group" sx={{display:'flex', mt:4}}>
                    <input 
                      type="checkbox" 
                      name="addressCheck" 
                      id="addressCheck" 
                      label="Same as permanent address"
                      checked={sameAddress}
                      onChange={handleAddressChange}
                      />
                      <label htmlFor="addressCheck" style={{fontSize:'12px', marginLeft:'10px'}}>Same as permanent address</label>
                    <div className="help-block with-errors"></div>
                  </Box>
                </div>
              </Box>
              <Box sx={{ width: "100%", ml: {xs:0, md:1.25} }}>
                <Typography variant="h6" sx={{ mb: 1 }}>
                  Permanent Address
                </Typography>
                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <textarea
                      name="permanentAddress"
                      className="form-control"
                      id="address"
                      cols="30"
                      rows="5"
                      required
                      data-error="Write your address"
                      placeholder="Address"
                      value={sameAddress ? data.address : data.permanentAddress}
                      onChange={handleChange}
                    ></textarea>
                    <div className="help-block with-errors"></div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <select
                      name="permanentState"
                      id="state"
                      className="form-select form-select-lg mb-3"
                      data-error="Select a state"
                      placeholder="State"
                      aria-label="Default select example"
                      value={sameAddress ? data.state : data.permanentState}
                      onChange={handleChange}
                    >
                      <option value="" >Select State</option>
                      {state.map((item, index) => {
                        return <option key={index} value={item.state}>{item.state}</option>;
                      })}
                    </select>
                    <div className="help-block with-errors"></div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <select
                      name="permanentDistrict"
                      id="district"
                      className="form-select form-select-lg mb-3"
                      data-error="Select a district"
                      placeholder="District"
                      aria-label="Default select example"
                      value={sameAddress ? data.district : data.permanentDistrict}
                      onChange={handleChange}
                    >
                      <option value="" >Select District</option>
                      {state
                        .filter((item) => item.state === data.state)
                        .map((item) => {
                          return item.districts.map((x, index) => {
                            return <option key={index} value={x}>{x}</option>;
                          });
                        })}
                    </select>
                    <div className="help-block with-errors"></div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <input
                      type="number"
                      name="permanentPincode"
                      id="pincode"
                      className="form-control"
                      required
                      data-error="Please enter your pincode"
                      placeholder="Pincode"
                      value={sameAddress ? data.pincode : data.permanentPincode}
                      onChange={handleChange}
                    />
                    <div className="help-block with-errors"></div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <select
                      name="permanentCountry"
                      id="country"
                      className="form-select form-select-lg mb-3"
                      required
                      data-error="Select a country"
                      placeholder="Country"
                      value={sameAddress ? data.country : data.permanentCountry}
                      onChange={handleChange}
                    >
                      <option value="" >Select a country</option>
                      <option value="India">India</option>
                    </select>
                    <div className="help-block with-errors"></div>
                  </div>
                </div>
              </Box>
            </Box>
            <div className="col-lg-12 col-md-12">
              <button
                type="submit"
                className="btn"
                style={{ backgroundColor: theme.palette.primary.main }}
              >
                <Typography sx={{ color: theme.palette.background.default }}>
                  Send Message
                </Typography>
              </button>
              <div id="msgSubmit" className="h3 text-center hidden"></div>
              <div className="clearfix"></div>
            </div>
          </div>
        </form>
      </Box>
    </>
  );
};

export default ContactForm;
