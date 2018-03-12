var section = document.querySelector('.data');
    var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
      var town = request.response;
      showTown(town);
        
    }
    
    function showTown(jsonObj) {
      var towns = jsonObj['towns'];      
      
      for(var i = 0; i < towns.length; i++) {
          if((i == 0)|| !(i % 2 == 0)){
              
        var myArticle = document.createElement('article');
        var myH4 = document.createElement('h3');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myPara4 = document.createElement('p');  
        var myList = document.createElement('ul');
        
          
        myH4.textContent = towns[i].name;
        myPara1.textContent = 'Motto: ' + towns[i].motto;
        myPara2.textContent = 'YearFounded: ' + towns[i].yearFounded;
        myPara3.textContent = 'Population:' + towns[i].currentPopulation;
        myPara4.textContent = 'AnnualRainfall:' + towns[i].averageRainfall;
        
        
        myArticle.appendChild(myH4);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myPara4);
        myArticle.appendChild(myList);
        section.appendChild(myArticle);
        
      }
    }
    }