<style lang="scss">
 @import "./timeline.scss";
</style>

<template lang="html">
  <ul class="pz-timeline">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      state: this.checked//未选中
    }
  },
  props: {
    size: {
      type: String,
      default: ''
    },
    disabled: {
      type:Boolean,
      default: false
    },
    checked: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    checkChoose: function() {
      return {
        'pz-timeline-active': this.state,
        'pz-timeline-disabled': this.disabled,
        [`pz-timeline-${this.size}`]: !!this.size
      }
    },
  },
  mounted () {

  },
  methods: {
    change: function() {//改变切换状态
      if(this.disabled) {
        return;
      }
      this.state = !this.state;
      this.$emit("change", this.state)
    }
  },
  components: {}
}
</script>
