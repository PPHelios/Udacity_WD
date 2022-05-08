/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const sections = Array.from(document.querySelectorAll("section"));
 const navBarItems = document.getElementById("navbar__list");
 const scroll = document.querySelectorAll("section");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function createListItems () {
				for (section of sections) {
				
// create a list item for the section
listItem = document.createElement("li");
// insert the list item attributes
listItem.innerHTML = `<li><a href="#${section.id}" class="menu__link" data-nav="${section.id}">${section.dataset.nav}</a></li>`;
//
navBarItems.appendChild(listItem)					
				}
}
createListItems()

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

document.addEventListener("scroll" ,function(){
				sections.forEach(function(active){
								if  (active.getBoundingClientRect().top<window.innerHeight/2 && active.getBoundingClientRect().bottom>window.innerHeight/2)
										
						{active.classList.add("your-active-class");
						
												
								}else {active.classList.remove("your-active-class");
												
								}
				})
})
// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event
/*navBarItems.addEventListener("click", function(smooth){
			smooth.preventDefault()	;*/
			let anchorSelector = 'a[href^="#"]'
			let anchorList =          document.querySelectorAll(anchorSelector);
anchorList.forEach(function(link) {
            link.onclick = function (e) {
e.preventDefault();
let destination =                   document.querySelector(this.hash)
destination.scrollIntoView({
behavior: 'smooth'
});
}
})
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
