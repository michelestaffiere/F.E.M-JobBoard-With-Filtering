
// import job data array from data.js
import jobsToDisplay from "./data.js"

const jobContainer = document.querySelector('.job-list');
const filterSection = document.querySelector('.filtered-section');
const clearBtn = document.querySelector(`#clear-btn`);
const filteredTagsDiv = document.querySelector(`.filtered-tags`);
const filteredTagsArray = [];
let jobListHTML = '';


///making above viewable in browser console.
window.jobContainer = jobContainer;
window.filterSection = filterSection;
window.filteredTagsArray = filteredTagsArray;
window.jobListHTML = jobListHTML;
window.filteredTagsDiv = filteredTagsDiv



const showFilteredTagsSection = () => {
  if (filteredTagsDiv.childElementCount.length !== 0){
    filterSection.style.display = "flex"
  };
};

const pageRender = (parsedArr) =>{
  parsedArr.forEach((job) => {
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
  });
  jobContainer.innerHTML = jobListHTML;
};

const jobTagHandling = (parsedArr) =>{

  const allJobPostings = document.querySelectorAll(`.job-posting`);
  let appendCounter = 0;
  parsedArr.forEach((job) =>{

    const jobTags = Object.values(job.tagsObj);
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

  // adding tags to the fitler display section.
  allJobPostings.forEach((posting) => {
    // Add a click event listener to each tag on a job posting.
    posting.addEventListener('click', (e) => {
      if (e.target.className === 'tagChild') {
        const selectedTag = document.createElement('p');
        selectedTag.innerText = e.target.innerText;
        selectedTag.id = `${selectedTag.innerText}`;
        selectedTag.className = 'tags';
        // ADD CODE HERE FOR REMOVETAG BUTTON <- NEEDS TO BE NESTED INSIDE THE P AS A SPAN???
        
        // Check if the selectedTag element already exists on the page by attempting to query it, if returns null it does not exist so we make it.
        if (document.getElementById(`${selectedTag.innerText}`) === null) {
          // filterSection.append(selectedTag);
          filteredTagsDiv.append(selectedTag);
          filteredTagsArray.push(selectedTag.innerText);
          console.log(filteredTagsArray);
          filterHandling(jobsToDisplay,filteredTagsArray);
          showFilteredTagsSection();
        };
      };
    });
  });
};
const postingCtaHandling =(parsedArr)=>{
  const allJobPostings = document.querySelectorAll(`.job-posting`);
  parsedArr.forEach((job) => {
    // Retrieve the index of the current job in the jobsToDisplay array
    const indexValue = parsedArr.indexOf(job);
    
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

//===============================================================
//  the source of my headaches comes from the function below.  //
//===============================================================
const filterHandling = (jobsArr, filters) => {
  const filteredJobs = jobsArr.filter((job) => {
    const jobTags = Object.values(job.tagsObj);
    return filters.every((filter) => jobTags.includes(filter));
  });
    if (filteredJobs.length === 0) {
    console.log('No matches');
  }else{
    let newJobListHTML = '';
    filteredJobs.forEach((job) => {
      newJobListHTML +=
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
    });
    jobContainer.innerHTML = '';
    jobContainer.innerHTML = newJobListHTML;
    jobTagHandling(filteredJobs);
    postingCtaHandling(filteredJobs);
  };
};

pageRender(jobsToDisplay);
jobTagHandling(jobsToDisplay);
postingCtaHandling(jobsToDisplay);






// Psuedo Code Section for TODO

// remove filter tag func. (should be applied on the creation of the element, insdie the onclick appending inside JobTagHandling, this function should a be callback.)
//  `click` event listener that grabs sibling innerText content (ex."Javascript");
//   stores the sibling innerText to a variable (i.e = x);
//   use .forEach() on the filterTagArray 
//   if tag === x
//   store the tag.indexOf() value.
//   filterTagArray.splice(tagIndexVal,tagIndexVal);
//
//  then need to remove the visual element from the page.
//    let tagToRemove = document.querySelector(`#x`) <- x representing the innerText of the tag from 169
//    tagToRemove.remove();
//  
// then need to reRender the page so call filterHandling at the end of the function.




