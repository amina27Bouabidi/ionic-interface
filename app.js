const reasonInput =document.querySelector('#input-reason');
const amountInput =document.querySelector('#input-amount');
const cancelBtn   =document.querySelector('#btn-cancel');
const confirmBtn  =document.querySelector('#btn-confirm');
const expensesList=document.querySelector('#expenses-list');
const totalexpensesoutput=document.querySelector('#total-expenses');
const dateInput   =document.querySelector('#inpute-date');


let totalExpenses=0;
     const clear=() =>{
    reasonInput.value='';
    amountInput.value='';
    dateInput.value='';
                     }
          confirmBtn.addEventListener('click', () => {
             const enteredReason =reasonInput.value;
             const enteredAmount =amountInput.value;
             const enteredDate =dateInput.value;
      

        if(enteredReason.trim().length <= 0 ||
            enteredAmount <=0 ||
            enteredAmount.trim().length <= 0
        ){
            presentAlert();
            return;
        }
        const newItem=document.createElement('ion-item');
        const newI=document.createElement('ion-item');

        newItem.textContent=enteredReason+ ':'+enteredAmount +' dinars' ;
        newI.textContent='Expense date:' +enteredDate;


        expensesList.appendChild(newItem);
        expensesList.appendChild(newI);

        totalExpenses += +enteredAmount;
        totalexpensesoutput.textContent= totalExpenses;
        

        clear();
      });



function presentAlert() {
    const alert= document.createElement('ion-alert');
    alert.header='Alert!';
    alert.message='Please enter valid reason and amount!';
    alert.buttons=[
        {
        text:'yes',
        handler:() =>{
            console.log('Yes')
        }
        },
        {
            text:'No',
            handler:() =>{
                console.log('No')
            }
        }];

document.body.appendChild(alert);
alert.present();
}
cancelBtn.addEventListener('click',clear);