define(["jquery"],function(e){return{load:function(t,n,r,i){e.ajax({url:n.toUrl(t+".css"),success:function(t){e("head").append("<style></style>"),e("head style:last").text(t),r(t)},error:function(e,t,n){r.error(n)}})}}})