<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>My Work Log (Exercise 5)</title>
<link rel="stylesheet" href="style.css">
</head>
<body>
<h1>My Work Log (Exercise 5)</h1>
<div id="work-entry-form" rel="js-work-entry-form">
	Project: <select id="select-project" rel="js-select-project"></select><br>
	Work Description: <input id="work-description" rel="js-work-description" size="25" maxlength="50" autofocus> (at least 5 characters)<br>
	Minutes: <input id="work-time" rel="js-work-time" size="4" maxlength="3"> (0-600)<br>
	<button id="submit-work-entry" rel="js-submit-work-entry">submit</button>
</div>
<hr>
<h2 class="total-work-time" rel="js-total-work-time"></h2>
<hr>
<div id="project-list" rel="js-project-list"></div>

<script src="jquery.js"></script>
<script src="ex5.js"></script>
</body>
</html>
