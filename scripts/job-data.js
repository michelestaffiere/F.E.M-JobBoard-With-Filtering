import jobsToDisplay from "./data.js"

// const render = () =>{

// };
const JobContainer = document.querySelector('.job-list');
const filterSection = document.querySelector('.filtered-section');
const filteredTagsArray = []

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

// declaring after because doesnt exist until render is ran at least once.
const allJobPostings = document.querySelectorAll(`.job-posting`);

let appendCounter = 0;
jobsToDisplay.forEach((job) =>{

   const jobTags = Object.values(job.tagsObj);//Object.entries() outputs an array of arrays, with each inner array having two elements (key value pair)
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

// make a function called jobListingMatches Filter
// takes in filtersArray, and jobListing. 
// displays jobs with matching filters.

















// forEach Loop responsible for appending tags to each listing.:

//move the arrow function code here after finished prototyping.
//const filterPosts (tag) =>{};



// Select the filtered section element

// Iterate over each job posting element in the allJobPostings array
allJobPostings.forEach((posting) => {
  // Add a click event listener to each job posting element

  posting.addEventListener('click', (e) => {
    // Check if the clicked element has the class "tagChild"
    if (e.target.className === 'tagChild') {
      // Create a new <p> element for the selected tag
      const selectedTag = document.createElement('p');
      selectedTag.innerText = e.target.innerText;
      selectedTag.id = `${selectedTag.innerText}-tag`;
      selectedTag.className = 'tags';
      
      // Check if the selectedTag element already exists on the page
      if (document.getElementById(`${selectedTag.innerText}-tag`) === null) {
        // Append the selectedTag element to the filtered section
        filterSection.append(selectedTag);
        filteredTagsArray.push(selectedTag);
        console.log(selectedTag.innerText + ' is now being filtered');
      } else {
        console.log('Already being filtered.');
      }
    }
  });
});




// Iterate over each job in the jobsToDisplay array using a forEach loop
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

// 
