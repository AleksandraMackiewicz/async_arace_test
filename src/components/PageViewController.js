import { CarViewController } from "./CarViewController.js"
import { WinnerViewController } from "./WinnerViewController.js"

export class PageViewController { //mylink = button, mypage = div;

   

    addTabPageWithLink(label) {

        let myLink = document.createElement('button');
        myLink.innerText = label;
        myLink.classList.add('tablinks');

        let myPage = document.createElement('div');
        myPage.classList.add('garage_content')

        this.allMyLinks.push(myLink);
        this.allMyPages.push(myPage);
        this.stripe.appendChild(myLink);
        this.pageList.appendChild(myPage);

        let that = this;
        myLink.onclick = function() {that.showPage(myLink, myPage)}
      
        
   
        return myPage;
    }

    constructor(parentElement) {
        this.allMyPages = [];
        this.allMyLinks = [];
        this.stripe = document.createElement('div');
        this.pageList = document.createElement('div');
        this.stripe.classList.add('stripe');
        parentElement.appendChild(this.stripe);
        parentElement.appendChild(this.pageList);

        let garagePage = this.addTabPageWithLink('Garage');
        let controllerCars = new CarViewController(garagePage);
        let winnersPage = this.addTabPageWithLink('Winners')
        let controllerWinners = new WinnerViewController(winnersPage);


         this.showPage(null,garagePage) 

    }
    showPage(myLink, clickedPage) {
        for(let i = 0; i < this.allMyPages.length; i++) {
            this.allMyPages[i].style.display = 'none';

        }

        for(let i = 0; i < this.allMyLinks.length; i++) {
            this.allMyLinks[i].className = this.allMyLinks[i].className.replace('active', '');
            
        }
        if(myLink != null) {
    
            myLink.className += "active";
        }

        clickedPage.style.display = 'block';
             
        let activeLink = document.querySelector('.tablinksactive'); 
        if(activeLink!=null)
        {
            activeLink.style.boxSizing = 'border-box';
            activeLink.style.backgroundColor = 'rgba(171, 171, 243, 0.8)';
            activeLink.style.border = '0.5rem solid rgb(171, 171, 243)';
        }
        let normalLink = document.querySelector('.tablinks');
        if(normalLink!=null){
            normalLink.style.boxSizing = 'border-box';
            normalLink.style.backgroundColor = 'rgb(69, 73, 84)';
            normalLink.style.border = '0.1rem solid white';
        }
   // stop animation after changing page
          let carImages =  document.querySelectorAll('.car_image');
          carImages.forEach(function(carImage) {
            carImage.style.animation = 'none'
          })
   
            }
   





}