/**
 * Created by Frayo on 1/7/2017.
 */
var app0 = new Vue({
    el: '#app0',
    data: {
        message: 'Hello Vue!',
        things: 'Stuff'
    }
});

var app1 = new Vue({
    el: '#app1',
    data: {
        seen: true,
        message: 'Hello Vue!',
        things: 'Stuff'
    }
});

app1.message = "Things";

var app2 = new Vue({
    el: "#app2",
    data: {
        message: "Loaded this on" + new Date()
    }
});

var app3 = new Vue({
    el: "#app3",
    data: {
        visible: true,
        message: "I'm visible",
        mainText: "App3"
    }
});
app3.mainText = "data was manipulated!";

var app4 = new Vue({
    el: "#app4",
    data: {
        todos : [
            {
                text: "One"
            },{
                text: "Two"
            },{
                text: "Three"
            }
        ]
    }
});

var appButton = new Vue({
    el: "#appButton",
    methods : {
        addItem : function(){
            app4.todos.push({text: "New Item"});
            $('.grid').isotope('layout');
        }
    }
});

var app5 = new Vue({
    el: "#app5",
    data: {
        messageContainer: "",
        message: "Function bound to this element",
        value: 0
    },
    methods: {
        reverseMessage: function(){
            if(this.messageContainer == ""){
                this.messageContainer = this.message;
            }
            this.value++;
            this.messageContainer = this.messageContainer.split('').reverse().join('') + " ";
            this.message = this.messageContainer + this.value;
        }
    }
});

var app6 = new  Vue({
    el : "#app6",
    data: {
        message: 'Hello World!'
    }
});

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>Item-- {{todo.text}}</li>'
});

var app7 = new Vue({
    el: "#app7",
    data: {
        theList: [
            {
                text: "Motherboard"
            }
        ],
        itemField: "Add additional Items"
    },
    methods: {
        addItem: function(){
            this.theList.push({text: this.itemField});
        },
        getItemFromServer: function(){
            var thisList = this.theList;
            $.get("/vue/ajax.php?database=true", function(data){
                serverReply = $.parseJSON(data);
                for(var i = 0; i < serverReply.data.length; i++){
                    thisList.push({text: serverReply.data[i].paramvalue});
                }
            });
        }
    }
});

app7.theList.push({text : "Video Card"});




/*
*
* testing some bullshit
*
* */

var gridItem = $('<div></div>').html("8").addClass("grid.item");























/*
* ===============================================
* FACTORY EXPERIMENT
* ===============================================
* */

//Step one. Can we create a vue instance and bind it into a synthesized custom DOM element in JQuery?

var newComponent = $("<my-component></my-component>")
    .addClass("grid-item")
    .attr('id', 'testapp')

    .html(
        '{{param1}}' +
        '<br>' +
        '{{param2}}' +
        '<br>' +
        '<button v-on:click="refresh">Update</button>');
$("#upperGrid").append(newComponent);

//Vue.component('my-component');
//We need to find a better way to template!
var testApp = new Vue({
    el: "#testapp",
    data: {
        param1: "Mr.Garrison",
        param2: "Mr.Hat"
    },
    methods: {
        refresh: function(){
            ajaxRefresh(this);
        }
    }
});
//Step two. Can we create an internal AJAX request and AJAX handler?
function ajaxRefresh(instance){
    $.get("/vue/ajax.php?data=true", function(data){
        var json = $.parseJSON(data);
        instance.param1 = json.data.param1;
        instance.param2 = json.data.param2;
    });
}





//Step three. Can we functionalize this?

//Step four. Can we implement this functionalization as part of a JS factory design pattern?