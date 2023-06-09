
// import job data array from data.js
import jobsToDisplay from "./data.js"

const jobContainer = document.querySelector('.job-list');
const filterSection = document.querySelector('.filtered-section');
const filteredTagsDiv = document.querySelector(`.filtered-tags`);
const filteredTagsArray = [];
let jobListHTML = '';


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

        // Check if the selectedTag element already exists on the page by attempting to query it, if returns null it does not exist so we make it.
        if (document.getElementById(`${selectedTag.innerText}`) === null) {
          const newTag = selectedTag
          const tagContainer = document.createElement('div');
          const closeBox = document.createElement('div');
          const closeSVG = document.createElement('img');

          closeSVG.src = './styles/assets/close.svg';

          tagContainer.classList.add('tagContainerDiv');

          filteredTagsDiv.append(tagContainer)
          tagContainer.append(newTag)
          tagContainer.append(closeBox)
          closeBox.append(closeSVG)

      
          filteredTagsArray.push(newTag.innerText);
          filterHandling(jobsToDisplay,filteredTagsArray);
          showFilteredTagsSection();
          clearTagButtonHandling();
        };
      };
    });
  });

  if (filteredTagsDiv.hasChildNodes()) {
    const addedTag = filteredTagsDiv.lastChild;
    addedTag.addEventListener('click', () => {
      filteredTagsArray.splice(filteredTagsArray.indexOf(addedTag.innerText),1);
      addedTag.remove();
      filterHandling(jobsToDisplay,filteredTagsArray);
    });
  };
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
const showFilteredTagsSection = () => {
  if (filteredTagsDiv.childElementCount.length === 0){
    filterSection.style.display = "none"
  } else{
    filterSection.style.display = "flex"
  };
};
const clearTagButtonHandling = () =>{
  const clearBtn = document.querySelector(`#clear-btn`);
  clearBtn.addEventListener(`click`,()=>{
    filteredTagsDiv.innerHTML = "";
    filteredTagsArray.length = 0;
    filterHandling(jobsToDisplay,filteredTagsArray);
    filterSection.style.display = "none"
  });
};

// Load the page 
pageRender(jobsToDisplay);
jobTagHandling(jobsToDisplay);
postingCtaHandling(jobsToDisplay);
