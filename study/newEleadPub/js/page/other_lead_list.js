fnList.pageOtherLeadList = function(){
	console.log('pageOtherLeadList');

	$("#pageOtherLeadList .lead-history-list").touchSlider({
		roll:false,
		flexible:true,
		initComplete : function (e) {
			leadHistoryList = this;
		},
		counter : function (e) {
			
		}
	});

	setTimeout(function(){
		$.singlePage.preloadPage()
	}, 1000)

}