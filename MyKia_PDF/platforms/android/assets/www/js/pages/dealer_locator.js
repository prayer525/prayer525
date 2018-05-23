fnList.pageDealerLocator = function(){
    var gMap = null;
    var mapParam = {
        pos:{lat: -25.363, lng: 131.044}
    }

    function fnMakeMap(pos){
        console.log('fnMakeMap pos : ' , pos)

        KmeSpinner.stop();
        
        if(pos != ''){
            mapParam.pos.lat = pos.coords.latitude;
            mapParam.pos.lng = pos.coords.longitude;
        }

        gMap = new fnGoogleMap('map_canvas', mapParam);

        var param = {
            CustomerId : Data.getData('Login').CustomerId,
            Radius : 10000,
            LimitToMarket   : true
        }

        getApi('DealerLocationInformation', param, fnMakeMarker)
    }

    function fnMakeMarker(data){
        var dealerList = data.Dealers;

        gMap.clearMarker();

        $.each(dealerList, function(idx, item) {
            var fnMarkerClick = function(e){
                gMap.changeMarkerImg(idx);

                $(".dealer-short-cut").removeClass("none");
                $(".dealer-short-cut").find("h2").html(item.Name);
                $(".dealer-short-cut").find("p").eq(0).html(item.Address);
                $(".dealer-short-cut").find('p:last-child').attr("class", "type0"+item.Type);
                $(".dealer-short-cut").data("sapCode", item.DealerSapCode);
                
                $(".dealer-short-cut").click(function() {
                    Data.setData('dealerSapCode', $(this).data("sapCode"))
                });
            }
            
            var that = {
                coords : {
                    latitude : item.Latitude,
                    longitude : item.Longitude,
                }
            }
            gMap.addMarker(that, fnMarkerClick);
        });

        gMap.clusterMap();
    }

    function errorGeo(error){
        console.log('geo error : ' , error)

        if(confirm('Retry?')){
            fnGetPos()
        }
    }

    function fnGetPos(){
        if (navigator.geolocation.getCurrentPosition) {
            KmeSpinner.start();
            navigator.geolocation.getCurrentPosition(fnMakeMap, errorGeo, { maximumAge: 10000, timeout: 15000, enableHighAccuracy: true });
        } else {
            console.log('Geolocation is not supported for this Browser/OS.');

            fnMakeMap()
        }
    }

    fnGetPos()
}

