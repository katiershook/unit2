/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
  
***/
const listItems=document.getElementsByClassName('student-item cf');
const pageItems = 10;

const showPage = (list, pageItems) => {
let startIndex= (pages*pageItems)-pageItems
let endIndex= (pages*pageItems)


//**displays 10 items per page and hides the rest */
  
   for (let  i = 0; i < listItem.length; i++) {
      if (i >= startIndex && i <= endIndex)
         list[i].style.display ='';
   
      
      else (list [i].style.display = 'none');

      // console.log();
   };


    
    /**calculates the number of pages that will be needed  based on the items in the list */

const appendPageLinks = (list) => {
 
let pages = math.ceil(list.length/pageItems);
  console.log(pages);
   /** creates the HTML elements*/
 const pageDiv = document.querySelector('.page');
 /** creates the div and assigns pagination as the classname  */
 const div = document.createElement('div');
 pageDiv.className = 'pagination';
 /** creates the UL,LI and appends them  */
 const ul = document.createElement('ul');
 const pageLi = document.createElement('li');
 pageDiv.appendChild(div);
 div.appendChild('ul');


 
/** Creates a for loop  */

for (let i= 0; i< pages ; i+= )
/** Creates new elements  */
{
const li = document.createElement ('li');
const a = document.createElement ('a');

}
/** adds event listeners for the links */

addEventListener('click',() => {
   const aElement = document.querySelectorAll('a');
   for(let i = 0; i < aElement.length; i++ ) { showPage('a');

}