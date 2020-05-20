<template>
  <div>
    <div id="map" class="basic-map"></div>
  </div>
</template>
<script>
  export default {
    mounted() {
      setTimeout(this.onLoad, 50)
    },
    data() {
      return {
        // appKey: '77b3df31df5c79b69d43559da305ae93',
        //피자알볼로
        level: 3,
      }
    },
    props: {
      storelatlng: {
        type: Array,
        default: () => [
          {
            name: '목동본점',
            lat: 37.532688, //서울특별시 양천구 목4동 목동중앙서로 30
            lng: 126.86703,
          },
          {
            name: '기타',
            lat: 37.532680, //서울특별시 양천구 목4동 목동중앙서로 30
            lng: 126.86700,
          },
        ],
      },
      //  mylatlng: {
      //   type: Object,
      //   default: () => (
      //     {
      //       name: '목동본점',
      //       lat: 37.532688, //서울특별시 양천구 목4동 목동중앙서로 30
      //       lng: 126.86703
      //     })
      // }
    },
    watch: {
      storelatlng: {
        handler: function(val) {
          this.onLoad()
        },
        deep: true,
      },
    },
    methods: {
      onLoad() {
        let map = new naver.maps.Map('map', {
          center: new naver.maps.LatLng(
            this.storelatlng[0].lat,
            this.storelatlng[0].lng
          ),
          zoom: 10,
          zoomControl: true, //지도 줌 +/-버튼 표시
          zoomControlOptions: {
            style: naver.maps.ZoomControlStyle.SMALL,
            position: naver.maps.Position.RIGHT_TOP,
          },
          scrollWheel: false, // PC 상태에서 스크롤을 이용한 줌 비활성화
        })

        let markers = [],
          infoWindows = []

        this.storelatlng.forEach(key => {
          let marker = new naver.maps.Marker({
            map: map,
            position: new naver.maps.LatLng(key.lat, key.lng),
            name: key.name, 
            icon: {
              url: require('@/assets/img/marker_position.png'),
              size: new naver.maps.Size(26, 38),
              // anchor: new naver.maps.Point(12, 30)
            },
            zIndex: 100,
          })

          let infoWindow = new naver.maps.InfoWindow({
            content: '<div class="marker-info">' + `${key.name == undefined ? '내위치' : key.name}` + '</div>',
            borderColor: '#fff',
            borderWidth: 1,
            backgroundColor: '#fff',
            anchorColor: '#fff',
            anchorSize: new naver.maps.Size(15, 12),
          })

          markers.push(marker)
          infoWindows.push(infoWindow)
        })

        naver.maps.Event.addListener(map, 'idle', function() {
          updateMarkers(map, markers)
        })

        function updateMarkers(map, markers) {
          let mapBounds = map.getBounds()
          let marker, position

          for (let i = 0; i < markers.length; i++) {
            marker = markers[i]
            position = marker.getPosition()

            if (mapBounds.hasLatLng(position)) {
              showMarker(map, marker)
            } else {
              hideMarker(map, marker)
            }
          }
        }

        function showMarker(map, marker) {
          if (marker.setMap()) return
          marker.setMap(map)
        }

        function hideMarker(map, marker) {
          if (!marker.setMap()) return
          marker.setMap(null)
        }

        // 해당 마커의 인덱스를 seq라는 클로저 변수로 저장하는 이벤트 핸들러를 반환합니다.
        function getClickHandler(seq) {
          return function(e) {
            let marker = markers[seq],
              infoWindow = infoWindows[seq]

            if (infoWindow.getMap()) {
              infoWindow.close()
            } else {
              infoWindow.open(map, marker)
            }
          }
        }

        for (let i = 0, ii = markers.length; i < ii; i++) {
          naver.maps.Event.addListener(markers[i], 'click', getClickHandler(i))
        }
      },
    },
  }
</script>
<style lang="scss">
  .basic-map {
    width: 100%;
    height: 100%;
    .marker-info {
      font-family: 'Noto Sans CJK KR Medium';
      color: #333333;
      line-height: 21px;
      font-size: 16px;
      padding: 10px;
    }
  }
</style>
