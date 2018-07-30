$(function(){

  // var dinner =  ['Spaghetti', 'Beef and Broccoli', 'Steak', 'Salad', 'Breakfast for Dinner', 'Tacos']
    var dinner = [
      { "id": 1, "name": "Spaghetti" },
      { "id": 2, "name": "Beef and Broccoli" },
      { "id": 3, "name": "Sushi" },
      { "id": 4, "name": "Salad" },
      { "id": 5, "name": "Breakfast for Dinner" },
      { "id": 6, "name": "Tacos" },
      { "id": 7, "name": "Chicken" },
      { "id": 8, "name": "Stanley's Choice =)" },
      { "id": 9, "name": `Josh's Choice T____T` }
    ]

  $(".btn-primary").click(function(){
    var random =  Math.floor(Math.random() * dinner.length);
    // var chosen = dinner.pop(dinner[random]);
    var chosen = dinner[random].name;
    $('#main').empty().append(chosen);

    // if(dinner.id == 9) {
    //   $('#main').css('font-size', '50px')
    // } else {
    //     $('#main').css('font-size', '100px')
    // }

  });

    $('.btn-danger').click(() => {
        $('#main').empty().append("Stanley's the best. AROUUUND. No ONE's ever gonna take him down!").append("<img src='karatekid.jpeg'>")
    });

});
