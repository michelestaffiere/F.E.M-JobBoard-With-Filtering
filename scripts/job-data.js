import jobsToDisplay from "./data.js"

const jobContainer = document.querySelector('.job-list');
const filterSection = document.querySelector('.filtered-section');
const filteredTagsArray = [];
let jobListHTML = '';
let postCounter = 0;
const filteredJobsToDisplay = [];

///making above viewable in browserConsole.=
window.jobContainer = jobContainer;
window.filterSection = filterSection;
window.filteredTagsArray = filteredTagsArray;
window.filteredJobsToDisplay = filteredJobsToDisplay;


const intialRender = () =>{
  jobsToDisplay.forEach((job) => {
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
  jobContainer.innerHTML = jobListHTML;
  postingCtaHandling();jobTagHandling();
};
const jobTagHandling = () =>{
  const allJobPostings = document.querySelectorAll(`.job-posting`);
  let appendCounter = 0;
  jobsToDisplay.forEach((job) =>{
    const jobTags = Object.values(job.tagsObj);//Object.values() outputs an array with the values from the given object. (aka grabs the value and spits out an array.)
    const jobTagsUl = document.createElement(`ul`);
    jobTagsUl.classList =`tagParent`;
    allJobPostings[appendCounter].appendChild(jobTagsUl);

    jobTags.forEach((tag) =>{
        let tagsLi = document.createElement(`li`);
        tagsLi.className = "tagChild";
        let tagValue = tag;
        tagsLi.textContent = tagValue;
        jobTagsUl.append(tagsLi);   
    });
    appendCounter++;
  });
  allJobPostings.forEach((posting) => {
    // Add a click event listener to each job posting element
  
    posting.addEventListener('click', (e) => {
      // Check if the clicked element has the class "tagChild"
      if (e.target.className === 'tagChild') {
        // Create a new <p> element for the selected tag
        const selectedTag = document.createElement('p');
        selectedTag.innerText = e.target.innerText;
        selectedTag.id = `${selectedTag.innerText}`;
        selectedTag.className = 'tags';
        
        // Check if the selectedTag element already exists on the page
        if (document.getElementById(`${selectedTag.innerText}`) === null) {
          // Append the selectedTag element to the filtered section
          filterSection.append(selectedTag);
          filteredTagsArray.push(selectedTag.innerText);
          console.log(filteredTagsArray);
        };
      };
    });
  });
};
const postingCtaHandling =()=>{
  const allJobPostings = document.querySelectorAll(`.job-posting`);
  jobsToDisplay.forEach((job, index) => {
    // Retrieve the index of the current job in the jobsToDisplay array
    const indexValue = jobsToDisplay.indexOf(job);
    
    // Check if the job is marked as "new"
    if (job.isNew === true) {
      // Create a new <span> element for the "NEW!" pill
      const newPill = document.createElement('span');
      newPill.className = 'newPill';
      newPill.textContent = 'NEW!';
  
      // Add the 'newListing' class to the corresponding job posting element
      allJobPostings[indexValue].classList.add('newListing');
      
      // Target the <p> element within the 'newListing' job posting
      const newNameTag = document.querySelectorAll('.newListing p');
      
      // Append the "NEW!" pill to the <p> element
      newNameTag[indexValue].appendChild(newPill);
    };
  
    // Check if the job is marked as "featured"
    if (job.isFeatured === true) {
      // Create a new <span> element for the "FEATURED" pill
      const featuredPill = document.createElement('span');
      featuredPill.className = 'featuredPill';
      featuredPill.textContent = 'FEATURED';
  
      // Add the 'featuredListing' class to the corresponding job posting element
      allJobPostings[indexValue].classList.add('featuredListing');
      
      // Target the <p> element within the 'featuredListing' job posting
      const featuredNameTag = document.querySelectorAll('.featuredListing p');
      
      // Append the "FEATURED" pill to the <p> element
      featuredNameTag[indexValue].appendChild(featuredPill);
    };
  });
};

const filterHandling = (jobListings, filters)=>{
  const jobListingTags = Object.values(jobListing.tagsObj);
  filters.forEach((filter)=>{
    const containsFilterTag = jobListingTags.includes(filter);
    if(!containsFilterTag) {
      // reject
      return false
    } 
    return true
  });
};






//===========================================================================
// @function intialRender: is responsible for parsing data.Js and creating the HTML for the job postings.
//
//@nested function: jobTagHandling() is responsible for parsing the nested objects in data.js and appending them to each perspective listing - also adds an onclick event listener that pushes the tags into the filteredTagsArray.

//@nested function: postingCtaHandling adds new and featured CTA's to perspective jobs

//=========================================================================
intialRender();





