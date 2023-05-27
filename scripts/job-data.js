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
   jobTagsUl.classList =`tagParent`;
   allJobPostings[appendCounter].append(jobTagsUl);

   jobTags.forEach(([tag, value]) =>{

      let tagsLi = document.createElement(`li`);
      tagsLi.className = "tagChild";
      let tagValue = value;
      tagsLi.textContent = tagValue;
      jobTagsUl.append(tagsLi);   
   });
   appendCounter++;
});
// creating an array of all tags. (might not be needed?)
const allTags = document.querySelectorAll(`.tagChild`);

//move the arrow function code here after finished prototyping.
//const filterPosts (tag) =>{};


// detects if a tag is clicked then moves it to the filtered section if so.
allJobPostings.forEach((posting) =>{
  const filterSection = document.querySelector(`.filtered-section`);
  posting.addEventListener(`click`, (e)=>{
    if(e.target.className === `tagChild`){// grabs the tag sucessfully
      const selectedTag = document.createElement(`p`);
      selectedTag.innerText = e.target.innerText;
      selectedTag.id = `${selectedTag.innerText}-tag`
      selectedTag.className = `tags`;
      
      //check if selectedTag exists on the page
      if(document.getElementById(`${selectedTag.innerText}-tag`) === null){
        filterSection.append(selectedTag);
        console.log(selectedTag.innerText + " is now being filtered");
      } else{
        console.log(`Already being filtered.`);
      };
    };
  });
});



// forEach loop that appends NEW & FEATURED headlines to postings
jobsToDisplay.forEach((job, index)=>{
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
    // same logic as isNew check.
    const featuredPill = document.createElement(`span`);
    featuredPill.className = `featuredPill`;
    featuredPill.textContent = `FEATURED`
    allJobPostings[indexValue].classList.add(`featuredListing`);
    const featuredNameTag = document.querySelectorAll(`.featuredListing p`);
    featuredNameTag[indexValue].appendChild(featuredPill);
  };
});



