const jobsToDisplay =[
    {
       employer: `Photosnap`,
       title: `Senior Frontend Developer`,
       location: `USA only`,
       postDate: `1d ago`,
       type: `Full Time`,
       companyImg: `<img src="./styles/assets/photosnap.svg" alt="Photosnap logo" srcset="">`,
       tagsObj : {
         tag1: `Frontend`,
         tag2: `Senior`,
         tag3: `HTML`,
         tag4: `CSS`,
         tag5: `Javascript`
       }

    },
    {
        employer: `Manage`,
        title: `Fullstack Developer`,
        location: `Remote`,
        type: `Part Time`,
        postDate: `1d ago`,
        companyImg: `<img src="./styles/assets/manage.svg" alt="Manage logo" srcset="">`,
        tagsObj : {
         tag1: `Fullstack`,
         tag2: `Midweight`,
         tag3: `Python`,
         tag4: `React`,
       }
     },
     {
        employer: `Account`,
        title: `Junior Frontend Developer`,
        location: `USA only`,
        type: `Part Time`,
        postDate:`2d ago`,
        companyImg: `<img src="./styles/assets/account.svg" alt="Account logo" srcset="">`,
        tagsObj : {
         tag1: `Frontend`,
         tag2: `Junior`,
         tag3: `React`,
         tag4: `SaSS`,
         tag5: `Javascript`
       }
     },
     {
        employer: `MyHome`,
        title: `Junior Frontend Developer`,
        location: `USA only`,
        type: `Full Time`,
        postDate: `5d ago`,
        companyImg: `<img src="./styles/assets/myhome.svg" alt="MyHome logo" srcset="">`,
        tagsObj : {
         tag1: `Frontend`,
         tag2: `Junior`,
         tag3: `CSS`,
         tag4: `Javascript`
       }
     },
     {
        employer: `Loop Studios`,
        title: `Software Engineer`,
        location: `Worldwide`,
        type: `Full Time`,
        postDate:`1w ago`,
        companyImg: `<img src="./styles/assets/loop-studios.svg" alt="Loop Studios logo" srcset="">`,
        tagsObj : {
         tag1: `Fullstack`,
         tag2: `Midweight`,
         tag3: `Javascript`,
         tag4: `SaSS`,
         tag5: `Ruby`
       }
     },
     {
        employer: `FaceIt`,
        title: `Junior Backend Developer`,
        location: `Uk only`,
        type: `Full Time`,
        postDate:`2w ago`,
        companyImg: `<img src="./styles/assets/faceit.svg" alt="Faceit logo" srcset="">`,
        tagsObj : {
         tag1: `Backend`,
         tag2: `Junior`,
         tag3: `Ruby`,
         tag4: `RoR`
       }
     },
     {
        employer: `Shortly`,
        title: `Junior Developer`,
        location: `Worldwide`,
        type: `Full Time`,
        postDate:`2w ago`,
        companyImg: `<img src="./styles/assets/shortly.svg" alt="Shortly logo" srcset="">`,
        tagsObj : {
         tag1: `Frontend`,
         tag2: `Junior`,
         tag3: `HTML`,
         tag4: `SaSS`,
         tag5: `Javascript`
       }
     },
     {
        employer: `Insure`,
        title: `Junior Frontend Developer`,
        location: `USA only`,
        type: `Full Time`,
        postDate:`2w ago`,
        companyImg: `<img src="./styles/assets/insure.svg" alt="Insure logo" srcset="">`,
        tagsObj : {
         tag1: `Frontend`,
         tag2: `Junior`,
         tag3: `Vue`,
         tag4: `Javascript`,
         tag5: `SaSS`
       }
     },
     {
        employer: `Eyecam Co.`,
        title: `Full Stack Developer`,
        location: `Worldwide`,
        type: `Full Time`,
        postDate:`3w ago`,
        companyImg: `<img src="./styles/assets/eyecam-co.svg" alt="Eyecam logo" srcset="">`,
        tagsObj : {
         tag1: `Fullstack`,
         tag2: `Midweight`,
         tag3: `Javascript`,
         tag4: `Django`,
         tag5: `Python`
       }
     },
     {
        employer: `The Air Filter Company`,
        title: `Front-end Dev`,
        location: `Canada only`,
        type: `Part Time`,
        postDate:`1mo ago`,
        companyImg: ` <img src="./styles/assets/the-air-filter-company.svg" alt="The Air Filter Company logo" srcset="">`,
        tagsObj : {
         tag1: `Frontend`,
         tag2: `Junior`,
         tag3: `React`,
         tag4: `SaSS`,
         tag5: `Javascript`
       }
     },
];
const JobContainer = document.querySelector('.job-list');
let jobListHTML = '';
let postCounter = 1;

jobsToDisplay.forEach((job) => {
//   let jobPost = 'posting' + postCounter;${jobPost}
  jobListHTML +=
    `<li class = "job-posting">
       ${job.companyImg}
        <div class="posting-information">
            <p>${job.employer}</p>
            <h3>${job.title}</h3>
            <ul class="date-locale">
                <li>${job.postDate}</li>
                <li>${job.type}</li>
                <li>${job.location}</li>
            </ul>
        </div>
    </li>`;
  postCounter++;
});
JobContainer.innerHTML = jobListHTML;

// forEach Loop responsible for appending tags to each listing.:
const allJobPostings = document.querySelectorAll(`.job-posting`);
let appendCounter = 0;
jobsToDisplay.forEach((job) =>{
   const jobTags = Object.entries(job.tagsObj);
   console.log(allJobPostings[appendCounter]);
   console.log(jobTags);
   jobTagsUl = document.createElement(`ul`);
   jobTagsUl.classList =`tags`;
   allJobPostings[appendCounter].append(jobTagsUl);
   console.log(jobTagsUl);

   jobTags.forEach(([tag, value]) =>{

      let tagsLi = document.createElement(`li`);
      let tagValue = value;
      tagsLi.textContent = tagValue;
      jobTagsUl.append(tagsLi);
      // TODO addevenlistener for tag filtering     
   });
   appendCounter = appendCounter + 1;
});

