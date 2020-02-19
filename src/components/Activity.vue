<template>
  <v-card color="indigo lighten-5">
    <v-toolbar color="grey darken-3" dark height="24px" flat class="font-italic">
      <v-toolbar-title>Activity</v-toolbar-title>
    </v-toolbar>
    <v-card-text class="px-30">
      <div v-for="(e, i) in activity" v-bind:key="i">
        <div style="display:flex;">
          <div class="font-weight-bold" style="margin-right:auto;">
            {{e.year}} : {{e.text}}
            <a v-bind:href="e.link" target="_blank" v-if="e.link != null">#</a>
          </div>
        </div>
      </div>              
    </v-card-text>
  </v-card>

</template>

<script>
  export default {
    data () {
      return {
        activity: [
          {
            year: '2019',
            text: '第一回アルゴリズム実技検定　エキスパート取得'
          },
          {
            year: '2019',
            text: '大阪大学基礎工学研究科専攻賞受賞'
          },
          {
            year: '2019',
            text: '全国統一プログラミング王本戦出場',
            link: 'https://atcoder.jp/contests/nikkei2019-final',
          },
          {
            year: '2018',
            text: '基本情報技術者試験合格'
          },
          {
            year: '2018',
            text: '春季応用物理学会英語講演奨励賞受賞',
            link: 'https://annex.jsap.or.jp/spintro/stage1/schedules/sche.html',
          }
        ],
      }
    }
  }
</script>

