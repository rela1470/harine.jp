<template>
  <div class="pt-5 pb-5">

    <h2>サービス</h2>

    <p>エンジニア業務は埋まり気味のため、イラスト制作・映像編集・デザイン制作を優先的にお引き受けしております。</p>
    <p>※リアルタイムスライドショーはリニューアル中です。再開までしばらくお待ち下さい。</p>
    <p>※その他サービスは、サービス見直しのため一時受注を中止しております。</p>

    <b-container class="bv-example-row">


      <b-row>
        <b-col md="4" v-b-modal.modal-art-direction>
          <b-img src="@/assets/service-art@2x.png" fluid></b-img>
        </b-col>

        <b-col md="4" v-b-modal.modal-illust>
          <b-img src="@/assets/service-illust@2x.png" fluid></b-img>
        </b-col>

        <b-col md="4" v-b-modal.modal-movie>
          <b-img src="@/assets/service-movie@2x.png" fluid></b-img>
        </b-col>
      </b-row>

      <b-row>
        <b-col md="4" v-b-modal.modal-design>
          <b-img src="@/assets/service-design@2x.png" fluid></b-img>
        </b-col>

        <b-col md="4">
          <b-img src="@/assets/service-slide@2x.png" fluid></b-img>
        </b-col>


        <b-col md="4">
          <b-img src="@/assets/service-etc@2x.png" fluid></b-img>
        </b-col>
      </b-row>

      <ModalArtDirection></ModalArtDirection>
      <ModalIllust></ModalIllust>
      <ModalMovie></ModalMovie>
      <ModalDesign></ModalDesign>

    </b-container>

  </div>
</template>