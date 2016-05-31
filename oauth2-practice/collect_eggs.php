<?php


include__DIR__.'/vendor/autoload.php';

use Guzzle\Http\Client;

//create our http client (Guzzle)
$http = new Client('http://coop.apps.knpuniversity.com', array(
	'request.options' => array (
		'expections' => false,
		)
	));

$request = $http->post('/token' , null, array(
	'client_id' => 'Farming app',
	'client_secrety' => '72bc68e5ee38d6ade45a1f2da5b27406',
	'grant_type' => 'client_credentials',
	));


$requestion = $http->post('/api/731/eggs-collect');
$request->addHeader('Authorization','Bearer' .$accessToken);
$respone = $request->send();

echo $respone->getBody();

echo "\n\n";