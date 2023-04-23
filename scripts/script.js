let btn = document.getElementById('btn');
let injectArea = document.getElementById('injectArea');
let textArea = document.getElementById('textArea');
let createList = document.getElementById('createList')
let listNum = 1;
let inputCount = 0
let btnContainer = document.getElementById('btnContainer');



createList.addEventListener('click',function(e){
    createLists(); 
});

function createElement(elementToCreate, style)
{
    let createdElement = document.createElement(elementToCreate);
    createdElement.classList = style;
    return createdElement;
}

function createElement(elementToCreate, style) {
    let createdElement = document.createElement(elementToCreate);
    createdElement.classList = style;
    return createdElement;
  }
  
  function createLists() {

    let rowListDiv = createElement('div', 'row justify-content-center row-space'); //creating space
  
    let colAutoDiv = createElement('div', 'col-auto');
      
    let inputGroupDiv = createElement('div', 'input-group mb-3')
      
    let inputArea = createElement('input', 'form-control');
    inputArea.setAttribute('type','text');
    inputArea.setAttribute('placeholder','enter item here')
    inputArea.setAttribute('aria-label','Recipient\'s username')
    inputArea.setAttribute('aria-describedby','button-addon2') 
  
    let btn2 = createElement('button', 'btn btn-outline-warning')
    btn2.setAttribute('type','button');
    btn2.innerText = 'Add Item';
  
    let injectArea = createElement('div', 'injectArea'); // Create a new inject area for each button
  
    btn2.addEventListener('click',function(e){
      createItems(inputArea.value, injectArea); // put the inject area to the createItems function
    });
  
    inputGroupDiv.appendChild(inputArea); 
    inputGroupDiv.appendChild(btn2)
    colAutoDiv.appendChild(inputGroupDiv);
    rowListDiv.appendChild(colAutoDiv);
    rowListDiv.appendChild(injectArea); // Add the new inject area to the row
  
    btnContainer.appendChild(rowListDiv); // Add the row to the button container
  }
  
  function createItems(item, injectArea) { 
    let listItems = document.querySelectorAll('.list-group-item');
    let listNum = listItems.length > 0 ? parseInt(listItems[listItems.length - 1].innerText.split('.')[0]) + 1 : 1;

    let row = createElement('div', 'row'); 
      
    let div1 = createElement('div', 'col-1');
     
    let div2 = createElement('div', 'formcheck pt-2 mx-4');
        
    let checkbox = createElement('input', 'form-check-input');
        checkbox.setAttribute('type','checkbox'); 
        checkbox.addEventListener('click', function(e){
           
            if(e.target.checked){ 
                e.target.parentNode.parentNode.nextSibling.classList.add('strike'); 
            }
            else
            {
                e.target.parentNode.parentNode.nextSibling.classList.remove('strike');
            }
        });    
        div1.appendChild(div2); 
        div2.appendChild(checkbox);
    

    let div3 = createElement('div', 'col-10');
       
    let olTag = createElement('ol', 'list-group');
     
    let liTag = createElement('li', 'list-group-item list-group-item-primary'); 
        liTag.innerText = listNum + '. ' + item;
        liTag.contentEditable = true; 
    
        div3.appendChild(olTag);
        olTag.appendChild(liTag);
    

    let div4 = createElement('div', 'col-1 pt-2');
       
    let iTag = createElement('i', 'fa-sharp fa-solid fa-trash');
        iTag.setAttribute('style','color: #e11414');
        div4.appendChild(iTag);
        iTag.addEventListener('click', function(e){
            this.parentNode.parentNode.remove();
            updateListNumbers();
        });

    
        row.appendChild(div1);
        row.appendChild(div3);
        row.appendChild(div4);
        injectArea.appendChild(row);

        updateListNumbers();
  }

  function updateListNumbers() { //brought to you by chat gbt
    let items = document.querySelectorAll('.list-group-item');
    for (let i = 0; i < items.length; i++) {
      items[i].innerText = (i + 1) + '. ' + items[i].innerText.substr(3);
    }
  }