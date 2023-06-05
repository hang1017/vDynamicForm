// vite.config.ts
import { resolve } from "path";
import { defineConfig } from "file:///Users/chenshuhang/Documents/git/alita/vDynamicForm/node_modules/.pnpm/vite@4.3.9/node_modules/vite/dist/node/index.js";
import vue from "file:///Users/chenshuhang/Documents/git/alita/vDynamicForm/node_modules/.pnpm/@vitejs+plugin-vue@3.2.0_vite@4.3.9+vue@3.3.4/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import dts from "file:///Users/chenshuhang/Documents/git/alita/vDynamicForm/node_modules/.pnpm/vite-plugin-dts@1.7.3_vite@4.3.9/node_modules/vite-plugin-dts/dist/index.mjs";

// package.json
var package_default = {
  name: "@alitajs/vdform",
  version: "0.0.1-alpha.0",
  description: "",
  type: "module",
  types: "./dist/index.d.ts",
  main: "./dist/@alitajs/vdform.umd.cjs",
  module: "./dist/@alitajs/vdform.js",
  exports: {
    ".": {
      import: "./dist/pcBusiness.js",
      require: "./dist/pcBusiness.umd.cjs"
    },
    "./dist/style.css": "./dist/style.css"
  },
  scripts: {
    dev: "initial-scan docs && vitepress dev .docs --host",
    build: "vite build",
    publish: "npm publish --access public",
    "site:build": "initial-scan docs && cross-env NODE_ENV=production vitepress build .docs",
    serve: "cross-env NODE_ENV=production vitepress serve .docs --host",
    deploy: "gh-pages -d .docs/.vitepress/dist -t true",
    "docs-build-deploy": "yarn docs-build && yarn docs-deploy",
    changelog: "conventional-changelog -p angular -i CHANGELOG.md -s",
    lint: "eslint src/**/*.{vue,js,ts,tsx}",
    "lint-fix": "yarn lint -- --fix",
    release: "np"
  },
  keywords: [],
  author: "hang1017",
  license: "MIT",
  devDependencies: {
    "@ruabick/md-demo-plugins": "latest",
    "@ruabick/vite-plugin-gen-temp": "latest",
    "@ruabick/vitepress-demo-block": "latest",
    "@ruabick/vite-plugin-gen-api-doc": "latest",
    "@vitejs/plugin-vue": "^3.0.1",
    "cross-env": "^7.0.3",
    eslint: "^8.20.0",
    "gh-pages": "^4.0.0",
    np: "^7.6.2",
    prettier: "^2.7.1",
    vite: "latest",
    "vite-plugin-dts": "^1.4.0",
    vitepress: "latest",
    vue: "latest",
    "@typescript-eslint/eslint-plugin": "^5.33.1",
    "@typescript-eslint/parser": "^5.33.1",
    "eslint-define-config": "^1.6.0",
    "eslint-plugin-import": "^2.26.0",
    "eslint-plugin-node": "^11.1.0"
  },
  dependencies: {
    "ant-design-vue": "3.2.20"
  }
};

// vite.config.ts
var __vite_injected_original_dirname = "/Users/chenshuhang/Documents/git/alita/vDynamicForm";
var vite_config_default = defineConfig({
  plugins: [vue(), dts()],
  build: {
    lib: {
      entry: resolve(__vite_injected_original_dirname, "./src/index.ts"),
      name: "@alitajs/vdform",
      // the proper extensions will be added
      fileName: "@alitajs/vdform"
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      // @ts-ignore
      external: ["vue", ...Object.keys(package_default.dependencies || {}), ...Object.keys(package_default.peerDependencies || {})],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue"
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAicGFja2FnZS5qc29uIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL2NoZW5zaHVoYW5nL0RvY3VtZW50cy9naXQvYWxpdGEvdkR5bmFtaWNGb3JtXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvY2hlbnNodWhhbmcvRG9jdW1lbnRzL2dpdC9hbGl0YS92RHluYW1pY0Zvcm0vdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2NoZW5zaHVoYW5nL0RvY3VtZW50cy9naXQvYWxpdGEvdkR5bmFtaWNGb3JtL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSc7XG5pbXBvcnQgZHRzIGZyb20gJ3ZpdGUtcGx1Z2luLWR0cyc7XG5pbXBvcnQgcGFja2FnZUpzb24gZnJvbSAnLi9wYWNrYWdlLmpzb24nXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFt2dWUoKSwgZHRzKCldLFxuICBidWlsZDoge1xuICAgIGxpYjoge1xuICAgICAgZW50cnk6IHJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvaW5kZXgudHMnKSxcbiAgICAgIG5hbWU6ICdAYWxpdGFqcy92ZGZvcm0nLFxuICAgICAgLy8gdGhlIHByb3BlciBleHRlbnNpb25zIHdpbGwgYmUgYWRkZWRcbiAgICAgIGZpbGVOYW1lOiAnQGFsaXRhanMvdmRmb3JtJyxcbiAgICB9LFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIC8vIFx1Nzg2RVx1NEZERFx1NTkxNlx1OTBFOFx1NTMxNlx1NTkwNFx1NzQwNlx1OTBBM1x1NEU5Qlx1NEY2MFx1NEUwRFx1NjBGM1x1NjI1M1x1NTMwNVx1OEZEQlx1NUU5M1x1NzY4NFx1NEY5RFx1OEQ1NlxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgZXh0ZXJuYWw6IFsndnVlJywgLi4uT2JqZWN0LmtleXMocGFja2FnZUpzb24uZGVwZW5kZW5jaWVzIHx8IHt9KSwgLi4uT2JqZWN0LmtleXMocGFja2FnZUpzb24ucGVlckRlcGVuZGVuY2llcyB8fCB7fSldLFxuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIC8vIFx1NTcyOCBVTUQgXHU2Nzg0XHU1RUZBXHU2QTIxXHU1RjBGXHU0RTBCXHU0RTNBXHU4RkQ5XHU0RTlCXHU1OTE2XHU5MEU4XHU1MzE2XHU3Njg0XHU0RjlEXHU4RDU2XHU2M0QwXHU0RjlCXHU0RTAwXHU0RTJBXHU1MTY4XHU1QzQwXHU1M0Q4XHU5MUNGXG4gICAgICAgIGdsb2JhbHM6IHtcbiAgICAgICAgICB2dWU6ICdWdWUnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufSk7XG4iLCAie1xuICBcIm5hbWVcIjogXCJAYWxpdGFqcy92ZGZvcm1cIixcbiAgXCJ2ZXJzaW9uXCI6IFwiMC4wLjEtYWxwaGEuMFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gIFwidHlwZVwiOiBcIm1vZHVsZVwiLFxuICBcInR5cGVzXCI6IFwiLi9kaXN0L2luZGV4LmQudHNcIixcbiAgXCJtYWluXCI6IFwiLi9kaXN0L0BhbGl0YWpzL3ZkZm9ybS51bWQuY2pzXCIsXG4gIFwibW9kdWxlXCI6IFwiLi9kaXN0L0BhbGl0YWpzL3ZkZm9ybS5qc1wiLFxuICBcImV4cG9ydHNcIjoge1xuICAgIFwiLlwiOiB7XG4gICAgICBcImltcG9ydFwiOiBcIi4vZGlzdC9wY0J1c2luZXNzLmpzXCIsXG4gICAgICBcInJlcXVpcmVcIjogXCIuL2Rpc3QvcGNCdXNpbmVzcy51bWQuY2pzXCJcbiAgICB9LFxuICAgIFwiLi9kaXN0L3N0eWxlLmNzc1wiOiBcIi4vZGlzdC9zdHlsZS5jc3NcIlxuICB9LFxuICBcInNjcmlwdHNcIjoge1xuICAgIFwiZGV2XCI6IFwiaW5pdGlhbC1zY2FuIGRvY3MgJiYgdml0ZXByZXNzIGRldiAuZG9jcyAtLWhvc3RcIixcbiAgICBcImJ1aWxkXCI6IFwidml0ZSBidWlsZFwiLFxuICAgIFwicHVibGlzaFwiOiBcIm5wbSBwdWJsaXNoIC0tYWNjZXNzIHB1YmxpY1wiLFxuICAgIFwic2l0ZTpidWlsZFwiOiBcImluaXRpYWwtc2NhbiBkb2NzICYmIGNyb3NzLWVudiBOT0RFX0VOVj1wcm9kdWN0aW9uIHZpdGVwcmVzcyBidWlsZCAuZG9jc1wiLFxuICAgIFwic2VydmVcIjogXCJjcm9zcy1lbnYgTk9ERV9FTlY9cHJvZHVjdGlvbiB2aXRlcHJlc3Mgc2VydmUgLmRvY3MgLS1ob3N0XCIsXG4gICAgXCJkZXBsb3lcIjogXCJnaC1wYWdlcyAtZCAuZG9jcy8udml0ZXByZXNzL2Rpc3QgLXQgdHJ1ZVwiLFxuICAgIFwiZG9jcy1idWlsZC1kZXBsb3lcIjogXCJ5YXJuIGRvY3MtYnVpbGQgJiYgeWFybiBkb2NzLWRlcGxveVwiLFxuICAgIFwiY2hhbmdlbG9nXCI6IFwiY29udmVudGlvbmFsLWNoYW5nZWxvZyAtcCBhbmd1bGFyIC1pIENIQU5HRUxPRy5tZCAtc1wiLFxuICAgIFwibGludFwiOiBcImVzbGludCBzcmMvKiovKi57dnVlLGpzLHRzLHRzeH1cIixcbiAgICBcImxpbnQtZml4XCI6IFwieWFybiBsaW50IC0tIC0tZml4XCIsXG4gICAgXCJyZWxlYXNlXCI6IFwibnBcIlxuICB9LFxuICBcImtleXdvcmRzXCI6IFtdLFxuICBcImF1dGhvclwiOiBcImhhbmcxMDE3XCIsXG4gIFwibGljZW5zZVwiOiBcIk1JVFwiLFxuICBcImRldkRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJAcnVhYmljay9tZC1kZW1vLXBsdWdpbnNcIjogXCJsYXRlc3RcIixcbiAgICBcIkBydWFiaWNrL3ZpdGUtcGx1Z2luLWdlbi10ZW1wXCI6IFwibGF0ZXN0XCIsXG4gICAgXCJAcnVhYmljay92aXRlcHJlc3MtZGVtby1ibG9ja1wiOiBcImxhdGVzdFwiLFxuICAgIFwiQHJ1YWJpY2svdml0ZS1wbHVnaW4tZ2VuLWFwaS1kb2NcIjogXCJsYXRlc3RcIixcbiAgICBcIkB2aXRlanMvcGx1Z2luLXZ1ZVwiOiBcIl4zLjAuMVwiLFxuICAgIFwiY3Jvc3MtZW52XCI6IFwiXjcuMC4zXCIsXG4gICAgXCJlc2xpbnRcIjogXCJeOC4yMC4wXCIsXG4gICAgXCJnaC1wYWdlc1wiOiBcIl40LjAuMFwiLFxuICAgIFwibnBcIjogXCJeNy42LjJcIixcbiAgICBcInByZXR0aWVyXCI6IFwiXjIuNy4xXCIsXG4gICAgXCJ2aXRlXCI6IFwibGF0ZXN0XCIsXG4gICAgXCJ2aXRlLXBsdWdpbi1kdHNcIjogXCJeMS40LjBcIixcbiAgICBcInZpdGVwcmVzc1wiOiBcImxhdGVzdFwiLFxuICAgIFwidnVlXCI6IFwibGF0ZXN0XCIsXG4gICAgXCJAdHlwZXNjcmlwdC1lc2xpbnQvZXNsaW50LXBsdWdpblwiOiBcIl41LjMzLjFcIixcbiAgICBcIkB0eXBlc2NyaXB0LWVzbGludC9wYXJzZXJcIjogXCJeNS4zMy4xXCIsXG4gICAgXCJlc2xpbnQtZGVmaW5lLWNvbmZpZ1wiOiBcIl4xLjYuMFwiLFxuICAgIFwiZXNsaW50LXBsdWdpbi1pbXBvcnRcIjogXCJeMi4yNi4wXCIsXG4gICAgXCJlc2xpbnQtcGx1Z2luLW5vZGVcIjogXCJeMTEuMS4wXCJcbiAgfSxcbiAgXCJkZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiYW50LWRlc2lnbi12dWVcIjogXCIzLjIuMjBcIlxuICB9XG59Il0sCiAgIm1hcHBpbmdzIjogIjtBQUEyVSxTQUFTLGVBQWU7QUFDblcsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sU0FBUzs7O0FDSGhCO0FBQUEsRUFDRSxNQUFRO0FBQUEsRUFDUixTQUFXO0FBQUEsRUFDWCxhQUFlO0FBQUEsRUFDZixNQUFRO0FBQUEsRUFDUixPQUFTO0FBQUEsRUFDVCxNQUFRO0FBQUEsRUFDUixRQUFVO0FBQUEsRUFDVixTQUFXO0FBQUEsSUFDVCxLQUFLO0FBQUEsTUFDSCxRQUFVO0FBQUEsTUFDVixTQUFXO0FBQUEsSUFDYjtBQUFBLElBQ0Esb0JBQW9CO0FBQUEsRUFDdEI7QUFBQSxFQUNBLFNBQVc7QUFBQSxJQUNULEtBQU87QUFBQSxJQUNQLE9BQVM7QUFBQSxJQUNULFNBQVc7QUFBQSxJQUNYLGNBQWM7QUFBQSxJQUNkLE9BQVM7QUFBQSxJQUNULFFBQVU7QUFBQSxJQUNWLHFCQUFxQjtBQUFBLElBQ3JCLFdBQWE7QUFBQSxJQUNiLE1BQVE7QUFBQSxJQUNSLFlBQVk7QUFBQSxJQUNaLFNBQVc7QUFBQSxFQUNiO0FBQUEsRUFDQSxVQUFZLENBQUM7QUFBQSxFQUNiLFFBQVU7QUFBQSxFQUNWLFNBQVc7QUFBQSxFQUNYLGlCQUFtQjtBQUFBLElBQ2pCLDRCQUE0QjtBQUFBLElBQzVCLGlDQUFpQztBQUFBLElBQ2pDLGlDQUFpQztBQUFBLElBQ2pDLG9DQUFvQztBQUFBLElBQ3BDLHNCQUFzQjtBQUFBLElBQ3RCLGFBQWE7QUFBQSxJQUNiLFFBQVU7QUFBQSxJQUNWLFlBQVk7QUFBQSxJQUNaLElBQU07QUFBQSxJQUNOLFVBQVk7QUFBQSxJQUNaLE1BQVE7QUFBQSxJQUNSLG1CQUFtQjtBQUFBLElBQ25CLFdBQWE7QUFBQSxJQUNiLEtBQU87QUFBQSxJQUNQLG9DQUFvQztBQUFBLElBQ3BDLDZCQUE2QjtBQUFBLElBQzdCLHdCQUF3QjtBQUFBLElBQ3hCLHdCQUF3QjtBQUFBLElBQ3hCLHNCQUFzQjtBQUFBLEVBQ3hCO0FBQUEsRUFDQSxjQUFnQjtBQUFBLElBQ2Qsa0JBQWtCO0FBQUEsRUFDcEI7QUFDRjs7O0FEdkRBLElBQU0sbUNBQW1DO0FBTXpDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQUEsRUFDdEIsT0FBTztBQUFBLElBQ0wsS0FBSztBQUFBLE1BQ0gsT0FBTyxRQUFRLGtDQUFXLGdCQUFnQjtBQUFBLE1BQzFDLE1BQU07QUFBQTtBQUFBLE1BRU4sVUFBVTtBQUFBLElBQ1o7QUFBQSxJQUNBLGVBQWU7QUFBQTtBQUFBO0FBQUEsTUFHYixVQUFVLENBQUMsT0FBTyxHQUFHLE9BQU8sS0FBSyxnQkFBWSxnQkFBZ0IsQ0FBQyxDQUFDLEdBQUcsR0FBRyxPQUFPLEtBQUssZ0JBQVksb0JBQW9CLENBQUMsQ0FBQyxDQUFDO0FBQUEsTUFDcEgsUUFBUTtBQUFBO0FBQUEsUUFFTixTQUFTO0FBQUEsVUFDUCxLQUFLO0FBQUEsUUFDUDtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
