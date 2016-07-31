
class Advertisement
{
	Id:string;
	Subject:string;
	Description:string;
	Images:Images[];
	ContactNo:string[];
	Category:Category;	
	City:City;
	PostedDate:string;
}

class GenSpec extends Advertisement
{
	Brand:string;
	Model:string;
	Year:number;
	Condition:Condition;
	Color:Color;
	Price:number;
	Warranty:WarrantyPeriod;
}

class Vehicle extends GenSpec{
	FuelType:Fuel;
	KMsDriven:number;
	NumberPlate:string;
	Tyre:Tyre;
}

class Car extends Vehicle{
	TransmissionType:Transmission;
	CentralLocking:boolean;
	ChildSafetyLock:boolean;
	PowerSteering:boolean;
}

class Bike extends Vehicle{
}

class Mobile extends GenSpec
{
	InternalMemory:string;
	DuelSim:boolean;
	MemoryCardSlot:boolean;
	OS:OS;	
}

class RealEstate extends Advertisement{
	Furnished:boolean;
	Rooms:number;
	SquareFeet:string;
    Price:number;
}

class Job extends Advertisement{
	JobType:JobType;
	PositionType:PositionType;
	Salary:string;
	Vacancy:number;
	Qualification:string;
	Experience:string;
	Skills:string[];
	Email:string;
}

class Images{
	IsDefault:boolean;
	URL:string;
}

class Tyre{
	CompanyName:string;
	Type:TyreType;
	No:number;
}
class Data{
 
    GetCars() : Car[]{
        let cars:Car[]=[];
        cars.push(GetCar1());
        cars.push(GetCar2());
        return cars;
     }
	
    GetMobiles() : Mobile[]{
        let mobiles:Mobile[]=[];
        mobiles.push(GetMobile1());
        mobiles.push(GetMobile2());
        return mobiles;
    }
    GetBikes() : Bike[]{
        let bikes:Bike[]=[];
        bikes.push(GetBike1());
        bikes.push(GetBike2());
        return bikes;
    }

    GetRealEstates() : RealEstate[]{
        let realEstates:RealEstate[]=[];
        realEstates.push(GetRealEstate1());
        realEstates.push(GetRealEstate2());
        return realEstates;
    }

    GetJobs() : Job[]{
        let jobs:Job[]=[];
        jobs.push(GetJob1());
        jobs.push(GetJob2());
        return jobs;
    }
}

/******Enumeration *******/
enum OS{
	Android,IOS,Windows
}
enum WarrantyPeriod
{
	None,OneMonth,TwoMonth,ThreeMonth,FourMonth,FiveMonth,SixMonth,SevenMonth,EightMonth,NineMonth,TenMonth,OneYear,TwoYear,ThreeYear,FourYear,FiveYear,GreaterThanFiveMonth
}
enum JobType{
	IT,Marketing,HumanResource,Eduction,Manufacturing,Sales
}
enum PositionType{
	PartTime,
	FullTime
}
enum Color{
	Green,Red,Black,Blue
}
enum TyreType{
	Simple,TubeLess
}
enum Transmission {
	Manual,	Automatic
}
enum Condition{
	New,Used
}
enum Fuel
{
	Diesel,Petrol,CNG,Other
}
enum Category{
	Mobile,Bike,Car,Job,RealEstate
}
enum City{
	Karachi,Hyderabad,Multan,Lahore
}
/*******END ******/

/*** Functions ***/
function GetDefaultImage(imgs:Images[]):Images{
	let img=new Images();
	let imgCount=0;
	for (let entry of imgs) {		
		imgCount++;
		if(entry.IsDefault)
		{
			img=entry;
			break;
		}
		
		if(imgCount==imgs.length && !entry.IsDefault)
		{
			img=entry;
			break
		}
	}
	return img;
}

function GetAdvertise(adds:Mobile|Bike|Job|RealEstate)
{
	let txt="";
	switch(adds.Category)
	{
		case Category.Mobile:
		{
			txt=GetMobileAdvertise(<Mobile>adds);
			break;
		}
        case Category.Car:
		{
			txt=GetCarAdvertise(<Car>adds);
			break;
		}
		case Category.Bike:
		{
			txt=GetBikeAdvertise(<Bike>adds);
			break;
		}
		case Category.Job:
		{
			txt=GetJobAdvertise(<Job>adds);
			break;
		}
		case Category.RealEstate:
		{
			txt=GetRealEStateAdvertise(<RealEstate>adds);
			break;
		}
		default:
			break;
	}
	
	return txt;
}

/**** Advertisement Templates ****/

function GetMobileAdvertise(adv:Mobile):string
{
	return "<li class='list-group-item'>"
        + "<div class='row'>"
        + "<div class='col-xs-6 col-md-1'>"
        + " <img src='" + GetDefaultImage(adv.Images).URL + "' alt='mobile image' height='80' width='80'>"
        + "<span class='badge'>RS:" + adv.Price + "</span>"
        + "</div>"
        + "<div class='col-xs-8 col-md-9'>"
        + "<div class='row'>"
        + "<div class='row'>"
        + "<div class='col-xs-12 col-md-12'>"
        + "<h3>"
        + adv.Subject
        + "</h3>"
        + "<h5><b> Contacts:</b>" + adv.ContactNo.join() + "</h5>"
        + "<p><a class='ViewDetail' "
         + "onclick=ViewDetail('" + adv.Id + "') "
        + "href='#'>View details &raquo;</a></p>"
        + "</div> "
        + "</div> "
        + "<div class='row' style='display:none;' id='"+adv.Id+"'>"
        + "<div class='row'>"
        + "<div class='col-xs-12 col-md-12'>"
        + "<p class=''>" + adv.Description + "</p>"
        + "</div> "
        + "</div>"
        + "<div class='row'>"
        + "<div class='col-xs-12 col-md-3'>"
        + "<p class=''><b>Brand:</b>" + adv.Brand + " </p>"
        + "</div>"
        + "<div class='col-xs-12 col-md-3'>"
        + "<p class=''> <b>Model:</b>" + adv.Model + " </p>"
        + "</div>"
        + "<div class='col-xs-12 col-md-3'>"
        + "<p class=''><b> Year:</b>" + adv.Year + " </p>"
        + "</div>"
        + "<div class='col-xs-12 col-md-3'>"
        + "<p class=''><b> Condition:</b>" + Condition[adv.Condition] + " </p>"
        + "</div>"
        + "</div>"
        + "<div class='row'>"
        + "<div class='col-xs-12 col-md-3'>"
        + "<p class=''><b> Internal Memory:</b>" + adv.InternalMemory + " </p>"
        + "</div>"
        + "<div class='col-xs-12 col-md-3'>"
        + "<p class=''><b> Duel Sim:</b>" + isYesOrNo(adv.DuelSim) + " </p>"
        + "</div>"
        + "<div class='col-xs-12 col-md-3'>"
        + "<p class=''><b> OS:</b>" + OS[adv.OS] + " </p>"
        + "</div>"
        + "<div class='col-xs-12 col-md-3'>"
        + "<p class=''><b> Warranty:</b>" + WarrantyPeriod[adv.Warranty] + " </p>"
        + "</div>"
        + "</div>"
        +"</div>"
        + "</div>"
        + "</div>"
        + "<div class='col-xs-2 col-md-2'>"
        + "<h5>"
        + adv.PostedDate
        +"<br />" +City[adv.City]
        + "</h5>"
        + "</div"
        + "</div>"
        + "</li>";		
}

function GetBikeAdvertise(adv:Bike):string
{
	return "<li class='list-group-item'>"
        + "<div class='row'>"
        + "<div class='col-xs-6 col-md-1'>"
        + " <img src='" + GetDefaultImage(adv.Images).URL + "' alt='mobile image' height='80' width='80'>"
        + "<span class='badge'>RS:" + adv.Price + "</span>"
        + "</div>"
        + "<div class='col-xs-8 col-md-9'>"
        + "<div class='row'>"
        + "<div class='row'>"
        + "<div class='col-xs-12 col-md-12'>"
        + "<h3>"
        + adv.Subject
        + "</h3>"
        + "<h5><b> Contacts:</b>" + adv.ContactNo.join() + "</h5>"
        + "<p><a class='ViewDetail' "
         + "onclick=ViewDetail('" + adv.Id + "') "
        + "href='#'>View details &raquo;</a></p>"
        + "</div> "
        + "</div> "
        + "<div class='row' style='display:none;' id='"+adv.Id+"'>"
        + "<div class='row'>"
        + "<div class='col-xs-12 col-md-12'>"
        + "<p class=''>" + adv.Description + "</p>"
        + "</div> "
        + "</div>"
        + "<div class='row'>"
        + "<div class='col-xs-12 col-md-3'>"
        + "<p class=''><b>Brand:</b>" + adv.Brand + " </p>"
        + "</div>"
        + "<div class='col-xs-12 col-md-3'>"
        + "<p class=''> <b>Model:</b>" + adv.Model + " </p>"
        + "</div>"
        + "<div class='col-xs-12 col-md-3'>"
        + "<p class=''><b> Year:</b>" + adv.Year + " </p>"
        + "</div>"
        + "<div class='col-xs-12 col-md-3'>"
        + "<p class=''><b> Condition:</b>" + Condition[adv.Condition] + " </p>"
        + "</div>"
        + "</div>"
        + "<div class='row'>"
        + "<div class='col-xs-12 col-md-3'>"
        + "<p class=''><b> KM's Driven:</b>" + adv.KMsDriven + " </p>"
        + "</div>"
        + "<div class='col-xs-12 col-md-3'>"
        + "<p class=''><b> Warranty:</b>" + WarrantyPeriod[adv.Warranty] + " </p>"
        + "</div>"
        + "<div class='col-xs-12 col-md-3'>"
        
        + "</div>"
        + "<div class='col-xs-12 col-md-3'>"
        
        + "</div>"
        + "</div>"
        +"</div>"
        + "</div>"
        + "</div>"
        + "<div class='col-xs-2 col-md-2'>"
        + "<h5>"
        + adv.PostedDate
        +"<br />" +City[adv.City]
        + "</h5>"
        + "</div"
        + "</div>"
        + "</li>";		
}

function GetCarAdvertise(adv:Car):string
{
	return "<li class='list-group-item'>"
        + "<div class='row'>"
        + "<div class='col-xs-6 col-md-1'>"
        + " <img src='" + GetDefaultImage(adv.Images).URL + "' alt='mobile image' height='80' width='80'>"
        + "<span class='badge'>RS:" + adv.Price + "</span>"
        + "</div>"
        + "<div class='col-xs-8 col-md-9'>"
        + "<div class='row'>"
        + "<div class='row'>"
        + "<div class='col-xs-12 col-md-12'>"
        + "<h3>"
        + adv.Subject
        + "</h3>"
        + "<h5><b> Contacts:</b>" + adv.ContactNo.join() + "</h5>"
        + "<p><a class='ViewDetail' "
         + "onclick=ViewDetail('" + adv.Id + "') "
        + "href='#'>View details &raquo;</a></p>"
        + "</div> "
        + "</div> "
        + "<div class='row' style='display:none;' id='"+adv.Id+"'>"
        + "<div class='row'>"
        + "<div class='col-xs-12 col-md-12'>"
        + "<p class=''>" + adv.Description + "</p>"
        + "</div> "
        + "</div>"
        + "<div class='row'>"
        + "<div class='col-xs-12 col-md-3'>"
        + "<p class=''><b>Brand:</b>" + adv.Brand + " </p>"
        + "</div>"
        + "<div class='col-xs-12 col-md-3'>"
        + "<p class=''> <b>Model:</b>" + adv.Model + " </p>"
        + "</div>"
        + "<div class='col-xs-12 col-md-3'>"
        + "<p class=''><b> Year:</b>" + adv.Year + " </p>"
        + "</div>"
        + "<div class='col-xs-12 col-md-3'>"
        + "<p class=''><b> Condition:</b>" + Condition[adv.Condition] + " </p>"
        + "</div>"
        + "</div>"
        + "<div class='row'>"
        + "<div class='col-xs-12 col-md-3'>"
        + "<p class=''><b> KM's Driven:</b>" + adv.KMsDriven + " </p>"
        + "</div>"
        + "<div class='col-xs-12 col-md-3'>"
        + "<p class=''><b> Warranty:</b>" + WarrantyPeriod[adv.Warranty] + " </p>"
        + "</div>"
        + "<div class='col-xs-12 col-md-3'>"
        + "<p class=''><b> Fuel Type:</b>" + Fuel[adv.FuelType] + " </p>"
        + "</div>"
        + "<div class='col-xs-12 col-md-3'>"
        + "<p class=''><b> Transmission Type:</b>" + Transmission[adv.TransmissionType] + " </p>"
        + "</div>"
        + "</div>"
        +"</div>"
        + "</div>"
        + "</div>"
        + "<div class='col-xs-2 col-md-2'>"
        + "<h5>"
        + adv.PostedDate
        +"<br />" +City[adv.City]
        + "</h5>"
        + "</div"
        + "</div>"
        + "</li>";		
}

function GetJobAdvertise(adv:Job):string
{
	return "<li class='list-group-item'>"
        + "<div class='row'>"
        + "<div class='col-xs-6 col-md-1'>"
        + " <img src='" + GetDefaultImage(adv.Images).URL + "' alt='mobile image' height='80' width='80'>"
        + "<span class='badge'>Salary:" + adv.Salary + "</span>"
        + "</div>"
        + "<div class='col-xs-8 col-md-9'>"
        + "<div class='row'>"
        + "<div class='row'>"
        + "<div class='col-xs-12 col-md-12'>"
        + "<h3>"
        + adv.Subject
        + "</h3>"
        + "<h5><b> Contacts:</b>" + adv.ContactNo.join() + "</h5>"
        + "<p><a class='ViewDetail' "
         + "onclick=ViewDetail('" + adv.Id + "') "
        + "href='#'>View details &raquo;</a></p>"
        + "</div> "
        + "</div> "
        + "<div class='row' style='display:none;' id='"+adv.Id+"'>"
        + "<div class='row'>"
        + "<div class='col-xs-12 col-md-12'>"
        + "<p class=''>" + adv.Description + "</p>"
        + "</div> "
        + "</div>"
        + "<div class='row'>"
        + "<div class='col-xs-12 col-md-3'>"
        + "<p class=''><b>Experience:</b>" + adv.Experience + " </p>"
        + "</div>"
        + "<div class='col-xs-12 col-md-3'>"
        + "<p class=''> <b>Minimum Qualification:</b>" + adv.Qualification + " </p>"
        + "</div>"
        + "<div class='col-xs-12 col-md-3'>"
        + "<p class=''><b> Job Type:</b>" +JobType[adv.JobType] + " </p>"
        + "</div>"
        + "<div class='col-xs-12 col-md-3'>"
        + "<p class=''><b> Position:</b>" + PositionType[adv.PositionType] + " </p>"
        + "</div>"
        + "</div>"
        + "<div class='row'>"
        + "<div class='col-xs-12 col-md-3'>"
        + "<p class=''><b> Vacancy:</b>" + adv.Vacancy + " </p>"
        + "</div>"
        + "<div class='col-xs-12 col-md-3'>"
        + "<p class=''><b> Skills:</b>" + adv.Skills.join() + " </p>"
        + "</div>"
        + "<div class='col-xs-12 col-md-3'>"
       
        + "</div>"
        + "<div class='col-xs-12 col-md-3'>"
       
        + "</div>"
        + "</div>"
        +"</div>"
        + "</div>"
        + "</div>"
        + "<div class='col-xs-2 col-md-2'>"
        + "<h5>"
        + adv.PostedDate
        +"<br />" +City[adv.City]
        + "</h5>"
        + "</div"
        + "</div>"
        + "</li>";		
}

function GetRealEStateAdvertise(adv:RealEstate):string
{
		return "<li class='list-group-item'>"
        + "<div class='row'>"
        + "<div class='col-xs-6 col-md-1'>"
        + " <img src='" + GetDefaultImage(adv.Images).URL + "' alt='mobile image' height='80' width='80'>"
        + "<span class='badge'>Price:" + adv.Price + "</span>"
        + "</div>"
        + "<div class='col-xs-8 col-md-9'>"
        + "<div class='row'>"
        + "<div class='row'>"
        + "<div class='col-xs-12 col-md-12'>"
        + "<h3>"
        + adv.Subject
        + "</h3>"
        + "<h5><b> Contacts:</b>" + adv.ContactNo.join() + "</h5>"
        + "<p><a class='ViewDetail' "
         + "onclick=ViewDetail('" + adv.Id + "') "
        + "href='#'>View details &raquo;</a></p>"
        + "</div> "
        + "</div> "
        + "<div class='row' style='display:none;' id='"+adv.Id+"'>"
        + "<div class='row'>"
        + "<div class='col-xs-12 col-md-12'>"
        + "<p class=''>" + adv.Description + "</p>"
        + "</div> "
        + "</div>"
        + "<div class='row'>"
        + "<div class='col-xs-12 col-md-3'>"
        + "<p class=''><b>Furnished:</b>" + isYesOrNo(adv.Furnished) + " </p>"
        + "</div>"
        + "<div class='col-xs-12 col-md-3'>"
        + "<p class=''> <b>Rooms:</b>" + adv.Rooms + " </p>"
        + "</div>"
        + "<div class='col-xs-12 col-md-3'>"
        + "<p class=''><b> Square Feet:</b>" +adv.SquareFeet + " </p>"
        + "</div>"
        + "<div class='col-xs-12 col-md-3'>"
        
        + "</div>"
        + "</div>"
        + "<div class='row'>"
        + "<div class='col-xs-12 col-md-3'>"
        
        + "</div>"
        + "<div class='col-xs-12 col-md-3'>"
        
        + "</div>"
        + "<div class='col-xs-12 col-md-3'>"
       
        + "</div>"
        + "<div class='col-xs-12 col-md-3'>"
       
        + "</div>"
        + "</div>"
        +"</div>"
        + "</div>"
        + "</div>"
        + "<div class='col-xs-2 col-md-2'>"
        + "<h5>"
        + adv.PostedDate
        +"<br />" +City[adv.City]
        + "</h5>"
        + "</div"
        + "</div>"
        + "</li>";		

}

function isYesOrNo(val:boolean):string
{
	if(val==true)
		return "Yes";
	else
		return "No";
}

function btlDisplayAdds(val:string)
{
    let data=new Data();
    let adds:any=[];
    document.getElementById(val).innerHTML="";

    switch (val) {
        case 'mobiles':
        {       
            let getMobiles=data.GetMobiles();
            for (let entry of getMobiles) {
                adds.push(entry);
            }       
            break;
        }
        case 'bikes':
        {       
            let getBikes=data.GetBikes();
            for (let entry of getBikes) {
                adds.push(entry);
            }       
            break;
        }
        case 'cars':
        {       
            let getCars=data.GetCars();
            for (let entry of getCars) {
                adds.push(entry);
            }       
            break;
        }
        case 'jobs':
        {       
            let getJobs=data.GetJobs();
            for (let entry of getJobs) {
                adds.push(entry);
            }       
            break;
        }
        case 'realEstates':
        {       
            let getRealEStates=data.GetRealEstates();
            for (let entry of getRealEStates) {
                adds.push(entry);
            }       
            break;
        }
        case 'all':
        {    
            let getMobiles=data.GetMobiles();
            for (let entry of getMobiles) {
                entry.Id="ALL-"+entry.Id;
                adds.push(entry);
            }
            
            let getBikes=data.GetBikes();
            for (let entry of getBikes) {
                entry.Id="ALL-"+entry.Id;
                adds.push(entry);
            }

            let getCars=data.GetCars();
            for (let entry of getCars) {
                entry.Id="ALL-"+entry.Id;
                adds.push(entry);
            }

            let getJobs=data.GetJobs();
            for (let entry of getJobs) {
                entry.Id="ALL-"+entry.Id;
                adds.push(entry);
            }

            let getRealStates=data.GetRealEstates();
            for (let entry of getRealStates) {
                entry.Id="ALL-"+entry.Id;
                adds.push(entry);
            }       
            break;
        }
        default:
            break;
    }

    for (let entry of adds) {      
    document.getElementById(val).innerHTML = document.getElementById(val).innerHTML
                                                + GetAdvertise(entry);
    }
}

function ViewDetail(val:string)
{
	let e = <any>document.getElementById(val);
	//$(e).slideToggle();
    if (e.style.display == 'block' || e.style.display=='') e.style.display = 'none';
    else e.style.display = 'block';

    e.scrollIntoView();
}

/* End */



/***** Sample Data *****/

function GetMobile1():Mobile
{
	let mobile=new Mobile();
	let contacts=[];
	let images=[];
	
	let img1=new Images();
	img1.IsDefault=true;
	img1.URL="Images/ADV_MBL_01_01.jpg";
	/*
	let img2=new Images();
	img2.IsDefault=true;
	img2.URL="ADV_MBL_01_01.jpg";
	
	let img3=new Images();
	img3.IsDefault=false;
	img3.URL="ADV_MBL_01_01.jpg";
	*/
	images.push(img1);
	//images.push(img2);
	//images.push(img3);
	
	contacts.push("0346-9685321");
	//contacts.push("0333-8527456");
	
	mobile.Id="ADV_MBL_01";
	mobile.Subject="Samsung galaxy e5 with green tech warrenty";
	mobile.Description="Samsung galaxy e5 black color for sale in scratch less condition with 2months green tech Warrenty till October set is with box and genuine charger and Warrenty and accidental card anyone intrested contact";
	mobile.Warranty=WarrantyPeriod.SixMonth;
	mobile.InternalMemory="16GB";
	mobile.DuelSim=true;
	mobile.MemoryCardSlot=true;
	mobile.OS=OS.Android;
	mobile.Brand="Samsung";
	mobile.Model="E5";
	mobile.Year=2016;
	mobile.Condition=Condition.Used;
	mobile.Color=Color.Black;
	mobile.Price=18000;
	mobile.Category=Category.Mobile;
	mobile.City=City.Karachi;
	mobile.ContactNo=contacts;
	mobile.Images=images;
	mobile.PostedDate="28-july-2016"
	return mobile;
}


function GetMobile2():Mobile
{
	let mobile=new Mobile();
	let contacts=[];
	let images=[];
	
	let img1=new Images();
	img1.IsDefault=true;
	img1.URL="Images/ADV_MBL_02_01.jpg";
	
	images.push(img1);
	//images.push(img2);
	//images.push(img3);
	
	contacts.push("0333-9638521");
	
	mobile.Id="ADV_MBL_02";
	mobile.Subject="Motorola droid turbo 3gb Ram 32gb Rom 21mp cam";
	mobile.Description="Moto Droid Turbo 10/10 Condition with orignal handsfree and charger 3gb Ram 32gb Rom 21mp Cam with dual flash light 3900 mah powerful battery no exchange";
	mobile.Warranty=WarrantyPeriod.None;
	mobile.InternalMemory="32GB";
	mobile.DuelSim=true;
	mobile.MemoryCardSlot=true;
	mobile.OS=OS.Android;
	mobile.Brand="Motorola";
	mobile.Model="Droid Turbo";
	mobile.Year=2015;
	mobile.Condition=Condition.Used;
	mobile.Color=Color.Black;
	mobile.Price=20000;
	mobile.Category=Category.Mobile;
	mobile.City=City.Karachi;
	mobile.ContactNo=contacts;
	mobile.Images=images;
	mobile.PostedDate="30-july-2016"
	return mobile;
}


function GetBike1():Bike
{
    let bike=new Bike();
	let contacts=[];
	let images=[];
	
	let img1=new Images();
	img1.IsDefault=true;
	img1.URL="Images/ADV_BIK_01_01.jpg";

	images.push(img1);
	
	contacts.push("0300-9631112");
	
	bike.Id="ADV_BIK_01";
	bike.Subject="I wants to sell honda cd 70 with Hyderabad registration 3000 km drive";
	bike.Description="I wants to sell my honda bcz i wants to buy 125";
	bike.Warranty=WarrantyPeriod.None;
	bike.Brand="Honda";
	bike.Model="CD-70";
	bike.Year=2016;
	bike.Condition=Condition.Used;
	bike.Color=Color.Red;
	bike.Price=65000;
	bike.Category=Category.Bike;
	bike.City=City.Hyderabad;
	bike.ContactNo=contacts;
	bike.Images=images;
	bike.PostedDate="01-june-2016";
    bike.FuelType=Fuel.Petrol;
    bike.KMsDriven=3000;
    bike.NumberPlate="HYD0213"
	return bike;
}


function GetBike2():Bike
{
    let bike=new Bike();
	let contacts=[];
	let images=[];
	
	let img1=new Images();
	img1.IsDefault=true;
	img1.URL="Images/ADV_BIK_02_01.jpg";

	images.push(img1);
	
	contacts.push("0312-9821112");
	
	bike.Id="ADV_BIK_02";
	bike.Subject="Honda 125 genuine";
	bike.Description="Model 2009 in excellent condition with both new tyres. orignal tanky tappay nd meter also available";
	bike.Warranty=WarrantyPeriod.None;
	bike.Brand="Honda";
	bike.Model="CD-70";
	bike.Year=2009;
	bike.Condition=Condition.Used;
	bike.Color=Color.Red;
	bike.Price=73000;
	bike.Category=Category.Bike;
	bike.City=City.Karachi;
	bike.ContactNo=contacts;
	bike.Images=images;
	bike.PostedDate="01-March-2016";
    bike.FuelType=Fuel.Petrol;
    bike.KMsDriven=7500;
    bike.NumberPlate="KHI2009"
	return bike;
}

function GetCar1():Car
{
    let car=new Car();
	let contacts=[];
	let images=[];
	
	let img1=new Images();
	img1.IsDefault=true;
	img1.URL="Images/ADV_CAR_01_01.jpg";

	images.push(img1);
	
	contacts.push("0312-9821112");
	
    car.Id="ADV_CAR_01";
	car.Subject="Toyota Corola xli/ 2009 Just New Car./1300cc";
	car.Description="I want a sale my toyta carola xli black colour just like new brand 2009 xli convert gli lcd back camra excilant condetion";
	car.Warranty=WarrantyPeriod.None;
	car.Brand="Toyota";
	car.Model="Corola xli";
	car.Year=2009;
	car.Condition=Condition.Used;
	car.Color=Color.Black;
	car.Price=1150000;
	car.Category=Category.Car;
	car.City=City.Karachi;
	car.ContactNo=contacts;
	car.Images=images;
	car.PostedDate="12-March-2016";
    car.FuelType=Fuel.CNG;
    car.KMsDriven=120000;
    car.NumberPlate="KHI2009"
    car.TransmissionType=Transmission.Automatic;
	return car;
}

function GetCar2():Car
{
    let car=new Car();
	let contacts=[];
	let images=[];
	
	let img1=new Images();
	img1.IsDefault=true;
	img1.URL="Images/ADV_CAR_02_01.jpg";

	images.push(img1);
	
	contacts.push("0300-9996663");
	
	car.Id="ADV_CAR_02";
	car.Subject="COURE CX ECO Model 2007 Blue Matellic Colour Excellent Condition";
	car.Description="Daihatsu COURE CX ECO;;;Blue Matellic Colour;;;Model 2007;;;ANDER Se FULL ORIGINAL;;;BAHER Se BONAT & ROOF SHOWER;;;Only Scratches;;;NO ACCIDENT;;;Factroy Fitted AC & CNG;;;AC Working;;100 % BEHTREEN ENGINE;;;CNG & PETROL Working;;Brand New Rims;;;New Tyres;;New Battery;;DEKHNEY OR CHALNEY Mey Behtreen;;Complete Retutn File;;;Cplc Clear;;EXCELLENT MINT CONDITION;;;Adress;;;Ayesha Manzil Near Tahir Villa";
	car.Warranty=WarrantyPeriod.None;
	car.Brand="Toyota";
	car.Model="Coure";
	car.Year=2007;
	car.Condition=Condition.Used;
	car.Color=Color.Green;
	car.Price=525000;
	car.Category=Category.Car;
	car.City=City.Karachi;
	car.ContactNo=contacts;
	car.Images=images;
	car.PostedDate="12-March-2016";
    car.FuelType=Fuel.CNG;
    car.KMsDriven=10200;
    car.NumberPlate="KHI2007"
    car.TransmissionType=Transmission.Manual;
	return car;
}


function GetJob1():Job
{
    let job=new Job();
	let contacts=[];
    let skills=[];
	let images=[];
	
	let img1=new Images();
	img1.IsDefault=true;
	img1.URL="Images/ADV_JOB_01_01.jpg";

	images.push(img1);
	
	contacts.push("0313-9996663");

    skills.push("");
	
    job.Id="ADV_JOB_01";
	job.Subject="Typing Jobs For(Male/Female)";
	job.Description="We are a team of online work and providing different kind of work and projects throughout pakistan. we have got a number of active users who are doing there work from home and getting paid on weekly basis. warm welcome to our team. for more info visit easydatalinks.net and skype id easydataworks";
	
	job.Category=Category.Job;
	job.City=City.Karachi;
	job.ContactNo=contacts;
	job.Images=images;
	job.PostedDate="03-May-2016";
    job.Email="abcd@gmail.com";
    job.JobType=JobType.IT;
    job.Experience="1 Year";
    job.PositionType=PositionType.FullTime;
    job.Qualification="Intermediate";
    job.Salary="20000";
    job.Skills=skills;
    job.Vacancy=5;
	return job;
}


function GetJob2():Job
{
    let job=new Job();
	let contacts=[];
    let skills=[];
	let images=[];
	
	let img1=new Images();
	img1.IsDefault=true;
	img1.URL="Images/ADV_JOB_02_01.jpg";

	images.push(img1);
	
	contacts.push("021-1116663");

    skills.push("");
	
    job.Id="ADV_JOB_02";
	job.Subject="Earn Rs. 15000 to Rs. 30000 with simple home based jobs";
	job.Description="4. we are a team of online work and providing different kind of work and projects throughout pakistan. we have got a number of active users who are doing there work from home and getting paid on weekly basis. warm welcome to our team. for more info visit easydatalinks.net and skype id easydataworks";
	
	job.Category=Category.Job;
	job.City=City.Karachi;
	job.ContactNo=contacts;
	job.Images=images;
	job.PostedDate="21-May-2016";
    job.Email="abcd@gmail.com";
    job.JobType=JobType.IT;
    job.Experience="2 Year";
    job.PositionType=PositionType.PartTime;
    job.Qualification="Intermediate";
    job.Salary="30000";
    job.Skills=skills;
    job.Vacancy=2;
	return job;
}

function GetRealEstate1():RealEstate
{
    let realEstate=new RealEstate();
	let contacts=[];
    let skills=[];
	let images=[];
	
	let img1=new Images();
	img1.IsDefault=true;
	img1.URL="Images/ADV_RST_01_01.jpg";

	images.push(img1);
	
	contacts.push("021-6333215");

    skills.push("");
	
    realEstate.Id="ADV_RST_01";
	realEstate.Subject="Blk 4 Gulshan Regency Appartment 3bed Dd";
	realEstate.Description="Description";
	
	realEstate.Category=Category.RealEstate;
	realEstate.City=City.Karachi;
	realEstate.ContactNo=contacts;
	realEstate.Images=images;
	realEstate.PostedDate="21-May-2016";
    realEstate.Furnished=true;
    realEstate.Rooms=4;
    realEstate.Price=7500000;
    realEstate.SquareFeet="1,400 ft2";
	return realEstate;
}

function GetRealEstate2():RealEstate
{
    let realEstate=new RealEstate();
	let contacts=[];
    let skills=[];
	let images=[];
	
	let img1=new Images();
	img1.IsDefault=true;
	img1.URL="Images/ADV_RST_02_01.jpg";

	images.push(img1);
	
	contacts.push("021-6333215");

    skills.push("");
	
    realEstate.Id="ADV_RST_02";
	realEstate.Subject="Gulshan iqbal blk 11 flat for sell 2bed dd and 2bed louch";
	realEstate.Description="Description";
	
	realEstate.Category=Category.RealEstate;
	realEstate.City=City.Karachi;
	realEstate.ContactNo=contacts;
	realEstate.Images=images;
	realEstate.PostedDate="01-April-2016";
    realEstate.Furnished=true;
    realEstate.Rooms=2;
    realEstate.Price=3000000;
    realEstate.SquareFeet="700 ft2";
	return realEstate;
}