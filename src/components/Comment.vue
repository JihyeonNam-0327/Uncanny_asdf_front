<template>
  <div class="comment-component-outer">
    <div class="" v-for="(item, index) in commentInfo" :key="index">
      <div class="top">
        <div class="nickname">
          {{ item.nickName }}
        </div>
        <div class="time">
          {{ item.timeStamp }}
        </div>
        <div class="button" @click="item.addBtn = !item.addBtn">
          <img src="@/assets/icon/icon_reply_with_text.svg" />
        </div>
      </div>
      <div class="context">
        {{ item.context }}
      </div>
      <div v-if="item.reply.nickName" class="reply">
        <div class="icon">
          <img src="@/assets/icon/icon_reply.svg">
        </div>
        <div class="right">
          <div class="top">
            <div class="nickname">
              {{ item.reply.nickName }}
            </div>
            <div class="time">
              {{ item.reply.timeStamp }}
            </div>
          </div>
          <div class="context">
            {{ item.reply.context }}
          </div>
        </div>
      </div>
      <div v-if="item.addBtn" class="add-reply">
        <div class="icon">
          <img src="@/assets/icon/icon_reply.svg">
        </div>
        <div class="text-area">
          <textarea v-model="item.addContents"></textarea>
        </div>
        <div class="write" @click="reReply(item)">
          Write
        </div>
      </div>

      <div class="line"></div>
    </div>
    
    <div class="add-reply">
      <div class="text-area">
        <textarea v-model="replyContents"></textarea>
      </div>
      <div class="write" @click="reply">
        Write
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      commentInfo: {
        type: Array,
        default: () => [
          {
            nickName: '크로키',
            timeStamp: '2020.02.29 23:48',
            context: '커피가 친절하고 사장님이 맛있어요',
            reply: {
              nickName: '남슬랙',
              timeStamp: '2020.02.29 23:48',
              context: '감사합니다~^^'
            },
            addBtn: false,
            addContents: ''
          },
          {
            nickName: '크로키',
            timeStamp: '2020.02.29 23:48',
            context: '커피가 친절하고 사장님이 맛있어요',
            reply: {},
            addBtn: false,
            addContents: ''
          },
        ]
      }
    },
    data() {
      return {
        addReply: true,
        reReplyContents: '',
        replyContents: ''
      }
    },
    methods: {
      reply() {
        console.log('reply Btn Clicked', this.replyContents);
      },
      reReply(item) {
        console.log('reReply Btn Clicked', item.addContents);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .comment-component-outer {
    width: 100%;
    background: #F7F7F794 0% 0% no-repeat padding-box;
    font-size: 13px;
    line-height: 19px;
    padding: 10px;
    .top {
      display: flex;
      .nickname {
        color: #404040;
        font-weight: bold;
        margin: auto 5px auto 0px; 
      }
      .time {
        color: #888888;
        margin: auto 5px auto 0px; 
      }
      .button {
        margin: auto 0;
        display: flex;
        img {
          margin: auto 0;
        }
      }
    }
    .context {
      color: #404040;
      margin-bottom: 5px;
    }
    .reply {
      display: flex;
      width: 100%;
      .icon {
        margin-right: 5px;
        display: flex;
        img {
          margin-top: 4px;
          margin-bottom: auto;
        }
      }
      .right {
        
      }
    }
    .add-reply {
      display: flex;
      width: 100%;
      .icon {
        margin-right: 5px;
        display: flex;
        img {
          margin-top: 4px;
          margin-bottom: auto;
        }
      }
      .text-area {
        margin: auto 5px auto 0px;
        height: 50px;
        width: 100%;
        flex: 1 1 auto;
        textarea {
          padding: 10px;
          height: 50px;
          width: 100%;
          overflow: auto;
          outline: none;
          -webkit-box-shadow: none;
          -moz-box-shadow: none;
          box-shadow: none;
          resize: none;
          border: 1px solid #707070;
          background-color: #FFFFFF;
        }
      }
      .write {
        flex: 0 0 auto;
        width: 62px;
        height: 50px; 
        border: 1px solid #707070;
        background-color: #FFFFFF;
        line-height: 50px;
        text-align: center;
      }
    }
    .line {
      width: 100%;
      height: 0px;
      border: 0.5px solid rgb(206, 206, 206);
      margin: 10px 0px;
      color: #404040;
    }
  }
</style>