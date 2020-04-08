<template>
  <div class="container">
    <div class="box" :style="result" />
    <div class="controllers">
      <div class="controllerGroup">
        <img
          src="../assets/cornerall.svg"
          alt="cornerall"
          height="24"
          width="24"
        />
        <input
          type="range"
          class="controller slider"
          v-model="radiusGeral"
          min="0"
          max="100"
          step="1"
        />
      </div>
      <div class="hr" />
      <div class="controllerGroup">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 24 24"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          class="c1"
        >
          <g><rect fill="none" height="24" width="24"></rect></g>
          <g>
            <g>
              <g>
                <path
                  d="M19,19h2v2h-2V19z M19,17h2v-2h-2V17z M3,13h2v-2H3V13z M3,17h2v-2H3V17z M3,9h2V7H3V9z M3,5h2V3H3V5z M7,5h2V3H7V5z M15,21h2v-2h-2V21z M11,21h2v-2h-2V21z M15,21h2v-2h-2V21z M7,21h2v-2H7V21z M3,21h2v-2H3V21z M21,8c0-2.76-2.24-5-5-5h-5v2h5 c1.65,0,3,1.35,3,3v5h2V8z"
                ></path>
              </g>
            </g>
          </g>
        </svg>
        <input
          type="range"
          v-model="topLeft"
          class="controller slider"
          min="0"
          max="100"
          step="1"
        />
      </div>
      <div class="controllerGroup">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 24 24"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          class="c2"
        >
          <g><rect fill="none" height="24" width="24"></rect></g>
          <g>
            <g>
              <g>
                <path
                  d="M19,19h2v2h-2V19z M19,17h2v-2h-2V17z M3,13h2v-2H3V13z M3,17h2v-2H3V17z M3,9h2V7H3V9z M3,5h2V3H3V5z M7,5h2V3H7V5z M15,21h2v-2h-2V21z M11,21h2v-2h-2V21z M15,21h2v-2h-2V21z M7,21h2v-2H7V21z M3,21h2v-2H3V21z M21,8c0-2.76-2.24-5-5-5h-5v2h5 c1.65,0,3,1.35,3,3v5h2V8z"
                ></path>
              </g>
            </g>
          </g>
        </svg>
        <input
          type="range"
          v-model="topRight"
          class="controller slider"
          min="0"
          max="100"
          step="1"
        />
      </div>
      <div class="controllerGroup">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 24 24"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          class="c3"
        >
          <g><rect fill="none" height="24" width="24"></rect></g>
          <g>
            <g>
              <g>
                <path
                  d="M19,19h2v2h-2V19z M19,17h2v-2h-2V17z M3,13h2v-2H3V13z M3,17h2v-2H3V17z M3,9h2V7H3V9z M3,5h2V3H3V5z M7,5h2V3H7V5z M15,21h2v-2h-2V21z M11,21h2v-2h-2V21z M15,21h2v-2h-2V21z M7,21h2v-2H7V21z M3,21h2v-2H3V21z M21,8c0-2.76-2.24-5-5-5h-5v2h5 c1.65,0,3,1.35,3,3v5h2V8z"
                ></path>
              </g>
            </g>
          </g>
        </svg>
        <input
          type="range"
          v-model="bottomLeft"
          class="controller slider"
          min="0"
          max="100"
          step="1"
        />
      </div>
      <div class="controllerGroup">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 24 24"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          class="c4"
        >
          <g><rect fill="none" height="24" width="24"></rect></g>
          <g>
            <g>
              <g>
                <path
                  d="M19,19h2v2h-2V19z M19,17h2v-2h-2V17z M3,13h2v-2H3V13z M3,17h2v-2H3V17z M3,9h2V7H3V9z M3,5h2V3H3V5z M7,5h2V3H7V5z M15,21h2v-2h-2V21z M11,21h2v-2h-2V21z M15,21h2v-2h-2V21z M7,21h2v-2H7V21z M3,21h2v-2H3V21z M21,8c0-2.76-2.24-5-5-5h-5v2h5 c1.65,0,3,1.35,3,3v5h2V8z"
                ></path>
              </g>
            </g>
          </g>
        </svg>
        <input
          type="range"
          v-model="bottomRight"
          class="controller slider"
          min="0"
          max="100"
          step="1"
        />
      </div>
      <textarea ref="copyResult" v-model="result" disabled></textarea>
      <div class="buttonGroup">
        <button class="btnClipboard" @click="copyClipboard">
          <font-awesome-icon icon="paste" color="white" />
          Copiar para a clipboard
        </button>
        <button @click="reset" class="btnReset">
          <font-awesome-icon icon="redo" color="white" />
          Resetar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'resultRadius',
  data: () => ({
    radiusGeral: 0,
    topLeft: 0,
    topRight: 0,
    bottomLeft: 0,
    bottomRight: 0,
    isGeral: false,
  }),
  watch: {
    radiusGeral() {
      this.topLeft = this.radiusGeral;
      this.topRight = this.radiusGeral;
      this.bottomRight = this.radiusGeral;
      this.bottomLeft = this.radiusGeral;
    },
  },
  computed: {
    result() {
      return `border-radius: ${this.topLeft}% ${this.topRight}% ${this.bottomRight}% ${this.bottomLeft}%;`;
    },
  },
  methods: {
    reset() {
      this.topLeft = 0;
      this.topRight = 0;
      this.bottomRight = 0;
      this.bottomLeft = 0;
      this.$snack.show({
        text: 'Valores resetados!',
      });
    },
    copyClipboard() {
      const el = document.createElement('textarea');
      el.value = this.result;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      this.$snack.success({
        text: 'Borda copiada!',
      });
    },
  },
};
</script>

<style scoped>
.btnReset svg,
.btnClipboard svg {
  margin-right: 8px;
}
.buttonGroup {
  display: flex;
  justify-content: space-between;
}

.buttonGroup .btnClipboard {
  flex: 2;
  -webkit-appearance: none;
  border: none;
  background-color: #d6a104;
  border-radius: 50px;
  margin-right: 30px;
  padding: 20px 10px;
  font-size: 16px;
  color: #f7f7f7;
  font-weight: bold;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  outline: none;
}

.buttonGroup .btnClipboard:hover,
.buttonGroup .btnReset:hover {
  box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.3);
  transform: translateY(-5px);
}

.buttonGroup .btnReset {
  flex: 1;
  -webkit-appearance: none;
  border: none;
  background-color: #232540;
  border-radius: 50px;
  font-size: 16px;
  color: #f7f7f7;
  font-weight: bold;
  padding: 20px 10px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  outline: none;
}

.controllers > textarea {
  width: 100%;
  margin: 7% 0;
  height: 95px;
  border-radius: 5px;
  background-color: rgb(235, 235, 228);
  resize: none;
  padding: 15px;
  border: none;
}
.c1 {
  transform: rotate(270deg);
}

.c3 {
  transform: rotate(180deg);
}

.c4 {
  transform: rotate(90deg);
}
.hr {
  width: 100%;
  opacity: 0;
  height: 1px;
  margin: 5% 0;
}

.slider {
  vertical-align: middle;
  -webkit-appearance: none;
  width: 80%;
  height: 2px;
  border-radius: 5px;
  background: #bdc3c7;
  outline: none;
  opacity: 1;
  padding: 0;
  margin: 7% 10%;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #ff679a;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #222;
  cursor: pointer;
}

.controllerGroup {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.controllerGroup > svg {
  fill: white;
}

.controllerGroup + .controllerGroup {
  margin-top: 20px;
}

.controllerGroup > span {
  color: white;
  width: fit-content;
  margin-left: 10px;
}

.controllerGroup > img {
  opacity: 0.9;
}

.controllers {
  width: 30%;
}

.container {
  width: 100%;
  margin: auto auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.box {
  width: 400px;
  height: 400px;
  margin: 0 10% 0 0;
  background-image: linear-gradient(25deg, #e30051, #ec6a47, #f2a136, #f2d400);
  box-shadow: 60px 66px 92px -11px rgba(0, 0, 0, 0.5);
}
</style>
