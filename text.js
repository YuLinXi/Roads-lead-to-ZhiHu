// const str = '<div class="RichContent-inner"><span class="RichText ztext CopyrightRichText-richText" itemprop="text">晓路考苏晓： 后轮驱动汽车在转弯时，当车辆超过极限开始失控，可以获得一些很凌厉的动态特性。 对于新手，这些特性显得并不那么友好和易于掌控。<b>但对于老手，克服甚至利用这种特性反而能让他们获得大量快感和成就感，</b>…</span><button type="button" class="Button ContentItem-more Button--plain">阅读全文<span style="display: inline-flex; align-items: center;">​<svg class="Zi Zi--ArrowDown ContentItem-arrowIcon" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M12 13L8.285 9.218a.758.758 0 0 0-1.064 0 .738.738 0 0 0 0 1.052l4.249 4.512a.758.758 0 0 0 1.064 0l4.246-4.512a.738.738 0 0 0 0-1.052.757.757 0 0 0-1.063 0L12.002 13z" fill-rule="evenodd"></path></svg></span></button></div>';
// const str = '<div class="RichContent-inner"><span class="RichText ztext CopyrightRichText-richText" itemprop="text">易哥： 首先，实名赞扬题主的问题。<b>这个问题非常好</b>。 其次，实名反对各个上来就讲RPC好而HTTP不好的答案。因为，<b>题主的观点非常对</b>。 HTTP协议，以其中…</span><button type="button" class="Button ContentItem-more Button--plain">阅读全文<span style="display: inline-flex; align-items: center;">​<svg class="Zi Zi--ArrowDown ContentItem-arrowIcon" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M12 13L8.285 9.218a.758.758 0 0 0-1.064 0 .738.738 0 0 0 0 1.052l4.249 4.512a.758.758 0 0 0 1.064 0l4.246-4.512a.738.738 0 0 0 0-1.052.757.757 0 0 0-1.063 0L12.002 13z" fill-rule="evenodd"></path></svg></span></button></div>';
const str = '<div class="RichContent-inner"><span class="RichText ztext CopyrightRichText-richText" itemprop="text">dhchen： 刚刚看了nhk，我越来越被日本的玄幻操作给吓到了。 不知道大家记不记得2月20日有两个厚生省的官员被检查出了新冠，这两个人有一个搭档，三…</span><button type="button" class="Button ContentItem-more Button--plain">阅读全文<span style="display: inline-flex; align-items: center;">​<svg class="Zi Zi--ArrowDown ContentItem-arrowIcon" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M12 13L8.285 9.218a.758.758 0 0 0-1.064 0 .738.738 0 0 0 0 1.052l4.249 4.512a.758.758 0 0 0 1.064 0l4.246-4.512a.738.738 0 0 0 0-1.052.757.757 0 0 0-1.063 0L12.002 13z" fill-rule="evenodd"></path></svg></span></button></div>';
let rest = str.replace(/<[^<>]+>/g, '');
rest = rest.replace('…阅读全文​', '');

console.log(rest.length);