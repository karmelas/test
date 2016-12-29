<?
  error_reporting(E_ALL);
  ini_set('display_errors', 1);
  header('Content-Type: application/json');
  
  $result = [];
  
  
  
  $option = $_GET['option'];
  $result['option'] = $option;
  
  if($option == 'option2')
  {
    $result['name']='karmela';
  }
  else
  {
    $result['name']='andrei';
  }
  print json_encode($result);
  
?>