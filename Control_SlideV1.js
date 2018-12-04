/* This file is currently associated to an HTML file of the same name and is drawing content from it.  Until the files are disassociated, you will not be able to move, delete, rename, or make any other changes to this file. */

function DisplayTemplate_7e8d6f14c57343ce9f0e89a77833eecd(ctx) {
  var ms_outHtml=[];
  var cachePreviousTemplateData = ctx['DisplayTemplateData'];
  ctx['DisplayTemplateData'] = new Object();
  DisplayTemplate_7e8d6f14c57343ce9f0e89a77833eecd.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['TemplateUrl']='~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fSearch\u002fControl_SlideV1.js';
  ctx['DisplayTemplateData']['TemplateType']='Control';
  ctx['DisplayTemplateData']['TargetControlType']=['SearchResults', 'Content Web Parts'];
  this.DisplayTemplateData = ctx['DisplayTemplateData'];

ms_outHtml.push('',''
);
if (!$isNull(ctx.ClientControl) && !$isNull(ctx.ClientControl.shouldRenderControl) && !ctx.ClientControl.shouldRenderControl()){return "";}

RegisterSod('jquery.slides.min.js', Srch.U.replaceUrlTokens('~sitecollection/style library/IntranetCSS/Slider/js/jquery.slides.min.js'));
RegisterSod('jquery-1.9.1.min.js', Srch.U.replaceUrlTokens('~sitecollection/style library/IntranetCSS/Slider/js/jquery-1.9.1.min.js'));

RegisterSodDep('jquery.slides.min.js', 'jquery-1.9.1.min.js');

ctx.ListDataJSONGroupsKey = "ResultTables";
ctx["CurrentItems"] = ctx.ListData.ResultTables[0].ResultRows;
var siteURL = SP.PageContextInfo.get_siteAbsoluteUrl();

AddPostRenderCallback(ctx, function () {
	function init() {
      $('#slides').slidesjs({
        width: 755,
        height: 420,
          effect: {
            fade:  {
            speed: 1000,
            crossfade: true
                   }
          },
          play: {
           active: true,
           auto: true,
           interval: 6000,
           pauseOnHover: true,
           swap: true,
           restartDelay: 1500,
           effect: "fade"
        }
       });
      }
	if (typeof mina === "undefined") {
		EnsureScriptFunc('jquery.slides.min.js', null, init);
	} else {
		init();
	}
});
ms_outHtml.push(''
,'	<div class="container">'
,'    	<div id="slides">'
,'    		 ', ctx.RenderItems(ctx) ,' '
,'    	</div>'
,'	</div>'
);

  ctx['DisplayTemplateData'] = cachePreviousTemplateData;
  return ms_outHtml.join('');
}
function RegisterTemplate_7e8d6f14c57343ce9f0e89a77833eecd() {

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fSearch\u002fControl_SlideV1.js", DisplayTemplate_7e8d6f14c57343ce9f0e89a77833eecd);
}
//
		$includeCSS("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fSearch\u002fControl_SlideV1.js", "~sitecollection/style library/IntranetCSS/Slider/css/example.css");
		$includeCSS("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fSearch\u002fControl_SlideV1.js", "~sitecollection/style library/IntranetCSS/Slider/css/font-awesome.min.css");
	//
}
RegisterTemplate_7e8d6f14c57343ce9f0e89a77833eecd();
if (typeof(RegisterModuleInit) == "function" && typeof(Srch.U.replaceUrlTokens) == "function") {
  RegisterModuleInit(Srch.U.replaceUrlTokens("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fSearch\u002fControl_SlideV1.js"), RegisterTemplate_7e8d6f14c57343ce9f0e89a77833eecd);
}