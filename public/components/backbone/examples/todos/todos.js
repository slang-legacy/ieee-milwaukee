$(function(){var e=Backbone.Model.extend({defaults:function(){return{title:"empty todo...",order:n.nextOrder(),done:!1}},toggle:function(){this.save({done:!this.get("done")})}}),t=Backbone.Collection.extend({model:e,localStorage:new Backbone.LocalStorage("todos-backbone"),done:function(){return this.where({done:!0})},remaining:function(){return this.where({done:!1})},nextOrder:function(){return this.length?this.last().get("order")+1:1},comparator:"order"}),n=new t,i=Backbone.View.extend({tagName:"li",template:_.template($("#item-template").html()),events:{"click .toggle":"toggleDone","dblclick .view":"edit","click a.destroy":"clear","keypress .edit":"updateOnEnter","blur .edit":"close"},initialize:function(){this.listenTo(this.model,"change",this.render),this.listenTo(this.model,"destroy",this.remove)},render:function(){return this.$el.html(this.template(this.model.toJSON())),this.$el.toggleClass("done",this.model.get("done")),this.input=this.$(".edit"),this},toggleDone:function(){this.model.toggle()},edit:function(){this.$el.addClass("editing"),this.input.focus()},close:function(){var e=this.input.val();e?(this.model.save({title:e}),this.$el.removeClass("editing")):this.clear()},updateOnEnter:function(e){13==e.keyCode&&this.close()},clear:function(){this.model.destroy()}}),r=Backbone.View.extend({el:$("#todoapp"),statsTemplate:_.template($("#stats-template").html()),events:{"keypress #new-todo":"createOnEnter","click #clear-completed":"clearCompleted","click #toggle-all":"toggleAllComplete"},initialize:function(){this.input=this.$("#new-todo"),this.allCheckbox=this.$("#toggle-all")[0],this.listenTo(n,"add",this.addOne),this.listenTo(n,"reset",this.addAll),this.listenTo(n,"all",this.render),this.footer=this.$("footer"),this.main=$("#main"),n.fetch()},render:function(){var e=n.done().length,t=n.remaining().length;n.length?(this.main.show(),this.footer.show(),this.footer.html(this.statsTemplate({done:e,remaining:t}))):(this.main.hide(),this.footer.hide()),this.allCheckbox.checked=!t},addOne:function(e){var t=new i({model:e});this.$("#todo-list").append(t.render().el)},addAll:function(){n.each(this.addOne,this)},createOnEnter:function(e){13==e.keyCode&&this.input.val()&&(n.create({title:this.input.val()}),this.input.val(""))},clearCompleted:function(){return _.invoke(n.done(),"destroy"),!1},toggleAllComplete:function(){var e=this.allCheckbox.checked;n.each(function(t){t.save({done:e})})}});new r});