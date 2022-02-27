## typescriptのメモ

気になった部分をメモしていく

#### 環境構築
https://qiita.com/Yuki-Kurita/items/5e449e2c05aaeeef80ac

1. npm init -y
1. npm install --save-dev typescript tslint @types/node
1. ./node_modules/.bin/tslint --init // tslint初期化
1. npx tslint --fix .\src\*.ts // tslintによる修正

```tslint.json
    "rules": {
        "semicolon": [
            true,
            "always"
          ]
    },
```

1. tsconfig.jsonの設定
https://qiita.com/EBIHARA_kenji/items/31b7c1c62426bdabd263

#### zip 解凍
https://usefuledge.com/pb-00008-typescript-uncompress.html

> npm install --save-dev compressing

#### path連結

```ts
import path from 'path';

    // カレントdir nameを返す
    // console.log(__dirname);
    // // 1階層上のdir nameを返す
    // console.log(path.dirname(__dirname));

        if(fs.existsSync(abpath)){
        console.log(`${abpath} ファイルは存在する。`);
        }else{
        console.log(`!!! ${abpath} ファイルは存在しない。`);
    }
```