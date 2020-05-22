module.exports = {
  point: /\[\[(.+)\]\]/im,
  html: /<html>([\s\S]*?)<\/html>/im,
  css: /<style>([\s\S]*?)<\/style>/im,
  body: /<body>([\s\S]*?)<script .+>/im,
  HTMLClasses: /class="([\w!\s]+)"/gm,
  CSSClasses: /\.(.+) *?{/gm
}