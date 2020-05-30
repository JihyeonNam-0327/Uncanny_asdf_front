<template>
  <div class="jhj-test-page-outer">

  <div id="wrapper2">
    <div id="columns2">
      <figure v-for="(item,index) in pictures2" :key="index">
        <img :src="item">
      </figure>
    </div>
  </div>

  <div id="wrapper3">
    <div id="columns3">
      <figure v-for="(item,index) in pictures3" :key="index">
        <img :src="item">
      </figure>
    </div>
  </div>



    <!-- <div class="picture-outer">
      <div class="picture-inner" v-for="(item,index) in pictures" :key="index">
         <img :src="item" :background-image:url("item") alt="">
        <div :style="background-image: url(item);"/> 
      </div>
    </div>      -->

  </div>
</template>

<script>
export default {
  data() {
    return {
      pictures2: [
        'http://storage.googleapis.com/cr-resource/image/61f67c390db20cf04a3507c13b41ffa2/seyoungb/800/48bdda6a96253be39b7befa259235291.jpg',
        'http://storage.googleapis.com/cr-resource/image/61f67c390db20cf04a3507c13b41ffa2/seyoungb/800/4bce368f1f21e7cc611f7b98be341a7e.jpg',
        'http://storage.googleapis.com/cr-resource/image/61f67c390db20cf04a3507c13b41ffa2/seyoungb/800/f48de9cfdbfc8f8000e56dbb2c30500b.jpg',
        'http://storage.googleapis.com/cr-resource/image/61f67c390db20cf04a3507c13b41ffa2/seyoungb/800/a7374c26a3255cf5e76b8de10373eca4.jpg',
        'http://storage.googleapis.com/cr-resource/image/61f67c390db20cf04a3507c13b41ffa2/seyoungb/800/4d17a06834077829397a66b1258ce67e.jpg',
        'http://storage.googleapis.com/cr-resource/image/61f67c390db20cf04a3507c13b41ffa2/seyoungb/800/b7f0fb7fb6067c4834c4af740d38c127.jpg',
        'http://storage.googleapis.com/cr-resource/image/61f67c390db20cf04a3507c13b41ffa2/seyoungb/800/1969ec0e64876574af8fcef4c694e43f.jpg',
        'http://storage.googleapis.com/cr-resource/image/61f67c390db20cf04a3507c13b41ffa2/seyoungb/800/23b8c70dbc62a5659af7994e67615ec2.jpg',
        'http://storage.googleapis.com/cr-resource/image/61f67c390db20cf04a3507c13b41ffa2/seyoungb/800/3247721a202164eb584e644f07a3f977.jpg',
        'http://storage.googleapis.com/cr-resource/image/61f67c390db20cf04a3507c13b41ffa2/seyoungb/800/31093866b5bc4059875bb2f565c18d45.jpg',
        'http://storage.googleapis.com/cr-resource/image/61f67c390db20cf04a3507c13b41ffa2/seyoungb/800/c21a5dd17654e244d491da3a68e1f95f.jpg',
        'http://storage.googleapis.com/cr-resource/image/61f67c390db20cf04a3507c13b41ffa2/seyoungb/800/92ab99b01a6ccab8d9e0835b69b52966.jpg',
        'http://storage.googleapis.com/cr-resource/image/61f67c390db20cf04a3507c13b41ffa2/seyoungb/800/4e5bc3ef2fce35af0e8c905fb0ba6b68.jpg',
        'http://storage.googleapis.com/cr-resource/image/61f67c390db20cf04a3507c13b41ffa2/seyoungb/800/dfbb318c81097e3833f5d199940422d1.jpg',
        'http://storage.googleapis.com/cr-resource/image/61f67c390db20cf04a3507c13b41ffa2/seyoungb/800/84e964175d8ebdf7906e6405e819747f.jpg',            
        'http://storage.googleapis.com/cr-resource/image/61f67c390db20cf04a3507c13b41ffa2/seyoungb/800/b7c13b48198e8726b0e9aace702597fc.jpg',
        'http://storage.googleapis.com/cr-resource/image/61f67c390db20cf04a3507c13b41ffa2/seyoungb/800/bd9d4032c52b39e434075e5bbcbfe050.jpg',
        'http://storage.googleapis.com/cr-resource/image/61f67c390db20cf04a3507c13b41ffa2/seyoungb/800/8b8e223c9933c624d3a49bf8bd29940e.jpg',
        'http://storage.googleapis.com/cr-resource/image/61f67c390db20cf04a3507c13b41ffa2/seyoungb/800/c16d710969213f99641d921740a36075.jpg',
        'http://storage.googleapis.com/cr-resource/image/61f67c390db20cf04a3507c13b41ffa2/seyoungb/800/705ca95ef26d5727c2d6f6fce8abfe24.jpg',
        'http://storage.googleapis.com/cr-resource/image/61f67c390db20cf04a3507c13b41ffa2/seyoungb/800/8dd934288ca690513ebe738fe99c0f7f.jpg',
      ],
      pictures3: [
        '//storage.googleapis.com/cr-resource/image/89f3c4d79c5a3b72c51b17de5928b0ea/arch2/670/233803cdda0881da87502b1ece1f6a15.png',
        '//storage.googleapis.com/cr-resource/image/89f3c4d79c5a3b72c51b17de5928b0ea/arch2/670/65575a777cd7da0e73283303bcc93230.png',
        '//storage.googleapis.com/cr-resource/image/89f3c4d79c5a3b72c51b17de5928b0ea/arch2/670/1a947b4116d2c63205f309d73c6b9eb2.png',
        '//storage.googleapis.com/cr-resource/image/89f3c4d79c5a3b72c51b17de5928b0ea/arch2/670/4a3b0c35ded25c3a5b5d1a47506c0b3f.png',

      ],
      example: [
        '//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/cinderella.jpg',
        '//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/rapunzel.jpg',
        '//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/belle.jpg',
        '//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/mulan_2.jpg',
        '//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/sleeping-beauty.jpg',
        '//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/pocahontas_2.jpg',
        '//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/snow-white.jpg',
        '//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/ariel.jpg',
        '//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/tiana.jpg'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .jhj-test-page-outer {


    #wrapper2 {
      max-width: 68rem;
      margin: 5rem auto;
      #columns2 {
        column-width: 220px;
        column-gap: 10px;
        padding: 0 20px;
        @media(max-width:480px){  
          column-count: 1;
          padding: 0 10px;
        }
        figure {
          display: inline-block;
          margin-bottom: 5px;
          img {
            width: 100%;
          }
          /* figcaption {
            line-height: 0;
          } */
        }
      }
      #columns2:hover figure:not(:hover) {
        opacity: 0.4;
      }
    }

    #wrapper3 {
      max-width: 68rem;
      margin: 5rem auto;
      #columns3 { 
        column-count: 4;
        column-gap: 10px;
        padding: 0 20px;
        @media(max-width:480px){  
          column-count: 1;
          padding: 0 10px;
        }
        figure {
          display: inline-block;
          margin-bottom: 5px;
          img {
            width: 100%;
          }
          /* figcaption {
            line-height: 0;
          } */
        }
      }
      #columns3:hover figure:not(:hover) {
        opacity: 0.4;
      }
    }







    /* .picture-outer {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;

      width: 93vh;
      border: 1px solid red;
      .picture-inner{
        
        img{
          width: 30vh;
          height: 30vh;
          padding: 10px;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center center;
        }
      }
    } */
  }
</style>