// Ashland County, Ohio — curated directory of meaningful links.
// Single source of truth for the app. Keep entries verified and current.
// Fields: name, category, subcategory, url, description
// Last reviewed: 2026-11-08
//
// Every URL below was fetched and its content checked against the organization
// it claims to be. Nothing here was guessed from a naming pattern.
//
// THE HAZARD HERE IS THAT ASHLAND IS EVERYWHERE
//
// Ashland, KENTUCKY (Boyd County), Ashland, OREGON, Ashland, VIRGINIA, Ashland,
// WISCONSIN and Ashland County, WISCONSIN all outrank Ohio in search. Ashland
// Community & Technical College is Kentucky's. Traps hit while building this:
//
//   k03023.site.kiwanis.org   -> Kiwanis of Ashland, OREGON
//   graceashland.360unite.com -> Habitat page, Ashland, OREGON
//   visitashland.com          -> Ashland, OREGON
//   ashlandvirginia.com       -> Ashland, VIRGINIA
//   vermiliontownship.com     -> Vermilion Township, ERIE County (not Vermillion here)
//   mifflin-oh.gov            -> a different Mifflin Township (ours is mifflintownship.com)
//   clearcreektownshipia.gov  -> Iowa
//
// THINGS THAT ARE OUT OF DATE EVERYWHERE ELSE:
//
//   * The Ashland County–West Holmes Career Center is now Heartland Technical
//     Education Center (heartlandtech.org); acwhcc.org redirects.
//   * Hospice of North Central Ohio (Ashland) was acquired in 2024 by Hospice
//     of the Western Reserve, which became Reserve Care in February 2026.
//   * Tri-County ESC moved from Wooster's tricountyesc.org (blocks fetching)
//     to youresc.k12.oh.us, at 741 Winkler Drive, Wooster.
//   * Ashland Area Economic Development now brands itself Grow Ashland
//     (growashland.com); the old "Council for Economic Development" name is in
//     state filings only.
//   * OhioMeansJobs Ashland County lives on everybodyworks.org, the
//     Ashland/Wayne/Holmes workforce site; ohiomeansjobs.com/ashland redirects.
//   * The Auditor's site is ashlandcounty.org/auditor/ (the www form fails);
//     its parcel viewer is auditor.ashlandcountyoh.us/Map.
//   * parentingplus.org (Ashland Parenting Plus, still in a 2023 agency list)
//     is now a hijacked Indonesian gambling blog. Do not link.
//   * Southern State / Hillsboro-area listings for the ESC are the wrong ESC;
//     Southern Ohio ESC does not serve Ashland.
//
// GEOGRAPHY WORTH KNOWING:
//
//   * One city (Ashland), eight villages, fifteen townships. Loudonville
//     straddles Ashland/Holmes. Of the villages only Loudonville, Perrysville
//     and Jeromesville have websites; Bailey Lakes's blocks fetching; Hayesville,
//     Mifflin and Savannah are Facebook only; Polk has nothing. Seven townships
//     have sites; Milton and Orange block fetching; the rest have none.
//   * Black River Local straddles Ashland/Medina/Lorain. Crestview Local is a
//     Richland County district that takes Savannah, Bailey Lakes and most of
//     Clear Creek Township — included and flagged.
//   * Only two independent libraries: Ashland Public (county-wide bookmobile)
//     and Loudonville Public. No branch buildings elsewhere.
//   * No county building department — the City of Ashland's engineering office
//     handles commercial building code for unincorporated areas; zoning permits
//     come from township and village inspectors; Hanover and Mohican are unzoned.
//   * 9-1-1 is Ashland Combined Dispatch, the Sheriff's communications division.
//   * Pleasant Hill Lake Park and Charles Mill Lake Park both straddle the
//     Ashland–Richland line (Charles Mill has a Mansfield address). Mohican
//     State Park, the forest and the Loudonville liveries are the county's
//     tourism core. Sorrowful Mother Shrine is not here (Seneca County).
//   * Ashland is in the Cleveland TV market with no local station. WNCO AM/FM
//     and WRDL are the only stations licensed to the county; WQKT (Wooster) and
//     WMAN (Mansfield) cover it from outside.
//   * Several bodies that serve the county sit elsewhere: Tri-County ESC
//     (Wooster), the Farm Bureau office (Wooster), Area Agency on Aging 5
//     (Ontario), Third Street Family Health (Mansfield), Catholic Charities
//     (Diocese of Cleveland). All flagged.
//
// LEFT OUT rather than listed unverified: the Recorder's Kofile records search,
// Clerk of Courts dockets and the Law Library (block fetching); Family & Children
// First on ashlandcounty.org (errors; the JFS page is used instead); Ashland
// County Airport (its only site is an empty FrontPage frameset); the villages
// and townships named above; Mohican Area Growth Foundation, Habitat for
// Humanity of Ashland County, the Rotary and Kiwanis clubs, Loudonville Canoe
// Livery, the Ashland Senior Citizen Center and Ashland Montessori (no
// verifiable first-party sites); Pump House Ministries and Mohican Wildlife
// Weekend (sites frozen in 2018 and 2022); Loudonville Times-Shopper (could not
// confirm it still publishes); WNCO 1340 AM (covered in the FM entry).

export const CATEGORIES = [
  "Government",
  "Education",
  "Health",
  "Business & Economy",
  "Community & Social",
  "Recreation & Tourism",
  "News & Media",
];

// The county Auditor's online parcel/property records portal.
export const AUDITOR_VENDOR = "Ashland County Auditor Property Search & GIS Map";

export const LINKS = [
  // ---------- Government ----------
  { name: "Ashland County, Ohio", category: "Government", subcategory: "County", url: "https://www.ashlandcountyoh.us/", description: "Official county portal, with county offices, services and the department directory; County Office Building, 110 Cottage Street in Ashland." },
  { name: "Ashland County Commissioners", category: "Government", subcategory: "County", url: "https://www.ashlandcountyoh.us/about-ashland-county/commissioners", description: "Three-member board meeting Thursdays at 9 a.m. and the second and fourth Tuesdays, at 110 Cottage Street in Ashland." },
  { name: "Ashland County Department Directory", category: "Government", subcategory: "County", url: "https://www.ashlandcountyoh.us/directory", description: "Phone directory of every county department and office." },
  { name: "Ashland County Job & Family Services", category: "Government", subcategory: "County", url: "http://www.ashlandjfs.org", description: "County JFS — public assistance, child support and children services — at 15 West 4th Street in Ashland; also home to the Family & Children First Council and the OhioMeansJobs center." },
  { name: "Ashland County Board of Developmental Disabilities", category: "Government", subcategory: "County", url: "http://www.ashlandcbdd.org/", description: "County board of DD at 1256 S. Center Street in Ashland, operating Dale-Roy School — early intervention, service coordination and employment supports." },
  { name: "Ashland County Auditor", category: "Government", subcategory: "Auditor", url: "https://ashlandcounty.org/auditor/", description: "Office of Auditor Cindy Funk at the courthouse, 142 W. 2nd Street in Ashland, with owner, address, parcel and GIS property searches." },
  { name: "Ashland County Auditor Property Search & GIS Map", category: "Government", subcategory: "GIS", url: "https://auditor.ashlandcountyoh.us/Map", description: "The Auditor's parcel search and GIS map — the service this project's parcel data is built from." },
  { name: "Ashland County Engineer — Tax Map Office", category: "Government", subcategory: "GIS", url: "https://www.ashlandcounty.org/engineer/index.php?id=tax-map-office", description: "Tax Map Office of the County Engineer at the courthouse, 142 W. 2nd St. in Ashland." },
  { name: "Ashland County Treasurer", category: "Government", subcategory: "Treasurer", url: "https://www.ashlandcounty.org/treasurer/", description: "Office of Treasurer Angie McQuillen, collecting real estate taxes at the courthouse, 142 W. 2nd Street in Ashland." },
  { name: "Ashland County Recorder", category: "Government", subcategory: "Recorder", url: "https://www.ashlandcounty.org/recorder/", description: "Office of Recorder Erin Beebe at the courthouse, 142 W. 2nd Street in Ashland, with a link to the online records search." },
  { name: "Ashland County Board of Elections", category: "Government", subcategory: "Elections", url: "https://www.boe.ohio.gov/ashland/", description: "County elections office at 110 Cottage St., Suite 106 in Ashland — election information, voter registration, absentee voting and polling places." },
  { name: "Ashland County Clerk of Courts", category: "Government", subcategory: "Courts", url: "https://www.ashlandcounty.org/clerkofcourts/", description: "Office of Clerk Deborah A. Myers, Legal Division, at the courthouse, 142 W. 2nd Street in Ashland." },
  { name: "Ashland County Clerk of Courts — Title Department", category: "Government", subcategory: "Courts", url: "https://www.ashlandcounty.org/clerkofcourts/title.php", description: "Auto and watercraft titles, in the courthouse basement." },
  { name: "Ashland County Common Pleas Court", category: "Government", subcategory: "Courts", url: "https://ashlandcommonpleas.com/", description: "General and Domestic Relations divisions at the courthouse, 142 West Second Street in Ashland." },
  { name: "Ashland County Juvenile & Probate Court", category: "Government", subcategory: "Courts", url: "https://acjuvenileprobate.org/", description: "Juvenile and Probate divisions of the Common Pleas Court under Judge Karen DeSanto Kellogg, at 142 West Second Street in Ashland." },
  { name: "Ashland Municipal Court", category: "Government", subcategory: "Courts", url: "https://www.ashlandmunicourt.com/", description: "Misdemeanor, traffic, civil and small claims court for Ashland County, Judge John L. Good presiding, at 1209 East Main Street in Ashland." },
  { name: "Ashland County Prosecutor", category: "Government", subcategory: "Courts", url: "https://www.ashlandcounty.org/prosecutor/", description: "Office of Prosecuting Attorney Christopher R. Tunnell at 110 Cottage Street, 3rd floor in Ashland." },
  { name: "Ashland County Sheriff's Office", category: "Government", subcategory: "Public Safety", url: "https://www.ashlandcountysheriff.org/", description: "Office of Sheriff Kurt J. Schneider, with the county jail and the Ashland Combined Dispatch 9-1-1 center, at 1205 East Main Street in Ashland." },
  { name: "Ashland County Coroner", category: "Government", subcategory: "Public Safety", url: "https://www.ashlandcounty.org/coroner/", description: "Office of Coroner Dale R. Thomae, D.O., at the Justice Complex, 1207 East Main Street in Ashland." },
  { name: "Ashland County Homeland Security & Emergency Management", category: "Government", subcategory: "Public Safety", url: "https://www.ashlandcountyoh.us/county-services/homeland-security-and-emergency-management-agency", description: "County EMA, coordinating emergency planning and CodeRED alerts from 110 Cottage Street, 2nd floor in Ashland." },
  { name: "Ashland County Dog Shelter", category: "Government", subcategory: "Public Safety", url: "https://www.ashlandcountyoh.us/county-services/ashland-county-dog-shelter", description: "County dog shelter and dog warden at 1740 Baney Road in Ashland; adoptions by appointment." },
  { name: "Ashland County Engineer", category: "Government", subcategory: "Public Works", url: "https://www.ashlandcounty.org/engineer/", description: "Office of Engineer Edward J. Meixner at 1511 Cleveland Ave. in Ashland, maintaining county roads and bridges." },
  { name: "Ashland County Solid Waste District", category: "Government", subcategory: "Public Works", url: "https://www.ashlandcountyoh.us/county-services/solid-waste-district-home-recycling", description: "County recycling and waste programs, from 110 Cottage Street in Ashland." },
  { name: "Ashland County Planning Department", category: "Government", subcategory: "Planning", url: "https://www.ashlandcounty.org/planning/", description: "County Planning Department and Planning Commission, reviewing lot splits in unincorporated areas, at 110 Cottage Street in Ashland; zoning permits come from township and village inspectors, and the county has no building department of its own." },
  { name: "Ashland City/County CHIP", category: "Government", subcategory: "Planning", url: "https://ashlandcounty.org/chip/", description: "Community Housing Improvement Program office administering state housing-repair grants for low- and moderate-income county households." },
  { name: "Ashland Soil & Water Conservation District", category: "Government", subcategory: "Conservation", url: "https://www.ashlandswcd.com/", description: "The county's soil and water conservation district at 110 Cottage Street in Ashland." },
  { name: "Ashland County Veterans Service Office", category: "Government", subcategory: "Veterans", url: "https://ashlandcountyveteransohio.org/", description: "Veterans benefits assistance and emergency aid, at 110 Cottage Street in Ashland." },
  { name: "City of Ashland", category: "Government", subcategory: "City", url: "https://www.ashland-ohio.com/", description: "The county seat and only city; Municipal Building at 206 Claremont Ave. — council, building and zoning, engineering and utilities." },
  { name: "Ashland Public Transit", category: "Government", subcategory: "Transit", url: "https://ashland-ohio.com/page/transit", description: "Shared-ride public transportation run by the City of Ashland." },
  { name: "Village of Loudonville", category: "Government", subcategory: "Village", url: "http://www.loudonville-oh.us/", description: "Village Hall at 156 North Water Street in Loudonville, a village that straddles the Ashland–Holmes county line." },
  { name: "Village of Perrysville", category: "Government", subcategory: "Village", url: "http://www.villageofperrysville.com/", description: "Village office at 120 N. Bridge St. in Perrysville." },
  { name: "Village of Jeromesville", category: "Government", subcategory: "Village", url: "https://jeromesville.nationbuilder.com/", description: "Village site with council notices and water and wastewater information; Town Hall at 81 S. High Street in Jeromesville." },
  { name: "Ashland County Cities, Villages & Townships", category: "Government", subcategory: "Township", url: "https://www.ashlandcountyoh.us/about-ashland-county/about-ashland-county", description: "County directory of the city, eight villages and fifteen townships, with links where a website or Facebook page exists — Hayesville, Mifflin, Savannah and Polk have no websites." },
  { name: "Green Township", category: "Government", subcategory: "Township", url: "http://www.greentwp.us/", description: "Township in the Perrysville area." },
  { name: "Jackson Township", category: "Government", subcategory: "Township", url: "http://www.jacksontwpohio.com/", description: "Township garage at 799 County Road 175 near West Salem." },
  { name: "Mifflin Township", category: "Government", subcategory: "Township", url: "https://mifflintownship.com/", description: "Township in southwest Ashland County, at 1167 County Road 30A." },
  { name: "Montgomery Township", category: "Government", subcategory: "Township", url: "https://montgomerytwpohio.com/", description: "Township surrounding the city of Ashland." },
  { name: "Sullivan Township", category: "Government", subcategory: "Township", url: "http://www.sullivanohio.com", description: "Township office at 500 U.S. Route 224 in Sullivan." },
  { name: "Troy Township", category: "Government", subcategory: "Township", url: "http://www.troytwp.org/", description: "Township office at 923 US Highway 224 Rear in Nova." },
  // ---------- Education ----------
  { name: "Ashland City Schools", category: "Education", subcategory: "K-12", url: "https://www.ashlandcityschools.org/", description: "Public district headquartered at 1407 Claremont Avenue in Ashland, with Ashland High, Ashland Middle, Taft Intermediate, Edison and Reagan elementaries and Little Arrows Preschool." },
  { name: "Hillsdale Local Schools", category: "Education", subcategory: "K-12", url: "http://www.hillsdale.k12.oh.us/", description: "Public district at 479 Township Road 1902 in Jeromesville, with a PK-6 building and a 7-12 building." },
  { name: "Loudonville-Perrysville Exempted Village Schools", category: "Education", subcategory: "K-12", url: "https://www.lpschools.k12.oh.us/", description: "Public district at 210 East Main Street in Loudonville — R.F. McMullen Elementary, C.E. Budd School and Loudonville High School." },
  { name: "Mapleton Local Schools", category: "Education", subcategory: "K-12", url: "https://mapleton.k12.oh.us/", description: "Public district at 635 County Road 801 in Orange Township (Polk/Nankin area), with an elementary, middle and high school." },
  { name: "Black River Local Schools", category: "Education", subcategory: "K-12", url: "https://www.blackriverschools.org/", description: "Public district at 257 County Road 40 in Sullivan, serving northeastern Ashland County and parts of Medina and Lorain counties." },
  { name: "Crestview Local Schools", category: "Education", subcategory: "K-12", url: "https://www.crestviewschools.net/", description: "Richland County-based district at 1575 State Route 96 (Ashland address) whose territory includes Savannah, Bailey Lakes and most of Clear Creek Township in Ashland County." },
  { name: "Heartland Technical Education Center", category: "Education", subcategory: "Career Center", url: "https://www.heartlandtech.org/", description: "Joint vocational school district at 1763 State Route 60 in Ashland, formerly the Ashland County–West Holmes Career Center, with high school career-technical programs and adult education." },
  { name: "Tri-County Educational Service Center", category: "Education", subcategory: "ESC", url: "https://www.youresc.k12.oh.us/", description: "ESC serving Ashland, Holmes and Wayne county districts, at 741 Winkler Drive in Wooster." },
  { name: "Ashland University", category: "Education", subcategory: "University", url: "https://www.ashland.edu/", description: "Private university at 401 College Avenue in Ashland, with more than 60 undergraduate majors and 20 graduate and doctoral programs." },
  { name: "Ashland Theological Seminary", category: "Education", subcategory: "Seminary", url: "https://seminary.ashland.edu/", description: "Graduate division of Ashland University at 910 Center Street in Ashland, operating since 1906." },
  { name: "Ashland Christian School", category: "Education", subcategory: "Private School", url: "https://ashlandchristian.org/", description: "Faith-based school at 1144 West Main Street in Ashland, preschool through 8th grade." },
  { name: "St. Edward School", category: "Education", subcategory: "Private School", url: "https://www.stedwardschoolashland.org/", description: "Catholic parish elementary school at 433 Cottage Street in Ashland." },
  { name: "Kno-Ho-Co-Ashland Head Start", category: "Education", subcategory: "Preschool", url: "https://www.knohoco.org/", description: "Head Start preschool centers in Ashland, Loudonville and Sullivan, run by the Kno-Ho-Co-Ashland Community Action Commission." },
  { name: "Ashland Public Library", category: "Education", subcategory: "Library", url: "https://www.ashland.lib.oh.us/", description: "Public library at 224 Claremont Avenue in Ashland, with a bookmobile serving the whole county; the county's smaller communities have no branch buildings." },
  { name: "Loudonville Public Library", category: "Education", subcategory: "Library", url: "https://www.loudonvillelibrary.org/", description: "Independent public library at 122 East Main Street in Loudonville." },
  // ---------- Health ----------
  { name: "UH Samaritan Medical Center", category: "Health", subcategory: "Hospital", url: "https://www.uhhospitals.org/locations/uh-samaritan-medical-center", description: "University Hospitals' 55-bed acute-care hospital at 1025 Center Street in Ashland, with a 24-hour emergency room, surgery, heart and vascular care and an adjacent cancer infusion center." },
  { name: "Ashland County Health Department", category: "Health", subcategory: "Public Health", url: "https://health-ashlandcounty-oh.gov/", description: "County public health agency at 1211 Claremont Avenue in Ashland — immunizations, communicable disease control, environmental health, birth and death records and emergency preparedness." },
  { name: "Mental Health & Recovery Board of Ashland County", category: "Health", subcategory: "Mental Health", url: "https://www.ashlandmhrb.org/", description: "County behavioral health planning and funding board at 1605 County Road 1095 in Ashland, with a provider directory and 24-hour crisis line, 419-289-6111." },
  { name: "Appleseed Community Mental Health Center", category: "Health", subcategory: "Mental Health", url: "https://appleseedmentalhealth.com/", description: "Community mental health center at 2233 Rocky Lane in Ashland — 24-hour crisis line, outpatient care, substance use treatment and Safe Haven domestic violence services." },
  { name: "Third Street Family Health Services — Ashland", category: "Health", subcategory: "Clinic", url: "https://www.thirdstreetfamily.org/", description: "Mansfield-based community health center with the Ashland Health & Wellness Center at 309 Arthur Street and 9th Street Dental at 431 9th Street in Ashland." },
  { name: "Ashland Christian Health Center", category: "Health", subcategory: "Clinic", url: "https://www.ashlandchristianhealthcenter.org/", description: "Low-cost walk-in clinic at 380 East Fourth Street in Ashland, open Tuesday evenings and Saturday mornings; no one is turned away for inability to pay." },
  { name: "Ashland Pregnancy Care Center", category: "Health", subcategory: "Clinic", url: "https://www.ashlandcarecenter.org/", description: "Free, confidential pregnancy testing, ultrasounds and options counseling at 2111 Claremont Avenue in Ashland." },
  { name: "Ashland County Cancer Association", category: "Health", subcategory: "Clinic", url: "http://www.ashlandcancer.org/", description: "Locally funded nonprofit since 1947 at 1011 East Main Street, Suite A in Ashland, reimbursing cancer medications and supplies, providing rides to treatment and covering screening mammograms for uninsured women." },
  { name: "Reserve Care", category: "Health", subcategory: "Hospice", url: "https://reserve-care.org/", description: "Nonprofit hospice and palliative care for northern Ohio, serving Ashland County through its 2024 acquisition of the Ashland-based Hospice of North Central Ohio; the organization was Hospice of the Western Reserve until 2026." },
  { name: "Ohio District 5 Area Agency on Aging", category: "Health", subcategory: "Seniors", url: "https://aaa5ohio.org/", description: "Regional agency at 2131 Park Avenue West in Ontario, serving Ashland and eight other counties with adult protective services, meals, ombudsman and caregiver programs." },
  { name: "Brethren Care Village", category: "Health", subcategory: "Seniors", url: "https://brethrencarevillage.org/", description: "Christian life-care senior community at 2140 Center Street in Ashland — independent and assisted living, memory care, nursing, rehabilitation and home health." },
  { name: "Ashland County Family & Children First Council", category: "Health", subcategory: "Mental Health", url: "https://www.ashlandjfs.org/family-and-children-first-council", description: "Interagency council at 15 West 4th Street in Ashland coordinating education, disability, health and social services for families with children." },
  // ---------- Business & Economy ----------
  { name: "Ashland Area Chamber of Commerce", category: "Business & Economy", subcategory: "Chamber", url: "https://www.ashlandoh.com", description: "The county chamber at 121 W. Main St. in Ashland, which also runs Leadership Ashland and the Explore Ashland visitors bureau." },
  { name: "Loudonville Mohican Chamber of Commerce", category: "Business & Economy", subcategory: "Chamber", url: "https://loudonvillechamber.com/", description: "Chamber for the greater Mohican area, on W. Main St. in Loudonville." },
  { name: "Grow Ashland — Ashland Area Economic Development", category: "Business & Economy", subcategory: "Economic Development", url: "https://growashland.com/", description: "Business expansion, retention, attraction and entrepreneurship for the Ashland area, from 206 Claremont Ave. in Ashland." },
  { name: "Perrysville Economic Development", category: "Business & Economy", subcategory: "Economic Development", url: "https://www.perrysvilleecodev.com/", description: "Nonprofit founded in 2012 to improve the economic, historic and social life of Perrysville." },
  { name: "Ashland Main Street", category: "Business & Economy", subcategory: "Downtown", url: "https://www.ashlandmainstreet.org", description: "Downtown merchants' and community organization at 19 W. Main St., Suite 3 in Ashland." },
  { name: "OhioMeansJobs Ashland County", category: "Business & Economy", subcategory: "Workforce", url: "https://everybodyworks.org/ashland/", description: "The county's workforce center at 15 W. Fourth St. in Ashland (with JFS) — job-seeker resources, resume help and employer recruiting." },
  { name: "OSU Extension — Ashland County", category: "Business & Economy", subcategory: "Agriculture", url: "https://ashland.osu.edu/", description: "Ohio State University Extension at 110 Cottage St., first floor in Ashland — agriculture, 4-H, family and consumer sciences and Master Gardeners." },
  { name: "Ashland County Farm Bureau", category: "Business & Economy", subcategory: "Agriculture", url: "https://ofbf.org/counties/ashland/", description: "The county Farm Bureau's page on the Ohio Farm Bureau Federation site; its office is a shared one in Wooster." },
  // ---------- Community & Social ----------
  { name: "United Way of Ashland County", category: "Community & Social", subcategory: "Nonprofit", url: "https://uwashlandoh.org", description: "Raises funds for local partner agencies, from 32 W. South St. in Ashland." },
  { name: "Ashland County Community Foundation", category: "Community & Social", subcategory: "Nonprofit", url: "https://www.ashlandforgood.org", description: "Community foundation at 300 College Ave. in Ashland — donor funds, nonprofit grants, scholarships and educational loans." },
  { name: "Mohican Area Community Fund", category: "Community & Social", subcategory: "Nonprofit", url: "https://www.mohicanacf.org/", description: "Loudonville-based fund supporting more than 20 nonprofits and groups in southern Ashland County." },
  { name: "Salvation Army Ashland Kroc Center", category: "Community & Social", subcategory: "Nonprofit", url: "https://easternusa.salvationarmy.org/ashland-kroc/", description: "Ray and Joan Kroc Corps Community Center at 527 E. Liberty St. in Ashland — fitness, aquatics, youth programs, social services and holiday assistance." },
  { name: "YMCA of Ashland", category: "Community & Social", subcategory: "YMCA", url: "https://www.ashlandy.org/", description: "Founded in 1905, at 207 Miller St. in Ashland — child care, youth sports, swim programs and a wellness center." },
  { name: "Associated Charities of Ashland County", category: "Community & Social", subcategory: "Food & Assistance", url: "https://www.associatedcharities.com", description: "Food, emergency financial help, clothing and school supplies at 240 Cleveland Ave. in Ashland; it runs the county food bank." },
  { name: "Catholic Charities — Ashland County", category: "Community & Social", subcategory: "Food & Assistance", url: "https://www.ccdocle.org/counties/ashland", description: "Diocese of Cleveland office at 34 W. 2nd St. in Ashland — counseling, adoption and foster services, a food shelf and the Golden Center senior program." },
  { name: "Community Help Mission", category: "Community & Social", subcategory: "Food & Assistance", url: "https://www.communityhelpmission.org/", description: "Short-term emergency financial assistance for residents of the Loudonville-Perrysville school district, at 807 Valley View Dr. in Loudonville." },
  { name: "ACCESS — Ashland Church Community Emergency Shelter Services", category: "Community & Social", subcategory: "Housing", url: "https://ashlandaccess.com/", description: "Works to end homelessness for Ashland County families from 228 Maple St. in Ashland and runs the Gottfried Center shelter." },
  { name: "Humane Society of Ashland County", category: "Community & Social", subcategory: "Animal Welfare", url: "https://www.ashlandhumane.org/", description: "Rescues and places abandoned and neglected animals, with adoption and spay/neuter programs." },
  { name: "Ashland County Council on Aging", category: "Community & Social", subcategory: "Seniors", url: "https://ashcocoa.org/", description: "Private nonprofit senior center at 240 E. Third St. in Ashland — meals, activities, trips and services for residents 60 and older." },
  // ---------- Recreation & Tourism ----------
  { name: "Explore Ashland", category: "Recreation & Tourism", subcategory: "Tourism", url: "https://www.exploreashlandohio.com", description: "The Ashland Area Convention & Visitors Bureau, at 121 W. Main St. in Ashland." },
  { name: "Discover Mohican", category: "Recreation & Tourism", subcategory: "Tourism", url: "https://www.discovermohican.com", description: "The Mohican-Loudonville Visitors Bureau at 544 N. Union St. in Loudonville — river outfitters, lodging, trails and events." },
  { name: "Mohican State Park", category: "Recreation & Tourism", subcategory: "State Park", url: "https://ohiodnr.gov/go-and-do/plan-a-visit/find-a-property/mohican-state-park", description: "ODNR park near Loudonville with Clear Fork Gorge, Lyons Falls, a covered bridge, campground and cabins." },
  { name: "Mohican-Memorial State Forest", category: "Recreation & Tourism", subcategory: "State Park", url: "https://ohiodnr.gov/wps/portal/gov/odnr/go-and-do/plan-a-visit/find-a-property/mohicanmemorial-state-forest", description: "4,541-acre state forest in southern Ashland County with hiking, bridle, mountain bike and snowmobile trails, a fire tower and the Memorial Forest Shrine; office at 950 ODNR Mohican Road 60 near Perrysville." },
  { name: "Mohican Lodge & Conference Center", category: "Recreation & Tourism", subcategory: "Lodging", url: "https://www.mohicanlodge.com/", description: "The state park lodge at 1098 Ashland County Road 3006 near Perrysville, overlooking Pleasant Hill Lake." },
  { name: "Pleasant Hill Lake Park", category: "Recreation & Tourism", subcategory: "Parks", url: "https://www.mwcd.org/places/pleasant-hill-lake/", description: "Muskingum Watershed Conservancy District park at 3431 Ohio 95 near Perrysville, straddling the Ashland–Richland line — 850-acre lake, 400-plus campsites, cabins, beach and marina." },
  { name: "Charles Mill Lake Park", category: "Recreation & Tourism", subcategory: "Parks", url: "https://www.mwcd.org/places/charles-mill-lake/", description: "MWCD park on the Ashland–Richland line (Mansfield address) with a 1,350-acre lake, two campgrounds, a marina and beach." },
  { name: "Ashland County Park District", category: "Recreation & Tourism", subcategory: "Parks", url: "https://www.ashlandcountyparks.com/", description: "County park district managing more than 2,400 acres with 30-plus miles of trails; board meets at the Freer Field Community Center, 1301 Park St. in Ashland." },
  { name: "City of Ashland Parks — Brookside Park", category: "Recreation & Tourism", subcategory: "Parks", url: "https://ashland-ohio.com/page/parks-maps-and-more", description: "The city's parks, including Brookside Park's pool, mini golf, dog park, ball fields and the Guy C. Myers Band Shell." },
  { name: "Ashland County Fair", category: "Recreation & Tourism", subcategory: "Fair", url: "https://www.ashlandcountyfair.com/", description: "The Ashland County Agricultural Society's September fair in Ashland, with grandstand events and the junior fair livestock sale." },
  { name: "Loudonville Street Fair", category: "Recreation & Tourism", subcategory: "Fair", url: "https://www.loudonvillestreetfair.com/", description: "Free October fair of the Loudonville Agricultural Society in downtown Loudonville, held since 1876." },
  { name: "Ashland BalloonFest", category: "Recreation & Tourism", subcategory: "Attraction", url: "https://ashlandballoonfest.com/", description: "Free late-June hot air balloon festival at Freer Field, 1256 Center St. in Ashland." },
  { name: "Ashland County Historical Society", category: "Recreation & Tourism", subcategory: "Museum", url: "https://www.ashlandhistory.org/", description: "Four museums at 420 Center St. in Ashland — the Manor House, Noonan House, Freer Home and Clark Carriage House." },
  { name: "Cleo Redd Fisher Museum", category: "Recreation & Tourism", subcategory: "Museum", url: "https://crfmuseum.com/", description: "The Mohican Historical Society's museum at 203 E. Main St. in Loudonville, with the c. 1838 Workman Cabin." },
  { name: "Wolf Creek Grist Mill", category: "Recreation & Tourism", subcategory: "Museum", url: "https://wolfcreekmill.org", description: "Volunteer-run 1830s mill and log cabin village on State Route 3 south of Loudonville, inside Mohican State Park, open summer weekends." },
  { name: "Mohican Adventures", category: "Recreation & Tourism", subcategory: "Attraction", url: "https://www.mohicanadventures.com/", description: "Family-owned canoe livery since 1961 at 3045 State Route 3 in Loudonville, with campground, cabins, aerial park, mini golf and go-karts." },
  { name: "Mohican Reservation", category: "Recreation & Tourism", subcategory: "Lodging", url: "https://www.mohicanreservation.com/", description: "Campground, cabins and canoe trips at 23270 Wally Road in Loudonville; host of the Great Mohican Pow-Wow." },
  { name: "River Run Family Campground & Canoe Livery", category: "Recreation & Tourism", subcategory: "Attraction", url: "https://riverrunfamilycampground.com/canoe-liveries/", description: "Canoe, kayak, tube and raft trips from Wally Road and State Route 3 in Loudonville, Memorial Day through Labor Day." },
  { name: "Landoll's Mohican Castle", category: "Recreation & Tourism", subcategory: "Lodging", url: "https://www.landollsmohicancastle.com/", description: "Castle resort at 561 Township Road 3352 in Loudonville — suites, cottages, the Copper Mug Grille, weddings and tours." },
  { name: "Ashland Symphony Orchestra", category: "Recreation & Tourism", subcategory: "Arts", url: "https://www.ashlandsymphony.org", description: "Professional orchestra performing at Archer Auditorium, with offices at 410 College Ave. in Ashland." },
  { name: "Ashland Chautauqua", category: "Recreation & Tourism", subcategory: "Arts", url: "https://www.ashlandchautauqua.org/", description: "Free week of first-person historical portrayals, music and workshops each July in Ashland." },
  { name: "Ashland Regional Ballet", category: "Recreation & Tourism", subcategory: "Arts", url: "https://www.ashlandregionalballet.com/", description: "Ballet company and dance school founded in 1982, at 130 E. Main St. in Ashland." },
  { name: "The Ohio Theatre", category: "Recreation & Tourism", subcategory: "Arts", url: "https://www.theohiotheatre.com/", description: "Volunteer-run 1909 opera house at 156 N. Water St. in Loudonville — live theatre, first-run movies and youth arts." },
  { name: "Mohican Trails Club", category: "Recreation & Tourism", subcategory: "Parks", url: "http://www.mohicantrailsclub.org/", description: "Volunteers maintaining and guiding hikes on the trails of Mohican State Park and Mohican-Memorial State Forest; publishes the trail map." },
  { name: "Mohican-Malabar Bike Club", category: "Recreation & Tourism", subcategory: "Parks", url: "https://www.ridemohican.com/", description: "Builds and maintains the Mohican State Park mountain bike trail system; posts trail conditions and events." },
  // ---------- News & Media ----------
  { name: "Ashland Times-Gazette", category: "News & Media", subcategory: "Newspaper", url: "https://www.times-gazette.com", description: "Ashland's daily newspaper, owned by Gannett." },
  { name: "Ashland Source", category: "News & Media", subcategory: "Online News", url: "https://www.ashlandsource.com", description: "Independent, membership-supported local news for Ashland County, from the Mansfield-based Source Media Properties group." },
  { name: "101.3 WNCO", category: "News & Media", subcategory: "Radio", url: "https://1013wnco.iheart.com/", description: "iHeartMedia country station licensed to Ashland, at 1197 US Highway 42; sister station Fox Sports 1340 WNCO carries Ashland University football." },
  { name: "WRDL 88.9 FM", category: "News & Media", subcategory: "Radio", url: "https://wrdlfm.com/", description: "Ashland University's student-run station, with music, local interviews and sports." },
];
