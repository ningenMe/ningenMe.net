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
                <v-card flat>
                  <h5>くる (ningenMe)</h5>
                </v-card>
                
                <v-card flat>
                  <v-card-text class="px-0">
                    競技プログラミングと漫画を描くのが好き。<br />
                    社会人です。<br />
                    転職のお誘いやお仕事などいつでも募集中です。
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>

        <!-- Creation -->
        <v-flex xs12>
          
          <v-card color="indigo lighten-5">
            <v-card-title>
              <span class="title font-weight-light">Creation</span>
            </v-card-title>
            <v-card-text class="px-0">
              
            </v-card-text>
          </v-card>
        </v-flex>

      </v-layout>
    </v-container>
  </div>
</template>
