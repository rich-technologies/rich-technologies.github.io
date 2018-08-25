<?php
$text;
$class="";
if(isset($_GET['cat'])&&!isset($_GET['p'])){
	$handle=fopen('content.txt', 'r');
	$con=file_get_contents('content.txt');
	$pos=strpos($con,'<'.$_GET['cat'].'>');
	if($pos){
		$lastpos=strpos($con,'</'.$_GET['cat'].'>');
		$text=substr($con, $pos,$lastpos-$pos);
		$head="Products from the category";
		$class=" cat";
	}
	else{
		$text="Try Again Folk!!!<br>Bad Karma";
		$head="Bad Link";
	}
}
else if(isset($_GET['cat'])&&isset($_GET['p'])){
	$handle=fopen('content.txt', 'r');
	$con=file_get_contents('content.txt');
	$pos=strpos($con,'<'.$_GET['cat'].$_GET['p'].'>');
	if($pos){
		$lastpos=strpos($con,'</'.$_GET['cat'].$_GET['p'].'>');
		$text=substr($con, $pos,$lastpos-$pos);
		$head="Product Information";
		$class=" proinfo";
	}
	else{
		$text="Try Again Folk!!!<br>Bad Karma";
		$head="Bad Link";
	}	
}
else{
	header('Location: index.html');
}
?>

<!DOCTYPE html>
<html>

<head>
    <title>PRODUCTS | RICH TECHNOLOGIES</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="style.css">
    <link href='http://fonts.googleapis.com/css?family=Roboto:100,300' rel='stylesheet' type='text/css'>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script type="text/javascript" src="script.js"></script>
</head>
<body id="probody">
	
<ul class="prodmenu">
	<li>
		<a href="product.php?cat=wl"><span>Water Level Indicators</span></a>
	</li>
	<li>
		<a href="product.php?cat=saw"><span>Semi-Automatic Water Level Controller</span></a>
	</li>
	<li>
		<a href="product.php?cat=aw"><span>Automatic Water Level Controller</span></a>
	</li>
</ul>
    <div class="top">
        <div class="name">Rich Technologies</div>
        <div class="trig">&equiv;</div>
        <ul class="menu">
            <li><a href="index.html">Home</a></li>
            <li class="prod_menu"><a style="cursor:default">Products</a></li>
            <li><a href="contact.html">Contact Us</a></li>
        </ul>
    </div>
    <div class="heading">
    	<h1 style="background:#E74C3C;color:#fff;margin:0;padding:40px;font-weight:300"><?php echo $head; ?></h1>
    </div>
    <div class="features<?php echo $class; ?>">
    	<?php echo $text; ?>
    </div>
    <div class="footer">
    	Rich Techologies &copy; <span class="year"></span>.
    	<img src="watermark.png">
    </div>
</body>
</html>