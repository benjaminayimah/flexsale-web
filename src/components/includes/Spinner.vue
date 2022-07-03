<template>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="loader" :width="size" :height="size" viewBox="0 0 29.888 28.927">
  <defs>
    <radialGradient id="radial-gradient" cx="0.5" cy="0.5" r="0.5" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#566ff4"/>
      <stop offset="0" :stop-color="white ? '#f0f0f2' : '#fff'"/>
      <stop offset="0.335" :stop-color="white ? '#ecedf2' : '#f0f3ff'"/>
      <stop offset="0.596" :stop-color="white ? '#fcfcfc' : '#566ff4'"/>
      <stop offset="1" :stop-color="white ? '#fff' : '#566ff4'"/>
    </radialGradient>
  </defs>
  <path id="spinner" d="M33.419,17.352A15.261,15.261,0,0,0,28.731,6.616a15.15,15.15,0,0,0-4.97-3.183,14.982,14.982,0,0,0-11.44.223,14.741,14.741,0,0,0-7.8,8.115,14.5,14.5,0,0,0,.223,11.07A14.259,14.259,0,0,0,12.6,30.381a14.018,14.018,0,0,0,10.7-.223,13.777,13.777,0,0,0,7.279-7.594,13.464,13.464,0,0,0,.8-3.127c.038,0,.075,0,.113,0a1.928,1.928,0,0,0,1.928-1.928c0-.054,0-.108-.007-.161h.007Zm-3.064,5.12a13.3,13.3,0,0,1-7.333,7.018,13.055,13.055,0,0,1-9.963-.223A12.813,12.813,0,0,1,6.3,22.2,12.572,12.572,0,0,1,6.525,12.6,12.379,12.379,0,0,1,9.3,8.661,12.254,12.254,0,0,1,13.337,6.1a12.082,12.082,0,0,1,4.658-.8A11.886,11.886,0,0,1,26.345,9,11.772,11.772,0,0,1,28.8,12.879a11.6,11.6,0,0,1,.766,4.474h.007q-.007.08-.007.161a1.928,1.928,0,0,0,1.72,1.917,13.3,13.3,0,0,1-.927,3.042Z" transform="translate(-3.531 -2.407)" fill="url(#radial-gradient)"/>
</svg>
</template>
<script>
export default {
    name: 'Spinner',
    props: ['size', 'white']
}
</script>
<style scoped lang="scss">
 .loader{
    -webkit-animation: load 1s linear infinite;
    animation: load 1s linear infinite;
}
@keyframes load{
    0%{transform: rotate(0deg)}
    100%{transform: rotate(360deg)}
}
</style>