const jobsToDisplay =[
    {
       employer: `Photosnap`,
       title: `Senior Frontend Developer`,
       location: `USA only`,
       postDate: `1d ago`,
       type: `Full Time`,
       companyImg: `<img src="./styles/assets/photosnap.svg" alt="Photosnap logo" srcset="">`

    },
    {
        employer: `Manage`,
        title: `Fullstack Developer`,
        location: `Remote`,
        type: `Part Time`,
        postDate: `1d ago`,
        companyImg: `<img src="./styles/assets/manage.svg" alt="Manage logo" srcset="">`
     },
     {
        employer: `Account`,
        title: `Junior Frontend Developer`,
        location: `USA only`,
        type: `Part Time`,
        postDate:`2d ago`,
        companyImg: `<img src="./styles/assets/account.svg" alt="Account logo" srcset="">`
     },
     {
        employer: `MyHome`,
        title: `Senior Frontend Developer`,
        location: `USA only`,
        type: `Full Time`,
        postDate: `5d ago`,
        companyImg: `<img src="./styles/assets/myhome.svg" alt="MyHome logo" srcset="">`
     },
     {
        employer: `Loop Studios`,
        title: `Software Engineer`,
        location: `Worldwide`,
        type: `Full Time`,
        postDate:`1w ago`,
        companyImg: `<img src="./styles/assets/loop-studios.svg" alt="Loop Studios logo" srcset="">`
     },
     {
        employer: `FaceIt`,
        title: `Junior Backend Developer`,
        location: `Uk only`,
        type: `Full Time`,
        postDate:`2w ago`,
        companyImg: `<img src="./styles/assets/faecit.svg" alt="Faceit logo" srcset="">`
     },
     {
        employer: `Shortly`,
        title: `Junior Developer`,
        location: `Worldwide`,
        type: `Full Time`,
        postDate:`2w ago`,
        companyImg: `<img src="./styles/assets/shortly.svg" alt="Shortly logo" srcset="">`
     },
     {
        employer: `Insure`,
        title: `Junior Frontend Developer`,
        location: `USA only`,
        type: `Full Time`,
        postDate:`2w ago`,
        companyImg: `<img src="./styles/assets/insure.svg" alt="Insure logo" srcset="">`
     },
     {
        employer: `Eyecam Co.`,
        title: `Full Stack Developer`,
        location: `Worldwide`,
        type: `Full Time`,
        postDate:`3w ago`,
        companyImg: `<img src="./styles/assets/eyecam-co.svg" alt="Eyecam logo" srcset="">`
     },
     {
        employer: `The Air Filter Company`,
        title: `Front-end Dev`,
        location: `Canada only`,
        type: `Part Time`,
        postDate:`1mo ago`,
        companyImg: ` <img src="./styles/assets/the-air-filter-company.svg" alt="The Air Filter Company logo" srcset="">`
     },
]
P
const JobContainer = document.querySelector('.job-list');
let jobListHTML = '';

jobsToDisplay.forEach((job) => {
  jobListHTML +=
    `<li>
       ${job.companyImg}
        <div class="posting-information">
            <p>${job.employer}</p>
            <h3>${job.title}</h3>
            <ul>
                <li>${job.postDate}</li>
                <li>${job.type}</li>
                <li>${job.location}</li>
            </ul>
        </div>
    </li>`;
  console.log(`Appended ${job.employer}'s posting.`);
});

JobContainer.innerHTML = jobListHTML;