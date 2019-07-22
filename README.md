# ningenMe.net.UI

## 新規プロジェクト  
- 初期化  
`vue create hoge`  
vue routerとvuexを選ぶ  
- vue.config.jsの追加  
```
module.exports = {
    publicPath: '/hoge/'
    }
```
- .htaccessの追加  
```
<IfModule mod_rewrite.c>  
  RewriteEngine On  
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f  
  RewriteCond %{REQUEST_FILENAME} !-d  
  RewriteRule . /hoge/ [L]    
</IfModule>  
```
