var rentals = []

x_1 = {
    headline: "1 Beautiful 2 bedroom apartment",
    numSleeps: 4,
    numBedrooms: 2,
    numBathrooms: 1,
    pricePerNight: 1000,
    city: "Toronto",
    province: "Ontario",
    imageUrls: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=958&q=80",
    featuredRental: false,
}

x_2 = {
    headline: "2 Beautiful 2 bedroom apartment",
    numSleeps: 4,
    numBedrooms: 2,
    numBathrooms: 1,
    pricePerNight: 1000,
    city: "Toronto",
    province: "Ontario",
    imageUrls: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=958&q=80",
    featuredRental: false,
}

x_3 = {
    headline: "3 Beautiful 2 bedroom apartment",
    numSleeps: 4,
    numBedrooms: 2,
    numBathrooms: 1,
    pricePerNight: 1000,
    city: "Mississauga",
    province: "Ontario",
    imageUrls: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=958&q=80",
    featuredRental: false,
}

x_4 = {
    headline: "4 Beautiful 2 bedroom apartment",
    numSleeps: 4,
    numBedrooms: 2,
    numBathrooms: 1,
    pricePerNight: 1000,
    city: "Toronto",
    province: "Ontario",
    imageUrls: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=958&q=80",
    featuredRental: true,
}

x_5 = {
    headline: "5 Beautiful 2 bedroom apartment",
    numSleeps: 4,
    numBedrooms: 2,
    numBathrooms: 1,
    pricePerNight: 1000,
    city: "Toronto",
    province: "Ontario",
    imageUrls: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=958&q=80",
    featuredRental: true,

}

x_6 = {
    headline: "6 Beautiful 2 bedroom apartment",
    numSleeps: 4,
    numBedrooms: 2,
    numBathrooms: 1,
    pricePerNight: 1000,
    city: "Secunda",
    province: "provincial",
    imageUrls: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=958&q=80",
    featuredRental: true,
}
x_7 = {
    headline: "7 Beautiful 2 bedroom apartment",
    numSleeps: 4,
    numBedrooms: 2,
    numBathrooms: 1,
    pricePerNight: 1000,
    city: "Secunda",
    province: "provincial",
    imageUrls: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=958&q=80",
    featuredRental: true,
}
x_8 = {
    headline: "7 Beautiful 2 bedroom apartment",
    numSleeps: 4,
    numBedrooms: 2,
    numBathrooms: 1,
    pricePerNight: 1000,
    city: "Secunda",
    province: "provincial",
    imageUrls: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=958&q=80",
    featuredRental: true,
}

rentals.push(x_1);
rentals.push(x_2);
rentals.push(x_3);
rentals.push(x_4);
rentals.push(x_5);
rentals.push(x_6);
rentals.push(x_7);
rentals.push(x_8);


exports.all_data = function() { 
  var temp = [];
  rentals.forEach(function(rental) {
    temp.push(rental);
  }); 
  return temp;
}

exports.getFeaturedRentals = function() { 
    var featuredRentals = [];
    rentals.forEach(function(rental) {
      if (rental.featuredRental) featuredRentals.push(rental);
    }); 
    return featuredRentals;
  }


  
exports.getRentalsByCityAndProvince = function(city, province) { 
    var rentalsInCityAndProvince = [];
    rentals.forEach(function(rental) {
      if (rental.city === city && rental.province === province) {
        rentalsInCityAndProvince.push(rental);
      }
    }); 
    return rentalsInCityAndProvince;
}