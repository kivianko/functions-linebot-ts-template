# functions-linebot-ts-template

Firebase Functions × TypeScript × LINEBOT SDK のテンプレート

## 実行環境

`Node 18`

## 初期設定

### 1. リポジトリクローン

```
$ git clone https://github.com/kivianko/functions-linebot-ts-template.git <プロジェクトのディレクトリ>
```

### 2. ディレクトリに移動

```
$ cd <プロジェクトのディレクトリ>
```

### 3. .git を初期化

```
$ rm -rf ./.git/
```

```
$ git init
```

### 4. パッケージをインストール

```
$ cd functions && npm install
```

### 5. ルートディレクトリに移動して、.firebaserc を書き換える

```
{
  "projects": {
    "default": "{project-id}"
  }
}
```

### 6. functions ディレクトリで環境変数を設定する。

functions の中に移動させる。

```
$ cd functions
$ touch .runtimeconfig.json
```

functions/.runtimeconfig.json

```
{
  "line": {
    "channel_access_token": "{LINEチャンネルアクセストークン}",
    "channel_secret": "{LINEチャンネルシークレット}"
  }
}
```

firebase config に set する。

```
$ npm run config
```

### 7. デプロイ

```
firebase deploy --only functions
```
