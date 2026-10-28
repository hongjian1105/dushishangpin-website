# 都市尚品科技展示站

纯 HTML、CSS、JavaScript 静态网站，无需安装依赖或构建。适配手机、平板与桌面端，所有资源均使用相对路径，支持 GitHub Pages 项目子路径。

## GitHub Pages 发布

1. 解压压缩包，将 index.html、style.css、app.js、content.js、assets 文件夹及 .nojekyll 放到仓库根目录（不要再套一层文件夹）。
2. 在仓库的 Settings → Pages 中选择 Deploy from a branch。
3. 选择 main 分支、/(root) 目录，保存并等待 GitHub 发布。
4. 打开 Pages 页面给出的站点地址。

也可以使用 GitHub Actions：仓库 Settings → Pages 的 Source 选择 GitHub Actions，使用本包自带的 .github/workflows/pages.yml。首次上传时注意保留 .github 文件夹。

## 本地预览

直接用浏览器打开 index.html；或在网站文件夹运行 `python -m http.server 8000`，然后访问 http://localhost:8000。

## 内容维护

- index.html：公司简介、定制服务、合作资源、企业文化。
- app.js：产品标题、分类、展示顺序和定制系列入口。
- content.js：原公司 PPT 提取的图文详情，按页码保存。第13页与第9页为重复产品，展示列表已去重。
- style.css：品牌配色、排版及手机端样式。
- assets/：Logo 和原 PPT 产品图片。

正文基于提供的公司介绍整理。没有提供独立产品图片的产品使用文字图形封面，点击后展示原资料中的文字介绍；图片型产品页保留原图信息。没有添加未经提供的电话、邮箱或地址。

合作品牌、授权称谓和产品参数按公司资料呈现，发布前由公司核对其准确性与展示权限。页面没有购物、登录、表单提交或后台服务，适用于企业展示。
