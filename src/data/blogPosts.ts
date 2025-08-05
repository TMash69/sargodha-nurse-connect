export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorRole: string;
  publishDate: string;
  readTime: string;
  category: string;
  tags: string[];
  imageUrl?: string;
}

export interface Comment {
  id: string;
  postId: string;
  author: string;
  email: string;
  content: string;
  timestamp: string;
  replies?: Comment[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Nursing: Technology and Compassionate Care",
    excerpt: "Exploring how modern technology enhances rather than replaces the human touch in nursing practice.",
    content: `
    <p>As we advance into an era of unprecedented technological innovation in healthcare, the nursing profession finds itself at a fascinating crossroads. The integration of artificial intelligence, robotics, and digital health platforms is transforming how we deliver patient care, yet the fundamental principles of nursing remain unchanged.</p>
    
    <h3>Technology as an Enabler</h3>
    <p>Modern nursing technology doesn't replace the nurse-patient relationship; it enhances it. Electronic health records allow nurses to spend more time with patients rather than on paperwork. Smart monitoring systems alert nurses to changes in patient conditions before they become critical. Telehealth platforms extend the reach of nursing care to underserved communities.</p>
    
    <h3>The Human Touch Remains Irreplaceable</h3>
    <p>While machines can monitor vital signs and dispense medications, they cannot provide comfort to a scared patient, advocate for better treatment options, or make the split-second clinical judgments that save lives. The empathy, critical thinking, and intuitive understanding that nurses bring to patient care remain uniquely human qualities.</p>
    
    <h3>Preparing Future Nurses</h3>
    <p>At the College of Nursing Sargodha, we're preparing our students for this technology-enhanced future while ensuring they never lose sight of the compassionate care that defines our profession. Our curriculum integrates the latest healthcare technologies while emphasizing the development of strong interpersonal skills and clinical reasoning abilities.</p>
    `,
    author: "Dr. Sarah Ahmed",
    authorRole: "Head of Nursing Technology Department",
    publishDate: "2024-12-15",
    readTime: "5 min read",
    category: "Technology",
    tags: ["Healthcare Technology", "Nursing Education", "Future of Nursing"]
  },
  {
    id: "2", 
    title: "Building Resilience in Nursing Students: Mental Health Matters",
    excerpt: "Addressing the importance of mental health support and resilience training for nursing students.",
    content: `
    <p>The nursing profession is both rewarding and challenging. Nursing students face unique stressors as they navigate rigorous academic requirements, clinical rotations, and the emotional demands of patient care. Building resilience is not just beneficial—it's essential for success in nursing.</p>
    
    <h3>Understanding Nursing Student Stress</h3>
    <p>Research shows that nursing students experience higher levels of stress compared to students in many other fields. The combination of academic pressure, clinical expectations, and exposure to human suffering can take a significant toll on mental health.</p>
    
    <h3>Strategies for Building Resilience</h3>
    <ul>
    <li><strong>Mindfulness and Self-Care:</strong> Regular practice of mindfulness techniques and prioritizing self-care activities</li>
    <li><strong>Peer Support Networks:</strong> Building strong relationships with classmates who understand the unique challenges</li>
    <li><strong>Professional Counseling:</strong> Accessing mental health resources when needed</li>
    <li><strong>Time Management:</strong> Developing effective study and work-life balance strategies</li>
    </ul>
    
    <h3>Our Commitment to Student Wellbeing</h3>
    <p>The College of Nursing Sargodha has implemented comprehensive mental health support programs, including counseling services, stress management workshops, and peer mentorship programs. We believe that taking care of our students' mental health is just as important as their academic and clinical training.</p>
    `,
    author: "Prof. Maria Khan",
    authorRole: "Student Counseling Services",
    publishDate: "2024-12-10",
    readTime: "4 min read",
    category: "Student Life",
    tags: ["Mental Health", "Student Support", "Resilience", "Wellbeing"]
  },
  {
    id: "3",
    title: "Clinical Excellence: What Makes a Great Nursing Student",
    excerpt: "Key characteristics and skills that distinguish outstanding nursing students in clinical settings.",
    content: `
    <p>Excellence in clinical nursing isn't just about technical skills—though those are certainly important. The students who truly excel in their clinical rotations demonstrate a combination of clinical competence, professional behavior, and personal qualities that set them apart.</p>
    
    <h3>Core Clinical Competencies</h3>
    <p>Outstanding nursing students master the fundamental clinical skills: medication administration, patient assessment, documentation, and care planning. But beyond technical proficiency, they demonstrate critical thinking abilities that allow them to adapt to complex patient situations.</p>
    
    <h3>Professional Behavior and Communication</h3>
    <p>Excellent students understand that nursing is a professional practice. They communicate effectively with patients, families, and healthcare team members. They maintain professional boundaries while showing genuine empathy and compassion.</p>
    
    <h3>Continuous Learning Mindset</h3>
    <p>The best nursing students approach each clinical day as a learning opportunity. They ask thoughtful questions, seek feedback actively, and reflect on their experiences to continuously improve their practice.</p>
    
    <h3>Leadership and Advocacy</h3>
    <p>Even as students, future nursing leaders begin to show their potential by advocating for their patients, taking initiative in care planning, and supporting their peers in the learning process.</p>
    `,
    author: "Dr. Ahmed Hassan",
    authorRole: "Clinical Coordinator",
    publishDate: "2024-12-05",
    readTime: "3 min read",
    category: "Clinical Excellence",
    tags: ["Clinical Skills", "Professional Development", "Student Success"]
  }
];

// Sample comments data
export const sampleComments: Comment[] = [
  {
    id: "c1",
    postId: "1",
    author: "Ayesha Malik",
    email: "ayesha.malik@email.com",
    content: "This article really resonates with my experience as a final-year nursing student. Technology has indeed enhanced our learning, but the human connection remains at the heart of nursing.",
    timestamp: "2024-12-16T10:30:00Z"
  },
  {
    id: "c2", 
    postId: "1",
    author: "Dr. Farid Khan",
    email: "farid.khan@hospital.com",
    content: "Excellent perspective on the integration of technology in nursing. As someone working in a smart hospital, I can confirm that technology amplifies rather than replaces nursing skills.",
    timestamp: "2024-12-16T14:45:00Z"
  }
];