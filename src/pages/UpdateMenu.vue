/* eslint-disable vue/no-parsing-error */
/* eslint-disable vue/no-parsing-error */
<template>
  <div class="update-menu-outer">
    <header-component class="header-component" leftType="historyback" centerText="메뉴 수정" @backButtonClick="back"></header-component>

    <div class="horizontal-line"></div>

    <div class="menu-info-outer">
      <div class="desc">
        <!--eslint-disable-next-line vue/no-parsing-error-->
        <p>대표메뉴</p>
        <p>메뉴명</p>
        <p>가격</p>
      </div>
      <div class="menu-info" v-for="(item, index) in menuList" :key="index">
        <div class="toggle-outer">
          <toggle-button class="toggle" v-model="item.isMain" :width="45" :height="24" :color="{checked: '#37ABDA', unchecked: '#E5E5E5'}"/>
        </div>
        <input-box class="name" placeHolder="" inputType="text" v-model="item.name"></input-box>
        <input-box class="price" placeHolder="0" inputType="number" v-model="item.price"></input-box>
        <img v-if="index === 0" @click="plusMenuItem" src="@/assets/icon/icon_plus_circle.svg"/>
        <img v-else @click="minusMenuItem(item)" src="@/assets/icon/icon_minus_circle.svg"/>
      </div>
    </div>

  </div>
</template>

<script>
  import HeaderComponent from '@/components/HeaderComponent'
  import InputBox from '@/components/InputBox'

  export default {
    created() {
      this.signitureMenu = this.$route.params.signitureMenu
      this.wholeMenu = this.$route.params.wholeMenu
      this.getMenuList()
    },
    components: {
      HeaderComponent,
      InputBox
    },
    data() {
      return {
        test: '',
        signitureMenu: [],
        wholeMenu: [],
        menuList: []
      }
    },
    methods: {
      plusMenuItem() {
        this.menuList.push({inMain: false, name: '', price: 0})
      },
      minusMenuItem(item) {
        var index = this.menuList.indexOf(item);
        if (index !== -1) {
          this.menuList.splice(index, 1)
        }
      },
      back() {
        this.$router.go(-1)
      },
      getMenuList() {
        this.signitureMenu.forEach(item => {
          this.menuList.push({
            isMain: true,
            name: item.name,
            price: item.price
          })
        })
        this.wholeMenu.forEach(item => {
          this.menuList.push({
            isMain: false,
            name: item.name,
            price: item.price
          })
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .update-menu-outer {
    position: relative;
    width: 100%;
    height: 100vh;
    .header-component {
      width: calc(100% - 16px);
    }
    .horizontal-line {
      height: 10px;
      background-color: #EBEBEB;
    }
    .menu-info-outer {
      padding: 0 15px;
      .desc {
        display: flex;
        width: 100%;
        p {
          width: 20%;
        }
        p:nth-child(2) {
          width: calc((100%-70px)*0.30);
        }
        p:last-child {
          width: calc((100%-70px)*0.35);
          margin-left: 10px;
        }

      }
      .menu-info {
        display: flex;
        width: 100%;
        .toggle-outer {
          display: flex;
          .toggle{
            width: calc((100%-70px)*0.23);
            margin-top: auto;
          }
        }
        .name {
          margin-top: auto;
          width: calc((100%-70px)*0.28);;
          margin-left: 22px;
          margin-right: 10px;
          input {
            height: 30px;
          }
        }
        .price {
          position: relative;
          margin-top: auto;
          width: calc((100%-70px)*0.35);
          margin-left: 10px;
          margin-right: 10px;
          input {
            height: 30px;
          }
        }
        .price:before {
          position: absolute;
          content: "₩";
          right: 12px;
          top: 8px;
        }
        img {
          margin: auto;
          position: relative;
          top: 4px;
        }
      }
    }
  }
</style>