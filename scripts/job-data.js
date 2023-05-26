const jobsToDisplay =[
    {
       employer: `Photosnap`,
       title: `Senior Frontend Developer`,
       location: `USA only`,
       postDate: `1d ago`,
       type: `Full Time`,
       companyImg: `<img src="./styles/assets/photosnap.svg" alt="Photosnap logo" srcset="">`,
       isFeatured:true,
       isNew:true,
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
        isFeatured:true,
        isNew:true,
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
        isFeatured:false,
        isNew:true,
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
        isFeatured:false,
        isNew:false,
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
        isFeatured:false,
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
        isFeatured:false,
        isNew:false,
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
        isFeatured:false,
        isNew:false,
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
        isFeatured:false,
        isNew:false,
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
        isFeatured:false,
        isNew:false,
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
        isFeatured:false,
        isNew:false,
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

   const jobTags = Object.entries(job.tagsObj);//Object.entries() outputs an array of arrays, with each inner array having two elements (key value pair)
   //console.log(allJobPostings[appendCounter]);  using square brackets because using a varaible for array index.
   jobTagsUl = document.createElement(`ul`);
   jobTagsUl.classList =`tags`;
   allJobPostings[appendCounter].append(jobTagsUl);

   jobTags.forEach(([tag, value]) =>{

      let tagsLi = document.createElement(`li`);
      let tagValue = value;
      tagsLi.textContent = tagValue;
      jobTagsUl.append(tagsLi);
      // TODO addevenlistener for tag filtering     
   });
   appendCounter = appendCounter + 1;
});

// forEach loop that appends NEW & FEATURED headlines to postings

jobsToDisplay.forEach((job)=>{
  const indexValue = jobsToDisplay.indexOf(job);
  
  if(job.isNew === true){
    const newPill = document.createElement(`span`);
    newPill.className = `newPill`;
    newPill.textContent = `NEW!`
    // if true give class to new span item and target
    allJobPostings[indexValue].classList.add(`newListing`);
    // target the listing.
    const newNameTag = document.querySelectorAll(`.newListing p`);
    // append the featured pill
    newNameTag[indexValue].appendChild(newPill);
  };
  if(job.isFeatured === true){
    // create elements and assign text value.
    const featuredPill = document.createElement(`span`);
    featuredPill.className = `featuredPill`;
    featuredPill.textContent = `FEATURED`
    // if true give class to new span item and target
    allJobPostings[indexValue].classList.add(`featuredListing`);
    // target the listing.
    const featuredNameTag = document.querySelectorAll(`.featuredListing p`);
    // append the featured pill
    featuredNameTag[indexValue].appendChild(featuredPill);
  };

});
