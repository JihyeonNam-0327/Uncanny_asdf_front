<template>
  <div class="detail-menu">
    <vs-collapse class="menu-collapse">
      <vs-collapse-item>
        <div slot="header" class="header">
          Menu
          <div v-if="signitureMenu.length > 0">
            <p v-for="(item, index) in signitureMenu" :key="index" class="signiture-menu">
              {{item.name}} <span class="dot">・・・</span> {{item.price | priceFilter}}
            </p>
          </div>
        </div>
        <p v-for="(item, index) in wholeMenu" :key="index" class="whole-menu">
          {{item.name}} <span class="dot">・・・</span> {{item.price | priceFilter}}
        </p>
      </vs-collapse-item>
    </vs-collapse>

    <p class="edit-button" @click="editClicked">
      수정
    </p>
  </div>
</template>

<script>
  export default {
    props: {
      signitureMenu: {
        type: Array,
        default() {
          [
            {
              name: '대표메뉴 1',
              price: 2000
            }
          ]
        }
      },
      wholeMenu: {
        type: Array,
        default() {
          [
            {
              name: '기타메뉴 1',
              price: 2000
            },
            {
              name: '기타메뉴 2',
              price: 2000
            }
          ]
        }
      }
    },
    filters: {
      priceFilter(val){
        let num = new Number(val);
        return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,") + " 원"
      }
    },
    methods: {
      editClicked() {
        this.$emit('edit')
      }
    }
  }
</script>

<style lang="scss">
  .detail-menu {
    display: flex;
    width: 100%;
    justify-items: stretch;
    .menu-collapse {
      -webkit-tap-highlight-color: rgba(0,0,0,0);
      -webkit-tap-highlight-color: transparent;
      span {
        position: absolute;
        top: 20% !important;
      }
      .header {
        p {
          font-size: 13.6px;
        }
        .signiture-menu {
          .dot {
            position: relative;
            margin: 0 10px;
          }
        }
      }
      .whole-menu {
        .dot {
          position: relative;
          margin: 0 10px;
        }
      }
    }
    .edit-button {
      margin: 20px 15px 0 auto;
      font-size: 12px;
    }
  }
</style>