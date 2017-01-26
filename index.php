<?php
/**
 * Created by PhpStorm.
 * User: Frayo
 * Date: 1/7/2017
 * Time: 12:26 PM
 */
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script src="JS/vue.js"></script>
    <script src="JS/jquery-3.1.1.min.js"></script>
    <link rel="stylesheet" type="text/css" href="CSS/bootstrap.min.css">
    <title></title>
</head>
<body>
<div id="app0" class="app">
    Message: {{message}}
    data: {{things}}
</div>
<hr>
<div id="app1" class="app">
    Message: {{message}}
    data: {{things}}
</div>
<hr>
<div id="app2" class="app">
    <span v-bind:title="message">
        Hover mouse
    </span>
</div>
<hr>
<div id="app3" class="app">
    <span v-if="visible">
        I'm Visible
        <br>
        {{mainText}}
    </span>
</div>
<hr>
<div id="app4" class="app">
    <ol>
        <li v-for="todo in todos">
            {{todo.text}}
        </li>
    </ol>
</div>
<hr>
<div id="app5" class="app">
    <p>{{message}}</p>
    <button v-on:click="reverseMessage">Reverse</button>
</div>
</body>
<script src="JS/JS.js"></script>
</html>