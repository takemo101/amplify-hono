import { defineBackend } from "@aws-amplify/backend";

/**
 * Amplify HostingでHonoアプリケーションを静的サイトとしてホスティングする場合、
 * バックエンド関数は不要です。
 * 静的ファイルはamplify.ymlのビルドプロセスで生成され、Amplify Hostingにデプロイされます。
 */
export const backend = defineBackend({
    // バックエンド関数は不要（静的サイトとしてホスティング）
});
