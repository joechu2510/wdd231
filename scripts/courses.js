
const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the general concepts of programming, including variables, data types, conditional logic, looping, and functions.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually building and publishing web pages.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more proficient in programming by using functions, calling functions, writing functions, and debugging. As well, students practice thorough unit testing.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the concepts of object-oriented programming for students who have already introduced programming. Students will learn how to use classes and objects to solve problems.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior Web Fundamentals knowledge by introducing more advanced HTML, CSS, and JavaScript. Students will learn to create dynamic web pages.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Web Frontend Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course focuses on user experience, accessibility, compliance, performance optimization, and advanced JavaScript techniques.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
];

const coursesContainer = document.querySelector('.courses');
const totalCreditsElem = document.querySelector('#total-credits span');
const allBtn = document.querySelector('.filters button:nth-child(1)');
const wddBtn = document.querySelector('.filters button:nth-child(2)');
const cseBtn = document.querySelector('.filters button:nth-child(3)');

function displayCourses(filteredCourses) {
    coursesContainer.innerHTML = '';

    filteredCourses.forEach(course => {
        const card = document.createElement('div');
        card.classList.add('course-card');

        if (course.completed) {
            card.classList.add('completed');
            card.innerHTML = `✅ ${course.subject} ${course.number}`;
        } else {
            card.innerHTML = `${course.subject} ${course.number}`;
        }

        coursesContainer.appendChild(card);
    });

    const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
    totalCreditsElem.textContent = totalCredits;
}

document.addEventListener('DOMContentLoaded', () => {
    displayCourses(courses);

    const filterButtons = document.querySelectorAll('.filters button');
    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const filter = e.target.textContent.trim();
            if (filter === 'All') {
                displayCourses(courses);
            } else if (filter === 'WDD') {
                const wddCourses = courses.filter(course => course.subject === 'WDD');
                displayCourses(wddCourses);
            } else if (filter === 'CSE') {
                const cseCourses = courses.filter(course => course.subject === 'CSE');
                displayCourses(cseCourses);
            }
        });
    });
});