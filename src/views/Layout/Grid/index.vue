<template>
  <div class="Grid-box">
    <h1>Grid元素</h1>

    <h2>display属性</h2>
    <main class="displayInfo-box">
      <h3>display: grid</h3>
      <div class="info">displayItem Top</div>
      <div class="main-content">
        <div :style="{ background: getRandomColor() }" v-for="item in 6">
          {{ item }}
        </div>
      </div>
      <div class="info">displayItem Bottom</div>

      <h3>display: inline-grid</h3>
      <div class="info">displayItem Top</div>
      <div class="main-content-2">
        <div :style="{ background: getRandomColor() }" v-for="item in 6">
          {{ item }}
        </div>
      </div>
      <div class="info">displayItem Bottom</div>
    </main>

    <h2>grid-template-columns&grid-template-rows属性</h2>
    <p>grid-template-columns：设置列宽，指定每一列的宽度是多少</p>
    <p>grid-template-rows：设置行高，指定每一行的高度是多少</p>
    <p>
      这里列宽设置为：grid-template-columns: 100px 200px
      300px;也就是三列，宽度分别为100px 200px 300px
    </p>
    <p>
      这里行高设置为：grid-template-rows: 50px 50px
      50px;也就是三行，高度都是50px
    </p>
    <b style="background-color: red"
      >注意：当我们没有给内容元素设置宽高的时候，内部元素会自动铺满当前所在区域</b
    >
    <main class="grid-template-box">
      <div
        class="item"
        v-for="item in 9"
        :style="{ background: getRandomColor() }"
      >
        {{ item }}
      </div>
    </main>

    <h2>repeat()函数</h2>
    <p>
      repeat()
      可以简化重复的值。该函数接受两个参数，第一个参数是重复的次数，第二个参数是所要重复的值。
    </p>
    <main class="grid-template-box-2">
      <div
        class="item"
        v-for="item in 9"
        :style="{ background: getRandomColor() }"
      >
        {{ item }}
      </div>
    </main>

    <h2>minmax()函数</h2>
    <p>
      minmax() 函数：我们有时候想给网格元素一个最小和最大的尺寸，minmax()
      函数产生一个长度范围，表示长度就在这个范围之中都可以应用到网格项目中。它接受两个参数，分别为最小值和最大值。grid-template-columns:
      1fr 1fr minmax(300px, 2fr) 的意思是，第三个列宽最少也是要
      300px，但是最大不能大于第一第二列宽的两倍。代码以及效果如下：
    </p>
    <main class="minmax-box">
      <div
        class="item"
        v-for="item in 9"
        :style="{ background: getRandomColor() }"
      >
        {{ item }}
      </div>
    </main>

    <h2>auto-fill关键字</h2>
    <p>
      auto-fill：示自动填充，让一行（或者一列）尽可能的容纳更多的单元格，
      grid-template-columns:repeat(auto-fill,200px); 表示列宽是
      200px，但列的数量不固定，只要浏览器容纳的下，就可以放置元素。
      我们可以理解为，使用了这个关键字以后，就可以实现简单的元素响应式布局！
    </p>
    <main class="auto-fill-box">
      <div
        class="item"
        v-for="item in 9"
        :style="{ background: getRandomColor() }"
      >
        {{ item }}
      </div>
    </main>

    <h2>auto关键字</h2>
    <p>
      auto：由浏览器决定长度，通过auto关键字，我们可以轻松实现三列或者两列布局。
      grid-template-columns:100px auto 100px;
      表示第一列/第三列宽度为100px，中间的自适应，宽度根据当前浏览器视口大小决定
    </p>
    <main class="auto-box">
      <div
        class="item"
        v-for="item in 9"
        :style="{ background: getRandomColor() }"
      >
        {{ item }}
      </div>
    </main>

    <h2><label style="color: red">已废弃：</label><del>grid-row-gap</del></h2>
    <h2>row-gap</h2>
    <p>row-gap：行间距</p>
    <main class="grid-row-gap-box">
      <div
        class="item"
        v-for="item in 9"
        :style="{ background: getRandomColor() }"
      >
        {{ item }}
      </div>
    </main>

    <h2>
      <label style="color: red">已废弃：</label><del>grid-column-gap</del>
    </h2>
    <h2>column-gap</h2>
    <p>column-gap：列间距</p>
    <main class="grid-column-gap-box">
      <div
        class="item"
        v-for="item in 9"
        :style="{ background: getRandomColor() }"
      >
        {{ item }}
      </div>
    </main>

    <h2><label style="color: red">已废弃：</label><del>grid-gap</del></h2>
    <h2>gap</h2>
    <p>gap：行+列间距</p>
    <main class="grid-gap-box">
      <div
        class="item"
        v-for="item in 25"
        :style="{ background: getRandomColor() }"
      >
        {{ item }}
      </div>
    </main>

    <h2>grid-template-areas 属性</h2>
    <p>
      grid-template-areas：主要用于定义区域，一个区域由一个或者多个单元格组成
    </p>
    <p>
      简单来说：就是我指定一块区域，将这块区域划分成我想要的份数，比如三份，六份、十份。都是可以的。然后我们再指定这个区域中，哪个元素占几份
      一般这个属性跟网格元素的 grid-area 一起使用
    </p>
    <main class="grid-template-areas-box">
      <div class="box header">Header</div>
      <div class="box sidebar">Sidebar</div>
      <div class="box content">Content</div>
    </main>
    <ul>
      <li>
        注意点1：areas区域内的元素，都必须绑定<b style="background-color: green"
          >grid-area</b
        >样式，如果没有使用就会成为下面的样子
      </li>
      <main class="grid-template-areas-box-2">
        <div class="box header">Header</div>
        <div class="box sidebar">Sidebar</div>
        <div class="box content">Content</div>
      </main>
      <li>
        注意点2：grid-area属性不识别大小写，大写的元素区域名称和小写的区域名称是两个不同的元素
      </li>
      <main class="grid-template-areas-box-3">
        <div class="box Sidebar">Sidebar</div>
        <div class="box sidebar">sidebar</div>
      </main>
    </ul>

    <h2>grid-auto-flow</h2>
    <p>
      grid-auto-flow：该属性决定了，浏览器在布局 grid
      元素的时候，默认使用什么方式进行排列。 例如：先行后列，先列后行...等等。
      该属性有三个值，可以配合使用： ● row：先杭后列，逐行排列元素 ●
      column：先列后行，逐列排列元素 ● dense：自动填补空白区域 范例如下： 1.
      grid-auto-flow: row; || grid-auto-flow: row dense; 2. grid-auto-flow:
      column; || grid-auto-flow: column dense;
    </p>
    <ul>
      <li>
        <h3>grid-auto-flow:row;</h3>
        <main class="grid-auto-flow-row-box">
          <div
            class="item"
            v-for="(item, index) in 7"
            :class="index === 5 ? 'demo' : ''"
            :style="{ background: getRandomColor() }"
          >
            {{ item }}
          </div>
        </main>
        <h3>grid-auto-flow: row dense;</h3>
        <main class="grid-auto-flow-rowDense-box">
          <div
            class="item"
            v-for="(item, index) in 7"
            :class="index === 5 ? 'demo' : ''"
            :style="{ background: getRandomColor() }"
          >
            {{ item }}
          </div>
        </main>
      </li>

      <li>
        <h3>grid-auto-flow:column;</h3>
        <main class="grid-auto-flow-column-box">
          <div
            class="item"
            v-for="(item, index) in 7"
            :class="index === 5 ? 'demo' : ''"
            :style="{ background: getRandomColor() }"
          >
            {{ item }}
          </div>
        </main>
        <h3>grid-auto-flow: column dense;</h3>
        <main class="grid-auto-flow-columnDense-box">
          <div
            class="item"
            v-for="(item, index) in 7"
            :class="index === 5 ? 'demo' : ''"
            :style="{ background: getRandomColor() }"
          >
            {{ item }}
          </div>
        </main>
      </li>
    </ul>

    <h2>justify-items、align-items、place-items 属性</h2>
    <p>
      justify-items 属性设置单元格内容的水平位置（左中右），align-items
      属性设置单元格的垂直位置（上中下） 下面以 justify-items
      属性为例进行讲解，align-items 属性同理，只是方向为垂直方向。
    </p>
    <p>.container { justify-items: start | end | center | stretch; }</p>
    <p>.container { align-items: start | end | center | stretch; }</p>
    <ul>
      <li>
        <p>justify-items</p>
        <main class="grid-justify-items-box justify-items-box-start">
          <div
            class="item"
            v-for="item in 6"
            :style="{ background: getRandomColor() }"
          >
            {{ item }}
          </div>
        </main>
        <main class="grid-justify-items-box justify-items-box-end">
          <div
            class="item"
            v-for="item in 6"
            :style="{ background: getRandomColor() }"
          >
            {{ item }}
          </div>
        </main>
        <main class="grid-justify-items-box justify-items-box-center">
          <div
            class="item"
            v-for="item in 6"
            :style="{ background: getRandomColor() }"
          >
            {{ item }}
          </div>
        </main>
        <main class="grid-justify-items-box justify-items-box-stretch">
          <div
            class="item"
            v-for="item in 6"
            :style="{ background: getRandomColor() }"
          >
            {{ item }}
          </div>
        </main>
      </li>
      <li>
        <p>align-items</p>
        <main class="grid-align-items-box align-items-box-start">
          <div
            class="item"
            v-for="item in 6"
            :style="{ background: getRandomColor() }"
          >
            {{ item }}
          </div>
        </main>
        <main class="grid-align-items-box align-items-box-end">
          <div
            class="item"
            v-for="item in 6"
            :style="{ background: getRandomColor() }"
          >
            {{ item }}
          </div>
        </main>
        <main class="grid-align-items-box align-items-box-center">
          <div
            class="item"
            v-for="item in 6"
            :style="{ background: getRandomColor() }"
          >
            {{ item }}
          </div>
        </main>
        <main class="grid-align-items-box align-items-box-stretch">
          <div
            class="item"
            v-for="item in 6"
            :style="{ background: getRandomColor() }"
          >
            {{ item }}
          </div>
        </main>
      </li>
      <li>
        <p>place-items</p>
        <main class="grid-place-items-box place-items-box-start">
          <div
            class="item"
            v-for="item in 6"
            :style="{ background: getRandomColor() }"
          >
            {{ item }}
          </div>
        </main>
        <main class="grid-place-items-box place-items-box-end">
          <div
            class="item"
            v-for="item in 6"
            :style="{ background: getRandomColor() }"
          >
            {{ item }}
          </div>
        </main>
        <main class="grid-place-items-box place-items-box-center">
          <div
            class="item"
            v-for="item in 6"
            :style="{ background: getRandomColor() }"
          >
            {{ item }}
          </div>
        </main>
        <main class="grid-place-items-box place-items-box-stretch">
          <div
            class="item"
            v-for="item in 6"
            :style="{ background: getRandomColor() }"
          >
            {{ item }}
          </div>
        </main>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { getRandomColor } from '@/utils/funcs'
</script>

<style lang="scss" scoped>
.Grid-box {
  background-color: black;
  width: 100%;
  color: #fff;
  overflow-y: auto;

  .displayInfo-box {
    width: 80%;
    padding: 12px;

    .main-content {
      margin: 0px;
      display: grid;
      grid-template-columns: repeat(3, 200px);
      grid-gap: 5px;
      grid-auto-rows: 50px 50px;
      div {
        width: 100px;
        height: 60px;
      }
    }

    .main-content-2 {
      margin: 0px;
      display: inline-grid;
      grid-template-columns: repeat(3, 200px);
      grid-gap: 5px;
      grid-auto-rows: 50px 50px;

      div {
        width: 100px;
        height: 60px;
      }
    }

    .info {
      display: inline-block;
      font-size: 25px;
      font-weight: bold;
    }
  }

  .grid-template-box {
    display: grid;
    grid-template-columns: 100px 200px 300px;
    grid-template-rows: 50px, 50px, 50px;

    .item {
      width: 80px;
      height: 60px;
    }
  }

  .grid-template-box-2 {
    display: grid;
    grid-template-columns: 100px 200px 300px;
    grid-template-rows: repeat(3, 50px);
  }

  .auto-fill-box {
    display: grid;
    grid-template-columns: repeat(auto-fill, 200px);
    grid-gap: 10px;
    grid-template-rows: repeat(2, 75px);
  }

  .minmax-box {
    display: grid;
    grid-template-columns: 1fr 1fr minmax(300px, 2fr);
    grid-gap: 10px;
    grid-template-rows: repeat(2, 50px);
  }

  .auto-box {
    display: grid;
    grid-template-columns: 100px auto 100px;
    grid-template-rows: repeat(2, 50px);
    grid-gap: 10px;
  }

  .grid-row-gap-box {
    display: grid;
    grid-template-rows: repeat(2, 100px);
    grid-template-columns: repeat(3, 100px);
    row-gap: 15px;
  }

  .grid-column-gap-box {
    display: grid;
    column-gap: 20px;
    grid-template-rows: repeat(2, 50px);
    grid-template-columns: repeat(3, 100px);
  }

  .grid-gap-box {
    display: grid;
    gap: 10px;
    grid-template-rows: repeat(5, 100px);
    grid-template-columns: repeat(5, 100px);
  }

  .grid-template-areas-box {
    padding: 24px;
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(4, 120px);
    grid-template-rows: repeat(4, 80px);
    grid-template-areas:
      '. header header header header'
      'sidebar content content content content'
      'sidebar content content content content'
      'sidebar content content content content';
    color: #444;
    background-color: #fff;
    .box {
      background-color: #444;
      color: #fff;
      border-radius: 5px;
      padding: 20px;
      font-size: 150%;
    }

    .header {
      background-color: #999;
      grid-area: header;
    }

    .sidebar {
      grid-area: sidebar;
    }

    .content {
      grid-area: content;
    }
  }

  .grid-template-areas-box-2 {
    padding: 24px;
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(4, 120px);
    grid-template-areas: '. . Header Header' 'Sidebar Content Content Content' 'Sidebar Content Content Content';
    color: #444;
    background-color: #fff;
    .box {
      background-color: #444;
      color: #fff;
      border-radius: 5px;
      padding: 20px;
      font-size: 150%;
    }

    .header {
      background-color: #999;
    }
  }

  .grid-template-areas-box-3 {
    padding: 24px;
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(4, 120px);
    grid-template-areas: 'Sidebar Sidebar Sidebar sidebar';
    color: #444;
    background-color: #fff;

    .box {
      background-color: #444;
      color: #fff;
      border-radius: 5px;
      padding: 20px;
      font-size: 150%;
    }

    .header {
      background-color: #999;
    }

    .sidebar {
      grid-area: sidebar;
    }

    .Sidebar {
      grid-area: Sidebar;
    }
  }

  .grid-auto-flow-row-box {
    display: grid;
    grid-template-columns: repeat(3, 150px);
    grid-auto-rows: 50px;
    grid-auto-flow: row;
    gap: 5px;
    .demo {
      grid-column-start: span 2;
    }
  }

  .grid-auto-flow-rowDense-box {
    display: grid;
    grid-template-columns: repeat(3, 150px);
    grid-auto-rows: 50px;
    grid-auto-flow: row dense;
    gap: 5px;
    .demo {
      grid-column-start: span 2;
    }
  }

  .grid-auto-flow-column-box {
    display: grid;
    grid-auto-columns: 100px;
    grid-auto-flow: column;
    grid-template-rows: 50px 50px;
    gap: 5px;
    .demo {
      grid-column-start: span 2;
    }
  }

  .grid-auto-flow-columnDense-box {
    display: grid;
    grid-template-columns: 100px 200px 100px;
    grid-auto-flow: row dense;
    gap: 5px;
    grid-auto-rows: 50px;
    .demo {
      grid-column-start: span 2;
    }
  }

  .grid-justify-items-box {
    display: grid;
    grid-template-columns: 100px 200px 100px;
    grid-gap: 5px;
    grid-auto-rows: 50px;

    .item {
      width: 100%;
      height: 100%;
    }
  }
  .justify-items-box-start {
    justify-items: start;
  }

  .justify-items-box-end {
    justify-items: end;
  }

  .justify-items-box-center {
    justify-items: center;
  }
  .justify-items-box-stretch {
    justify-items: stretch;
  }
  .grid-align-items-box {
    display: grid;
    grid-template-columns: 100px 200px 100px;
    grid-auto-rows: 50px;
    gap: 5px;

    .item {
      width: 100%;
      height: 50%;
    }
  }
  .align-items-box-start {
    align-items: start;
  }

  .align-items-box-end {
    align-items: end;
  }

  .align-items-box-center {
    align-items: center;
  }
  .align-items-box-stretch {
    align-items: stretch;
  }

  .grid-align-items-box {
    display: grid;
    grid-template-columns: 100px 200px 100px;
    grid-auto-rows: 50px;
    gap: 5px;
  }

  .place-items-box-start {
    place-items: start;
  }

  .place-items-box-center {
    place-items: center;
  }

  .place-items-box-end {
    place-items: end;
  }

  .place-items-box-stretch {
    place-items: stretch;
  }
}
</style>
