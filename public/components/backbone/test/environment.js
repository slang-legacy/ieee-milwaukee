!function(){var e=Backbone.sync,t=Backbone.ajax,n=Backbone.emulateHTTP,r=Backbone.emulateJSON;QUnit.testStart(function(){var t=this.config.current.testEnvironment;Backbone.ajax=function(e){t.ajaxSettings=e},Backbone.sync=function(n,r,i){t.syncArgs={method:n,model:r,options:i},e.apply(this,arguments)}}),QUnit.testDone(function(){Backbone.sync=e,Backbone.ajax=t,Backbone.emulateHTTP=n,Backbone.emulateJSON=r})}();