<template>
  <div id="app">
    <div>
      <el-container>
        <el-header>Blockly-Pawn</el-header>
        <el-main><Blockly/></el-main>
        <el-footer>
          <img src="https://img.shields.io/github/issues/Hobr/Blockly-Pawn?style=for-the-badge">
          <img src="https://img.shields.io/github/license/Hobr/Blockly-Pawn?style=for-the-badge">
          <img src="https://img.shields.io/github/stars/Hobr/Blockly-Pawn?style=for-the-badge">
          <img src="https://img.shields.io/github/package-json/v/Hobr/Blockly-Pawn?style=for-the-badge">
        </el-footer>
      </el-container>
    </div>
  </div>
</template>

<script>
import Blockly from './components/Blockly.vue'

export default {
  name: 'app',
  components: {
    // Blockly
  }
}
</script>
<style>
#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
