// discord.js モジュールのインポート
const Discord = require("discord.js");

// Discord Clientのインスタンス作成
const client = new Discord.Client();

// トークンの用意
const token = "__token__";

// 準備完了イベントのconsole.logで通知黒い画面に出る。
client.on("ready", () => {
  console.log("ready...");
});

// メッセージがあったら何かをする
client.on("message", (message) => {
  // メッセージの文字列による条件分岐
  if (message.content === "こん") {
    let channel = message.channel;
    let author = message.author.username;
    let reply_text = `こんにちは。${author}様。`;

    // そのチャンネルにメッセージを送信する
    // channel
    message
      .reply(reply_text)
      .then((message) => console.log(`Sent message: ${reply_text}`))
      .catch(console.error);
    return;
  }
});

// Discordへの接続
client.login(token);
