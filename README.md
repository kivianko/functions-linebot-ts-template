# functions-linebot-ts-template

Firebase Functions × TypeScript × LINEBOT SDK のテンプレート

## 実行環境

`Node 16`

## 初期設定

### 1. リポジトリクローン

```
$ git clone https://github.com/kivianko/functions-linebot-ts-template.git
```

### 2. パッケージをインストール

```
$ cd functions && npm install
```

### 3. ルートディレクトリに移動して、.firebaserc を書き換える

```
{
  "projects": {
    "default": "{project-id}"
  }
}
```

### 4. functions ディレクトリで環境変数を設定する。

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

### 5. デプロイ

```
firebase deploy --only functions
```
