<template>
  <div class="home">
    <h1>Welcome</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import scrollTopMixin from '../mixins/scrollTopMixin'
export default {
  name: 'Home',
  mixins: [scrollTopMixin]
}
</script>
