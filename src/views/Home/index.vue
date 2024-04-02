<template>
  <div id="Home">
    <main class="content">
      <Transition name="Robot">
        <div v-if="isRobotShow" @animationend="func" class="Robot">
          <template v-if="isEyeShow">
            <div v-for="item in 2" class="eye"></div>
            <div v-for="item in 2" class="hand"></div>
          </template>
        </div>
      </Transition>

      <!-- text文本 -->
      <h1 class="title">WELCOME TO WV3STUDY</h1>

      <!-- 进入按钮 -->

      <button class="login" @click="go">HELLO&nbsp;&nbsp;WORLD</button>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const isRobotShow = ref(false)
const isEyeShow = ref(false)

const go = () => {
  console.log(router, '==========>')

  router.push('/main')
}

const func = () => {
  isEyeShow.value = true
}

onMounted(() => {
  setTimeout(() => {
    isRobotShow.value = true
  }, 1000)
})
</script>

<style lang="less" scoped>
#Home {
  width: 100vw;
  height: 100vh;
  background-color: black;
  .content {
    width: 70%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    .Robot {
      width: 200px;
      height: 100px;
      position: relative;
      top: 0;
      border: 4px solid #fff;
      display: flex;
      align-items: center;
      justify-content: space-around;
      animation: ARobot 0.1s linear;
      margin-top: 150px;
      .eye {
        width: 20px;
        height: 20px;
        background-color: #fff;
        animation: AEye 5s infinite;
      }

      .hand {
        width: 25px;
        height: 25px;
        background-color: #fff;
        position: absolute;
        left: 220px;
        top: 110px;
      }

      .hand:last-child {
        width: 25px;
        height: 25px;
        background-color: #fff;
        position: absolute;
        left: -45px;
        top: 110px;
      }
    }

    .Robot-enter-active,
    .Robot-leave-active {
      transition: animation 0.5s ease;
    }

    .title {
      color: #fff;
      margin: 0 auto;
      margin-top: 96px;
    }

    .login {
      margin-top: 48px;
      width: 200px;
      height: 60px;
      background: transparent;
      border: 1px solid #fff;
      color: #fff;
      cursor: pointer;
    }
  }
}

@keyframes ARobot {
  0% {
    width: 0;
    height: 0;
    .Robot::after {
      display: none;
    }
  }

  50% {
    width: 200px;
    height: 0px;
  }

  100% {
    width: 200px;
    height: 100px;
    .Robot::after {
      display: block;
    }
  }
}

@keyframes AEye {
  form {
    width: 20px;
    height: 20px;
  }

  49% {
    width: 20px;
    height: 20px;
  }

  50% {
    width: 20px;
    height: 1px;
  }

  51% {
    width: 20px;
    height: 20px;
  }

  to {
    width: 20px;
    height: 20px;
  }
}
</style>
