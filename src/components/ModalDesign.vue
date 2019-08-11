<template>
  <b-modal id="modal-design" size="xl" hide-header hide-footer centered>

    <h3>各種デザイン制作</h3>

    <div class="modal-up">
      <p>ロゴ、アイコン、バナー、名刺、チラシ、ノベルティ、WEBサービス等のデザインをご制作いたします。</p>

      <b-row>
        <b-col lg="3" md="6">
          <h5>特急対応可能！</h5>
          <p>内容により一週間以内納品の特急対応のご相談も承っております。<br>
            ※特急対応は2回目以降のご依頼に限ります。</p>
        </b-col>

        <b-col lg="3" md="6">
          <h5>企業様から個人利用まで</h5>
          <p>企業様や事業主様からのご依頼のみでなく、個人利用目的の場合も是非ご相談ください。</p>
        </b-col>

        <b-col lg="3" md="6">
          <h5>イラストや画像調整も</h5>
          <p>動画内のロゴやイラスト素材や写真画像の調整も合わせてお引き受けいたします。</p>
        </b-col>

        <b-col lg="3" md="6">
          <h5>テイスト幅が豊富！</h5>
          <p>ご要望やテーマ、御社イメージ等に合わせてテイストを柔軟に変更いたします。</p>
        </b-col>
      </b-row>
    </div>
    <div class="modal-service">
      <b-row>
        <b-col lg="3" md="6" order-lg="1" order-md="1">
          <b-img src="@/assets/phperkaigi_parker@2x.png" fluid-grow></b-img>
        </b-col>

        <b-col lg="3" md="6" order-lg="5" order-md="4">
          <p class="text-80">【PHPerKaigi 2019】<br>
            パーカー用デザインラフ案の作成<br>
            （採用されているものは別担当の別案です）</p>
        </b-col>

        <b-col lg="3" md="6" order-lg="2" order-md="2">
          <b-img src="@/assets/icon@2x.png" fluid-grow></b-img>
        </b-col>

        <b-col lg="3" md="6" order-lg="6" order-md="4">
          <p class="text-80">【ドラゴンソリティア】<br>
            マップアイコンの制作<br>
            （土台の円錐部分は別担当です）</p>
        </b-col>

        <b-col lg="3" md="6" order-lg="3" order-md="5">
          <b-img src="@/assets/map@2x.png" fluid-grow></b-img>
        </b-col>

        <b-col lg="3" md="6" order-lg="7" order-md="7">
          <p class="text-80">簡易マップの制作</p>
        </b-col>

        <b-col lg="3" md="6" order-lg="4" order-md="6">
          <b-img src="@/assets/meishi@2x.png" fluid-grow></b-img>
        </b-col>

        <b-col lg="3" md="6" order-lg="8" order-md="8">
          <p class="text-80">名刺デザイン</p>
        </b-col>
      </b-row>

      <div class="text-center">
        <p><a class="button-link" href="https://saki-harine.tumblr.com/"><font-awesome-icon :icon="['far', 'images']" />実績・サンプル</a></p>
        <p class="text-80">※その他、サンプルはこちら</p>
      </div>

    </div>

  </b-modal>
</template>