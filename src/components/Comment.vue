<template>
  <div class="comment-component-outer">
    <!-- comment 가 있으면 보이는 컴포넌트 -->
    <div v-if="commentInfo.length > 0">
      <div v-for="(item, index) in commentInfo" :key="index">
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
          <div v-if="item.userId === userId" class="update" @click="item.updateBtn = !item.updateBtn">
            {{ item.updateBtn | updateBtnFilter }}
          </div>
          <div v-if="item.userId === userId" class="line"></div>
          <div v-if="item.userId === userId" class="delete" @click="replyDeleteClicked(item)">
            삭제
          </div>
        </div>
        <div v-if="!item.updateBtn" class="context">
          {{ item.context }}
        </div>
        <div v-else class="add-reply">
          <div class="text-area">
            <textarea v-model="item.updateContext" :placeholder="item.context"></textarea>
          </div>
          <div class="write" @click="reReplyUpdateClicked(item)">
            Modify
          </div>
        </div>

        <!-- comment 에 답글이 있으면 보이는 컴포넌트 -->
        <div v-if="item.reply.length > 0">
          <div v-for="(reply, reIndex) in item.reply" :key="reIndex" class="reply">
            <div class="icon">
              <img src="@/assets/icon/icon_reply.svg">
            </div>
            <div class="right">
              <div class="top">
                <div class="nickname">
                  {{ reply.nickName }}
                </div>
                <div class="time">
                  {{ reply.timeStamp }}
                </div>
                <div v-if="reply.userId === userId" class="update" @click="reply.updateBtn = !reply.updateBtn">
                  {{ reply.updateBtn | updateBtnFilter }}
                </div>
                <div v-if="reply.userId === userId" class="line"></div>
                <div v-if="reply.userId === userId" class="delete" @click="reReplyDeleteClicked(reply)">
                  삭제
                </div>
              </div>
              <!-- 댓글 기본 상태 -->
              <div v-if="!reply.updateBtn" class="context">
                {{ reply.context }}
              </div>
              <!-- 댓글 수정 상태 -->
              <div v-else class="add-reply">
                <div class="text-area">
                  <textarea v-model="reply.updateContext" :placeholder="reply.context"></textarea>
                </div>
                <div class="write" @click="reReplyUpdateClicked(reply)">
                  Modify
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- comment 의 답글 버튼 클릭 시 나타나는 입력 창 -->
        <div v-if="item.addBtn" class="add-reply">
          <div class="icon">
            <img src="@/assets/icon/icon_reply.svg">
          </div>
          <div class="text-area">
            <textarea v-model="item.addReply"></textarea>
          </div>
          <div class="write" @click="reReply(item)">
            Write
          </div>
        </div>

        <div class="line"></div>
      </div>
    </div>
    
    <!-- 항상 보이는 comment 입력 창 -->
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
            userId: 'userId1',
            commentId: '1',
            storeId: '1',
            rootCommentId: '',
            nickName: '크로키',
            timeStamp: '2020.02.29 23:48',
            context: '커피가 친절하고 사장님이 맛있어요',
            addBtn: false,
            addReply: '',
            updateBtn: false,
            updateContext: '',
            reply: [
            {
              userId: 'userId2',
              commentId: '2',
              storeId: '1',
              rootCommentId: '1',
              nickName: '남슬랙',
              timeStamp: '2020.02.29 23:48',
              context: '감사합니다~^^',
              updateBtn: false,
              updateContext: ''
            },
            {
              userId: 'userId2',
              commentId: '4',
              storeId: '1',
              rootCommentId: '1',
              nickName: '남슬랙',
              timeStamp: '2020.02.29 23:48',
              context: '또 와주세요!',
              updateBtn: false,
              updateContext: ''
            }
            ]
          },
          {
            userId: 'userId1',
            commentId: '3',
            storeId: '1',
            rootCommentId: '',
            nickName: '크로키',
            timeStamp: '2020.02.29 23:48',
            context: '커피가 친절하고 사장님이 맛있어요',
            reply: [],
            addBtn: false,
            addReply: '',
            updateBtn: false,
            updateContext: ''
          },
        ]
      }
    },
    data() {
      return {
        replyContents: ''
      }
    },
    computed: {
      userId() {
        return 'userId2'
      }
    },
    filters: {
      updateBtnFilter(value) {
        if(value) {
          return '취소'
        } else {
          return '수정'
        }
      }
    },
    methods: {
      reply() {
        if(!this.replyContents) {
          alert('내용을 입력해 주세요.')
          return
        }
        console.log('reply Btn Clicked', this.replyContents);
        this.$emit('addReply', this.replyContents)
      },
      reReply(item) {
        if(!item.addReply) {
          alert('내용을 입력해 주세요.')
          return
        }
        console.log('reReply Btn Clicked', item.addReply);
        this.$emit('addReReply', item)
      },
      replyUpdateClicked(item) {
        if(!item.updateContext) {
          alert('내용을 입력해 주세요.')
          return;
        }
        this.$emit('updateReply', item)
        console.log('parent reply update', item.updateContext);
      },
      replyDeleteClicked(item) {
        let result = confirm('정말 삭제하시겠습니까?')
        if(result) {
          this.$emit('deleteReply', item)
        }
        console.log('parent reply delete', item.commentId);
      },
      reReplyUpdateClicked(reply) {
        if(!reply.updateContext) {
          alert('내용을 입력해 주세요.')
          return;
        }
        this.$emit('updateReReply', reply)
        console.log('child reply update', reply.updateContext);
      },
      reReplyDeleteClicked(reply) {
        let result = confirm('정말 삭제하시겠습니까?')
        if(result) {
          this.$emit('deleteReReply', reply)
        }
        console.log('child reply delete', reply.commentId);
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
      box-sizing: border-box;
      display: flex;
      width: 100%;
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
      .update {
        color: #404040;
        margin: auto 0px auto auto;
        justify-self: flex-end;
        padding-right: 5px;
      }
      .line {
        width: 0.5px;
        height: 15px;
        margin: auto 0px;
        border: 0px;
        background-color: #707070;
      }
      .delete {
        color: #404040;
        margin: auto 0px;
        padding-left: 4px;
        justify-self: flex-end;
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
        width: 100%;
        box-sizing: border-box;
        margin-top: 2px;
      }
    }
    .add-reply {
      display: flex;
      width: 100%;
      padding-top: 5px;
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
        height: 52px;
        width: 100%;
        flex: 1 1 auto;
        textarea {
          box-sizing: border-box;
          padding: 10px;
          height: 52px;
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