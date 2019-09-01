<template>
  <b-navbar toggleable="lg" type="dark" variant="dark" fixed = "top">
    <b-navbar-brand href="https://ningenMe.net"><span class="linkline">ningenMe.net</span></b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            
            <b-navbar-nav right>
              <b-nav-item target="_blank" href="https://twitter.com/ningenMe"><span class="linkline">Twitter</span></b-nav-item>
              <b-nav-item target="_blank" href="https://github.com/ningenMe"><span class="linkline">Github</span></b-nav-item>
            </b-navbar-nav>
            
            <b-nav-item-dropdown text="Blog" right>
              <b-dropdown-item target="_blank" href="https://qiita.com/ningenMe"><span class="linkline">Qiita</span></b-dropdown-item>
              <b-dropdown-item target="_blank" href="https://ningenme.hatenablog.com"><span class="linkline">Hatena</span></b-dropdown-item>
              <b-dropdown-item target="_blank" href="https://profile.ameba.jp/ameba/ningenme"><span class="linkline">Ameba</span></b-dropdown-item>
            </b-nav-item-dropdown>
            
            <b-nav-item-dropdown text="Compro" right>
              <b-dropdown-item target="_blank" href="https://atcoder.jp/users/ningenMe"><span class="linkline">AtCoder</span></b-dropdown-item>
              <b-dropdown-item target="_blank" href="https://codeforces.com/profile/ningenMe"><span class="linkline">Codeforces</span></b-dropdown-item>
              <b-dropdown-item target="_blank" href="https://yukicoder.me/users/4145"><span class="linkline">yukicoder</span></b-dropdown-item>
              <b-dropdown-item target="_blank" href="https://csacademy.com/user/ningenMe"><span class="linkline">CSAcademy</span></b-dropdown-item>
            </b-nav-item-dropdown>
            
          </b-navbar-nav>
        </b-collapse>
  </b-navbar> 
</template>

