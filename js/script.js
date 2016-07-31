var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Advertisement = (function () {
    function Advertisement() {
    }
    return Advertisement;
}());
var GenSpec = (function (_super) {
    __extends(GenSpec, _super);
    function GenSpec() {
        _super.apply(this, arguments);
    }
    return GenSpec;
}(Advertisement));
var Vehicle = (function (_super) {
    __extends(Vehicle, _super);
    function Vehicle() {
        _super.apply(this, arguments);
    }
    return Vehicle;
}(GenSpec));
var Car = (function (_super) {
    __extends(Car, _super);
    function Car() {
        _super.apply(this, arguments);
    }
    return Car;
}(Vehicle));
var Bike = (function (_super) {
    __extends(Bike, _super);
    function Bike() {
        _super.apply(this, arguments);
    }
    return Bike;
}(Vehicle));
var Mobile = (function (_super) {
    __extends(Mobile, _super);
    function Mobile() {
        _super.apply(this, arguments);
    }
    return Mobile;
}(GenSpec));
var RealEstate = (function (_super) {
    __extends(RealEstate, _super);
    function RealEstate() {
        _super.apply(this, arguments);
    }
    return RealEstate;
}(Advertisement));
var Job = (function (_super) {
    __extends(Job, _super);
    function Job() {
        _super.apply(this, arguments);
    }
    return Job;
}(Advertisement));
var Images = (function () {
    function Images() {
    }
    return Images;
}());
var Tyre = (function () {
    function Tyre() {
    }
    return Tyre;
}());
var Data = (function () {
    function Data() {
    }
    Data.prototype.GetCars = function () {
        var cars = [];
        cars.push(GetCar1());
        cars.push(GetCar2());
        return cars;
    };
    Data.prototype.GetMobiles = function () {
        var mobiles = [];
        mobiles.push(GetMobile1());
        mobiles.push(GetMobile2());
        return mobiles;
    };
    Data.prototype.GetBikes = function () {
        var bikes = [];
        bikes.push(GetBike1());
        bikes.push(GetBike2());
        return bikes;
    };
    Data.prototype.GetRealEstates = function () {
        var realEstates = [];
        realEstates.push(GetRealEstate1());
        realEstates.push(GetRealEstate2());
        return realEstates;
    };
    Data.prototype.GetJobs = function () {
        var jobs = [];
        jobs.push(GetJob1());
        jobs.push(GetJob2());
        return jobs;
    };
    return Data;
}());
/******Enumeration *******/
var OS;
(function (OS) {
    OS[OS["Android"] = 0] = "Android";
    OS[OS["IOS"] = 1] = "IOS";
    OS[OS["Windows"] = 2] = "Windows";
})(OS || (OS = {}));
var WarrantyPeriod;
(function (WarrantyPeriod) {
    WarrantyPeriod[WarrantyPeriod["None"] = 0] = "None";
    WarrantyPeriod[WarrantyPeriod["OneMonth"] = 1] = "OneMonth";
    WarrantyPeriod[WarrantyPeriod["TwoMonth"] = 2] = "TwoMonth";
    WarrantyPeriod[WarrantyPeriod["ThreeMonth"] = 3] = "ThreeMonth";
    WarrantyPeriod[WarrantyPeriod["FourMonth"] = 4] = "FourMonth";
    WarrantyPeriod[WarrantyPeriod["FiveMonth"] = 5] = "FiveMonth";
    WarrantyPeriod[WarrantyPeriod["SixMonth"] = 6] = "SixMonth";
    WarrantyPeriod[WarrantyPeriod["SevenMonth"] = 7] = "SevenMonth";
    WarrantyPeriod[WarrantyPeriod["EightMonth"] = 8] = "EightMonth";
    WarrantyPeriod[WarrantyPeriod["NineMonth"] = 9] = "NineMonth";
    WarrantyPeriod[WarrantyPeriod["TenMonth"] = 10] = "TenMonth";
    WarrantyPeriod[WarrantyPeriod["OneYear"] = 11] = "OneYear";
    WarrantyPeriod[WarrantyPeriod["TwoYear"] = 12] = "TwoYear";
    WarrantyPeriod[WarrantyPeriod["ThreeYear"] = 13] = "ThreeYear";
    WarrantyPeriod[WarrantyPeriod["FourYear"] = 14] = "FourYear";
    WarrantyPeriod[WarrantyPeriod["FiveYear"] = 15] = "FiveYear";
    WarrantyPeriod[WarrantyPeriod["GreaterThanFiveMonth"] = 16] = "GreaterThanFiveMonth";
})(WarrantyPeriod || (WarrantyPeriod = {}));
var JobType;
(function (JobType) {
    JobType[JobType["IT"] = 0] = "IT";
    JobType[JobType["Marketing"] = 1] = "Marketing";
    JobType[JobType["HumanResource"] = 2] = "HumanResource";
    JobType[JobType["Eduction"] = 3] = "Eduction";
    JobType[JobType["Manufacturing"] = 4] = "Manufacturing";
    JobType[JobType["Sales"] = 5] = "Sales";
})(JobType || (JobType = {}));
var PositionType;
(function (PositionType) {
    PositionType[PositionType["PartTime"] = 0] = "PartTime";
    PositionType[PositionType["FullTime"] = 1] = "FullTime";
})(PositionType || (PositionType = {}));
var Color;
(function (Color) {
    Color[Color["Green"] = 0] = "Green";
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Black"] = 2] = "Black";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var TyreType;
(function (TyreType) {
    TyreType[TyreType["Simple"] = 0] = "Simple";
    TyreType[TyreType["TubeLess"] = 1] = "TubeLess";
})(TyreType || (TyreType = {}));
var Transmission;
(function (Transmission) {
    Transmission[Transmission["Manual"] = 0] = "Manual";
    Transmission[Transmission["Automatic"] = 1] = "Automatic";
})(Transmission || (Transmission = {}));
var Condition;
(function (Condition) {
    Condition[Condition["New"] = 0] = "New";
    Condition[Condition["Used"] = 1] = "Used";
})(Condition || (Condition = {}));
var Fuel;
(function (Fuel) {
    Fuel[Fuel["Diesel"] = 0] = "Diesel";
    Fuel[Fuel["Petrol"] = 1] = "Petrol";
    Fuel[Fuel["CNG"] = 2] = "CNG";
    Fuel[Fuel["Other"] = 3] = "Other";
})(Fuel || (Fuel = {}));
var Category;
(function (Category) {
    Category[Category["Mobile"] = 0] = "Mobile";
    Category[Category["Bike"] = 1] = "Bike";
    Category[Category["Car"] = 2] = "Car";
    Category[Category["Job"] = 3] = "Job";
    Category[Category["RealEstate"] = 4] = "RealEstate";
})(Category || (Category = {}));
var City;
(function (City) {
    City[City["Karachi"] = 0] = "Karachi";
    City[City["Hyderabad"] = 1] = "Hyderabad";
    City[City["Multan"] = 2] = "Multan";
    City[City["Lahore"] = 3] = "Lahore";
})(City || (City = {}));
/*******END ******/
/*** Functions ***/
function GetDefaultImage(imgs) {
    var img = new Images();
    var imgCount = 0;
    for (var _i = 0, imgs_1 = imgs; _i < imgs_1.length; _i++) {
        var entry = imgs_1[_i];
        imgCount++;
        if (entry.IsDefault) {
            img = entry;
            break;
        }
        if (imgCount == imgs.length && !entry.IsDefault) {
            img = entry;
            break;
        }
    }
    return img;
}
function GetAdvertise(adds) {
    var txt = "";
    switch (adds.Category) {
        case Category.Mobile:
            {
                txt = GetMobileAdvertise(adds);
                break;
            }
        case Category.Car:
            {
                txt = GetCarAdvertise(adds);
                break;
            }
        case Category.Bike:
            {
                txt = GetBikeAdvertise(adds);
                break;
            }
        case Category.Job:
            {
                txt = GetJobAdvertise(adds);
                break;
            }
        case Category.RealEstate:
            {
                txt = GetRealEStateAdvertise(adds);
                break;
            }
        default:
            break;
    }
    return txt;
}
/**** Advertisement Templates ****/
function GetMobileAdvertise(adv) {
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
        + "<div class='row' style='display:none;' id='" + adv.Id + "'>"
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
        + "</div>"
        + "</div>"
        + "</div>"
        + "<div class='col-xs-2 col-md-2'>"
        + "<h5>"
        + adv.PostedDate
        + "<br />" + City[adv.City]
        + "</h5>"
        + "</div"
        + "</div>"
        + "</li>";
}
function GetBikeAdvertise(adv) {
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
        + "<div class='row' style='display:none;' id='" + adv.Id + "'>"
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
        + "</div>"
        + "</div>"
        + "</div>"
        + "<div class='col-xs-2 col-md-2'>"
        + "<h5>"
        + adv.PostedDate
        + "<br />" + City[adv.City]
        + "</h5>"
        + "</div"
        + "</div>"
        + "</li>";
}
function GetCarAdvertise(adv) {
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
        + "<div class='row' style='display:none;' id='" + adv.Id + "'>"
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
        + "</div>"
        + "</div>"
        + "</div>"
        + "<div class='col-xs-2 col-md-2'>"
        + "<h5>"
        + adv.PostedDate
        + "<br />" + City[adv.City]
        + "</h5>"
        + "</div"
        + "</div>"
        + "</li>";
}
function GetJobAdvertise(adv) {
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
        + "<div class='row' style='display:none;' id='" + adv.Id + "'>"
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
        + "<p class=''><b> Job Type:</b>" + JobType[adv.JobType] + " </p>"
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
        + "</div>"
        + "</div>"
        + "</div>"
        + "<div class='col-xs-2 col-md-2'>"
        + "<h5>"
        + adv.PostedDate
        + "<br />" + City[adv.City]
        + "</h5>"
        + "</div"
        + "</div>"
        + "</li>";
}
function GetRealEStateAdvertise(adv) {
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
        + "<div class='row' style='display:none;' id='" + adv.Id + "'>"
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
        + "<p class=''><b> Square Feet:</b>" + adv.SquareFeet + " </p>"
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
        + "</div>"
        + "</div>"
        + "</div>"
        + "<div class='col-xs-2 col-md-2'>"
        + "<h5>"
        + adv.PostedDate
        + "<br />" + City[adv.City]
        + "</h5>"
        + "</div"
        + "</div>"
        + "</li>";
}
function isYesOrNo(val) {
    if (val == true)
        return "Yes";
    else
        return "No";
}
function btlDisplayAdds(val) {
    var data = new Data();
    var adds = [];
    document.getElementById(val).innerHTML = "";
    switch (val) {
        case 'mobiles':
            {
                var getMobiles = data.GetMobiles();
                for (var _i = 0, getMobiles_1 = getMobiles; _i < getMobiles_1.length; _i++) {
                    var entry = getMobiles_1[_i];
                    adds.push(entry);
                }
                break;
            }
        case 'bikes':
            {
                var getBikes = data.GetBikes();
                for (var _a = 0, getBikes_1 = getBikes; _a < getBikes_1.length; _a++) {
                    var entry = getBikes_1[_a];
                    adds.push(entry);
                }
                break;
            }
        case 'cars':
            {
                var getCars = data.GetCars();
                for (var _b = 0, getCars_1 = getCars; _b < getCars_1.length; _b++) {
                    var entry = getCars_1[_b];
                    adds.push(entry);
                }
                break;
            }
        case 'jobs':
            {
                var getJobs = data.GetJobs();
                for (var _c = 0, getJobs_1 = getJobs; _c < getJobs_1.length; _c++) {
                    var entry = getJobs_1[_c];
                    adds.push(entry);
                }
                break;
            }
        case 'realEstates':
            {
                var getRealEStates = data.GetRealEstates();
                for (var _d = 0, getRealEStates_1 = getRealEStates; _d < getRealEStates_1.length; _d++) {
                    var entry = getRealEStates_1[_d];
                    adds.push(entry);
                }
                break;
            }
        case 'all':
            {
                var getMobiles = data.GetMobiles();
                for (var _e = 0, getMobiles_2 = getMobiles; _e < getMobiles_2.length; _e++) {
                    var entry = getMobiles_2[_e];
                    entry.Id = "ALL-" + entry.Id;
                    adds.push(entry);
                }
                var getBikes = data.GetBikes();
                for (var _f = 0, getBikes_2 = getBikes; _f < getBikes_2.length; _f++) {
                    var entry = getBikes_2[_f];
                    entry.Id = "ALL-" + entry.Id;
                    adds.push(entry);
                }
                var getCars = data.GetCars();
                for (var _g = 0, getCars_2 = getCars; _g < getCars_2.length; _g++) {
                    var entry = getCars_2[_g];
                    entry.Id = "ALL-" + entry.Id;
                    adds.push(entry);
                }
                var getJobs = data.GetJobs();
                for (var _h = 0, getJobs_2 = getJobs; _h < getJobs_2.length; _h++) {
                    var entry = getJobs_2[_h];
                    entry.Id = "ALL-" + entry.Id;
                    adds.push(entry);
                }
                var getRealStates = data.GetRealEstates();
                for (var _j = 0, getRealStates_1 = getRealStates; _j < getRealStates_1.length; _j++) {
                    var entry = getRealStates_1[_j];
                    entry.Id = "ALL-" + entry.Id;
                    adds.push(entry);
                }
                break;
            }
        default:
            break;
    }
    for (var _k = 0, adds_1 = adds; _k < adds_1.length; _k++) {
        var entry = adds_1[_k];
        document.getElementById(val).innerHTML = document.getElementById(val).innerHTML
            + GetAdvertise(entry);
    }
}
function ViewDetail(val) {
    var e = document.getElementById(val);
    $(e).slideToggle();
    /*if (e.style.display == 'block' || e.style.display == '')
        e.style.display = 'none';
    else
        e.style.display = 'block';
    e.scrollIntoView();*/
}
/* End */
/***** Sample Data *****/
function GetMobile1() {
    var mobile = new Mobile();
    var contacts = [];
    var images = [];
    var img1 = new Images();
    img1.IsDefault = true;
    img1.URL = "Images/ADV_MBL_01_01.jpg";
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
    mobile.Id = "ADV_MBL_01";
    mobile.Subject = "Samsung galaxy e5 with green tech warrenty";
    mobile.Description = "Samsung galaxy e5 black color for sale in scratch less condition with 2months green tech Warrenty till October set is with box and genuine charger and Warrenty and accidental card anyone intrested contact";
    mobile.Warranty = WarrantyPeriod.SixMonth;
    mobile.InternalMemory = "16GB";
    mobile.DuelSim = true;
    mobile.MemoryCardSlot = true;
    mobile.OS = OS.Android;
    mobile.Brand = "Samsung";
    mobile.Model = "E5";
    mobile.Year = 2016;
    mobile.Condition = Condition.Used;
    mobile.Color = Color.Black;
    mobile.Price = 18000;
    mobile.Category = Category.Mobile;
    mobile.City = City.Karachi;
    mobile.ContactNo = contacts;
    mobile.Images = images;
    mobile.PostedDate = "28-july-2016";
    return mobile;
}
function GetMobile2() {
    var mobile = new Mobile();
    var contacts = [];
    var images = [];
    var img1 = new Images();
    img1.IsDefault = true;
    img1.URL = "Images/ADV_MBL_02_01.jpg";
    images.push(img1);
    //images.push(img2);
    //images.push(img3);
    contacts.push("0333-9638521");
    mobile.Id = "ADV_MBL_02";
    mobile.Subject = "Motorola droid turbo 3gb Ram 32gb Rom 21mp cam";
    mobile.Description = "Moto Droid Turbo 10/10 Condition with orignal handsfree and charger 3gb Ram 32gb Rom 21mp Cam with dual flash light 3900 mah powerful battery no exchange";
    mobile.Warranty = WarrantyPeriod.None;
    mobile.InternalMemory = "32GB";
    mobile.DuelSim = true;
    mobile.MemoryCardSlot = true;
    mobile.OS = OS.Android;
    mobile.Brand = "Motorola";
    mobile.Model = "Droid Turbo";
    mobile.Year = 2015;
    mobile.Condition = Condition.Used;
    mobile.Color = Color.Black;
    mobile.Price = 20000;
    mobile.Category = Category.Mobile;
    mobile.City = City.Karachi;
    mobile.ContactNo = contacts;
    mobile.Images = images;
    mobile.PostedDate = "30-july-2016";
    return mobile;
}
function GetBike1() {
    var bike = new Bike();
    var contacts = [];
    var images = [];
    var img1 = new Images();
    img1.IsDefault = true;
    img1.URL = "Images/ADV_BIK_01_01.jpg";
    images.push(img1);
    contacts.push("0300-9631112");
    bike.Id = "ADV_BIK_01";
    bike.Subject = "I wants to sell honda cd 70 with Hyderabad registration 3000 km drive";
    bike.Description = "I wants to sell my honda bcz i wants to buy 125";
    bike.Warranty = WarrantyPeriod.None;
    bike.Brand = "Honda";
    bike.Model = "CD-70";
    bike.Year = 2016;
    bike.Condition = Condition.Used;
    bike.Color = Color.Red;
    bike.Price = 65000;
    bike.Category = Category.Bike;
    bike.City = City.Hyderabad;
    bike.ContactNo = contacts;
    bike.Images = images;
    bike.PostedDate = "01-june-2016";
    bike.FuelType = Fuel.Petrol;
    bike.KMsDriven = 3000;
    bike.NumberPlate = "HYD0213";
    return bike;
}
function GetBike2() {
    var bike = new Bike();
    var contacts = [];
    var images = [];
    var img1 = new Images();
    img1.IsDefault = true;
    img1.URL = "Images/ADV_BIK_02_01.jpg";
    images.push(img1);
    contacts.push("0312-9821112");
    bike.Id = "ADV_BIK_02";
    bike.Subject = "Honda 125 genuine";
    bike.Description = "Model 2009 in excellent condition with both new tyres. orignal tanky tappay nd meter also available";
    bike.Warranty = WarrantyPeriod.None;
    bike.Brand = "Honda";
    bike.Model = "CD-70";
    bike.Year = 2009;
    bike.Condition = Condition.Used;
    bike.Color = Color.Red;
    bike.Price = 73000;
    bike.Category = Category.Bike;
    bike.City = City.Karachi;
    bike.ContactNo = contacts;
    bike.Images = images;
    bike.PostedDate = "01-March-2016";
    bike.FuelType = Fuel.Petrol;
    bike.KMsDriven = 7500;
    bike.NumberPlate = "KHI2009";
    return bike;
}
function GetCar1() {
    var car = new Car();
    var contacts = [];
    var images = [];
    var img1 = new Images();
    img1.IsDefault = true;
    img1.URL = "Images/ADV_CAR_01_01.jpg";
    images.push(img1);
    contacts.push("0312-9821112");
    car.Id = "ADV_CAR_01";
    car.Subject = "Toyota Corola xli/ 2009 Just New Car./1300cc";
    car.Description = "I want a sale my toyta carola xli black colour just like new brand 2009 xli convert gli lcd back camra excilant condetion";
    car.Warranty = WarrantyPeriod.None;
    car.Brand = "Toyota";
    car.Model = "Corola xli";
    car.Year = 2009;
    car.Condition = Condition.Used;
    car.Color = Color.Black;
    car.Price = 1150000;
    car.Category = Category.Car;
    car.City = City.Karachi;
    car.ContactNo = contacts;
    car.Images = images;
    car.PostedDate = "12-March-2016";
    car.FuelType = Fuel.CNG;
    car.KMsDriven = 120000;
    car.NumberPlate = "KHI2009";
    car.TransmissionType = Transmission.Automatic;
    return car;
}
function GetCar2() {
    var car = new Car();
    var contacts = [];
    var images = [];
    var img1 = new Images();
    img1.IsDefault = true;
    img1.URL = "Images/ADV_CAR_02_01.jpg";
    images.push(img1);
    contacts.push("0300-9996663");
    car.Id = "ADV_CAR_02";
    car.Subject = "COURE CX ECO Model 2007 Blue Matellic Colour Excellent Condition";
    car.Description = "Daihatsu COURE CX ECO;;;Blue Matellic Colour;;;Model 2007;;;ANDER Se FULL ORIGINAL;;;BAHER Se BONAT & ROOF SHOWER;;;Only Scratches;;;NO ACCIDENT;;;Factroy Fitted AC & CNG;;;AC Working;;100 % BEHTREEN ENGINE;;;CNG & PETROL Working;;Brand New Rims;;;New Tyres;;New Battery;;DEKHNEY OR CHALNEY Mey Behtreen;;Complete Retutn File;;;Cplc Clear;;EXCELLENT MINT CONDITION;;;Adress;;;Ayesha Manzil Near Tahir Villa";
    car.Warranty = WarrantyPeriod.None;
    car.Brand = "Toyota";
    car.Model = "Coure";
    car.Year = 2007;
    car.Condition = Condition.Used;
    car.Color = Color.Green;
    car.Price = 525000;
    car.Category = Category.Car;
    car.City = City.Karachi;
    car.ContactNo = contacts;
    car.Images = images;
    car.PostedDate = "12-March-2016";
    car.FuelType = Fuel.CNG;
    car.KMsDriven = 10200;
    car.NumberPlate = "KHI2007";
    car.TransmissionType = Transmission.Manual;
    return car;
}
function GetJob1() {
    var job = new Job();
    var contacts = [];
    var skills = [];
    var images = [];
    var img1 = new Images();
    img1.IsDefault = true;
    img1.URL = "Images/ADV_JOB_01_01.jpg";
    images.push(img1);
    contacts.push("0313-9996663");
    skills.push("");
    job.Id = "ADV_JOB_01";
    job.Subject = "Typing Jobs For(Male/Female)";
    job.Description = "We are a team of online work and providing different kind of work and projects throughout pakistan. we have got a number of active users who are doing there work from home and getting paid on weekly basis. warm welcome to our team. for more info visit easydatalinks.net and skype id easydataworks";
    job.Category = Category.Job;
    job.City = City.Karachi;
    job.ContactNo = contacts;
    job.Images = images;
    job.PostedDate = "03-May-2016";
    job.Email = "abcd@gmail.com";
    job.JobType = JobType.IT;
    job.Experience = "1 Year";
    job.PositionType = PositionType.FullTime;
    job.Qualification = "Intermediate";
    job.Salary = "20000";
    job.Skills = skills;
    job.Vacancy = 5;
    return job;
}
function GetJob2() {
    var job = new Job();
    var contacts = [];
    var skills = [];
    var images = [];
    var img1 = new Images();
    img1.IsDefault = true;
    img1.URL = "Images/ADV_JOB_02_01.jpg";
    images.push(img1);
    contacts.push("021-1116663");
    skills.push("");
    job.Id = "ADV_JOB_02";
    job.Subject = "Earn Rs. 15000 to Rs. 30000 with simple home based jobs";
    job.Description = "4. we are a team of online work and providing different kind of work and projects throughout pakistan. we have got a number of active users who are doing there work from home and getting paid on weekly basis. warm welcome to our team. for more info visit easydatalinks.net and skype id easydataworks";
    job.Category = Category.Job;
    job.City = City.Karachi;
    job.ContactNo = contacts;
    job.Images = images;
    job.PostedDate = "21-May-2016";
    job.Email = "abcd@gmail.com";
    job.JobType = JobType.IT;
    job.Experience = "2 Year";
    job.PositionType = PositionType.PartTime;
    job.Qualification = "Intermediate";
    job.Salary = "30000";
    job.Skills = skills;
    job.Vacancy = 2;
    return job;
}
function GetRealEstate1() {
    var realEstate = new RealEstate();
    var contacts = [];
    var skills = [];
    var images = [];
    var img1 = new Images();
    img1.IsDefault = true;
    img1.URL = "Images/ADV_RST_01_01.jpg";
    images.push(img1);
    contacts.push("021-6333215");
    skills.push("");
    realEstate.Id = "ADV_RST_01";
    realEstate.Subject = "Blk 4 Gulshan Regency Appartment 3bed Dd";
    realEstate.Description = "Description";
    realEstate.Category = Category.RealEstate;
    realEstate.City = City.Karachi;
    realEstate.ContactNo = contacts;
    realEstate.Images = images;
    realEstate.PostedDate = "21-May-2016";
    realEstate.Furnished = true;
    realEstate.Rooms = 4;
    realEstate.Price = 7500000;
    realEstate.SquareFeet = "1,400 ft2";
    return realEstate;
}
function GetRealEstate2() {
    var realEstate = new RealEstate();
    var contacts = [];
    var skills = [];
    var images = [];
    var img1 = new Images();
    img1.IsDefault = true;
    img1.URL = "Images/ADV_RST_02_01.jpg";
    images.push(img1);
    contacts.push("021-6333215");
    skills.push("");
    realEstate.Id = "ADV_RST_02";
    realEstate.Subject = "Gulshan iqbal blk 11 flat for sell 2bed dd and 2bed louch";
    realEstate.Description = "Description";
    realEstate.Category = Category.RealEstate;
    realEstate.City = City.Karachi;
    realEstate.ContactNo = contacts;
    realEstate.Images = images;
    realEstate.PostedDate = "01-April-2016";
    realEstate.Furnished = true;
    realEstate.Rooms = 2;
    realEstate.Price = 3000000;
    realEstate.SquareFeet = "700 ft2";
    return realEstate;
}
//# sourceMappingURL=script.js.map