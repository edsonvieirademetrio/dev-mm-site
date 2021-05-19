var createMmSpeedBox = function (elementId, regua) {
  Vue.component("mmspeedbox", {
    template:
      '\
        <div class="col-10 mx-auto my-4 text-white">\
            <div class="row text-center display-4">{{ restante.toFixed(2) }}/{{ total.toFixed(2) }}</div>\
            <div class="row progress rounded-pill" style="height: 50px;">\
                <div class="progress-bar" role="progressbar" :style="\'width: \'+100*(restante/total)+\'%; background-color: #e0a43!important;\'" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>\
            </div>\
        </div>\
        ',
    props: ["restante", "total"],
  });
  new Vue({
    el: elementId,
    data: {
      restante: 0,
      total: 1,
    },
    created() {
      axios
        .get(
          "https://matchmoney.com.br/wp-json/mm-api/v1/mmspeed-restante?regua=" +
            regua
        )
        .then((res) => {
          this.restante = res.data;
        });

      axios
        .get(
          "https://matchmoney.com.br/wp-json/mm-api/v1/mmspeed-total?regua=" +
            regua
        )
        .then((res) => {
          this.total = res.data;
        });
    },
  });
};
