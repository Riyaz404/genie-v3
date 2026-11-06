export type PropertyCategory = 'apartments' | 'open-plots' | 'villas' | 'commercial'
export type PropertyStatus =
  | 'ready-to-move'
  | 'under-construction'
  | 'pre-launch'
  | 'ready-to-construct'
  | 'unknown'

export interface Property {
  id: string
  title: string
  price: number
  priceUnit: 'total' | 'per_sqft' | 'per_sq_yard' | 'per_month'
  priceLabel: string
  location: string
  city: string
  propertyType: 'apartment' | 'villa' | 'land' | 'commercial'
  bhk?: number
  bedroomOptions?: number[]
  bedroomLabel?: string
  area?: number
  areaLabel?: string
  category: PropertyCategory
  status: PropertyStatus
  statusLabel: string
  images: string[]
  imageIsRepresentative: boolean
  description: string
  amenities: string[]
  tags: ('new' | 'featured' | 'hot-deal')[]
  isRecent: boolean
  createdAt?: Date
  developer?: string
  possession?: string
  floors?: number
  bedrooms?: number
  bathrooms?: number
  parking?: number
  facing?: string
}

const representativeImages = {
  apartment: [
    'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
    'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
    'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800',
  ],
  land: [
    'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800',
    'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800',
    'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800',
  ],
  villa: [
    'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800',
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
  ],
  commercial: [
    'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
    'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800',
    'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800',
  ],
} satisfies Record<Property['propertyType'], string[]>

const projectImages: Record<string, string[]> = {
  '1': [
    'https://www.rajapushpainfina.net/assets/gallery/rajapushpa-infina-twin-towers-manchirevula-large.webp',
  ],
  '2': [
    'https://www.rajapushpainfina.net/assets/gallery/rajapushpa-infina-twin-towers-manchirevula-large.webp',
  ],
  '3': [
    'https://www.rubrick.in/img/Single_Flats/6.jpg',
    'https://www.rubrick.in/img/Single_Flats/5.jpg',
  ],
  '5': [
    'https://static.squareyards.com/resources/images/hyderabad/project-image/sai-keerthi-lake-view-project-master-plan-image1-5047.jpg?aio=w-370;h-366;crop;',
  ],
  '7': [
    'https://static.squareyards.com/resources/images/hyderabad/project-image/ksr-signature-project-project-large-image1-7912.jpg',
  ],
  '9': [
    'https://muppaprojects.com/wp-content/uploads/2025/02/Melody-1.webp',
    'https://muppaprojects.com/wp-content/uploads/2025/02/Melody-5.webp',
    'https://muppaprojects.com/wp-content/uploads/2025/02/Melody-6.webp',
  ],
  '11': [
    'https://srias.co.in/wp-content/uploads/2023/08/Shot_08_-1-300x169.jpg',
    'https://srias.co.in/wp-content/uploads/2023/08/3-1.jpg',
  ],
  '12': [
    'https://sujayinfra.com/wp-content/uploads/2023/07/View-11.jpg',
    'https://sujayinfra.com/wp-content/uploads/2023/07/View-9_4_11zon.jpg',
  ],
  '13': ['https://www.smrholdings.in/images/iconia/gal1.jpg'],
  '19': [
    'https://iramoonglade.com/images/overview-img1.jpg',
    'https://iramoonglade.com/images/gallery5.jpg',
  ],
  '23': ['https://cornerstone.eiplgroup.com/assets/img/amenities/15.jpg'],
  '24': [
    'https://thedrizzle.in/wp-content/uploads/2022/09/about-bg-1.jpg',
    'https://thedrizzle.in/wp-content/uploads/2022/09/location-img-2-2048x1246.jpg',
  ],
  '25': [
    'https://thelegacey.com/wp-content/uploads/2024/09/club-house-2.png',
    'https://thelegacey.com/wp-content/uploads/2024/08/gym.png',
  ],
}

type ListingDetails = Omit<
  Property,
  | 'id'
  | 'title'
  | 'location'
  | 'city'
  | 'propertyType'
  | 'images'
  | 'imageIsRepresentative'
  | 'amenities'
  | 'tags'
  | 'isRecent'
>

function listing(
  id: string,
  title: string,
  location: string,
  propertyType: Property['propertyType'],
  details: ListingDetails,
): Property {
  const projectImageSet = projectImages[id]

  return {
    id,
    title,
    location,
    city: 'Hyderabad',
    propertyType,
    images: projectImageSet ?? representativeImages[propertyType],
    imageIsRepresentative: projectImageSet === undefined,
    amenities: [],
    tags: [],
    isRecent: false,
    ...details,
  }
}

export const properties: Property[] = [
  listing('1', 'Infina Phase 1', 'Manchirevula', 'apartment', {
    price: 7899, priceUnit: 'per_sqft', priceLabel: '₹7,899/sqft + OTP',
    bedroomOptions: [3, 4], bedroomLabel: '3, 4 BHK', area: 3080, areaLabel: '3,080–5,725 sqft',
    category: 'apartments', status: 'under-construction', statusLabel: 'Under Construction',
    possession: '2028–2029',
    description: 'Premium residential apartment project in Manchirevula, offering spacious 3BHK and 4BHK homes in multiple sizes.',
  }),
  listing('2', 'Infina Phase 2', 'Manchirevula', 'apartment', {
    price: 6300, priceUnit: 'per_sqft', priceLabel: '₹6,300/sqft + OTP',
    bedroomOptions: [3], bedroomLabel: '3 BHK', bhk: 3, bedrooms: 3, area: 1800, areaLabel: '1,800–2,800 sqft',
    category: 'apartments', status: 'pre-launch', statusLabel: 'Pre-Launch',
    possession: '2030–2031',
    description: 'Upcoming Manchirevula apartment project offering spacious 3BHK homes in multiple sizes.',
  }),
  listing('3', 'Rubric Tulip', 'Thukkuguda', 'apartment', {
    price: 4199, priceUnit: 'per_sqft', priceLabel: '₹4,199/sqft (OTP) / ₹4,500/sqft (New)',
    bedroomOptions: [2, 3], bedroomLabel: '2, 3 BHK', area: 1125, areaLabel: '1,125–1,850 sqft',
    category: 'apartments', status: 'under-construction', statusLabel: 'Under Construction',
    possession: '2028',
    description: 'Residential apartment project in Thukkuguda, offering 2BHK and 3BHK configurations in multiple sizes.',
  }),
  listing('4', 'Rubric Meluha', 'Thukkuguda', 'apartment', {
    price: 3699, priceUnit: 'per_sqft', priceLabel: '₹3,699/sqft',
    bedroomOptions: [3], bedroomLabel: '3 BHK', bhk: 3, bedrooms: 3, area: 2460, areaLabel: '2,460 sqft',
    category: 'apartments', status: 'under-construction', statusLabel: 'Under Construction',
    possession: '2030',
    description: 'Residential 3BHK apartment project in Thukkuguda, with a listed unit size of 2,460 sqft.',
  }),
  listing('5', 'Sai Keerthi Lake View', 'Chandanagar', 'apartment', {
    price: 7200, priceUnit: 'per_sqft', priceLabel: '₹7,200/sqft',
    bedroomOptions: [2, 3], bedroomLabel: '2, 3 BHK', area: 1270, areaLabel: '1,270–1,900 sqft',
    category: 'apartments', status: 'ready-to-move', statusLabel: 'Ready to Move',
    possession: 'Immediate / Ready to Move',
    description: 'Ready-to-move Chandanagar project offering 2BHK and 3BHK apartments in multiple sizes. Landlord units are also available.',
  }),
  listing('6', 'Sujay Avalon', 'Bowrampet', 'apartment', {
    price: 4000, priceUnit: 'per_sqft', priceLabel: '₹4,000/sqft',
    bedroomOptions: [2, 3], bedroomLabel: '2, 3 BHK', area: 1400, areaLabel: '1,400–2,600 sqft',
    category: 'apartments', status: 'pre-launch', statusLabel: 'Pre-Launch',
    description: 'Upcoming Bowrampet apartment project offering 2BHK and 3BHK configurations in multiple sizes.',
  }),
  listing('7', 'KSR Signature 4', 'Tellapur', 'apartment', {
    price: 7500, priceUnit: 'per_sqft', priceLabel: '₹7,500/sqft',
    bedroomOptions: [2], bedroomLabel: '2 BHK', bhk: 2, bedrooms: 2, area: 1122, areaLabel: '1,122–1,223 sqft',
    category: 'apartments', status: 'unknown', statusLabel: 'Status not specified',
    possession: 'Landlord Units Available',
    description: 'Tellapur residential project offering 2BHK apartments in sizes from 1,122 to 1,223 sqft. Landlord units are listed as available.',
  }),
  listing('8', 'Aparna Cyber 4', 'Tellapur', 'apartment', {
    price: 8599, priceUnit: 'per_sqft', priceLabel: '₹8,599/sqft',
    bedroomOptions: [2, 3], bedroomLabel: '2, 3 BHK', area: 1287, areaLabel: '1,287–1,981 sqft',
    category: 'apartments', status: 'ready-to-move', statusLabel: 'Ready to Move',
    developer: 'Aparna', possession: 'Immediate / Ready to Move',
    description: 'Ready-to-move Tellapur apartment project offering 2BHK and 3BHK homes in multiple sizes.',
  }),
  listing('9', 'Muppas Melody', 'Tellapur', 'apartment', {
    price: 7699, priceUnit: 'per_sqft', priceLabel: '₹8,299/sqft (Ready to Move) / ₹7,699/sqft (Under Construction)',
    bedroomOptions: [2, 2.5, 3], bedroomLabel: '2, 2.5, 3 BHK', area: 1010, areaLabel: '1,010–1,725 sqft',
    category: 'apartments', status: 'unknown', statusLabel: 'Ready to Move / Under Construction',
    developer: 'Muppas', possession: 'Ready-to-Move and Under-Construction Units',
    description: 'Tellapur residential project offering 2BHK, 2.5BHK and 3BHK homes in multiple sizes and availability options.',
  }),
  listing('10', 'Vajras West City', 'Osman Nagar', 'apartment', {
    price: 7900, priceUnit: 'per_sqft', priceLabel: '₹7,900/sqft',
    bedroomOptions: [2, 2.5, 3], bedroomLabel: '2, 2.5, 3 BHK',
    category: 'apartments', status: 'under-construction', statusLabel: 'Under Construction',
    possession: 'December 2029',
    description: 'Osman Nagar residential apartment project offering 2BHK, 2.5BHK and 3BHK configurations.',
  }),
  listing('11', 'SRIAS-Tiara', 'Bachupally', 'apartment', {
    price: 6200, priceUnit: 'per_sqft', priceLabel: '₹6,200/sqft',
    bedroomOptions: [2, 3], bedroomLabel: '2, 3 BHK', area: 1280, areaLabel: '1,280–2,850 sqft',
    category: 'apartments', status: 'under-construction', statusLabel: 'Under Construction',
    developer: 'SRIAS', possession: '2027',
    description: 'Bachupally residential project offering 2BHK and 3BHK homes in sizes from 1,280 to 2,850 sqft.',
  }),
  listing('12', 'Sujay Seira', 'Bachupally', 'apartment', {
    price: 6500, priceUnit: 'per_sqft', priceLabel: '₹6,500/sqft',
    bedroomOptions: [2, 3], bedroomLabel: '2, 3 BHK', area: 1215, areaLabel: '1,215–1,790 sqft',
    category: 'apartments', status: 'ready-to-move', statusLabel: 'Ready to Move',
    developer: 'Sujay', possession: 'Immediate / Ready to Move',
    description: 'Ready-to-move Bachupally apartment project offering 2BHK and 3BHK homes in multiple sizes.',
  }),
  listing('13', 'SMR Vinaya', 'Kondapur', 'apartment', {
    price: 9999, priceUnit: 'per_sqft', priceLabel: '₹9,999/sqft',
    bedroomOptions: [2, 3, 4], bedroomLabel: '2, 3, 4 BHK', area: 1360, areaLabel: '1,360–2,435 sqft',
    category: 'apartments', status: 'ready-to-move', statusLabel: 'Ready to Move',
    developer: 'SMR', possession: 'Landlord Units Available',
    description: 'Kondapur residential apartment project offering 2BHK, 3BHK and 4BHK homes in multiple sizes. Landlord units are listed as available.',
  }),
  listing('14', 'Eshanyam', 'Kollur Exit 03', 'apartment', {
    price: 5300, priceUnit: 'per_sqft', priceLabel: '₹5,300/sqft',
    bedroomOptions: [3, 4], bedroomLabel: '3, 4 BHK', area: 1736, areaLabel: '1,736–3,203 sqft',
    category: 'apartments', status: 'under-construction', statusLabel: 'Under Construction',
    possession: 'Landlord Units Available',
    description: 'Residential project near Kollur Exit 03 offering spacious 3BHK and 4BHK configurations in multiple sizes.',
  }),
  listing('15', 'Anvitha High 9', 'Kollur Exit 2', 'apartment', {
    price: 8000, priceUnit: 'per_sqft', priceLabel: '₹8,000/sqft',
    bedroomOptions: [2, 3], bedroomLabel: '2, 3 BHK', area: 1355, areaLabel: '1,355–2,440 sqft',
    category: 'apartments', status: 'under-construction', statusLabel: 'Under Construction',
    developer: 'Anvitha', possession: '2028',
    description: 'Residential project near Kollur Exit 2 offering 2BHK and 3BHK apartments in multiple sizes.',
  }),
  listing('16', 'The Line', 'Kokapet', 'apartment', {
    price: 9999, priceUnit: 'per_sqft', priceLabel: '₹9,999/sqft',
    bedroomOptions: [2, 3], bedroomLabel: '2, 3 BHK', area: 1200, areaLabel: '1,200–1,350 sqft',
    category: 'apartments', status: 'under-construction', statusLabel: 'Under Construction',
    possession: '2027',
    description: 'Kokapet residential project offering 2BHK and 3BHK apartments in sizes from 1,200 to 1,350 sqft.',
  }),
  listing('17', 'Tribhuja', 'Kollur', 'apartment', {
    price: 8000, priceUnit: 'per_sqft', priceLabel: '₹8,000/sqft',
    bedroomOptions: [3], bedroomLabel: '3 BHK', bhk: 3, bedrooms: 3, area: 1679, areaLabel: '1,679 sqft',
    category: 'apartments', status: 'under-construction', statusLabel: 'Under Construction',
    possession: '2030',
    description: 'Kollur residential 3BHK apartment project with a listed unit size of 1,679 sqft.',
  }),
  listing('18', 'Abode Aravindam', 'Tellapur', 'apartment', {
    price: 7600, priceUnit: 'per_sqft', priceLabel: '₹7,600/sqft',
    bedroomOptions: [2], bedroomLabel: '2 BHK', bhk: 2, bedrooms: 2, area: 1350, areaLabel: '1,350 sqft',
    category: 'apartments', status: 'ready-to-move', statusLabel: 'Ready to Move',
    possession: 'Immediate / Ready to Move',
    description: 'Ready-to-move Tellapur 2BHK residential apartment project with a listed unit size of 1,350 sqft.',
  }),
  listing('19', 'Moon Glade', 'Narsingh', 'apartment', {
    price: 6599, priceUnit: 'per_sqft', priceLabel: '₹6,599/sqft + OTP',
    bedroomOptions: [3], bedroomLabel: '3 BHK', bhk: 3, bedrooms: 3, area: 2100, areaLabel: '2,100–2,320 sqft',
    category: 'apartments', status: 'pre-launch', statusLabel: 'Pre-Launch',
    description: 'Upcoming Narsingh apartment project offering spacious 3BHK configurations in multiple sizes.',
  }),
  listing('20', 'Samruddhi', 'Patancheruvu', 'apartment', {
    price: 5200, priceUnit: 'per_sqft', priceLabel: '₹5,200/sqft',
    bedroomOptions: [2, 3], bedroomLabel: '2, 3 BHK', area: 1100, areaLabel: '1,100–1,620 sqft',
    category: 'apartments', status: 'unknown', statusLabel: 'Status not specified',
    description: 'Patancheruvu residential apartment project offering 2BHK and 3BHK homes in multiple sizes.',
  }),
  listing('21', 'MPR Urban City', 'Patancheruvu', 'apartment', {
    price: 5399, priceUnit: 'per_sqft', priceLabel: '₹5,399/sqft',
    bedroomOptions: [1, 2], bedroomLabel: '1, 2 BHK', area: 650, areaLabel: '650–910 sqft',
    category: 'apartments', status: 'unknown', statusLabel: 'Status not specified',
    description: 'Patancheruvu residential project offering compact 1BHK and 2BHK apartments in multiple sizes.',
  }),
  listing('22', 'The Tamrind', 'Alkapur Township, Manikonda', 'apartment', {
    price: 8699, priceUnit: 'per_sqft', priceLabel: '₹8,699/sqft',
    bedroomOptions: [2, 3], bedroomLabel: '2, 3 BHK', area: 1280, areaLabel: '1,280–2,410 sqft',
    category: 'apartments', status: 'ready-to-move', statusLabel: 'Ready to Move',
    possession: 'Ready to Move',
    description: 'Ready-to-move project in Alkapur Township, Manikonda, offering 2BHK and 3BHK apartments in multiple sizes.',
  }),
  listing('23', 'The Cornerstone', 'Puppalaguda', 'apartment', {
    price: 9500, priceUnit: 'per_sqft', priceLabel: '₹9,500/sqft',
    bedroomOptions: [2, 2.5, 3], bedroomLabel: '2, 2.5, 3 BHK', area: 1370, areaLabel: '1,370–2,350 sqft',
    category: 'apartments', status: 'ready-to-move', statusLabel: 'Ready to Move',
    possession: 'Ready to Move',
    description: 'Ready-to-move Puppalaguda residential project offering 2BHK, 2.5BHK and 3BHK apartments in multiple sizes.',
  }),
  listing('24', 'The Drizzle', 'Narsingh', 'apartment', {
    price: 8499, priceUnit: 'per_sqft', priceLabel: '₹8,499/sqft',
    bedroomOptions: [2, 2.5, 3], bedroomLabel: '2, 2.5, 3 BHK', area: 1375, areaLabel: '1,375–3,210 sqft',
    category: 'apartments', status: 'ready-to-move', statusLabel: 'Ready to Move',
    possession: 'Ready to Move',
    description: 'Ready-to-move Narsingh residential project offering 2BHK, 2.5BHK and 3BHK apartments in multiple sizes.',
  }),
  listing('25', 'The Legacy', 'Manikonda', 'apartment', {
    price: 6499, priceUnit: 'per_sqft', priceLabel: '₹6,499/sqft',
    bedroomOptions: [2, 2.5, 3], bedroomLabel: '2, 2.5, 3 BHK', area: 1340, areaLabel: '1,340–2,215 sqft',
    category: 'apartments', status: 'unknown', statusLabel: 'Status not specified',
    possession: 'December 2028',
    description: 'Manikonda residential project offering 2BHK, 2.5BHK and 3BHK apartments in multiple sizes.',
  }),
  listing('26', 'GENIE REALTY County', 'Makthamandharam, Srisailam Highway', 'land', {
    price: 13500, priceUnit: 'per_sq_yard', priceLabel: '₹13,500/sq yard',
    area: 165, areaLabel: '165–597 sq yards',
    category: 'open-plots', status: 'ready-to-construct', statusLabel: 'Ready to Construct',
    possession: 'Landlord Units / Availability to be confirmed',
    description: 'Open plot development on Srisailam Highway at Makthamandharam, offering plots from 165 to 597 square yards.',
  }),
  listing('27', 'Olive Greens', 'Sagar Road, Ibrahimpatnam', 'land', {
    price: 11000, priceUnit: 'per_sq_yard', priceLabel: '₹11,000/sq yard',
    area: 146, areaLabel: '146–506 sq yards',
    category: 'open-plots', status: 'ready-to-construct', statusLabel: 'Ready to Construct',
    possession: 'Landlord Units / Availability to be confirmed',
    description: 'Open plot project on Sagar Road, Ibrahimpatnam, offering plots from 146 to 506 square yards.',
  }),
  listing('28', 'Palm City', 'Shadnagar', 'land', {
    price: 7999, priceUnit: 'per_sq_yard', priceLabel: '₹7,999/sq yard',
    area: 240, areaLabel: '240–614 sq yards',
    category: 'open-plots', status: 'ready-to-construct', statusLabel: 'Ready to Construct',
    possession: 'Landlord Units / Availability to be confirmed',
    description: 'Shadnagar open plot development offering plots from 240 to 614 square yards.',
  }),
  listing('29', 'Wonder Lagoons', 'Thukkuguda Exit 14', 'land', {
    price: 30000, priceUnit: 'per_sq_yard', priceLabel: '₹30,000/sq yard',
    area: 150, areaLabel: '150–500 sq yards',
    category: 'open-plots', status: 'unknown', statusLabel: 'Status not specified',
    description: 'Open plot project near Thukkuguda Exit 14, offering plots from 150 to 500 square yards.',
  }),
  listing('30', 'Grand Elite', 'Kadthal, Srisailam', 'land', {
    price: 15000, priceUnit: 'per_sq_yard', priceLabel: '₹15,000/sq yard',
    area: 163, areaLabel: '163–597 sq yards',
    category: 'open-plots', status: 'ready-to-construct', statusLabel: 'Ready to Construct',
    possession: 'Landlord Units / Availability to be confirmed',
    description: 'Open plot development in the Kadthal, Srisailam region, offering plots from 163 to 597 square yards.',
  }),
  listing('31', 'Elevating Life Style', 'Kismatpur', 'villa', {
    price: 13500, priceUnit: 'per_sq_yard', priceLabel: '₹13,500/sq yard',
    area: 273.4, areaLabel: '273.4 sq yards (plot area)',
    category: 'villas', status: 'ready-to-move', statusLabel: 'Ready to Move',
    possession: 'Immediate / Ready to Move',
    description: 'Ready-to-move villa project in Kismatpur with a listed plot area of 273.4 square yards.',
  }),
  listing('32', 'Urban Commune', 'Bhanur', 'villa', {
    price: 19000000, priceUnit: 'total', priceLabel: '₹1.90 Crore',
    area: 170, areaLabel: '170 sq yards (plot area)',
    category: 'villas', status: 'under-construction', statusLabel: 'Under Construction',
    description: 'Bhanur villa project with a listed plot area of 170 square yards.',
  }),
  listing('33', 'Issara Belmond', 'Thukkuguda', 'villa', {
    price: 14000, priceUnit: 'per_sq_yard', priceLabel: '₹14,000/sq yard',
    areaLabel: '400 (unit to be confirmed)',
    category: 'villas', status: 'under-construction', statusLabel: 'Under Construction',
    possession: 'Mid 2027',
    description: 'Under-construction villa project in Thukkuguda. The listed area is 400; its unit needs confirmation.',
  }),
  listing('34', 'KGR Anandam', 'Thukkuguda', 'villa', {
    price: 8500, priceUnit: 'per_sq_yard', priceLabel: '₹8,500/sq yard',
    area: 220, areaLabel: '220–345 sq yards (plot area)',
    category: 'villas', status: 'under-construction', statusLabel: 'Under Construction',
    possession: 'December 2027',
    description: 'Under-construction Thukkuguda villa project, with listed property sizes from 220 to 345 square yards.',
  }),
  listing('35', 'Poojitha Tech', 'Kokapet, Exit 1', 'commercial', {
    price: 12000, priceUnit: 'per_sqft', priceLabel: '₹12,000/sqft',
    area: 1000, areaLabel: '1,000 sqft',
    category: 'commercial', status: 'unknown', statusLabel: 'Status not specified',
    possession: 'December 2026',
    description: 'Kokapet Exit 1 commercial property with a listed area of 1,000 sqft.',
  }),
]

export const locations = [...new Set(properties.map((property) => property.location))]

export const categories: { id: PropertyCategory; label: string; description: string }[] = [
  { id: 'apartments', label: 'Apartments', description: 'Residential apartment projects across Hyderabad' },
  { id: 'open-plots', label: 'Open Plots', description: 'Residential plots for land investment and construction' },
  { id: 'villas', label: 'Villas', description: 'Independent villa projects and homes' },
  { id: 'commercial', label: 'Commercial', description: 'Commercial real estate opportunities' },
]

export const propertyTypes = ['apartment', 'villa', 'land', 'commercial'] as const
export const bhkOptions = [1, 2, 2.5, 3, 4] as const

export function formatPrice(price: number): string {
  if (price >= 10000000) {
    return `${(price / 10000000).toFixed(2)} Cr`
  } else if (price >= 100000) {
    return `${(price / 100000).toFixed(2)} L`
  }
  return price.toLocaleString('en-IN')
}

export function formatPropertyPrice(property: Property): string {
  const startingPrice = getStartingPrice(property)
  if (startingPrice === undefined) return 'Price on request'

  const formattedPrice = `₹${formatPrice(startingPrice)}`
  return property.priceUnit === 'total' ? formattedPrice : `Starting from ${formattedPrice}`
}

export function getStartingPrice(property: Property): number | undefined {
  if (property.priceUnit === 'total') return property.price
  if (property.area === undefined || property.priceUnit === 'per_month') return undefined

  return property.price * property.area
}

export function getRecentProperties(days: number = 7): Property[] {
  const cutoffDate = new Date()
  cutoffDate.setDate(cutoffDate.getDate() - days)
  return properties.filter((property) => property.createdAt && property.createdAt >= cutoffDate)
}

export function filterProperties(filters: {
  category?: string
  location?: string
  propertyType?: string
  bhk?: number
  minPrice?: number
  maxPrice?: number
  status?: string
  recentOnly?: boolean
}): Property[] {
  const hasBudgetFilter =
    (filters.minPrice !== undefined && filters.minPrice > 0) ||
    (filters.maxPrice !== undefined && filters.maxPrice < 100000000)

  return properties.filter((property) => {
    const startingPrice = getStartingPrice(property)
    if (filters.category && property.category !== filters.category) return false
    if (filters.location && property.location !== filters.location) return false
    if (filters.propertyType && property.propertyType !== filters.propertyType) return false
    if (filters.bhk && property.bhk !== filters.bhk && !property.bedroomOptions?.includes(filters.bhk)) return false
    if (hasBudgetFilter && startingPrice === undefined) return false
    if (filters.minPrice !== undefined && startingPrice !== undefined && startingPrice < filters.minPrice) return false
    if (filters.maxPrice !== undefined && startingPrice !== undefined && startingPrice > filters.maxPrice) return false
    if (filters.status && property.status !== filters.status) return false
    if (filters.recentOnly && !property.isRecent) return false
    return true
  })
}
