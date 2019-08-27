/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
  creating variables and math.ceil to create correct amount page numbers. 
***/
const listItems=document.getElementsByClassName('student-item');
const pageItems = 10;
const pageNumber= Math.ceil(listItems.length/pageItems);
/** creates showpage function, start and end Indexs and loop to show number of students per page */
function showPage (list, pageNumber) {
    let startIndex= ((pageNumber-1)*pageItems);
    let endIndex= (startIndex+pageItems)-1; 
     for(let i = 0; i < listItems.length; i++) {
      if(listItems[i] && i >= startIndex && i<= endIndex){
      listItems[i].style.display ='block';}
      else{listItems[i].style.display ='none';}
     }}




//creates appendpage links , redclares page numbers and append elements to the page//
function appendPageLinks(list){
// redclares  math.ceil and div  in the function//

const pageNumber = Math.ceil(listItems.length/pageItems)+1;
const div = document.createElement('div');
div.className ="pagination";
document.querySelector(".page").appendChild(div);
const ul = document.createElement('ul');
div.appendChild(ul);
// creates loop to show the correct page number buttons and uses event listner for when a button is clicked //
for(let i = 1; i < pageNumber; i+=1) {
 let pageButton = document.createElement('li');
    pageButton.addEventListener('click',onPageClick);
    let pageLinks = document.createElement('a');
    pageLinks.setAttribute("id",i);
     pageLinks.textContent = i;
     pageLinks.href= "#";
     pageButton.appendChild(pageLinks);
     ul.appendChild(pageButton);}

 }



// uses another event listner to make sure it is a clickable link and uses an Attribute to change it from active or inactive.
// if the link is active displays the correct items on page//

function onPageClick(e){
    let links = document.querySelectorAll("li a");
    links.forEach(function(item){
       item.setAttribute("class","");
    })
    e.target.setAttribute("class","active");
    showPage(listItems,parseInt(e.target.id,10));
  }
  // uses onload to append page link function and starts the first page at 0 which displays 10 students//
  window.onload = function(){
    appendPageLinks(listItems);
    document.querySelectorAll("li a")[0].click();
  }

  
 




