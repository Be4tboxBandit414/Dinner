$(function() {
  // var dinner =  ['Spaghetti', 'Beef and Broccoli', 'Steak', 'Salad', 'Breakfast for Dinner', 'Tacos']
  var dinner = [
    { id: 1, name: "Highest Team Point Total" },
    { id: 2, name: "Highest Bench Point Total" },
    { id: 3, name: "Highest Special Teams Point Total" },
    { id: 4, name: "Highest RBs Point Total (Starting Lineup)" },
    { id: 5, name: "Highest WRs Point Total (Starting Lineup)" },
    { id: 6, name: "Highest QB Point Total (Starting Lineup)" },
    { id: 7, name: "Highest TE Point Total (Starting Lineup)" }
  ];

  $(".btn-primary").click(function() {
    var random = Math.floor(Math.random() * dinner.length);
    var chosen = dinner[random].name;

    $("#main")
      .empty()
      .append("Randomizing...");

    setTimeout(() => {
      $("#main")
        .empty()
        .append(chosen);
    }, 4000);
  });

  $(".btn-danger").click(() => {
    $("#main")
      .empty()
      .append(
        "Stanley's the best. AROUUUND. No ONE's ever gonna take him down!"
      )
      .append("<img src='karatekid.jpeg'>");
  });
});
