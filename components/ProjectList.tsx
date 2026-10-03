'use client'

const techColors: Record<string, string> = {
  HTML: 'bg-orange-500',
  CSS: 'bg-blue-500',
  JavaScript: 'bg-yellow-400',
  PHP: 'bg-indigo-500',
  Bootstrap: 'bg-purple-600',
  MySQL: 'bg-sky-600',
}

const projects = [
  {
    number: '01',
    title: 'ITrak Terminal Management System',
    description: 'Web-based system for tracking and managing terminal operations, schedules, and reporting.',
    framework: 'CODEIGNITER 4',
    techStack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Bootstrap', 'MySQL'],
    link: 'https://github.com/jevvisupratama/ITrak-Terminal-Management-System',
  },
  {
    number: '02',
    title: 'LGU Financial Management System',
    description: 'Web-based financial management system for local government units handling budget allocation, expenditure tracking, and financial reporting.',
    framework: 'CODEIGNITER 4',
    techStack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Bootstrap', 'MySQL'],
    link: '#',
  },
  {
    number: '03',
    title: 'Scholarship Management System',
    description: 'Web-based system for managing scholarship applications, approvals, disbursements, and scholar records.',
    framework: 'CODEIGNITER 4',
    techStack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Bootstrap', 'MySQL'],
    link: '#',
  },
  {
    number: '04',
    title: 'Tourism Management System',
    description: 'Web-based tourism management platform for destination listings, bookings, and tourist information services.',
    framework: 'CODEIGNITER 4',
    techStack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Bootstrap', 'MySQL'],
    link: '#',
  },
  {
    number: '05',
    title: 'Boarding House Rental System',
    description: 'Web-based boarding house rental platform for managing property listings, bookings, payments, and reviews with separate access for students, landlords, and administrators.',
    framework: 'CODEIGNITER 4',
    techStack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Bootstrap', 'MySQL'],
    link: '#',
  },
  {
    number: '06',
    title: 'PayTrack - Employee Payroll Management System',
    description: 'PHP-based payroll management system for handling employee compensation, deductions, and payroll processing with centralized record management.',
    framework: 'CODEIGNITER 4',
    techStack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Bootstrap', 'MySQL'],
    link: '#',
  },
  {
    number: '07',
    title: 'Barangay Residents Management System',
    description: 'Web-based system for Barangay Benoni, Mahinog, Camiguin, designed to streamline resident records, reservations, payments, and reporting.',
    framework: 'CODEIGNITER 4',
    techStack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Bootstrap', 'MySQL'],
    link: '#',
  },
  {
    number: '08',
    title: 'Sari-Sari Store Utang Management System',
    description: 'Web-based system for managing customer credit accounts, tracking outstanding debts, recording payments, and handling item reservations for a sari-sari store.',
    framework: 'CODEIGNITER 4',
    techStack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Bootstrap', 'MySQL'],
    link: '#',
  },
  {
    number: '09',
    title: 'Employee Management System',
    description: 'Web-based system for managing employee records, attendance tracking, payroll processing, and employee requests in one platform.',
    framework: 'CODEIGNITER 4',
    techStack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Bootstrap', 'MySQL'],
    link: '#',
  },
  {
    number: '10',
    title: 'Inventory Management System',
    description: 'Web-based inventory tracking and management system for stock monitoring, order processing, and supply chain management.',
    framework: 'CODEIGNITER 4',
    techStack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Bootstrap', 'MySQL'],
    link: '#',
  },
  {
    number: '11',
    title: 'Library Management System',
    description: 'Web-based system for managing library resources, book borrowing, returns, and member records.',
    framework: 'CODEIGNITER 4',
    techStack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Bootstrap', 'MySQL'],
    link: '#',
  },
  {
    number: '12',
    title: 'Student Information System',
    description: 'Web-based platform for managing student enrollment, grades, class schedules, and academic records.',
    framework: 'CODEIGNITER 4',
    techStack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Bootstrap', 'MySQL'],
    link: '#',
  },
  {
    number: '13',
    title: 'POS System',
    description: 'Web-based point of sale system for retail operations, transaction processing, and sales reporting.',
    framework: 'CODEIGNITER 4',
    techStack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Bootstrap', 'MySQL'],
    link: '#',
  },
  {
    number: '14',
    title: 'Hotel Reservation System',
    description: 'Web-based hotel booking and management platform for room reservations, guest management, and billing.',
    framework: 'CODEIGNITER 4',
    techStack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Bootstrap', 'MySQL'],
    link: '#',
  },
  {
    number: '15',
    title: 'E-Commerce Platform',
    description: 'Web-based shopping platform with product catalog, cart, checkout, and order management features.',
    framework: 'CODEIGNITER 4',
    techStack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Bootstrap', 'MySQL'],
    link: '#',
  },
  {
    number: '16',
    title: 'Event Management System',
    description: 'Web-based platform for organizing events, managing registrations, and coordinating schedules.',
    framework: 'CODEIGNITER 4',
    techStack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Bootstrap', 'MySQL'],
    link: '#',
  },
  {
    number: '17',
    title: 'Clinic Management System',
    description: 'Web-based clinic management platform for patient records, appointment scheduling, and medical history tracking.',
    framework: 'CODEIGNITER 4',
    techStack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Bootstrap', 'MySQL'],
    link: '#',
  },
  {
    number: '18',
    title: 'Real Estate Management System',
    description: 'Web-based real estate platform for property listings, agent management, and client inquiries.',
    framework: 'CODEIGNITER 4',
    techStack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Bootstrap', 'MySQL'],
    link: '#',
  },
  {
    number: '19',
    title: 'Gym Management System',
    description: 'Web-based gym management platform for managing memberships, attendance, payments, class schedules, and general gym operations.',
    framework: 'CODEIGNITER 4',
    techStack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Bootstrap', 'MySQL'],
    link: '#',
  },
  {
    number: '20',
    title: 'Car Rental Management System',
    description: 'Web-based car rental platform for vehicle browsing and reservations, including administrative tools for managing cars, customers, payments, and reports.',
    framework: 'CODEIGNITER 4',
    techStack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Bootstrap', 'MySQL'],
    link: '#',
  },
]

export default function ProjectList() {
  return (
    <section id="technical" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="divide-y divide-[var(--card-border)]">
          {projects.map((project) => (
            <div
              key={project.number}
              className="group flex items-start gap-4 md:gap-8 py-6 hover:bg-[var(--card-bg)] hover:px-4 rounded-lg transition-all duration-300 cursor-pointer"
            >
              {/* Number */}
              <span className="text-[var(--muted)] text-sm font-medium mt-1 shrink-0 w-8">
                {project.number}
              </span>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-base mb-1 group-hover:text-[var(--foreground)] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[var(--muted)] text-sm mb-2 leading-relaxed">
                  {project.description}
                </p>
                <p className="text-[var(--muted)] text-xs tracking-wider uppercase mb-2">
                  {project.framework}
                </p>
                {/* Tech stack icons */}
                <div className="flex items-center gap-2">
                  {project.techStack.map((tech) => (
                    <div
                      key={tech}
                      className={`w-6 h-6 rounded-md ${techColors[tech] || 'bg-gray-500'} flex items-center justify-center`}
                      title={tech}
                    >
                      <span className="text-white text-[8px] font-bold">
                        {tech.charAt(0)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* External link */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors mt-1 shrink-0"
                aria-label={`View ${project.title}`}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
