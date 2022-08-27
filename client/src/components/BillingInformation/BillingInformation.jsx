import { Typography, Box } from '@mui/material'
import React, {useState} from 'react'
import {theme} from '../../theme'
import axios from 'axios'

const BillingInformation = () => {

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

      const [billingInfo, setBillingInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    
      const handleChange = ({ currentTarget: input }) => {
        setBillingInfo({ ...billingInfo, [input.name]: input.value });
        console.log(billingInfo);
      }
    
      const handleSubmit = async(e) => {
        e.preventDefault();
        try{
          await axios
            .post('http://localhost:8080/api/yoga/addEnquiry', billingInfo)
            .then((res) => {
              console.log(res)
              }).catch((err) => {
                console.log(err)
              });
              setBillingInfo({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
          alert("Response sent successfully");
        }catch(err){
          console.log(err)
        }
      };

  return (
    <>
    <Box sx={{
        backgroundColor:theme.palette.background.default,
        p:2,
        borderRadius:'5px',
        boxShadow:1,
    }}>
        <Box sx={{mb:2}}>
            <Typography variant='h4' sx={{fontWeight:theme.typography.fontWeightMedium}}>
                Billing Information
            </Typography>
        </Box>
        <Box>
        <form id="enquiryForm" onSubmit={handleSubmit}>
            <Box
              sx={{
                mb:{xs:0, md:2},
                width: "100%",
                display: "flex",
                flexDirection: {xs:'column', md:"row"},
                justifyContent: "center",
              }}
            >
              <Box sx={{ width: "100%", mr:{md:1} }}>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    required
                    data-error="Please enter your name"
                    placeholder="First Name"
                    onChange={handleChange}
                    value={billingInfo.name}
                  />
                  <div className="help-block with-errors"></div>
              </Box>
              <Box sx={{ width: "100%", ml:{md:1}, mt:{xs:2, md:0}, mb:{xs:2, md:0} }}>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    required
                    data-error="Please enter your email"
                    placeholder="Last Name"
                    onChange={handleChange}
                    value={billingInfo.email}
                  />
                  <div className="help-block with-errors"></div>
              </Box>
            </Box>
            <Box
              sx={{
                mb:{xs:0, md:2},
                width: "100%",
                display: "flex",
                flexDirection: {xs:'column', md:"row"},
                justifyContent: "center",
              }}
            >
              <Box sx={{ width: "100%", mr:{md:1} }}>
              <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="email"
                  required
                  data-error="Write your message"
                  placeholder="Email"
                  onChange={handleChange}
                  value={billingInfo.message}
                ></input>
                <div className="help-block with-errors"></div>
              </Box>
              <Box sx={{ width: "100%", ml:{md:1}, mr:{md:0}, mt:{xs:2, md:0}, mb:{xs:2, md:0} }}>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    required
                    data-error="Please enter your email"
                    placeholder="Phone"
                    onChange={handleChange}
                    value={billingInfo.email}
                  />
                  <div className="help-block with-errors"></div>
              </Box>
            </Box>
            <Box sx={{ width: "100%", mb:2}}>
                <input
                  name="message"
                  className="form-control"
                  id="message"
                  required
                  data-error="Write your message"
                  placeholder="Country"
                  onChange={handleChange}
                  value={billingInfo.message}
                ></input>
                <div className="help-block with-errors"></div>
            </Box>
            <Box
              sx={{
                mb:{xs:0, md:2},
                width: "100%",
                display: "flex",
                flexDirection: {xs:'column', md:"row"},
                justifyContent: "center",
              }}
            >
              <Box sx={{ width: "100%", mr:{md:1} }}>
              <select
                      name="state"
                      id="state"
                      className="form-select form-select-lg mb-3"
                      data-error="Select a state"
                      placeholder="State"
                      aria-label="Default select example"
                      value={billingInfo.state}
                      onChange={handleChange}
                    >
                      <option value="">Select State</option>
                      {state.map((item, index) => {
                        return <option key={index} value={item.state}>{item.state}</option>;
                      })}
                    </select>
                    <div className="help-block with-errors"></div>
              </Box>
              <Box sx={{ width: "100%", ml:{md:1}, mr:{md:0}, mt:{xs:0, md:0}, mb:{xs:0, md:0} }}>
              <select
                      name="district"
                      id="district"
                      className="form-select form-select-lg mb-3"
                      data-error="Select a district"
                      placeholder="District"
                      aria-label="Default select example"
                      value={billingInfo.district}
                      onChange={handleChange}
                    >
                      <option value="">Select District</option>
                      {state
                        .filter((item) => item.state === billingInfo.state)
                        .map((item) => {
                          return item.districts.map((x, index) => {
                            return <option key={index} value={x}>{x}</option>;
                          });
                        })}
                    </select>
                    <div className="help-block with-errors"></div>
              </Box>
            </Box>
            <Box sx={{ width: "100%", mb:2}}>
                <textarea
                  name="message"
                  className="form-control"
                  id="message"
                  cols="30"
                  rows="5"
                  required
                  data-error="Write your message"
                  placeholder="Address"
                  onChange={handleChange}
                  value={billingInfo.message}
                  style={{ minHeight: "70px" }}
                ></textarea>
                <div className="help-block with-errors"></div>
            </Box>
            <Box sx={{ width: "100%", mb:2}}>
                <textarea
                  name="message"
                  className="form-control"
                  id="message"
                  cols="30"
                  rows="5"
                  required
                  data-error="Write your message"
                  placeholder="Additional notes "
                  onChange={handleChange}
                  value={billingInfo.message}
                  style={{ minHeight: "70px" }}
                ></textarea>
                <div className="help-block with-errors"></div>
            </Box>
            <div className="col-lg-12 col-md-12">
              <button
                type="submit"
                className="btn"
                style={{ backgroundColor: theme.palette.background.main }}
              >
                <Typography sx={{ color: theme.palette.secondary.main }}>
                  Send Message
                </Typography>
              </button>
              <div id="msgSubmit" className="h3 text-center hidden"></div>
              <div className="clearfix"></div>
            </div>
        </form>
        </Box>
    </Box>
    </>
  )
}

export default BillingInformation
