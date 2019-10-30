import axios,{
    AxiosResponse,
    AxiosError
} from "../../node_modules/axios/index"

interface ICar{
  id : number,
  vendor : string,
  model : string,
  price: number
}

//url for the rest webservice at Azure
let carWebUrl: string = "https://webapicar20190326034339.azurewebsites.net/api/cars/";

//create a click eventlistener at "Add" button
let AddCarButton: HTMLButtonElement = <HTMLButtonElement> document.getElementById("addButton");
AddCarButton.addEventListener('click',addCar);

//create a click event listener for the get all button
let GetAllCarButton: HTMLButtonElement = <HTMLButtonElement> document.getElementById("getAllButton");
GetAllCarButton.addEventListener('click', SelectAllCars );


function SelectAllCars():void{

console.log("At selectAllCarsfunction");

 //axios call

 axios.get<ICar[]>(carWebUrl)
 .then(function(response:AxiosResponse<ICar[]>){
     //then the get is ok
     response.data.forEach((car:ICar) => {
         console.log("the car is " + car.model);
         
     });

 } )
 .catch(function (error:AxiosError){
     //then the get fails
 });


}

//we need to code the axios post in this method
function addCar():void{

    //Steps to do a axios post
    //step 1 we need to get the data from the html page (text input fields)
   let addElementModel : HTMLInputElement = <HTMLInputElement>document.getElementById("addModel");
   let addElementVendor : HTMLInputElement = <HTMLInputElement>document.getElementById("addVendor");
   let addElementPrice : HTMLInputElement = <HTMLInputElement>document.getElementById("addPrice");

   let myModel:string = addElementModel.value;
   let myVendor:string = addElementVendor.value;
   let myPrice :number = +addElementPrice.value;
   

   axios.post<ICar>(carWebUrl,{model:myModel,vendor:myVendor, price:myPrice})
   .then(function(response:AxiosResponse){
       console.log("response " + response.status + " " +response.statusText )
   })
   .catch(function (error: AxiosError){ console.log(error)});


    //step 2 we need to create a json object with the data

    //step 3 we need to do the axios post call with the data to the webservice

    //step 4 we need to check if the data is stored  


  console.log("The end");

}