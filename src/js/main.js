import $ from 'jquery'
$.ajax({
  url: 'https://randomuser.me/api/?results=12',
  dataType: 'json',
  success: getEmployees
});

function getEmployees (data)  {
  console.log(data);
  data.results.forEach(function(object)  {
    var image = object.picture.large;
    var firstName = object.name.first;
    var lastName = object.name.last;
    var email = object.email;
    var street = object.location.street;
    var city = object.location.city;
    var state = object.location.state;
    var postal = object.location.postcode;
    var phone = object.phone;
    //social = object.???
    $(".container").append(`
        <div class="employeeBox">
          <img class ="image" src="${image}"/>
          <div class="name">${firstName} ${lastName}</div>
          <div class="email">${email}</div>
          <div class="street">${street}</div>
          <div class="city-zip">${city}, ${state}, ${postal}</div>
          <div class="phone">${phone}</div>
        </div>
    `);
  });
}
