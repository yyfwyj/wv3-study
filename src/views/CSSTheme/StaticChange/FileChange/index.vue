<template>
  <!-- Wrapper -->
  <div id="wrapper">
    <!-- Header -->
    <header id="header">
      <h1><a href="index.html">CSS换肤实现</a></h1>
      <nav class="main">
        <button v-for="item in ThemeChangeBtnArray" @click="themeChange(item)">
          {{ item.label }}
        </button>
        <button @click="gray">一键置灰</button>
      </nav>
    </header>

    <!-- Main -->
    <div id="main">
      <!-- Post -->
      <article class="post" v-for="item in Mains">
        <header>
          <div class="title">
            <h2>
              <a href="single.html">{{ item.title }}</a>
            </h2>
            <p>{{ item.subTitle }}</p>
          </div>
          <div class="meta">
            <time class="published" datetime="2015-11-01"
              >November 1, 2015</time
            >
            <a href="#" class="author"
              ><span class="name">Jane Doe</span
              ><img src="./images/avatar.jpg" alt=""
            /></a>
          </div>
        </header>
        <a href="single.html" class="image featured"
          ><img :src="item.image" alt=""
        /></a>
        <p>{{ item.context }}</p>
        <footer>
          <ul class="actions">
            <li>
              <a href="single.html" class="button large">Continue Reading</a>
            </li>
          </ul>
          <ul class="stats">
            <li><a href="#">General</a></li>
            <li>
              <a href="#" class="icon solid fa-heart"
                >{{ item.evaluate }} 评价</a
              >
            </li>
            <li>
              <a href="#" class="icon solid fa-comment">{{ item.like }} 点赞</a>
            </li>
          </ul>
        </footer>
      </article>

      <!-- Pagination -->
      <ul class="actions pagination">
        <li>
          <a href="" class="disabled button large previous">Previous Page</a>
        </li>
        <li><a href="#" class="button large next">Next Page</a></li>
      </ul>
    </div>

    <!-- Sidebar -->
    <section id="sidebar">
      <!-- Intro -->
      <section id="intro">
        <!-- <a href="#" class="logo"><img src="./images/logo.jpg" alt="" /></a> -->
        <header>
          <h2>Future Imperfect</h2>
          <p>
            Another fine responsive site template by
            <a href="http://html5up.net">HTML5 UP</a>
          </p>
        </header>
      </section>

      <!-- Mini Posts -->
      <section>
        <div class="mini-posts">
          <!-- Mini Post -->
          <article class="mini-post">
            <header>
              <h3><a href="single.html">Vitae sed condimentum</a></h3>
              <time class="published" datetime="2015-10-20"
                >October 20, 2015</time
              >
              <a href="#" class="author"
                ><img src="./images/avatar.jpg" alt=""
              /></a>
            </header>
            <a href="single.html" class="image"
              ><img src="./images/pic04.jpg" alt=""
            /></a>
          </article>

          <!-- Mini Post -->
          <article class="mini-post">
            <header>
              <h3><a href="single.html">Rutrum neque accumsan</a></h3>
              <time class="published" datetime="2015-10-19"
                >October 19, 2015</time
              >
              <a href="#" class="author"
                ><img src="./images/avatar.jpg" alt=""
              /></a>
            </header>
            <a href="single.html" class="image"
              ><img src="./images/pic05.jpg" alt=""
            /></a>
          </article>

          <!-- Mini Post -->
          <article class="mini-post">
            <header>
              <h3><a href="single.html">Odio congue mattis</a></h3>
              <time class="published" datetime="2015-10-18"
                >October 18, 2015</time
              >
              <a href="#" class="author"
                ><img src="./images/avatar.jpg" alt=""
              /></a>
            </header>
            <a href="single.html" class="image"
              ><img src="./images/pic06.jpg" alt=""
            /></a>
          </article>

          <!-- Mini Post -->
          <article class="mini-post">
            <header>
              <h3><a href="single.html">Enim nisl veroeros</a></h3>
              <time class="published" datetime="2015-10-17"
                >October 17, 2015</time
              >
              <a href="#" class="author"
                ><img src="./images/avatar.jpg" alt=""
              /></a>
            </header>
            <a href="single.html" class="image"
              ><img src="./images/pic07.jpg" alt=""
            /></a>
          </article>
        </div>
      </section>

      <!-- Posts List -->
      <section>
        <ul class="posts">
          <li>
            <article>
              <header>
                <h3>
                  <a href="single.html">Lorem ipsum fermentum ut nisl vitae</a>
                </h3>
                <time class="published" datetime="2015-10-20"
                  >October 20, 2015</time
                >
              </header>
              <a href="single.html" class="image"
                ><img src="./images/pic08.jpg" alt=""
              /></a>
            </article>
          </li>
          <li>
            <article>
              <header>
                <h3>
                  <a href="single.html"
                    >Convallis maximus nisl mattis nunc id lorem</a
                  >
                </h3>
                <time class="published" datetime="2015-10-15"
                  >October 15, 2015</time
                >
              </header>
              <a href="single.html" class="image"
                ><img src="./images/pic09.jpg" alt=""
              /></a>
            </article>
          </li>
          <li>
            <article>
              <header>
                <h3>
                  <a href="single.html"
                    >Euismod amet placerat vivamus porttitor</a
                  >
                </h3>
                <time class="published" datetime="2015-10-10"
                  >October 10, 2015</time
                >
              </header>
              <a href="single.html" class="image"
                ><img src="./images/pic10.jpg" alt=""
              /></a>
            </article>
          </li>
          <li>
            <article>
              <header>
                <h3>
                  <a href="single.html"
                    >Magna enim accumsan tortor cursus ultricies</a
                  >
                </h3>
                <time class="published" datetime="2015-10-08"
                  >October 8, 2015</time
                >
              </header>
              <a href="single.html" class="image"
                ><img src="./images/pic11.jpg" alt=""
              /></a>
            </article>
          </li>
          <li>
            <article>
              <header>
                <h3>
                  <a href="single.html"
                    >Congue ullam corper lorem ipsum dolor</a
                  >
                </h3>
                <time class="published" datetime="2015-10-06"
                  >October 7, 2015</time
                >
              </header>
              <a href="single.html" class="image"
                ><img src="./images/pic12.jpg" alt=""
              /></a>
            </article>
          </li>
        </ul>
      </section>

      <!-- About -->
      <section class="blurb">
        <h2>About</h2>
        <p>
          Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl.
          Sed mattis nunc id lorem euismod amet placerat. Vivamus porttitor
          magna enim, ac accumsan tortor cursus at phasellus sed ultricies.
        </p>
        <ul class="actions">
          <li><a href="#" class="button">Learn More</a></li>
        </ul>
      </section>

      <!-- Footer -->
      <section id="footer">
        <ul class="icons">
          <li>
            <a href="#" class="icon brands fa-twitter"
              ><span class="label">Twitter</span></a
            >
          </li>
          <li>
            <a href="#" class="icon brands fa-facebook-f"
              ><span class="label">Facebook</span></a
            >
          </li>
          <li>
            <a href="#" class="icon brands fa-instagram"
              ><span class="label">Instagram</span></a
            >
          </li>
          <li>
            <a href="#" class="icon solid fa-rss"
              ><span class="label">RSS</span></a
            >
          </li>
          <li>
            <a href="#" class="icon solid fa-envelope"
              ><span class="label">Email</span></a
            >
          </li>
        </ul>
        <p class="copyright">
          &copy; Untitled. Design: <a href="http://html5up.net">HTML5 UP</a>.
          Images: <a href="http://unsplash.com">Unsplash</a>.
        </p>
      </section>
    </section>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onBeforeMount, onMounted } from 'vue'
const CSSHerf = ref(
  'src/views/CSSTheme/StaticChange/FileChange/theme/default.css'
)

const Mains = reactive([
  {
    title: 'MAGNA SED ADIPISCING',
    subTitle: 'LOREM IPSUM DOLOR AMET NULLAM CONSEQUAT ETIAM FEUGIAT',
    context:
      'Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.',
    image: new URL('./images/pic06.jpg', import.meta.url).href,
    evaluate: 28,
    like: 128,
  },
  {
    title: 'MAGNA SED ADIPISCING',
    subTitle: 'LOREM IPSUM DOLOR AMET NULLAM CONSEQUAT ETIAM FEUGIAT',
    context:
      'Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.',
    image: new URL('./images/pic06.jpg', import.meta.url).href,
    evaluate: 28,
    like: 128,
  },
])

const ThemeChangeBtnArray = reactive([
  {
    label: 'Default主题',
    key: 'default',
  },
  {
    label: 'Dark主题',
    key: 'dark',
  },
  {
    label: 'BlueOrWhite主题',
    key: 'blueOrWhite',
  },
])

/**
 * 1. 创建一个link标签，引入默认的CSS文件
 * 2. 根据不同的主题来进行link标签的CSS内容切换，从而实现主题切换
 */
const FileChange = () => {
  const link: HTMLLinkElement = document.createElement('link')
  link.type = 'text/css'
  link.rel = 'stylesheet'
  link.href = CSSHerf.value
  document.getElementsByTagName('head')[0].appendChild(link)
}

const themeChange = (item?: { key: String; label: String }) => {
  if (item) {
    CSSHerf.value = `src/views/CSSTheme/StaticChange/FileChange/theme/${item.key}.css`
  }

  const link = document.querySelector(
    'link[rel="stylesheet"]'
  ) as HTMLLinkElement

  if (link) {
    link.href = CSSHerf.value
  } else {
    FileChange()
  }
}

const gray = () => {
  const html = document.getElementsByTagName('html')[0]
  html.style.filter = 'grayscale(1)'
}

onBeforeMount(() => {
  themeChange()
})
</script>

<style scoped>
@import url('./theme/layout.css');
</style>
