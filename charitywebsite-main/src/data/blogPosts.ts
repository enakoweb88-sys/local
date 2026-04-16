export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    category: string;
    date: string;
    image: string;
    author: string;
}

export const blogPosts: BlogPost[] = [
    {
        id: 'anglophone-crisis-education',
        title: 'The Silent Toll: Education in the Anglophone Crisis',
        category: 'Crisis',
        date: 'March 5, 2024',
        author: 'Enako Research Team',
        excerpt: 'How the ongoing conflict in the North-West and South-West regions has displaced thousands of students.',
        image: '/assets/charity/our-expertize-in-action.png',
        content: 'The Anglophone crisis has severely impacted the educational landscape in Cameroon. Schools have been closed for years in certain areas, leading to a "lost generation" of students...'
    },
    {
        id: 'far-north-stability',
        title: 'Resilience in the Far North: Fighting Boko Haram Through Books',
        category: 'Stability',
        date: 'February 28, 2024',
        author: 'Enako Research Team',
        excerpt: 'Inside the effort to keep schools open despite security challenges in the Far North region.',
        image: '/assets/charity/our-expertize-in-action.png',
        content: 'In the Far North region, education is a tool for peace. Communities are rallying to protect schools and provide a safe learning environment...'
    },
    {
        id: 'cholera-outbreak-prevention',
        title: 'Sanitation First: Combating Cholera in Urban Centers',
        category: 'Health',
        date: 'February 15, 2024',
        author: 'Enako Health Desk',
        excerpt: 'Why clean water initiatives are the most important investment for Cameroon’s coastal cities.',
        image: '/assets/charity/our-expertize-in-action.png',
        content: 'Cholera remains a persistent threat in Douala and Yaoundé. Enako Outreach is working on pilot water purification projects...'
    },
    {
        id: 'malaria-in-schools',
        title: 'Blocking the Buzz: Reducing Malaria Absences',
        category: 'Health',
        date: 'February 10, 2024',
        author: 'Medical Volunteer',
        excerpt: 'How simple mosquito net distribution and school-based screenings are transforming attendance.',
        image: '/assets/charity/our-expertize-in-action.png',
        content: 'Malaria is the leading cause of school absenteeism in Cameroon. By distributing nets, we can keep children in class...'
    },
    {
        id: 'orphanage-funding-gap',
        title: 'Beyond Scarcity: The Funding Crisis in Cameroonian Orphanages',
        category: 'Community',
        date: 'February 5, 2024',
        author: 'Social Welfare Lead',
        excerpt: 'Exploring the precarious situation of private orphanages in Douala and the need for structural support.',
        image: '/assets/charity/our-expertize-in-action.png',
        content: 'Many orphanages operate on less than 1,000 XAF per child per day. Enako Outreach is building a sponsorship bridge...'
    },
    {
        id: 'literacy-rates-rural',
        title: 'Reading Between the Lines: Literacy in East Cameroon',
        category: 'Education',
        date: 'January 28, 2024',
        author: 'Education Specialist',
        excerpt: 'Bridging the literacy gap between urban centers and rural forest communities.',
        image: '/assets/charity/our-expertize-in-action.png',
        content: 'Rural literacy remains a challenge due to lack of teachers and infrastructure. Our award programs aim to attract talent to these areas...'
    },
    {
        id: 'solar-power-schools',
        title: 'Powering the Future: Solar Energy for Douala Schools',
        category: 'Innovation',
        date: 'January 20, 2024',
        author: 'Tech Lead',
        excerpt: 'Why off-grid solar solutions are the key to modernizing education in power-unstable areas.',
        image: '/assets/charity/our-expertize-in-action.png',
        content: 'Frequent blackouts disrupt learning. Solar energy provides a reliable solution for lighting and computers...'
    },
    {
        id: 'gender-equity-stem',
        title: 'Breaking Barriers: Girls in STEM in Cameroon',
        category: 'Education',
        date: 'January 15, 2024',
        author: 'Volunteer Mentor',
        excerpt: 'Highlighting the success of scholarship programs specifically for young women pursuing hard sciences.',
        image: '/assets/charity/our-expertize-in-action.png',
        content: 'Closing the gender gap in STEM is crucial for Cameroon’s development. Our scholarships are making a difference...'
    },
    {
        id: 'youth-unemployment-crisis',
        title: 'The Degree Trap: Solving Youth Unemployment in Yaoundé',
        category: 'Community',
        date: 'January 10, 2024',
        author: 'Economic Analyst',
        excerpt: 'How vocational training and entrepreneurship grants are providing a new path for graduates.',
        image: '/assets/charity/our-expertize-in-action.png',
        content: 'Yaoundé’s youth face a tough job market. Enako Outreach is launching vocational centers to provide practical skills...'
    },
    {
        id: 'climate-change-agriculture',
        title: 'Farmers in Flux: Climate Change in West Cameroon',
        category: 'Sustainability',
        date: 'January 5, 2024',
        author: 'Agri-Expert',
        excerpt: 'Predicting rainfall patterns to save the livelihoods of thousands of community members.',
        image: '/assets/charity/our-expertize-in-action.png',
        content: 'Unpredictable weather is harming crop yields. We are providing training on resilient farming techniques...'
    },
    {
        id: 'teachers-mental-health',
        title: 'Caring for the Educators: Teachers Mental Health',
        category: 'Education',
        date: 'December 28, 2023',
        author: 'Psychologist Volunteer',
        excerpt: 'Why rewarding teachers must include mental health support and professional counseling.',
        image: '/assets/charity/our-expertize-in-action.png',
        content: 'Teaching is a high-stress job, especially in crisis zones. Enako Outreach provides counseling for our partner educators...'
    },
    {
        id: 'digital-divide-cameroon',
        title: 'Losing Connection: The Digital Divide in Education',
        category: 'Innovation',
        date: 'December 20, 2023',
        author: 'IT Consultant',
        excerpt: 'Bridging the gap between students with internet access and those without in Douala.',
        image: '/assets/charity/our-expertize-in-action.png',
        content: 'The digital divide is widening. We are setting up computer labs in underserved schools to provide equitable access...'
    },
    {
        id: 'child-marriage-prevention',
        title: 'Protecting the Girl-Child: Ending Child Marriage',
        category: 'Community',
        date: 'December 15, 2023',
        author: 'Human Rights Advocate',
        excerpt: 'How education-based interventions are keeping girls in schools in the North region.',
        image: '/assets/charity/our-expertize-in-action.png',
        content: 'Child marriage is a harmful practice that ends education. We work with local leaders to advocate for the girl-child...'
    },
    {
        id: 'urban-poverty-douala',
        title: 'Hidden in Plain Sight: Urban Poverty in Douala',
        category: 'Economic',
        date: 'December 10, 2023',
        author: 'Social Scientist',
        excerpt: 'Why Douala’s economic growth often leaves the most vulnerable families behind.',
        image: '/assets/charity/our-expertize-in-action.png',
        content: 'Economic growth is uneven. Enako Outreach focuses on urban centers where disparity is most visible...'
    },
    {
        id: 'disability-access-schools',
        title: 'Opening Doors: Disability Access in Schools',
        category: 'Education',
        date: 'December 5, 2023',
        author: 'Inclusive Ed Specialist',
        excerpt: 'Building ramps and inclusive curricula for Cameroonian students with special needs.',
        image: '/assets/charity/our-expertize-in-action.png',
        content: 'Inclusive education is a right. We are retrofitting partner schools to accommodate all students...'
    },
    {
        id: 'menstrual-hygiene-management',
        title: 'Dignity in Education: Menstrual Hygiene Management',
        category: 'Health',
        date: 'November 28, 2023',
        author: 'Health Coordinator',
        excerpt: 'Reducing stigma andProviding resources to keep adolescent girls in school every day of the month.',
        image: '/assets/charity/our-expertize-in-action.png',
        content: 'Lack of hygiene products is a major barrier to girls’ education. Our kits and training sessions are breaking this cycle...'
    },
    {
        id: 'refugee-education-east',
        title: 'Safety and Study: Educating Refugees in East Cameroon',
        category: 'Crisis',
        date: 'November 20, 2023',
        author: 'Logistics Manager',
        excerpt: 'The critical need for educational resources in settlements housing Central African refugees.',
        image: '/assets/charity/our-expertize-in-action.png',
        content: 'The refugee crisis requires an educational response. Enako Outreach supports schools in the East region...'
    },
    {
        id: 'preschool-foundation-gap',
        title: 'Starting Strong: The Preschool Foundation Gap',
        category: 'Education',
        date: 'November 10, 2023',
        author: 'Early Childhood Specialist',
        excerpt: 'Why early childhood education is the most predictor of long-term academic success in Cameroon.',
        image: '/assets/charity/our-expertize-in-action.png',
        content: 'Preschool is often overlooked. We are investing in early childhood centers to provide a solid foundation...'
    },
    {
        id: 'sustainable-solar-solutions',
        title: 'Beyond Light: Sustainable Solar Solutions for Businesses',
        category: 'Sustainability',
        date: 'November 5, 2023',
        author: 'Energy Consultant',
        excerpt: 'Empowering small businesses in Cameroon with reliable, clean solar energy.',
        image: '/assets/charity/our-expertize-in-action.png',
        content: 'Small businesses struggle with power. Our micro-solar grants are helping local entrepreneurs thrive...'
    },
    {
        id: 'water-scarcity-north',
        title: 'The Search for Water: Scarcity in North Cameroon',
        category: 'Sustainability',
        date: 'October 30, 2023',
        author: 'Environmental Hydrologist',
        excerpt: 'The critical role of deep-well boreholes in sustaining life and education in arid regions.',
        image: '/assets/charity/our-expertize-in-action.png',
        content: 'Water is life. Deep-well boreholes are transformed schools and communities in the North...'
    }
];
