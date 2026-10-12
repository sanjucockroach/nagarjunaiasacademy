// Rivers layer: 30 rivers (15 Indian + 15 world) as source-to-mouth polylines.
// Vertices anchor at real cities, confluences, dams and mouths for map accuracy.
import type { GeoRiver } from '../types';

export const RIVERS: GeoRiver[] = [
  {
    id: 'ganga',
    name: 'Ganga',
    layer: 'rivers',
    country: 'India, Nepal (basin), Bangladesh',
    region: 'Uttarakhand, Uttar Pradesh, Bihar, Jharkhand, West Bengal',
    whyInNews:
      'Namami Gange and the river-cities programme keep the Ganga on the current affairs radar, with cleaner ghats, new sewage capacity and floodplain encroachment drives regularly in headlines through 2025-26.',
    examFacts: [
      'Length about 2,525 km; largest river basin in India, draining roughly 26 percent of the country.',
      'Declared the National River of India in 2008; Namami Gange mission launched in 2014.',
      'Major tributaries: Yamuna, Ramganga, Ghaghara, Gandak, Kosi and Son.',
      'Farakka Barrage (1975) diverts water into the Bhagirathi-Hooghly to keep the Kolkata port channel navigable.',
      'Ganga Action Plan, the first river cleaning programme of India, began in 1986.',
    ],
    syllabusTags: ['Prelims', 'GS1 Geography', 'GS3 Environment'],
    sourceHint: 'PIB, NMCG',
    path: [
      [30.99, 78.93], // Gangotri (Gaumukh)
      [30.09, 78.27], // Rishikesh
      [29.95, 78.16], // Haridwar
      [28.17, 78.39], // Narora
      [27.05, 79.9], // Kannauj
      [26.45, 80.33], // Kanpur
      [25.43, 81.85], // Prayagraj
      [25.32, 83.01], // Varanasi
      [25.56, 83.98], // Buxar
      [25.6, 85.14], // Patna
      [25.38, 86.47], // Munger
      [25.25, 86.99], // Bhagalpur
      [24.8, 87.92], // Farakka
      [24.1, 88.26], // Berhampore
      [23.4, 88.37], // Nabadwip
      [22.6, 88.3], // Kolkata (Hooghly)
      [22.19, 88.19], // Diamond Harbour
      [21.85, 88.1], // Gangasagar
    ],
    lengthKm: 2525,
    origin: 'Gaumukh ice cave at the Gangotri glacier, Uttarakhand',
    outfall: 'Bay of Bengal via the Hooghly estuary at Gangasagar, West Bengal',
  },
  {
    id: 'brahmaputra',
    name: 'Brahmaputra',
    layer: 'rivers',
    country: 'China (Tibet), India, Bangladesh',
    region: 'Tibet, Arunachal Pradesh, Assam, Bangladesh',
    whyInNews:
      'China approved and began building its Motuo (Medog) mega dam on the lower Yarlung Tsangpo in 2025, with an estimated capacity near 60 GW, renewing Indian concerns on upstream control and flood data sharing.',
    examFacts: [
      'Called Yarlung Tsangpo in Tibet, Siang or Dihang in Arunachal Pradesh, Brahmaputra in Assam and Jamuna in Bangladesh.',
      'It is the only Indian river with a male gender name and cuts the deepest gorge in the world at the Namcha Barwa great bend.',
      'Majuli in Assam is one of the largest river islands in the world.',
      'Tributaries include Dibang, Lohit, Subansiri, Manas and Teesta (through the Jamuna system).',
      'The river carries one of the largest water and sediment loads of any river, making floods in Assam recurrent.',
    ],
    syllabusTags: ['Prelims', 'GS1 Geography', 'GS2 IR', 'GS3 Environment'],
    sourceHint: 'MEA, The Hindu',
    path: [
      [30.95, 81.6], // Source near Mansarovar, Tibet
      [29.98, 87.3], // Lhatse
      [29.27, 88.88], // Shigatse
      [29.55, 91.77], // Yarlung valley
      [29.6, 95.05], // Great Bend at Namcha Barwa
      [28.07, 95.33], // Pasighat (Siang)
      [27.48, 94.9], // Dibrugarh
      [26.95, 94.17], // Majuli
      [26.63, 92.8], // Tezpur
      [26.19, 91.74], // Guwahati
      [26.02, 89.98], // Dhubri
      [25.42, 89.7], // Kurigram, Bangladesh
      [23.72, 89.77], // Goalanda (Padma confluence)
      [23.23, 90.65], // Chandpur (Meghna confluence)
      [22.3, 90.65], // Meghna estuary
      [21.95, 90.55], // Bay of Bengal
    ],
    lengthKm: 3848,
    origin: 'Chemayungdung glacier area near Mount Kailash, north of the Himalaya in Tibet',
    outfall: 'Bay of Bengal through the Meghna estuary, Bangladesh',
  },
  {
    id: 'indus',
    name: 'Indus (Sindhu)',
    layer: 'rivers',
    country: 'China, India, Pakistan',
    region: 'Tibet, Ladakh, Pakistan',
    whyInNews:
      'India placed the Indus Waters Treaty in abeyance on 23 April 2025 after the Pahalgam terror attack, the sharpest change in river diplomacy with Pakistan since 1960, and the suspension has continued through 2025-26.',
    examFacts: [
      'Length about 3,180 km; rises near Lake Mansarovar and flows through Ladakh before entering Pakistan.',
      'The Indus Waters Treaty 1960 gave India the eastern rivers (Ravi, Beas, Sutlej) and Pakistan the western rivers (Indus, Jhelum, Chenab).',
      'Tributaries: Jhelum, Chenab, Ravi, Beas and Sutlej; the word Punjab refers to five of these rivers.',
      'The Indus Valley civilisation grew on its banks; Leh and Skardu are key towns on the upper course.',
      'The river ends in a large delta on the Arabian Sea near Karachi, Pakistan.',
    ],
    syllabusTags: ['Prelims', 'GS1 Geography', 'GS2 IR'],
    sourceHint: 'MEA, PIB',
    path: [
      [31.2, 81.3], // Source near Mansarovar
      [32.1, 79.6], // Demchok area, Ladakh
      [34.16, 77.58], // Leh
      [35.3, 75.63], // Skardu
      [35.74, 74.63], // Gilgit confluence
      [34.92, 72.87], // Besham
      [33.89, 72.25], // Attock
      [32.95, 71.55], // Kalabagh
      [31.82, 70.9], // Dera Ismail Khan
      [29.9, 70.8], // Taunsa
      [27.7, 68.85], // Sukkur
      [25.38, 68.37], // Hyderabad, Pakistan
      [24.75, 67.92], // Thatta
      [24.05, 67.4], // Indus delta, Arabian Sea
    ],
    lengthKm: 3180,
    origin: 'Springs near Lake Mansarovar on the Tibetan plateau',
    outfall: 'Arabian Sea through the Indus delta, Pakistan',
  },
  {
    id: 'godavari',
    name: 'Godavari',
    layer: 'rivers',
    country: 'India',
    region: 'Maharashtra, Telangana, Chhattisgarh, Andhra Pradesh, Odisha',
    whyInNews:
      'The Polavaram national project on the Godavari advanced through 2025-26 with reconstruction of its diaphragm wall completed, and the Godavari-Krishna link remains the anchor of southern interlinking proposals.',
    examFacts: [
      'Called Dakshina Ganga; length about 1,465 km, the longest peninsular river.',
      'Rises from the Brahmagiri hill at Trimbakeshwar near Nashik, Maharashtra.',
      'Largest river basin among peninsular rivers, spread over about 10 percent of India.',
      'Tributaries: Pravara, Manjra, Wainganga, Wardha, Penganga, Indravati and Sabari.',
      'Polavaram project in Andhra Pradesh is a national project on this river.',
    ],
    syllabusTags: ['Prelims', 'GS1 Geography', 'GS3 Economy'],
    path: [
      [19.93, 73.53], // Trimbakeshwar
      [20.0, 73.79], // Nashik
      [19.48, 75.39], // Paithan
      [19.15, 77.32], // Nanded
      [18.75, 79.44], // Mancherial
      [18.25, 80.2], // Charla gorge
      [17.67, 80.89], // Bhadrachalam
      [17.01, 81.77], // Rajahmundry (Kovvur)
      [16.73, 82.21], // Yanam
      [16.62, 82.31], // Antarvedi
      [16.56, 82.35], // Bay of Bengal
    ],
    lengthKm: 1465,
    origin: 'Brahmagiri hill at Trimbakeshwar, Nashik district, Maharashtra',
    outfall: 'Bay of Bengal through the Godavari delta near Antarvedi and Yanam, Andhra Pradesh',
  },
  {
    id: 'krishna',
    name: 'Krishna',
    layer: 'rivers',
    country: 'India',
    region: 'Maharashtra, Karnataka, Telangana, Andhra Pradesh',
    whyInNews:
      'Inter-state allocation on the Krishna between Andhra Pradesh and Telangana stayed contentious through 2025-26, with Srisailam and Nagarjuna Sagar releases and the Krishna Water Disputes Tribunal framework repeatedly in the news.',
    examFacts: [
      'Length about 1,400 km; second largest peninsular river basin after the Godavari.',
      'Rises at Mahabaleshwar in the Western Ghats, Maharashtra.',
      'Tributaries: Tungabhadra (largest), Koyna, Bhima, Ghataprabha, Malaprabha and Musi.',
      'Srisailam and Nagarjuna Sagar are the flagship dams on the river.',
      'The delta near Vijayawada feeds one of the most productive rice belts of Andhra Pradesh.',
    ],
    syllabusTags: ['Prelims', 'GS1 Geography', 'GS3 Economy'],
    path: [
      [17.92, 73.66], // Mahabaleshwar
      [17.98, 74.0], // Wai
      [16.85, 74.88], // Sangli
      [16.36, 75.87], // Almatti dam
      [15.94, 76.3], // Narayanpur dam
      [16.21, 77.36], // Raichur
      [16.08, 78.87], // Srisailam dam
      [16.79, 79.31], // Nagarjuna Sagar dam
      [16.51, 80.62], // Vijayawada (Prakasam barrage)
      [16.02, 80.74], // Avanigadda
      [15.75, 80.72], // Hamsaladeevi mouth
    ],
    lengthKm: 1400,
    origin: 'Mahabaleshwar in the Western Ghats, Maharashtra',
    outfall: 'Bay of Bengal at Hamsaladeevi in the Krishna delta, Andhra Pradesh',
  },
  {
    id: 'narmada',
    name: 'Narmada',
    layer: 'rivers',
    country: 'India',
    region: 'Madhya Pradesh, Maharashtra, Gujarat',
    whyInNews:
      'Sardar Sarovar releases, the Statue of Unity circuit at Kevadia and ongoing debate on large dam displacement keep the Narmada in focus during 2025-26.',
    examFacts: [
      'Length about 1,312 km; the largest west-flowing peninsular river.',
      'Flows west in a rift valley between the Vindhya and Satpura ranges.',
      'Rises at Amarkantak on the Maikal hills in Madhya Pradesh.',
      'Sardar Sarovar, Omkareshwar and Indira Sagar are major dams; Marble Rocks gorge is at Jabalpur.',
      'Forms the traditional boundary between North India and the Deccan; only two rivers, Narmada and Tapi, flow into the Gulf of Khambhat.',
    ],
    syllabusTags: ['Prelims', 'GS1 Geography', 'GS3 Economy'],
    path: [
      [22.67, 81.75], // Amarkantak
      [23.17, 79.93], // Jabalpur (Marble Rocks)
      [22.8, 78.7], // Nemawar
      [22.75, 77.72], // Hoshangabad
      [22.24, 76.15], // Omkareshwar
      [22.18, 75.58], // Maheshwar
      [22.03, 74.9], // Barwani
      [21.83, 73.75], // Sardar Sarovar dam
      [21.71, 72.99], // Bharuch
      [21.55, 72.55], // Gulf of Khambhat
    ],
    lengthKm: 1312,
    origin: 'Amarkantak plateau on the Maikal hills, Madhya Pradesh',
    outfall: 'Gulf of Khambhat, Arabian Sea, below Bharuch, Gujarat',
  },
  {
    id: 'tapi',
    name: 'Tapi (Tapti)',
    layer: 'rivers',
    country: 'India',
    region: 'Madhya Pradesh, Maharashtra, Gujarat',
    whyInNews:
      'Repeated urban flooding in Surat during heavy monsoon years keeps Tapi flood management, Ukai dam releases and riverfront works in the news through 2025-26.',
    examFacts: [
      'Length about 724 km; second largest west-flowing river of peninsular India.',
      'Rises at Multai in Betul district, Madhya Pradesh.',
      'Flows through a rift valley with the Satpura range to its north.',
      'Major dams: Ukai and Kakrapar in Gujarat, Hatnur in Maharashtra.',
      'Surat on its bank is a major textile and diamond hub highly exposed to floods.',
    ],
    syllabusTags: ['Prelims', 'GS1 Geography', 'GS3 Environment'],
    path: [
      [21.82, 78.22], // Multai source
      [21.5, 77.4], // Betul foothills
      [21.31, 76.23], // Burhanpur
      [21.24, 76.05], // Raver
      [21.04, 75.79], // Bhusawal
      [21.26, 75.5], // Chopda
      [21.37, 74.88], // Shirpur
      [21.33, 74.4], // Prakashe
      [21.25, 73.31], // Kakrapar dam
      [21.17, 72.83], // Surat
      [20.87, 72.6], // Gulf of Khambhat
    ],
    lengthKm: 724,
    origin: 'Multai, Betul district, Madhya Pradesh',
    outfall: 'Gulf of Khambhat, Arabian Sea, west of Surat, Gujarat',
  },
  {
    id: 'mahanadi',
    name: 'Mahanadi',
    layer: 'rivers',
    country: 'India',
    region: 'Chhattisgarh, Odisha',
    whyInNews:
      'The Chhattisgarh-Odisha Mahanadi water dispute, upstream barrages and Hirakud dam operations remain live through 2025-26, with the Mahanadi Water Disputes Tribunal in the background.',
    examFacts: [
      'Length about 858 km; rises in the Sihawa hills of Dhamtari district, Chhattisgarh.',
      'Hirakud dam (1957) near Sambalpur is among the longest dams in the world with its dykes.',
      'The Seonath, Ib, Tel and Hasdeo are major tributaries.',
      'The delta near Cuttack is among the largest in India and Paradip port stands at its mouth.',
      'Chitroptala, a distributary, and the Birupa system make the delta agriculturally rich.',
    ],
    syllabusTags: ['Prelims', 'GS1 Geography', 'GS3 Economy'],
    path: [
      [20.4, 81.85], // Sihawa hills source
      [20.71, 81.55], // Dhamtari
      [21.2, 81.97], // Arang
      [21.73, 82.2], // Seorinarayan
      [21.53, 83.87], // Hirakud dam
      [21.47, 83.97], // Sambalpur
      [20.84, 84.17], // Sonepur
      [20.94, 85.23], // Talcher
      [20.47, 85.88], // Cuttack
      [20.25, 86.7], // Paradip mouth
    ],
    lengthKm: 858,
    origin: 'Sihawa hills, Dhamtari district, Chhattisgarh',
    outfall: 'Bay of Bengal near Paradip, Odisha',
  },
  {
    id: 'kaveri',
    name: 'Kaveri (Cauvery)',
    layer: 'rivers',
    country: 'India',
    region: 'Karnataka, Tamil Nadu, Kerala, Puducherry',
    whyInNews:
      'The Cauvery water sharing issue, Mekedatu balancing reservoir demands and delta farmer distress recur every year, and the Cauvery Water Management Authority continued supervising releases through 2025-26.',
    examFacts: [
      'Called the Ganga of the South; length about 800 km.',
      'Rises at Talakaveri on the Brahmagiri hills in Kodagu district, Karnataka.',
      'The Kallanai (Grand Anicut) built by Karikala Chola around the 2nd century CE is one of the oldest water regulation structures still in use.',
      'Mettur dam (1934) is the key reservoir regulating releases to Tamil Nadu.',
      'The Thanjavur delta is called the granary of South India; Sivasamudram falls host an early hydroelectric station (1902).',
    ],
    syllabusTags: ['Prelims', 'GS1 Geography', 'GS3 Economy'],
    path: [
      [12.38, 75.56], // Talakaveri
      [12.42, 76.69], // Srirangapatna
      [12.3, 77.17], // Sivasamudram falls
      [12.12, 77.8], // Mettur dam
      [11.28, 77.68], // Bhavani confluence
      [10.96, 78.09], // Karur
      [10.8, 78.7], // Tiruchirappalli
      [10.88, 79.02], // Thiruvaiyaru
      [10.96, 79.37], // Kumbakonam
      [11.14, 79.86], // Kaveripoompattinam mouth
    ],
    lengthKm: 800,
    origin: 'Talakaveri on the Brahmagiri hills, Kodagu, Karnataka',
    outfall: 'Bay of Bengal at Kaveripoompattinam through the Cauvery delta, Tamil Nadu',
  },
  {
    id: 'sutlej',
    name: 'Sutlej (Satluj)',
    layer: 'rivers',
    country: 'China, India, Pakistan',
    region: 'Tibet, Himachal Pradesh, Punjab',
    whyInNews:
      'As a western river under the Indus Waters Treaty held in abeyance since April 2025, Sutlej projects such as Bhakra and Nathpa Jhakri gained new strategic attention in 2025-26.',
    examFacts: [
      'Length about 1,450 km; the longest tributary of the Indus system.',
      'Rises from the Rakas lake region near Lake Mansarovar in Tibet and enters India through Shipki La.',
      'Bhakra dam on the Sutlej creates the Gobind Sagar reservoir; Nathpa Jhakri (1,500 MW) is the largest hydropower station of India.',
      'Meets the Beas at Harike barrage in Punjab.',
      'The Indus Waters Treaty 1960 allocated the Sutlej to India as an eastern river.',
    ],
    syllabusTags: ['Prelims', 'GS1 Geography', 'GS2 IR', 'GS3 Economy'],
    path: [
      [30.95, 81.3], // Rakas lake source
      [31.81, 78.74], // Shipki La
      [31.45, 77.63], // Rampur
      [31.41, 76.43], // Bhakra dam
      [30.97, 76.53], // Rupnagar
      [30.91, 75.85], // Ludhiana
      [31.16, 75.2], // Harike barrage
      [30.92, 74.62], // Ferozepur
      [31.1, 74.45], // Kasur, Pakistan
      [29.25, 71.05], // Uch Sharif
      [28.95, 70.45], // Mithankot, Indus confluence
    ],
    lengthKm: 1450,
    origin: 'Rakas lake near Lake Mansarovar, Tibet',
    outfall: 'Joins the Indus at Mithankot, Pakistan, after merging with the Beas at Harike',
  },
  {
    id: 'yamuna',
    name: 'Yamuna',
    layer: 'rivers',
    country: 'India',
    region: 'Uttarakhand, Himachal Pradesh, Haryana, Delhi, Uttar Pradesh',
    whyInNews:
      'Cleaning the Yamuna in Delhi remained a headline governance test through 2025-26, with floodplain encroachment, frothing at barrages and sewer infrastructure audits under scrutiny.',
    examFacts: [
      'Length about 1,376 km; the largest tributary of the Ganga and the longest right bank tributary.',
      'Rises from the Yamunotri glacier on the Bandarpoonch peak, Uttarakhand.',
      'Right bank tributaries: Chambal, Sind, Betwa and Ken; the Tons is the largest Himalayan tributary.',
      'Hathnikund barrage (Haryana) regulates flows toward Delhi; Wazirabad, ITO and Okhla barrages divide the Delhi stretch.',
      'Joins the Ganga at Prayagraj; the confluence is the Sangam, centre of the Maha Kumbh.',
    ],
    syllabusTags: ['Prelims', 'GS1 Geography', 'GS3 Environment'],
    path: [
      [31.01, 78.45], // Yamunotri
      [30.44, 77.61], // Paonta Sahib
      [30.12, 77.32], // Hathnikund barrage
      [29.39, 76.96], // Panipat
      [28.61, 77.21], // Delhi
      [27.49, 77.67], // Mathura
      [27.16, 78.02], // Agra
      [26.78, 79.02], // Etawah
      [25.95, 80.15], // Hamirpur
      [25.42, 81.83], // Prayagraj (Sangam)
    ],
    lengthKm: 1376,
    origin: 'Yamunotri glacier on Bandarpoonch, Uttarakhand',
    outfall: 'Joins the Ganga at Prayagraj (Sangam), Uttar Pradesh',
  },
  {
    id: 'chambal',
    name: 'Chambal',
    layer: 'rivers',
    country: 'India',
    region: 'Madhya Pradesh, Rajasthan, Uttar Pradesh',
    whyInNews:
      'The National Chambal Sanctuary remained a gharial and river dolphin conservation flagship through 2025-26, and its ravine-control and clean-flow status draw regular exam attention.',
    examFacts: [
      'Length about 960 km; rises from Janapav hill near Manpur, Indore district, Madhya Pradesh.',
      'Flows north and northeast through a gorge, then forms the Rajasthan-Madhya Pradesh and Rajasthan-Uttar Pradesh borders.',
      'Dams in sequence: Gandhi Sagar, Rana Pratap Sagar, Jawahar Sagar and the Kota barrage.',
      'The National Chambal Sanctuary protects gharial, mugger, Ganges river dolphin and turtle species.',
      'Joins the Yamuna near Etawah (Pachnada); badland ravines along its banks are classic fluvial geomorphology examples.',
    ],
    syllabusTags: ['Prelims', 'GS1 Geography', 'GS3 Environment'],
    path: [
      [22.44, 75.72], // Janapav hill source
      [24.07, 75.07], // Mandsaur
      [24.88, 74.63], // Chittorgarh district
      [24.73, 75.55], // Gandhi Sagar dam
      [25.05, 75.62], // Rana Pratap Sagar
      [25.18, 75.83], // Kota
      [25.99, 76.35], // Sawai Madhopur
      [26.7, 77.9], // Dholpur
      [26.56, 78.78], // Bhind
      [26.8, 79.02], // Pachnada, Yamuna confluence
    ],
    lengthKm: 960,
    origin: 'Janapav hill near Manpur, Indore district, Madhya Pradesh',
    outfall: 'Joins the Yamuna near Etawah (Pachnada), Uttar Pradesh',
  },
  {
    id: 'son',
    name: 'Son',
    layer: 'rivers',
    country: 'India',
    region: 'Madhya Pradesh, Chhattisgarh, Uttar Pradesh, Bihar',
    whyInNews:
      'Bansagar dam operations and Son-Ganga interlinking debates feature in 2025-26 water policy discussions, and the Son stayed clean-flowed while many Ganga tributaries degraded.',
    examFacts: [
      'Length about 784 km; rises near Amarkantak, the same plateau as the Narmada, but flows in the opposite direction.',
      'It is the largest southern (right bank) tributary of the Ganga.',
      'Bansagar dam in Shahdol, Madhya Pradesh, is its major multipurpose project.',
      'The Kaimur range lies to its north and the plateau of Chotanagpur to its south.',
      'Joins the Ganga near Haldi Chapra, west of Patna, Bihar.',
    ],
    syllabusTags: ['Prelims', 'GS1 Geography'],
    path: [
      [23.0, 82.0], // Amarkantak plateau source
      [23.16, 81.72], // Anuppur
      [24.2, 81.58], // Bansagar dam
      [24.4, 82.0], // Sidhi
      [24.45, 82.9], // Sonebhadra
      [24.55, 83.15], // Chopan
      [24.9, 84.18], // Dehri-on-Sone
      [24.95, 84.4], // Daudnagar
      [25.48, 84.55], // Koelwar
      [25.62, 84.95], // Ganga confluence
    ],
    lengthKm: 784,
    origin: 'Amarkantak plateau on the Madhya Pradesh-Chhattisgarh border',
    outfall: 'Joins the Ganga near Haldi Chapra, west of Patna, Bihar',
  },
  {
    id: 'teesta',
    name: 'Teesta',
    layer: 'rivers',
    country: 'India, Bangladesh',
    region: 'Sikkim, West Bengal, Bangladesh',
    whyInNews:
      'Teesta water sharing with Bangladesh stayed a live bilateral topic through 2025-26 after the 2011 accord remained unsigned, while Chinese proposals for a Teesta management project and GLOF risk after the 2023 South Lhonak flood kept the river in news.',
    examFacts: [
      'Rises from Tso Lhamo lake in North Sikkim and is the lifeline of Sikkim and North Bengal.',
      'It is a major tributary of the Brahmaputra system, joining the Jamuna in Bangladesh.',
      'The October 2023 South Lhonak glacial lake outburst destroyed the Teesta-III dam at Chungthang.',
      'India and Bangladesh initialled a 2011 water sharing framework, but the agreement was never signed.',
      'Dams such as Teesta-V and Rangit cascades shape hydropower politics in Sikkim.',
    ],
    syllabusTags: ['Prelims', 'GS1 Geography', 'GS2 IR', 'GS3 Environment'],
    sourceHint: 'MEA, The Hindu',
    path: [
      [27.94, 88.65], // Tso Lhamo lake source
      [27.61, 88.63], // Chungthang
      [27.52, 88.53], // Dikchu
      [27.18, 88.53], // Rangpo
      [27.05, 88.35], // Melli
      [26.92, 88.44], // Teesta Bazaar
      [26.82, 88.5], // Sevoke
      [26.73, 88.62], // Gajoldoba barrage
      [26.52, 88.73], // Jalpaiguri
      [25.93, 88.87], // Nilphamari, Bangladesh
      [25.75, 89.0], // Rangpur
      [25.33, 89.55], // Gaibandha
      [25.48, 89.72], // Jamuna confluence
    ],
    lengthKm: 414,
    origin: 'Tso Lhamo lake, North Sikkim',
    outfall: 'Joins the Jamuna (Brahmaputra) river in Bangladesh',
  },
  {
    id: 'luni',
    name: 'Luni (Lavanavari)',
    layer: 'rivers',
    country: 'India',
    region: 'Rajasthan, Gujarat',
    whyInNews:
      'As a child of the Aravallis, the Luni features in Aravalli Green Wall and desertification debates, and its saline lower course is a standard prelims fact, renewed in 2025-26 Aravalli protection coverage.',
    examFacts: [
      'Length about 495 km; the only major Indian river that ends inland, in the Rann of Kutch marshes.',
      'Rises from the Naga hills of the Aravalli range near Ajmer, Rajasthan.',
      'Called Lavanavari (salt water) because it turns saline after Balotra; the upper reach remains fresh.',
      'Its basin is a lifeline of the Thar margin, with the Jawai dam and Sardar Samand supporting herders.',
      'It flows southwest through Pali, Jalore and Barmer districts of Rajasthan.',
    ],
    syllabusTags: ['Prelims', 'GS1 Geography', 'GS3 Environment'],
    path: [
      [26.45, 74.62], // Naga hills near Ajmer
      [26.21, 73.94], // Jaitaran
      [25.92, 73.67], // Sojat
      [25.77, 73.32], // Pali
      [25.78, 73.27], // Bali
      [25.37, 72.77], // Ahore
      [25.83, 71.42], // Balotra
      [25.69, 71.19], // Pachpadra
      [25.4, 71.05], // Sheo
      [25.1, 70.75], // Mohangarh
      [24.8, 70.85], // Rann of Kutch marshes
    ],
    lengthKm: 495,
    origin: 'Naga hills of the Aravalli range near Ajmer, Rajasthan',
    outfall: 'Marshes of the Rann of Kutch, Barmer district, Rajasthan',
  },
  {
    id: 'nile',
    name: 'Nile',
    layer: 'rivers',
    country: 'Egypt, Sudan, South Sudan, Uganda, Ethiopia (basin)',
    region: 'Northeast Africa',
    whyInNews:
      'The GERD chapter on the Blue Nile closed with the September 2025 inauguration (detail in the dams layer), while the Nile Basin Cooperative Framework Agreement and downstream Egypt-Sudan water security continued to shape 2025-26 coverage.',
    examFacts: [
      'Length about 6,650 km; traditionally ranked the longest river in the world.',
      'Formed by the White Nile from Lake Victoria and the Blue Nile from Lake Tana (Ethiopia), meeting at Khartoum.',
      'The Atbara is the last major tributary; the delta fans into the Mediterranean Sea.',
      'The Aswan High Dam (1970) created Lake Nasser and regulates the Egyptian reach.',
      'About 95 percent of Egyptians live along its valley and delta, making it the longest cultivated ribbon of settlement.',
    ],
    syllabusTags: ['Prelims', 'GS1 Geography', 'GS2 IR'],
    path: [
      [0.45, 33.2], // Jinja, Lake Victoria
      [3.6, 31.9], // Nimule
      [4.85, 31.6], // Juba
      [6.2, 31.55], // Bor
      [9.53, 31.66], // Malakal
      [13.16, 32.67], // Kosti
      [15.6, 32.53], // Khartoum (Blue Nile confluence)
      [17.7, 33.97], // Atbara confluence
      [19.3, 33.3], // Abu Hamed
      [22.34, 31.35], // Wadi Halfa
      [24.09, 32.9], // Aswan High Dam
      [25.69, 32.64], // Luxor
      [26.16, 32.72], // Qena
      [27.18, 31.18], // Asyut
      [30.04, 31.24], // Cairo
      [31.45, 30.37], // Rosetta mouth
    ],
    lengthKm: 6650,
    origin: 'Lake Victoria (White Nile); Blue Nile headwaters at Lake Tana, Ethiopia',
    outfall: 'Mediterranean Sea through the Rosetta and Damietta branches, Egypt',
  },
  {
    id: 'amazon',
    name: 'Amazon',
    layer: 'rivers',
    country: 'Peru, Colombia, Brazil',
    region: 'South America',
    whyInNews:
      'Record droughts and fires in 2023-24 followed by 2025 flood swings made the Amazon a climate case study, and the Amazon Cooperation Treaty summits pushed the rainforest-river nexus into 2025-26 headlines.',
    examFacts: [
      'Discharges about 209,000 cubic meters per second, roughly one fifth of all river flow entering the oceans.',
      'Rises from the Nevado Mismi in the Peruvian Andes (Apurimac headwaters).',
      'Largest basin in the world, about 7 million square km, spanning the greatest rainforest on Earth.',
      'The Negro and Madeira are its largest tributaries; the Meeting of Waters near Manaus is famous.',
      'No bridge crosses the main stem along its full course, keeping river transport central to the basin.',
    ],
    syllabusTags: ['Prelims', 'GS1 Geography', 'GS3 Environment'],
    path: [
      [-14.44, -71.79], // Nevado Mismi source
      [-13.5, -72.0], // Apurimac
      [-8.38, -74.55], // Pucallpa (Ucayali)
      [-4.5, -73.58], // Nauta
      [-3.75, -73.25], // Iquitos
      [-4.21, -69.94], // Leticia
      [-3.35, -64.7], // Tefe
      [-3.12, -60.02], // Manaus
      [-1.91, -55.51], // Obidos
      [-2.44, -54.7], // Santarem
      [-1.45, -48.5], // Belem
      [-0.6, -47.5], // Atlantic mouth
    ],
    lengthKm: 6400,
    origin: 'Nevado Mismi in the Peruvian Andes, headwaters of the Apurimac',
    outfall: 'Atlantic Ocean near Belem, Brazil',
  },
  {
    id: 'mississippi-missouri',
    name: 'Mississippi-Missouri',
    layer: 'rivers',
    country: 'United States',
    region: 'North America',
    whyInNews:
      'Barge disruptions from low water on the middle Mississippi and the recurring Gulf of Mexico dead zone kept this system in 2025-26 environment and economy discussions.',
    examFacts: [
      'The Missouri headwaters make the combined system about 6,275 km, among the longest in the world; the Mississippi proper is about 3,766 km.',
      'Rises at Brower Spring in the Montana Rockies and flows via Great Falls, Bismarck and St Louis.',
      'Drains 31 US states and 2 Canadian provinces before entering the Gulf of Mexico through a bird-foot delta.',
      'The 1927 Great Flood reshaped United States flood policy; the Old River Control structure manages the Atchafalaya diversion.',
      'Nutrient runoff from the Corn Belt creates a summer hypoxic dead zone in the Gulf.',
    ],
    syllabusTags: ['Prelims', 'GS1 Geography', 'GS3 Environment'],
    path: [
      [45.93, -113.48], // Brower Spring, Montana
      [45.88, -111.55], // Three Forks
      [47.5, -111.3], // Great Falls
      [46.81, -100.78], // Bismarck
      [42.5, -96.4], // Sioux City
      [41.26, -95.93], // Omaha
      [38.63, -90.2], // St Louis confluence
      [35.15, -90.05], // Memphis
      [32.3, -90.88], // Vicksburg
      [29.95, -90.07], // New Orleans
      [29.15, -89.25], // Head of Passes
    ],
    lengthKm: 6275,
    origin: 'Brower Spring in the Montana Rockies (Missouri headwaters)',
    outfall: 'Gulf of Mexico through the bird-foot delta, Louisiana',
  },
  {
    id: 'yangtze',
    name: 'Yangtze (Chang Jiang)',
    layer: 'rivers',
    country: 'China',
    region: 'East Asia',
    whyInNews:
      'The Yangtze River Protection Law and repeated basin droughts kept the river in focus, and it anchors China water diplomacy contrasts with Brahmaputra mega dam debates through 2025-26.',
    examFacts: [
      'Length about 6,300 km; the longest river in Asia and the longest to flow wholly within one country.',
      'Rises from the Geladandong peak of the Tanggula Mountains on the Qinghai-Tibet plateau.',
      'The Three Gorges Dam at Sandouping is the largest power station in the world (22.5 GW).',
      'The Three Parallel Rivers of Yunnan (Yangtze, Mekong, Salween) are a UNESCO World Heritage area.',
      'The baiji river dolphin was declared functionally extinct in 2006; the finless porpoise is now the flagship species.',
    ],
    syllabusTags: ['Prelims', 'GS1 Geography', 'GS3 Environment'],
    path: [
      [33.46, 91.19], // Geladandong source
      [32.2, 94.5], // Tongtian bend
      [33.0, 97.0], // Yushu
      [26.9, 99.4], // Shigu bend
      [26.58, 101.72], // Panzhihua
      [28.77, 104.62], // Yibin
      [29.56, 106.55], // Chongqing
      [30.7, 111.28], // Yichang (Three Gorges)
      [30.59, 114.31], // Wuhan
      [29.72, 116.0], // Jiujiang
      [32.06, 118.78], // Nanjing
      [31.4, 121.9], // Shanghai estuary
    ],
    lengthKm: 6300,
    origin: 'Geladandong peak, Tanggula Mountains, Qinghai-Tibet plateau',
    outfall: 'East China Sea near Shanghai',
  },
  {
    id: 'yellow-river-huang-he',
    name: 'Yellow River (Huang He)',
    layer: 'rivers',
    country: 'China',
    region: 'East Asia',
    whyInNews:
      'China pushed its Yellow River basin ecological protection strategy through 2025-26, mixing sediment management, wetland restoration and strict water quotas in the loesslands.',
    examFacts: [
      'Length about 5,464 km; the second longest river of China.',
      'Rises in the Bayan Har Mountains of Qinghai and carries the highest sediment load of any major river, giving it the yellow colour.',
      'Called the Sorrow of China for its devastating course-changing floods; Hukou Falls is the largest waterfall on the river.',
      'Its basin hosted the earliest Chinese civilisations and remains the wheat and millet heartland.',
      'From 1972 to 1999 the river repeatedly failed to reach the sea; modern regulation restored year-round flow.',
    ],
    syllabusTags: ['Prelims', 'GS1 Geography', 'GS3 Environment'],
    path: [
      [35.0, 96.5], // Bayan Har source
      [33.97, 102.08], // Maqu bend
      [36.06, 103.82], // Lanzhou
      [38.49, 106.3], // Yinchuan
      [39.66, 106.79], // Wuhai
      [40.6, 109.97], // Baotou
      [40.3, 111.2], // Hekou bend
      [36.12, 110.47], // Hukou Falls
      [34.55, 110.25], // Tongguan
      [34.78, 111.19], // Sanmenxia dam
      [34.75, 113.62], // Zhengzhou
      [36.68, 117.03], // Jinan
      [37.78, 119.1], // Dongying, Bohai mouth
    ],
    lengthKm: 5464,
    origin: 'Bayan Har Mountains, Qinghai province, China',
    outfall: 'Bohai Sea through the delta near Dongying, Shandong',
  },
  {
    id: 'mekong',
    name: 'Mekong (Lancang)',
    layer: 'rivers',
    country: 'China, Myanmar, Laos, Thailand, Cambodia, Vietnam',
    region: 'Southeast Asia',
    whyInNews:
      'Mekong droughts and the upstream Lancang dam cascade stayed central to 2025-26 hydropower and food security debates, with the Mekong River Commission and United States backed river monitoring pushing for shared data.',
    examFacts: [
      'Length about 4,500 km; called Lancang in China, where it contributes the largest share of dry season flow.',
      'The Khone Falls on the Laos-Cambodia stretch block through navigation, keeping the river compartmentalised.',
      'The Tonle Sap reversal near Phnom Penh doubles the lake area seasonally, sustaining the largest inland fishery in the world.',
      'The Mekong River Commission (1995) coordinates Cambodia, Laos, Thailand and Vietnam; China and Myanmar only dialogue partners.',
      'A cascade of mainstream dams has altered sediment flows and fish migration, a classic environment versus energy case.',
    ],
    syllabusTags: ['Prelims', 'GS1 Geography', 'GS2 IR', 'GS3 Environment'],
    path: [
      [33.72, 94.55], // Tibetan plateau source
      [31.14, 97.18], // Chamdo
      [25.9, 99.4], // Yunnan gorge
      [22.0, 100.8], // Jinghong
      [19.89, 102.14], // Luang Prabang
      [17.97, 102.61], // Vientiane
      [16.56, 104.75], // Savannakhet
      [15.12, 105.79], // Pakse
      [13.96, 105.9], // Khone Falls
      [12.48, 106.02], // Kratie
      [11.55, 104.92], // Phnom Penh
      [10.36, 106.36], // My Tho
      [9.85, 106.5], // South China Sea mouth
    ],
    lengthKm: 4500,
    origin: 'Lasagongma springs on the Tibetan plateau, Qinghai',
    outfall: 'South China Sea through the nine-mouth delta, Vietnam',
  },
  {
    id: 'danube',
    name: 'Danube',
    layer: 'rivers',
    country: 'Germany, Austria, Slovakia, Hungary, Croatia, Serbia, Romania, Bulgaria, Moldova, Ukraine',
    region: 'Central and Southeast Europe',
    whyInNews:
      'The September 2024 Central Europe floods, which peaked on the Danube, and renewed war-linked navigation risks near the Ukrainian delta kept the river in 2025-26 news.',
    examFacts: [
      'Length about 2,850 km; rises at the confluence of Breg and Brigach at Donaueschingen in the Black Forest.',
      'The most international river basin on Earth, touching 19 countries; four capitals sit on its banks: Vienna, Bratislava, Budapest and Belgrade.',
      'The Iron Gates gorge between Serbia and Romania is its dramatic bottleneck, now dammed for hydropower.',
      'The Danube delta (UNESCO 1991) is the best preserved wetland of Europe and ends at the Black Sea.',
      'The Main-Danube canal (1992) links the North Sea and Black Sea basins for continuous inland navigation.',
    ],
    syllabusTags: ['Prelims', 'GS1 Geography', 'GS2 IR'],
    path: [
      [48.02, 8.5], // Donaueschingen source
      [48.4, 9.99], // Ulm
      [49.02, 12.1], // Regensburg
      [48.57, 13.43], // Passau
      [48.31, 14.29], // Linz
      [48.21, 16.37], // Vienna
      [48.14, 17.11], // Bratislava
      [47.48, 19.04], // Budapest
      [44.82, 20.46], // Belgrade
      [44.68, 22.52], // Iron Gates
      [43.85, 25.97], // Ruse
      [45.17, 28.74], // Tulcea
      [45.2, 29.7], // Sulina mouth, Black Sea
    ],
    lengthKm: 2850,
    origin: 'Donaueschingen, Black Forest, Germany (Breg and Brigach confluence)',
    outfall: 'Black Sea through the Danube delta, Romania and Ukraine',
  },
  {
    id: 'rhine',
    name: 'Rhine',
    layer: 'rivers',
    country: 'Switzerland, Liechtenstein, Austria, France, Germany, Netherlands',
    region: 'Western Europe',
    whyInNews:
      'Low-water episodes on the Rhine repeatedly pinched barge freight to and from Rotterdam in recent years, keeping the river a standard example of climate stress on trade corridors in 2025-26.',
    examFacts: [
      'Length about 1,230 km; rises at Lake Toma in the Swiss Alps as the Vorderrhein.',
      'Europe\'s busiest inland waterway, linking the Swiss industrial belt, the Ruhr and the port of Rotterdam.',
      'Flows through Lake Constance and Basel, then the Rhine Gorge with the Lorelei rock.',
      'The Rhine-Alpine corridor is a designated core European freight route; the delta feeds the Waal and Lek distributaries.',
      'Repeated low-water years (2018, 2022, 2025 dry spells) forced cargo-lighter barges, a textbook climate-economy case.',
    ],
    syllabusTags: ['Prelims', 'GS1 Geography', 'GS3 Economy'],
    path: [
      [46.63, 9.26], // Lake Toma source
      [46.85, 9.53], // Chur
      [47.51, 9.52], // Lake Constance
      [47.56, 7.59], // Basel
      [49.0, 8.4], // Karlsruhe
      [50.0, 7.9], // Bingen (Lorelei reach)
      [50.94, 6.96], // Cologne
      [51.83, 6.25], // Emmerich
      [51.92, 4.48], // Rotterdam
      [51.98, 4.12], // Hoek van Holland mouth
    ],
    lengthKm: 1230,
    origin: 'Lake Toma in the Swiss Alps (Vorderrhein headstream)',
    outfall: 'North Sea at Hoek van Holland, Netherlands',
  },
  {
    id: 'volga',
    name: 'Volga',
    layer: 'rivers',
    country: 'Russia',
    region: 'Eastern Europe',
    whyInNews:
      'Volga routes anchor the expanding North-South and Caspian trade corridors discussed through 2025-26, while its dams and sturgeon decline remain standard geography fare.',
    examFacts: [
      'Length about 3,531 km; the longest river of Europe.',
      'Rises in the Valdai Hills and drains into the Caspian Sea, an endorheic basin.',
      'The Volga-Baltic Waterway and the Volga-Don Canal link it to the Baltic, White, Azov and Black Seas, the five seas system.',
      'Major reservoirs include Rybinsk, Kuibyshev (Samara) and Volgograd; Nizhny Novgorod sits at the Oka confluence.',
      'Sturgeon and caviar fisheries of the Caspian depend on its delta, now stressed by poaching and hydropower.',
    ],
    syllabusTags: ['Prelims', 'GS1 Geography'],
    path: [
      [57.22, 32.49], // Valdai Hills source
      [56.86, 35.91], // Tver
      [58.0, 38.5], // Rybinsk reservoir
      [56.33, 44.0], // Nizhny Novgorod
      [56.14, 47.25], // Cheboksary
      [55.79, 49.11], // Kazan
      [53.2, 50.15], // Samara
      [48.71, 44.51], // Volgograd
      [46.35, 48.04], // Astrakhan
      [45.85, 48.6], // Caspian Sea
    ],
    lengthKm: 3531,
    origin: 'Valdai Hills northwest of Moscow, Russia',
    outfall: 'Caspian Sea through the Volga delta below Astrakhan',
  },
  {
    id: 'amur',
    name: 'Amur',
    layer: 'rivers',
    country: 'Russia, China',
    region: 'Northeast Asia',
    whyInNews:
      'The Amur basin stays strategic in 2025-26 as the Sino-Russian border river, with the Blagoveshchensk bridge era, water cooperation talks and transboundary salmon fisheries in play.',
    examFacts: [
      'Length about 4,444 km from the Shilka-Argun confluence; among the ten longest rivers in the world.',
      'Forms a long stretch of the Russia-China border; called Heilongjiang (Black Dragon River) in China.',
      'Khabarovsk and Komsomolsk are the key Russian cities; Blagoveshchensk faces Heihe across the river.',
      'Drains into the Strait of Tartary near Nikolayevsk-on-Amur, on the Sea of Okhotsk margin.',
      'The 2013 flood was its worst on record; transboundary dams on the Zeya and Bureya moderate flows.',
    ],
    syllabusTags: ['Prelims', 'GS1 Geography', 'GS2 IR'],
    path: [
      [53.33, 121.04], // Shilka-Argun confluence source
      [52.5, 124.0], // Upper border bend
      [50.27, 127.53], // Blagoveshchensk
      [48.6, 131.5], // Border stretch
      [47.7, 132.0], // Tongjiang
      [48.48, 135.08], // Khabarovsk
      [50.55, 137.0], // Komsomolsk-on-Amur
      [51.9, 139.5], // Ulchsky district
      [53.15, 140.7], // Nikolayevsk-on-Amur
      [53.05, 141.1], // Strait of Tartary mouth
    ],
    lengthKm: 4444,
    origin: 'Confluence of the Shilka and Argun rivers (Russia-China border)',
    outfall: 'Strait of Tartary, Sea of Okhotsk, near Nikolayevsk-on-Amur',
  },
  {
    id: 'congo',
    name: 'Congo (Zaire)',
    layer: 'rivers',
    country: 'DR Congo, Republic of Congo, Zambia, Angola (basin)',
    region: 'Central Africa',
    whyInNews:
      'The record 2024 low-water level at Brazzaville exposed hydropower and barge fragility, while the Grand Inga project on the Congo resurfaced in 2025-26 Africa energy discussions.',
    examFacts: [
      'Length about 4,700 km; the largest river of Africa by discharge and second in the world after the Amazon.',
      'The deepest river on Earth, with depths exceeding 220 m in its lower gorges.',
      'The only major river to cross the equator twice, giving it steady equatorial rainfall input.',
      'Boyoma (Stanley) Falls at Kisangani mark the shift from the Lualaba to the Congo proper.',
      'The Grand Inga dam complex could theoretically deliver about 40 GW, the largest hydropower potential on the planet.',
    ],
    syllabusTags: ['Prelims', 'GS1 Geography', 'GS3 Economy'],
    path: [
      [9.8, 32.6], // Chambeshi headwaters, Zambia
      [-11.2, 29.8], // Lake Bangweulu
      [-9.0, 28.7], // Lake Mweru
      [-5.88, 26.99], // Kongolo
      [-2.95, 25.92], // Kindu
      [0.14, 25.4], // Ubundu
      [0.52, 25.19], // Kisangani (Boyoma Falls)
      [2.19, 22.37], // Bumba
      [0.05, 18.26], // Mbandaka (Ubangi confluence zone)
      [-0.9, 17.7], // Liranga confluence
      [-4.28, 15.28], // Malebo Pool (Kinshasa, Brazzaville)
      [-5.83, 13.09], // Matadi
      [-6.05, 12.35], // Atlantic mouth
    ],
    lengthKm: 4700,
    origin: 'Chambeshi headwaters in northeastern Zambia',
    outfall: 'Atlantic Ocean through a deep estuary between DR Congo and Angola',
  },
  {
    id: 'niger',
    name: 'Niger',
    layer: 'rivers',
    country: 'Guinea, Mali, Niger, Nigeria (main course)',
    region: 'West Africa',
    whyInNews:
      'Severe 2024-25 wet season floods in Niamey and the Lokoja axis, alongside Sahel instability along its valley, kept the Niger in 2025-26 headlines.',
    examFacts: [
      'Length about 4,180 km; third longest river of Africa after the Nile and Congo.',
      'Rises in the Guinea Highlands near Tembakounda and runs an unusual boomerang course north then southeast.',
      'The Inland Niger Delta in Mali is a UNESCO biosphere treasure and the rice bowl of Timbuktu.',
      'The Benue is its largest tributary, joining at Lokoja in Nigeria.',
      'It ends in a vast delta on the Gulf of Guinea through the Nun and Forcados mouths.',
    ],
    syllabusTags: ['Prelims', 'GS1 Geography', 'GS2 IR'],
    path: [
      [9.5, -10.85], // Guinea Highlands source
      [12.65, -8.0], // Bamako
      [13.44, -6.26], // Segou
      [16.77, -3.01], // Timbuktu
      [16.27, -0.04], // Gao
      [13.51, 2.11], // Niamey
      [10.9, 5.8], // Kainji lake
      [7.8, 6.74], // Lokoja (Benue confluence)
      [6.15, 6.79], // Onitsha
      [4.3, 6.2], // Nun River mouth
    ],
    lengthKm: 4180,
    origin: 'Guinea Highlands near Tembakounda, Guinea',
    outfall: 'Gulf of Guinea through the Niger delta, Nigeria',
  },
  {
    id: 'tigris',
    name: 'Tigris',
    layer: 'rivers',
    country: 'Turkey, Iraq (Syria border)',
    region: 'Middle East',
    whyInNews:
      'Iraq water stress on the Tigris, upstream Turkish dam operations and 2025-26 drought negotiations kept the Mesopotamian rivers in the news.',
    examFacts: [
      'Length about 1,850 km; rises from Lake Hazar in the Taurus Mountains of Turkey.',
      'Flows through Mosul, Samarra, Baghdad and Kut before meeting the Euphrates.',
      'Joins the Euphrates at al-Qurnah to form the Shatt al-Arab, which empties into the Persian Gulf.',
      'The Mosul dam on the Tigris is Iraq\'s largest; the Ilisu dam upstream in Turkey reshapes flows.',
      'With the Euphrates, it defined Mesopotamia, the cradle of Sumerian, Akkadian and Babylonian civilisations.',
    ],
    syllabusTags: ['Prelims', 'GS1 Geography', 'GS2 IR'],
    path: [
      [38.47, 39.42], // Lake Hazar source
      [37.91, 40.2], // Diyarbakir
      [36.34, 43.13], // Mosul
      [34.2, 43.87], // Samarra
      [33.31, 44.36], // Baghdad
      [32.51, 45.82], // Kut
      [31.84, 47.15], // Amarah
      [30.95, 47.05], // al-Qurnah confluence
      [30.51, 47.81], // Basra
      [29.95, 48.6], // Persian Gulf mouth
    ],
    lengthKm: 1850,
    origin: 'Lake Hazar in the Taurus Mountains, Turkey',
    outfall: 'Forms the Shatt al-Arab with the Euphrates, emptying into the Persian Gulf',
  },
  {
    id: 'euphrates',
    name: 'Euphrates',
    layer: 'rivers',
    country: 'Turkey, Syria, Iraq',
    region: 'Middle East',
    whyInNews:
      'Allocation disputes under the 1987 and 1990 Syria-Iraq sharing understandings, Turkish GAP dam operations and 2025-26 droughts kept the Euphrates at the centre of Middle East water politics.',
    examFacts: [
      'Length about 2,800 km; the longest river of Western Asia.',
      'Headwaters are the Kara Su and Murat Su rivers in the Armenian highlands of Turkey, meeting above the Keban dam.',
      'Flows through Raqqa and Deir ez-Zor in Syria and Haditha and Ramadi in Iraq.',
      'The Ataturk dam, keystone of Turkey\'s GAP project, is the largest dam on the river.',
      'Joins the Tigris at al-Qurnah, forming the Shatt al-Arab; ancient Sumer and Babylon grew on its banks.',
    ],
    syllabusTags: ['Prelims', 'GS1 Geography', 'GS2 IR'],
    path: [
      [39.35, 39.6], // Murat Su headwaters
      [38.75, 38.8], // Keban dam
      [37.03, 38.03], // Birecik
      [35.95, 39.01], // Raqqa
      [35.33, 40.14], // Deir ez-Zor
      [34.13, 42.38], // Haditha
      [33.42, 43.3], // Ramadi
      [31.05, 46.26], // Nasiriyah
      [30.95, 47.05], // al-Qurnah confluence
      [30.51, 47.81], // Basra
      [29.95, 48.6], // Persian Gulf mouth
    ],
    lengthKm: 2800,
    origin: 'Murat and Kara Su headwaters in the Armenian highlands, Turkey',
    outfall: 'Forms the Shatt al-Arab with the Tigris, emptying into the Persian Gulf',
  },
  {
    id: 'murray-darling',
    name: 'Murray-Darling',
    layer: 'rivers',
    country: 'Australia',
    region: 'Southeast Australia',
    whyInNews:
      'Basin Plan delivery debates, water buybacks legislated to 2026 and repeated drought-salinity cycles kept the Murray-Darling in 2025-26 environmental governance news.',
    examFacts: [
      'The system runs about 3,672 km from the Darling headwaters to the Murray Mouth, Australia\'s longest river network.',
      'The basin covers about one million square km, roughly 14 percent of Australia, feeding most of its irrigated agriculture.',
      'The Murray rises in the Australian Alps; the Darling rises in southern Queensland and joins at Wentworth.',
      'The Basin Plan (2012) balances irrigation, environmental flows and salinity through a cap-and-trade water market.',
      'The river ends at Goolwa in South Australia; periodic estuary dredging signals chronic low-flow stress.',
    ],
    syllabusTags: ['Prelims', 'GS1 Geography', 'GS3 Environment'],
    path: [
      [-28.03, 148.58], // Darling headwaters, St George
      [-29.96, 146.86], // Brewarrina
      [-30.09, 145.94], // Bourke
      [-31.56, 143.37], // Wilcannia
      [-32.4, 142.4], // Menindee lakes
      [-34.11, 141.91], // Wentworth confluence
      [-34.17, 140.78], // Renmark
      [-34.03, 139.66], // Morgan
      [-35.12, 139.27], // Murray Bridge
      [-35.55, 138.88], // Goolwa mouth
    ],
    lengthKm: 3672,
    origin: 'Darling headwaters near the Great Dividing Range, southern Queensland',
    outfall: 'Southern Ocean at the Murray Mouth near Goolwa, South Australia',
  },
];
