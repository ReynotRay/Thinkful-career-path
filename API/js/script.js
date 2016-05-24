$ch = curl_init("http://api.census.gov/data/2014/acs1/variables.json");

curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HEADER, 0);

$result = curl_exec($ch);
curl_close($ch);

// $.ajax({
//   url: "http://api.census.gov/data/2014/acs1/variables.json",
//   context: document.body
// }).done(function() {
//   $( this ).addClass( "done" );
// });