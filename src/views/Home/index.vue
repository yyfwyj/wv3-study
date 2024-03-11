<template>
  <div id="Home">
    <Transition name="Robot">
      <div v-if="isLineShow" class="Robot">
        <div v-for="item in 2" class="eye"></div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isLineShow = ref(false)
const isRobotShow = ref(false)

onMounted(() => {
  setTimeout(() => {
    isLineShow.value = true
  }, 1000)
})
</script>

<style lang="less" scoped>
#Home {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: black;
  .Robot {
    margin-top: 150px;
    width: 500px;
    height: 300px;
    position: relative;
    top: 0;
    border: 4px solid #fff;
    display: flex;
    align-items: center;
    justify-content: space-around;
    animation: ARobot 0.1s linear, MoveBottom 2.5s infinite;
    .eye {
      width: 50px;
      height: 50px;
      background-color: #fff;
      animation: AEye 5s infinite;
    }
  }

  /*右手*/
  .Robot::after {
    content: '';
    width: 75px;
    height: 75px;
    background-color: #fff;
    position: absolute;
    left: 410px;
    top: 250px;
    // .animationAHand(450px,45px,1.5s);
  }
  /*左手*/
  .Robot::before {
    content: '';
    width: 75px;
    height: 75px;
    background-color: #fff;
    position: absolute;
    left: 15px;
    top: 250px;
    // .animationAHand(250px,25px,1.5s);
  }

  .Robot-enter-active,
  .Robot-leave-active {
    transition: animation ease;
  }
}

@keyframes ARobot {
  0% {
    width: 0;
    height: 0;
  }

  50% {
    width: 500px;
    height: 0px;
  }

  100% {
    width: 500px;
    height: 300px;
  }
}

@keyframes AEye {
  form {
    width: 50px;
    height: 50px;
  }

  49% {
    width: 50px;
    height: 50px;
  }

  50% {
    width: 50px;
    height: 5px;
  }

  51% {
    width: 50px;
    height: 50px;
  }

  to {
    width: 50px;
    height: 50px;
  }
}

@keyframes MoveBottom {
  from {
    top: 0;
  }

  50% {
    top: 25px;
  }

  to {
    top: 0;
  }
}

.animation(@animation-name,@animation-duration,@animation-timing-function) {
  animation: @arguments;
}

.animationAHand(@top,@move,@time) {
  @keyframes AHand {
    from {
      top: @top;
    }

    50% {
      top: calc(@top + @move);
    }

    to {
      top: @top;
    }
  }

  animation-name: AHand;
  animation-duration: @time;
  animation-iteration-count: infinite;
}
</style>
