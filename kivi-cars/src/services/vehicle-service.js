import Cars from "../data/cars-brands";
import Trucks from "../data/trucks-brands";
import Motors from "../data/motors-brands"
import Cubes from "../data/cubes";
import Type from "../data/type";
import Fuel from "../data/fuel";
import Transmission from "../data/transmission";
import Drive from "../data/drive";
import Condition from "../data/condition";
import Doors from "../data/doors";
import Year from "../data/year";
import Price from "../data/price";
import HorsePower from "../data/horsepower";
import Kilowats from "../data/kilowats";
import Kilometers from "../data/kilometers";

const vehicleService = (vehicle) => {
        let data1, data2, data3, brands, show;
        if(vehicle === "Auto"){
            show = true;
            data1 = [Fuel, Type]
            data2 = [Price, Year, Kilometers, Cubes, HorsePower, Kilowats]
            data3 = [Transmission, Drive, Condition, Doors]
            brands = Cars.map(brand => {
                return brand})
        }
        else if(vehicle === "Motor"){
            show = false;
            data1 = [Condition]
            data2 = [Price, Year, Kilometers, Cubes, HorsePower, Kilowats]
            data3 = []
            brands = Motors.map(brand => {
                return brand
            })
        }
        else if(vehicle === "Teretno vozilo"){
            show = false;
            data1 = [Condition, Fuel]
            data2 = [Price, Year, Kilometers, Cubes, HorsePower, Kilowats]
            data3 = []
            brands = Trucks.map(brand => {
                return brand
            })
        }

            
    return {"show": show, "brands": brands, "data1": data1, "data2": data2, "data3": data3}
}

export default vehicleService;