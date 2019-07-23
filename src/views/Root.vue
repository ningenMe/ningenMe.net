<template>
  <div class="root">
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        
        <!-- motivation -->
        <v-flex xs12>
          <v-card color="indigo lighten-5">
            <v-card-text class="px-0">Programing and Comic</v-card-text>
          </v-card>
        </v-flex>

        <!-- profile -->
        <v-flex xs12>
          <v-card color="indigo lighten-5">
            <v-layout>
              <v-flex xs4>
                <v-img
                  src="img/prof.png"
                  height="140px"
                  contain
                ></v-img>
              </v-flex>

              <v-flex xs8>
                <div class="font-weight-medium font-italic display-1">くる (ningenMe)</div>
                      <br/>
                      競技プログラミングと漫画を描くのが好き。<br />
                      社会人です。<br />
                      転職のお誘いやお仕事などいつでも募集中です。<br/>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>

        <!-- Creation -->
        <v-flex xs12>
          <v-card color="indigo lighten-5">
            <v-toolbar color="grey darken-3" dark height="24px" flat class="font-italic">
              <v-toolbar-title>Creation</v-toolbar-title>
            </v-toolbar>
            <v-card-text class="px-30">
              <div v-for="(e, i) in creation" v-bind:key="i">
                <div style="display:flex;">
                  <div class="font-weight-bold font-italic" style="margin-right:auto;">
                    {{e.type}} : 
                    <a href="e.link" target="_blank">{{e.name}} </a>
                  </div>
                </div>
              </div>              
            </v-card-text>
          </v-card>
        </v-flex>

        <!-- Activity -->
        <v-flex xs12>
          <v-card color="indigo lighten-5">
            <v-toolbar color="grey darken-3" dark height="24px" flat class="font-italic">
              <v-toolbar-title>Activity</v-toolbar-title>
            </v-toolbar>
            <v-card-text class="px-30">
              <div v-for="(e, i) in activity" v-bind:key="i">
                <div style="display:flex;">
                  <div class="font-weight-bold" style="margin-right:auto;">
                    {{e.year}} : {{e.text}}
                  </div>
                </div>
              </div>              
            </v-card-text>
          </v-card>
        </v-flex>

        <!-- History -->
        <v-flex xs12>
          <v-card color="indigo lighten-5">
            <v-toolbar color="grey darken-3" dark height="24px" flat class="font-italic">
              <v-toolbar-title>History</v-toolbar-title>
            </v-toolbar>
            <v-card-text class="px-30">
              <div v-for="(e, i) in history" v-bind:key="i">
                <div style="display:flex;">
                  <div class="font-weight-bold" style="margin-right:auto;">
                    {{e.year}} : {{e.text}}
                  </div>
                </div>
              </div>              
            </v-card-text>
          </v-card>
        </v-flex>

        <!-- Programming -->
        <v-flex xs12>
          <v-card color="indigo lighten-5">
            <v-toolbar color="grey darken-3" dark height="24px" flat class="font-italic">
              <v-toolbar-title>Programming</v-toolbar-title>
            </v-toolbar>
            <v-card-text class="px-30">
              <div style="display:flex;">
                <div class="font-weight-bold font-italic" style="margin-right:auto;">
                  language: 
                  <a v-for="(e,i) in language" v-bind:key="i">
                    {{e}},
                  </a>
                  <br />framework: 
                  <a v-for="(e,i) in framework" v-bind:key="i">
                    {{e}},
                  </a>
                  <br />library: 
                  <a v-for="(e,i) in library" v-bind:key="i">
                    {{e}},
                  </a>
                </div>
              </div>            
            </v-card-text>
          </v-card>
        </v-flex>

      </v-layout>
    </v-container>
  </div>
</template>


<script>
  export default {
    data: () => ({
      creation: [
        {
          type: 'Apps',
          name: 'AtCoder偏差値くん',
          link: '#'
        },
        {
          type: 'Comic',
          name: 'くるの作品リスト',
          link: '#'
        },
        {
          type: 'Compro',
          name: '精進記録',
          link: '#'
        },
        {
          type: 'Paper',
          name: 'Phys.Rev.Appl.10,034063',
          link: 'https://journals.aps.org/prapplied/abstract/10.1103/PhysRevApplied.10.034063'
        },
      ],
      activity: [
        {
          year: '2019',
          text: '大阪大学基礎工学研究科専攻賞受賞'
        },
        {
          year: '2019',
          text: '全国統一プログラミング王オンサイト本戦'
        },
        {
          year: '2018',
          text: '基本情報技術者試験合格'
        },
        {
          year: '2018',
          text: '春季応用物理学会英語講演奨励賞受賞'
        }
      ],
      history: [
        {
          year: '2019-20XX',
          text: 'バックエンド開発のWebエンジニア'
        },
        {
          year: '2017-2019',
          text: '大阪大学大学院　基礎工学研究科'
        },
        {
          year: '2013-2017',
          text: '大阪大学　基礎工学部'
        }
      ],
      language: [
        'C++','Python','Java','PHP','JavaScript','FORTRAN'
      ],
      framework: [
        'Laravel','Fuel','Spring Boot','Vue'
      ],
      library: [
        'TensorFlow','GNU scientific library','OpenCV','Bootstrap',
      ]
    })
  }
</script>

